import * as i from './entities'

export interface IStudentRepository {

    createStudent: (st: i.IStudentWithPassword) => Promise<i.IStudentDetailed>;
    getStudentById: (st_id: number) => Promise<i.IStudentDetailed>;
    getStudentByEmail: (st_email: string) => Promise<i.IStudentDetailed>;
    updateStudent: (st_id: number, st_target: i.IStudentWithPassword) => Promise<i.IStudentDetailed>;

}

export interface IUniversityRepository {

    getUniversityById: (u_id: number) => Promise<i.IUniversity>

}

export interface IStudyProgramRepository {

    getStudyProgramById: (sp_id: number) => Promise<i.IStudyProgram>

}

export interface IStudentServiceOutput<T> {

    status: string,
    message: string,
    data : T

}

export interface IStudentService {

    registerStudent: (st: i.IStudentDetailedIds) => Promise<IStudentServiceOutput<i.IStudentDetailed>>;

}


