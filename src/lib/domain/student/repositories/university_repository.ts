import * as i from '../interfaces'
import db from '../../../infrastructure/prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class UniversityRepository implements i.IUniversityRepository {

    async getUniversityById(u_id:number):Promise<i.IUniversity> {

        const uni = db.university.findOne({
            where: {
                id: u_id
            }
        })

        return uni
    }

}


export default UniversityRepository