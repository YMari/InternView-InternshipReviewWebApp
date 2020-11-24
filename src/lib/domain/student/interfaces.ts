import { IReview } from '../review';
import * as i from './entities'

export interface IStudentRepository {

    createStudent: (st: i.IStudent) => Promise<i.IStudent>;
    getStudentByEmail: (st_email: string) => Promise<i.IStudent>;
    getStudentByEmailWithPassword: (st_email: string) => Promise<i.IStudent>;
    updateStudent: (st_email: string, st_target: i.IStudent) => Promise<i.IStudent>;

}

export interface IUniversityRepository {
    
    getUniversityById: (u_id: number) => Promise<i.IUniversity>;
    getAllUniversity: () => Promise<i.IUniversity[]>;

}

export interface IStudyProgramRepository {

    getStudyProgramById: (sp_id: number) => Promise<i.IStudyProgram>;
    getAllStudyProgram: () => Promise<i.IStudyProgram[]>;

}

export interface IStudentServiceOutput<T> {

    status: string,
    message: string,
    data : T

}

export interface IStudentService {

    registerStudent: (st: i.IStudent) => Promise<IStudentServiceOutput<i.IStudent>>;
    getStudentReviews: (st: i.IStudent) => Promise<IStudentServiceOutput<IReview[]>>

}


