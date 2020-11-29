import { NextApiRequest, NextApiResponse } from "next";
import { OK_MESSAGE } from "../../../lib/application/constants";
import container from '../../../lib/container'

export default async function reviewIndex(req: NextApiRequest, res: NextApiResponse) {
    
    // Get Auth Users reviews
    if (req.method === 'GET') {
        const reviewRepo = container.getReviewRepo()
        res.json({status:OK_MESSAGE, data:await reviewRepo.getRecentReviews()})
    }

}