export interface IStudent {
    name:string | undefined;
    email:string | undefined;
}

export interface IStudentDetailedIds extends IStudent {
    universityId:number | undefined;
    studyProgramId:number | undefined;
}

export interface IStudentWithPassword extends IStudentDetailedIds {
    passwordHash: string;
}

export interface IUniversity {
    id: number,
    name: string,
    location: string
} 

export interface IStudyProgram {
    id: number,
    name: string
}

export interface IStudentDetailed extends IStudent {
    university: IUniversity,
    studyprogram: IStudyProgram
}

export interface IStudentRepository {

    createStudent: (st: IStudentWithPassword) => Promise<IStudentDetailed>;
    getStudentById: (st_id: number) => Promise<IStudentDetailed>;
    getStudentByEmail: (st_email: string) => Promise<IStudentDetailed>;
    updateStudent: (st_id: number, st_target: IStudentWithPassword) => Promise<IStudentDetailed>;

}


export interface IUniversityRepository {

    getUniversityById: (u_id: number) => Promise<IUniversity>

}

export interface IStudyProgramRepository {

    getStudyProgramById: (sp_id: number) => Promise<IStudyProgram>

}

export interface IStudentServiceOutput<T> {

    status: string,
    message: string,
    data : T

}

export interface IStudentService {

    registerStudent: (st: IStudentDetailedIds) => IStudentServiceOutput<IStudentDetailed>;

}


