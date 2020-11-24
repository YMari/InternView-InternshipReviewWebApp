import * as i from '../interfaces'
import * as e from '../entities'
import * as st from '../../domain/student'
import * as infrastruct from '../../infrastructure';
import {injectable, inject} from 'inversify'
import * as bcrypt from 'bcrypt'
import {sign, verify} from 'jsonwebtoken'
import 'reflect-metadata'

@injectable()
export default class Student{

    private readonly _studentService: st.IStudentService
    private readonly _studentRepository: st.IStudentRepository
    private readonly PASSWORD_LENGTH: number = 6
    private readonly SALT_ROUNDS:number = 10

    constructor(
        @inject(st.S_TYPES.IStudentService) studentService: st.IStudentService,
        @inject(st.S_TYPES.IStudentRepository) studentRepository: st.IStudentRepository,

    ){
        this._studentService = studentService
        this._studentRepository = studentRepository
    }

    hasValidEmail(st : st.IStudent) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return !re.test(st.email?.toLowerCase());
        
    }

    validatePassword(st : st.IStudent) {
        return !st.passwordHash!;
    }

    validatePasswordLength(st : st.IStudent) {
        return st.passwordHash.length < this.PASSWORD_LENGTH
    }

    async hashPassword(st : st.IStudent) {
        return await bcrypt.hash(st.passwordHash, this.SALT_ROUNDS)
       
    }

    async hasCorrectPassword(cr: e.ICredentials, st : st.IStudent) {
        return await bcrypt.compare(cr.password, st.passwordHash)
    }

    createToken(st : st.IStudent) {
        return sign({sub: st.email}, process.env.SECRET_KEY, {expiresIn: '1h'})
    }

}