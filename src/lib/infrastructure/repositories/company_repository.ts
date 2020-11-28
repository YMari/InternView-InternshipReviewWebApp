import * as com from '../../domain/company'
import db from '../prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'
import { prismaVersion } from '@prisma/client'

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

    async popularCompanies(): Promise<com.ICompany[]> {
        try {
            const companies = await db.$queryRaw(`
                SELECT c.id, c.name, c."imageUrl"
                FROM "Company" as c INNER JOIN
                (SELECT com.id as companyId, count(*) as reviewCount
                    FROM "Company" as com INNER JOIN
                    "Review" as r on com.id = r."companyId"
                    GROUP BY com.id
                ) as re on c.id = re.companyId
                ORDER BY re.reviewCount DESC
                LIMIT 3;
            `) as com.ICompany[]    
            await db.$disconnect()
            return companies
        } catch(e) {
            await db.$disconnect()
            return null
        }
    }
 
}


export default CompanyRepository