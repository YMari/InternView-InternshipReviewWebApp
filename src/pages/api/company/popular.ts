import { NextApiRequest, NextApiResponse } from 'next'
import container  from '../../../lib/container'



export default async function searchCompany(req: NextApiRequest, res: NextApiResponse) {

    if (req.method==="GET") {
        
        const repo = container.getCompanyRepo()
        
        res.status(200).json({data:await repo.popularCompanies()})

    } else {
        res.status(405).json({data:null, message:"Sorry we only accept GET requests"})
    }
    
} 