import * as com from '../../domain/company'
import db from '../prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class CompanyRepository implements com.ICompanyRepository {

    async getCompanyById(c_id:number):Promise<com.ICompany> {

        const company = await db.company.findOne({
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

    async searchCompany(c_name: string) : Promise<com.ICompany[]> {

        const search_result = await db.company.findMany({
            where:{
                name: {
                    contains: c_name
                }
            }, 
            select: {
                id:true,
                name:true, 
                imageUrl:true
            }
        })

        return search_result
    }
 
}


export default CompanyRepository