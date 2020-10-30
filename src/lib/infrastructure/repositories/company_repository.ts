import * as com from '../../domain/company'
import db from '../prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class CompanyRepository implements com.ICompanyRepository {

    async getCompanyById(c_id:number):Promise<com.ICompany> {

        const company = await db.university.findOne({
            where: {
                id: c_id
            }
        })

        return company
    }

    async getAllCompany() : Promise<com.ICompany[]> {

        const com = await db.company.findMany({})

        return com
    }
 
}


export default CompanyRepository