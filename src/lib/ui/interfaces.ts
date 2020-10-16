import { IRegister } from "./entities";


export interface IRequestService {
    
    register(data: IRegister): Promise<any> 

}