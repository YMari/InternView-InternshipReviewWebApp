import { student_interfaces, entities } from '../../domain/student'
import db from '../prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class UniversityRepository implements student_interfaces.IUniversityRepository {

    async getUniversityById(u_id:number):Promise<entities.IUniversity> {

        const uni = db.university.findOne({
            where: {
                id: u_id
            }
        })

        return uni
    }

    async getAllUniversity() : Promise<entities.IUniversity[]> {

        const uni = await db.university.findMany({})

        return uni
    }
 
}


export default UniversityRepository