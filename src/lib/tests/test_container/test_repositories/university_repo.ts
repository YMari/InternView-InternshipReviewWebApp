import * as st from '../../../domain/student'
import db from '../../../infrastructure/prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class UniversityRepository implements st.IUniversityRepository {

    async getUniversityById(u_id:number):Promise<st.IUniversity> {

        const uni = db.university.findOne({
            where: {
                id: u_id
            }
        })

        return uni
    }

    async getAllUniversity() : Promise<st.IUniversity[]> {

        const uni = await db.university.findMany({})

        return uni
    }
 
}


export default UniversityRepository