import {IUniversityRepository, ICompanyRepository, IStudentRepository, IStudentService, IStudentServiceOutput, IStudyProgramRepository} from './interfaces';
import {IStudent, IStudentDetailed, IStudentDetailedIds, IStudentWithPassword, IStudentWithPasswordSimple, IStudyProgram, IUniversity, ICompany} from './entities'
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
    IStudentDetailed, 
    IStudentDetailedIds, 
    IStudentWithPassword, 
    IStudentWithPasswordSimple, 
    IStudyProgram, 
    IUniversity,
    IUniversityRepository,
    ICompany,
    ICompanyRepository, 
    IStudentRepository, 
    IStudentService, 
    IStudentServiceOutput, 
    IStudyProgramRepository
}