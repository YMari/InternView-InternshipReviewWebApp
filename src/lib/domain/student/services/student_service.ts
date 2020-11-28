import * as i from '../interfaces'
import * as e from '../entities'
import {inject, injectable} from 'inversify'
import { S_TYPES } from '../types'
import * as infrastruct from '../../../infrastructure'
import 'reflect-metadata'
import { IReview, IReviewRepository, R_TYPES } from '../../review'
import { ERROR_MESSAGE, OK_MESSAGE } from '../../../application/constants'


@injectable()
class StudentService implements i.IStudentService {
    
    private readonly _studentRepository: i.IStudentRepository;
    private readonly _emailService: infrastruct.interfaces.IEmailService;
    private readonly _reviewRepository: IReviewRepository

    private readonly TIME_LIMIT: number = 7

    constructor(
        @inject(S_TYPES.IStudentRepository) studentRepository: i.IStudentRepository,
        @inject(infrastruct.I_TYPES.IEmailService) emailService: infrastruct.interfaces.IEmailService,
        @inject(R_TYPES.IReviewRepository) reviewRepo: IReviewRepository
    ) {
        this._studentRepository = studentRepository
        this._emailService = emailService
        this._reviewRepository = reviewRepo
    }


    async getStudentReviews(st: e.IStudent): Promise<i.IStudentServiceOutput<IReview[]>>{
        
        if (st?.email) {
            const output = await this._reviewRepository.getReviewByAuthorEmail(st.email)
            if (!output) {
                return {
                    status: ERROR_MESSAGE,
                    message: "Unable to fetch",
                    data:null
                }
            } else {
                return {
                    status: OK_MESSAGE,
                    message: "Fetched successfully",
                    data: output
                }
            }
        }

        return {
            status: ERROR_MESSAGE,
            message: "No author provided",
            data:null
        }

    }

    async studentCanReview(st: e.IStudent, companyName: string): Promise<boolean> {

        if(!st?.email){
            return false
        }

        const output = await this._reviewRepository.getReviewByAuthorAndCompany(st.email, companyName)
        if(output?.length > 0) {
            console.log(output)
            const currentDate:Date = new Date()
            const latest = output[0]
            let months;
            months = (currentDate.getFullYear() - latest.dateCreated.getFullYear() ) * 12;
            months -= latest.dateCreated.getFullYear();
            months += currentDate.getMonth();
            months = months <= 0 ? 0 : months;
            return months > this.TIME_LIMIT
        }

        return true

    }
    
    async registerStudent(st: e.IStudent): Promise<i.IStudentServiceOutput<e.IStudent>>{

        const checkIfExists = await this._studentRepository.getStudentByEmail(st.email)
        var message = "Student already exsits";
        var status = "Error";
        var output = null; 

        if (checkIfExists !== null) {
            output = {
                status: status,
                message: message,
                data:null
            }
        }

        const result = await this._studentRepository.createStudent(st)
        if (result === null) {
            message = "Unable to create student"
            output = {
                status:status,
                message: message,
                data:null
            }
        }
        else{
            status = "Ok"
            message = "Student created succesfully"
            output =  {
                status: status,
                message: message,
                data:st.toPlainObj()
                };
             }
             
            this._emailService.sendNotificationEmail(st.email, status, message)
            return output
        };
    }

export default StudentService