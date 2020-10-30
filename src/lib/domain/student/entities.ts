
export interface IStudent {
    name:string;
    email:string;
    university?: IUniversity
    studyprogram?: IStudyProgram
    universityId?: number
    studyProgramId?: number
    passwordHash?:string
}


export interface IUniversity {
    id: number | undefined,
    name: string,
    location: string
} 

export interface IStudyProgram {
    id: number | undefined,
    name: string 
}

