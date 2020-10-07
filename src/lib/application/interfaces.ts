import {entities, student_interfaces} from '../domain/student'
import { ICredentials } from './entities';

export interface IAuthenticationServiceOutput<E> extends student_interfaces.IStudentServiceOutput<E>{

}

export type SerializedCookie = string

export interface IAuthenticationService {
    
    register: (st: entities.IStudentWithPassword) => Promise<IAuthenticationServiceOutput<entities.IStudentDetailed>>,
    authenticate: (cr: ICredentials) => Promise<IAuthenticationServiceOutput<SerializedCookie>>

}