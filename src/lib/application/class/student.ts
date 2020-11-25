import * as e from '../entities'
import {IStudent, IStudyProgram, IUniversity} from '../../domain/student/entities'
import * as st from '../../domain/student'
import * as bcrypt from 'bcrypt'
import {sign, verify} from 'jsonwebtoken'
import 'reflect-metadata'


export default class Student implements st.IStudent{

    private readonly PASSWORD_LENGTH: number = 6
    private readonly SALT_ROUNDS:number = 10

    readonly name: string
    readonly email: string
    readonly password?: string
    passwordHash?: string
    readonly university?: IUniversity;
    readonly studyprogram?: IStudyProgram;
    readonly universityId?: number
    readonly studyProgramId?: number

    constructor(st: st.IStudent){
        this.name = st.name;
        this.email = st.email;
        this.password = st.password;
        this.passwordHash = st.passwordHash;
        this.university = st.university;
        this.studyprogram = st.studyprogram;
        this.universityId = st.universityId
        this.studyProgramId = st.studyProgramId
    }

    toPlainObj(){ 
        return {
            name: this.name,
            email: this.email,
            university: this.university,
            studyprogram : this.studyprogram
        }
    }

    hasValidEmail() {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.email?.toLowerCase());
        
    };

    validatePassword() {
        return this.password === null || this.password === undefined;
    }

    validatePasswordLength() { 
        return this.password.length < this.PASSWORD_LENGTH
    }

    async hashPassword() {
        this.passwordHash = await bcrypt.hash(this.password, this.SALT_ROUNDS)
        console.log(this.passwordHash)
    }

    async comparePassword(cr: e.ICredentials) {
        return await bcrypt.compare(cr.password, this.passwordHash)
    }

    createToken() {
        return sign({sub: this.email}, process.env.SECRET_KEY, {expiresIn: '1h'})
    }

}