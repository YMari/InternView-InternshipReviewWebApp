import * as i from '../interfaces'
import * as e from '../entities'
import {inject, injectable} from 'inversify'
import { S_TYPES } from '../types'
import * as infrastruct from '../../../infrastructure'
import 'reflect-metadata'


@injectable()
class StudentService implements i.IStudentService {
    
    
    private readonly _studentRepository: i.IStudentRepository;
    private readonly _emailService: infrastruct.interfaces.IEmailService;
   
    constructor(
        @inject(S_TYPES.IStudentRepository) studentRepository: i.IStudentRepository,
        @inject(infrastruct.I_TYPES.IEmailService) emailService: infrastruct.interfaces.IEmailService
    ) {
        this._studentRepository = studentRepository
        this._emailService = emailService
    }
    
    async registerStudent(st: e.IStudentWithPassword): Promise<i.IStudentServiceOutput<e.IStudentDetailed>>{

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
                data:{
                    email:result.email,
                    name:result.name,
                    university:result.university,
                    studyprogram:result.studyprogram
                    }
                };
             }
            this._emailService.sendNotificationEmail(st.email,status,message)
            return output
        };
    }

export default StudentService