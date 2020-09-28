import * as i from '../interfaces'
import * as e from '../entities'
import db from '../../../infrastructure/prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class UniversityRepository implements i.IUniversityRepository {

    async getUniversityById(u_id:number):Promise<e.IUniversity> {

        const uni = db.university.findOne({
            where: {
                id: u_id
            }
        })

        return uni
    }

    async getAllUniversity() : Promise<e.IUniversity[]> {

        const uni = db.university.findMany({})

        return uni
    }
 
}


export default UniversityRepository