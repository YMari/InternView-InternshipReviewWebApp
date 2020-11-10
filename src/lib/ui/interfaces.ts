import { ILogin, IRegister } from "./entities";


export interface IRequestService {
    
    register(data: IRegister): Promise<any>
    login(data: ILogin): Promise<any> 
    loggedIn(): Promise<any>
    logout(): Promise<any>

}