import * as st from '../../domain/student'
import db from '../prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class CompanyRepository implements st.ICompanyRepository {

    async getCompanyById(c_id:number):Promise<st.ICompany> {

        const company = db.university.findOne({
            where: {
                id: c_id
            }
        })

        return company
    }

    async getAllCompany() : Promise<st.ICompany[]> {

        const com = await db.company.findMany({})

        return com
    }
 
}


export default CompanyRepository