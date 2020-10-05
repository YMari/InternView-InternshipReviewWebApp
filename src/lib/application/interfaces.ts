import {entities} from '../domain/student'
import { ICredentials } from './entities';

export interface IAuthenticationServiceOutput<E>{
    
    status: string,
    message: string,
    data: E

}

type SerializedCookie = string

export interface IAuthenticationService {
    
    register: (st: entities.IStudentWithPassword) => IAuthenticationServiceOutput<entities.IStudentDetailed>,
    authenticate: (cr: ICredentials) => IAuthenticationServiceOutput<SerializedCookie>

}