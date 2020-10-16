import {injectable} from 'inversify'
import "reflect-metadata";
import { IRegister } from '../entities';
import { IRequestService } from '../interfaces';
import axios from 'axios'

@injectable()
export default class RequestService implements IRequestService {
    
    async register(data: IRegister): Promise<any> {

        try {
            const result = await axios.post('/api/account/register', data)
            return result.data
        }catch(e){
            console.log(e)
            if (e.response?.data) {
                return e.response.data
            }
            return e
        }

    }

} 
