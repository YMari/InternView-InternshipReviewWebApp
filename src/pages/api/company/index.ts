import { NextApiRequest, NextApiResponse } from 'next';
import { ICompanyRepository, C_TYPES } from '../../../lib/domain/company'
import container  from '../../../lib/container'


interface CompanySearchRequest extends NextApiRequest {
    query: {
        search : string
    }
}

export default async function searchCompany(req: CompanySearchRequest, res: NextApiResponse) {

    if (req.method==="GET") {
        
        const repo = container.get<ICompanyRepository>(C_TYPES.ICompanyRepository)
        
        console.log(req.query.search)
        
        if(req.query.search){
            const result = await repo.searchCompany(req.query.search)
            res.status(200).json({data:result})
            return
        }
        
        res.status(200).json({data:[]})

    } else {
        res.status(405).json({data:null, message:"Sorry we only accept GET requests"})
    }
} 