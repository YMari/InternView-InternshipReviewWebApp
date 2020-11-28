import * as i from '../interfaces'
import * as e from '../entities'
import * as st from '../../domain/student'
import {injectable, inject} from 'inversify'
import {verify} from 'jsonwebtoken'
import { AUTHENTICATION_FAILED, AUTHENTICATION_SUCCESS, ERROR_MESSAGE, OK_MESSAGE } from '../constants'
import 'reflect-metadata'
import Student from '../class/student';

@injectable()
export default class AuthenticationService implements i.IAuthenticationService {
    
    private readonly _studentService: st.IStudentService
    private readonly _studentRepository: st.IStudentRepository
    
    constructor(
        @inject(st.S_TYPES.IStudentService) studentService: st.IStudentService,
        @inject(st.S_TYPES.IStudentRepository) studentRepository: st.IStudentRepository,
    ){
        this._studentService = studentService
        this._studentRepository = studentRepository
    }

    async register(st: st.IStudent): Promise<i.IAuthenticationServiceOutput<st.IStudent>>{

        const student = new Student(st)

        // Validate email can be moved to IStuden class in future
        if (!student.hasValidEmail()){
            return {
                status:ERROR_MESSAGE,
                message:"invalid email",
                data:null
            }
        }

        // Validate Password
        if (student.validatePassword()) {
            return {
                status:ERROR_MESSAGE,
                message: "no password given",
                data:null
            }
        }

        if (student.validatePasswordLength()) {
            return {
                status:ERROR_MESSAGE,
                message: "password has too few characters",
                data:null
            } 
        }

        student.hashPassword()
        return await this._studentService.registerStudent(student);

    }


    async authenticate(cr: e.ICredentials): Promise<i.IAuthenticationServiceOutput<i.SerializedCookie>> {
        
        const student = await this._studentRepository.getStudentByEmailWithPassword(cr.email);
        if(!student){
            return {
                status: ERROR_MESSAGE,
                message:AUTHENTICATION_FAILED,
                data: null
            }
        }

        const st = new Student(student);

        if(st.comparePassword(cr)){
            const token = st.createToken()
            return {
                status:'Ok',
                message: AUTHENTICATION_SUCCESS,
                data: token
            }
        }
        return {
            status:ERROR_MESSAGE,
            message: AUTHENTICATION_FAILED,
            data:null
        }

    }
    

    async validate(ck: i.SerializedCookie): Promise<i.IAuthenticationServiceOutput<st.IStudent>> {
        try{
            const result = await verify(ck, process.env.SECRET_KEY) as e.IJwtPayload;
            const email = result.sub;
            const data = await this._studentRepository.getStudentByEmail(email);
            return {
                status: OK_MESSAGE,
                message: "Student found.",
                data: data
            }
        }
        catch{
            return {
                status: ERROR_MESSAGE,
                message: "Unable to find student or the token was corrupt",
                data: null
            } 
        }
    } 

}