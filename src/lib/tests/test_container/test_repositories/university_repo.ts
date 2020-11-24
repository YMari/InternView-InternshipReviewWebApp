import * as st from '../../../domain/student'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class UniversityRepository implements st.IUniversityRepository {
    
    db = {};

    async getUniversityById(u_id:number):Promise<st.IUniversity> {

        const uni = await this.db.forEach(element => {
            if(u_id == element){
                return element;
            }
            return null;
        }); 

        return uni;
        
    }

    async getAllUniversity() : Promise<st.IUniversity[]> {

        const uni = await db.university.findMany({})

        return uni
    }
 
}


export default UniversityRepository