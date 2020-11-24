import {ICredentials} from '../../application/entities'

export interface IStudent {
    name:string;
    email:string;
    university?: IUniversity;
    studyprogram?: IStudyProgram;
    universityId?: number;
    studyProgramId?: number;
    password?:string;
    passwordHash?:string;
    toPlainObj?: ()=> any;
    hasValidEmail: () => boolean;
    validatePassword?: () => boolean;
    validatePasswordLength?: () => boolean;
    hashPassword?: () => Promise<void>;
    comparePassword?: (cr: ICredentials) => Promise<boolean>;
    createToken?: () => string
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

