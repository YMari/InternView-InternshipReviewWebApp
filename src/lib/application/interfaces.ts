

import { IStudent, IStudentServiceOutput } from '../domain/student';
import { ICredentials } from './entities';

export interface IAuthenticationServiceOutput<E> extends IStudentServiceOutput<E>{

}

export type SerializedCookie = string

export interface IAuthenticationService {
    
    register: (st: IStudent) => Promise<IAuthenticationServiceOutput<IStudent>>,
    authenticate: (cr: ICredentials) => Promise<IAuthenticationServiceOutput<SerializedCookie>>,
    validate: (ck: SerializedCookie) => Promise<IAuthenticationServiceOutput<IStudent>>

}