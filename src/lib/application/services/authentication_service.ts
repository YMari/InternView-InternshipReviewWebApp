import * as i from '../interfaces'
import * as e from '../entities'
import * as st from '../../domain/student'
import * as infrastruct from '../../infrastructure';
import {injectable, inject} from 'inversify'
import * as bcrypt from 'bcrypt'
import {sign, verify} from 'jsonwebtoken'
import cookie from 'cookie'
import { AUTHENTICATION_FAILED, AUTHENTICATION_SUCCESS, ERROR_MESSAGE, OK_MESSAGE } from '../constants'
import 'reflect-metadata'

@injectable()
export default class AuthenticationService implements i.IAuthenticationService {
    
    private readonly _studentService: st.IStudentService
    private readonly _studentRepository: st.IStudentRepository
    private readonly _emailService: infrastruct.interfaces.IEmailService
    private readonly PASSWORD_LENGTH: number = 6
    private readonly SALT_ROUNDS:number = 10

    constructor(
        @inject(st.S_TYPES.IStudentService) studentService: st.IStudentService,
        @inject(st.S_TYPES.IStudentRepository) studentRepository: st.IStudentRepository,
        @inject(infrastruct.I_TYPES.IEmailService) emailService: infrastruct.interfaces.IEmailService

    ){
        this._studentService = studentService
        this._studentRepository = studentRepository
    }
    
    async register(st: st.IStudent): Promise<i.IAuthenticationServiceOutput<st.IStudent>>{

        // Validate email can be moved to IStuden class in future
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(st.email?.toLowerCase())){
            return {
                status:ERROR_MESSAGE,
                message:"invalid email",
                data:null
            }
        }

        // Validate Password
        if (!st.passwordHash!) {
            return {
                status:ERROR_MESSAGE,
                message: "no password given",
                data:null
            }
        }

        // Can be moved to student class instance
        if (st.passwordHash.length < this.PASSWORD_LENGTH) {
            return {
                status:ERROR_MESSAGE,
                message: "password has too few characters",
                data:null
            } 
        }

        // Use Student Service
        // can be moved to IStudent class instance
        st.passwordHash = await bcrypt.hash(st.passwordHash, this.SALT_ROUNDS)
        return await this._studentService.registerStudent(st);

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

        // can be moved to student class instance
        const passwordIsCorrect = await bcrypt.compare(cr.password, student.passwordHash)
        if(passwordIsCorrect){
            const token = sign({sub: student.email}, process.env.SECRET_KEY, {expiresIn: '1h'})
            const galleta = cookie.serialize('auth', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development', 
                sameSite: 'strict',
                maxAge: 3600,
                path: '/'
            })
            return {
                status:'Ok',
                message: AUTHENTICATION_SUCCESS,
                data: galleta
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