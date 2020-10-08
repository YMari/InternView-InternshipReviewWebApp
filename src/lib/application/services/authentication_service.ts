import * as i from '../interfaces'
import * as e from '../entities'
import {StudentRepository, student_interfaces, S_TYPES} from '../../domain/student'
import {injectable, inject} from 'inversify'
import 'reflect-metadata'
import { IStudentWithPassword, IStudentDetailed } from '../../domain/student/entities'
import {ERROR_MESSAGE} from '../../../lib/application/constants';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

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

        // Get user and authenticate

        // Create jwt
        
        // Store in cookie and serialize

        // Return Cookie
        
        return null
        
    }
    

    async validate(ck: i.SerializedCookie): Promise<i.IAuthenticationServiceOutput<IStudentDetailed>> {
        try{
            const result = await jwt.verify(ck, process.env.SECRET_KEY) as e.IJwtPayload;
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