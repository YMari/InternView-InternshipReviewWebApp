import {IUniversityRepository, IStudentRepository, IStudentService, IStudentServiceOutput, IStudyProgramRepository} from './interfaces';
import {IStudent, IStudyProgram, IUniversity} from './entities'
import StudentService from './services/student_service';
import StudentRepository from '../../infrastructure/repositories/student_repository';
import {S_TYPES} from './types';


export {
    S_TYPES,
    StudentService,
    StudentRepository
}

export type {
    IStudent,  
    IStudyProgram, 
    IUniversity,
    IUniversityRepository, 
    IStudentRepository, 
    IStudentService, 
    IStudentServiceOutput, 
    IStudyProgramRepository
}