import * as i from '../interfaces'
import * as e from '../entities'
import {inject, injectable} from 'inversify'
import { S_TYPES } from '../types'

import 'reflect-metadata'

@injectable()
class StudentService implements i.IStudentService {
    
    private readonly _studentRepository: i.IStudentRepository;
   

    constructor(
        @inject(S_TYPES.IStudentRepository) studentRepository: i.IStudentRepository
    ) {
        this._studentRepository = studentRepository
    }
    
    async registerStudent(st: e.IStudentWithPassword): Promise<i.IStudentServiceOutput<e.IStudentDetailed>>{

        const checkIfExists = await this._studentRepository.getStudentByEmail(st.email)

        if (checkIfExists !== null) {
            return {
                status: "Error",
                message: "Student already exists",
                data:null
            }
        }

        const result = await this._studentRepository.createStudent(st)

        if (result === null) {
            return {
                status:"Error",
                message: "Unable to create student",
                data:null
            }
        } 

        return {
            status:"Ok",
            message:"Student created successfully",
            data:{
                email:result.email,
                name:result.name,
                university:result.university,
                studyprogram:result.studyprogram
            }
        };

    };

}



export default StudentService