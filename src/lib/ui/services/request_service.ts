import {injectable} from 'inversify'
import "reflect-metadata";
import { ILogin, IRegister } from '../entities';
import { IRequestService } from '../interfaces';
import axios from 'axios'

@injectable()
export default class RequestService implements IRequestService {
    
    async register(data: IRegister): Promise<any> {

        try {
            const result = await axios.post('/api/account/register', data)
            return result.data
        }catch(e){
            if (e.response?.data) {
                return e.response.data
            }
            return e
        }

    }

    async login(data: ILogin) {
        try {
            const result = await axios.post('/api/account/login', data)
            return result.data
        }catch(e) {
            if (e.response?.data) {
                return e.response.data
            }
            return e
        }
    }

    async loggedIn() {

        try {
            const result = await axios.get('http://localhost:3000/api/account/user')
            return result.data
        } catch(e) {
            if (e.response?.data) {
                return e.response.data
            }
            return e
        }

    }



} 
