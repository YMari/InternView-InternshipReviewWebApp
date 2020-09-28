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
    
    async registerStudent(st: e.IStudentDetailedIds): Promise<i.IStudentServiceOutput<e.IStudentDetailed>>{

        return null;
    };

}



export default StudentService