import * as i from '../interfaces'
import * as e from '../entities'
import {student_interfaces, S_TYPES} from '../../domain/student'
import {injectable, inject} from 'inversify'
import 'reflect-metadata'
import { IStudentWithPassword, IStudentDetailed } from '../../domain/student/entities'
import * as bcrypt from 'bcrypt'
import {sign, verify} from 'jsonwebtoken'
import cookie from 'cookie'
import { AUTHENTICATION_FAILED, AUTHENTICATION_SUCCESS, ERROR_MESSAGE, OK_MESSAGE } from '../constants'

@injectable()
export default class AuthenticationService implements i.IAuthenticationService {
    
    private readonly _studentService: student_interfaces.IStudentService
    private readonly _studentRepository: student_interfaces.IStudentRepository
    private readonly PASSWORD_LENGTH: number = 6
    private readonly SALT_ROUNDS:number = 10

    constructor(
        @inject(S_TYPES.IStudentService) studentService: student_interfaces.IStudentService,
        @inject(S_TYPES.IStudentRepository) studentRepository: student_interfaces.IStudentRepository
    ){
        this._studentService = studentService
        this._studentRepository = studentRepository
    }
    
    async register(st: IStudentWithPassword): Promise<i.IAuthenticationServiceOutput<IStudentDetailed>>{

        // Validate email
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(st.email?.toLowerCase())){
            return {
                status:ERROR_MESSAGE,
                message:"invalid email",
                data:null
            }
        }

        // Validate Password
        if (st.passwordHash === null) {
            return {
                status:ERROR_MESSAGE,
                message: "no password given",
                data:null
            }
        }

        if (st.passwordHash.length < this.PASSWORD_LENGTH) {
            return {
                status:ERROR_MESSAGE,
                message: "password has too few characters",
                data:null
            } 
        }
        // Use Student Service

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
    

    async validate(ck: i.SerializedCookie): Promise<i.IAuthenticationServiceOutput<IStudentDetailed>> {
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