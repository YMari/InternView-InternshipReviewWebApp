import * as i from '../interfaces'
import * as e from '../entities'
import {inject, injectable} from 'inversify'
import { S_TYPES } from '../types'

import 'reflect-metadata'

@injectable()
class StudentService implements i.IStudentService {
    
    private readonly _studentRepository: i.IStudentRepository;
    private readonly _studyProgramRepository: i.IStudyProgramRepository;
    private readonly _universityRepository: i.IUniversityRepository;

    constructor(
        @inject(S_TYPES.IStudentRepository) studentRepository: i.IStudentRepository,
        @inject(S_TYPES.IStudyProgramRepository) studyProgramRepository: i.IStudyProgramRepository,
        @inject(S_TYPES.IUniversityRepository) universityRepository: i.IUniversityRepository
    ) {

        this._studentRepository = studentRepository
        this._studyProgramRepository = studyProgramRepository
        this._universityRepository = universityRepository
    }
    
    async registerStudent(st: e.IStudentWithPassword): Promise<i.IStudentServiceOutput<e.IStudentDetailed>>{

        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!emailRegex.test(st.email)){
            return {
                status: "Error",
                message:"Invalid email",
                data:null
            }
        }

        const checkIfExists = await this._studentRepository.getStudentByEmail(st.email)

        if (checkIfExists != null) {
            return {
                status: "Error",
                message: "Student already exists",
                data:null
            }
        }

        const result = await this._studentRepository.createStudent(st)

        if (result == null) {
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