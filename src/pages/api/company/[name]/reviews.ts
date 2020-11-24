import { NextApiRequest, NextApiResponse } from 'next';
import container  from '../../../../lib/container'


interface CompanyReviews extends NextApiRequest {
    query: {
        name: string
    }
}

export default async function searchCompany(req: CompanyReviews, res: NextApiResponse) {

    if (req.method==="GET") {
        
        const reviewRepo = container.getReviewRepo()
        const output = await reviewRepo.getReviewByCompany(req.query.name)
        res.status(200).json({data: output})

    } else {
        res.status(405).json({data:null, message:"Sorry we only accept GET requests"})
    }
    
} 