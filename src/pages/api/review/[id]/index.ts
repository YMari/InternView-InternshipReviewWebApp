import { NextApiResponse } from 'next';
import { ERROR_MESSAGE, OK_MESSAGE } from '../../../../lib/application/constants';
import container from '../../../../lib/container';
import { IReview } from '../../../../lib/domain/review';
import { IRequestWithIssuer } from '../../../../lib/middleware';

const mid = container.getMiddleWares() 

export default 
mid.withUser(async function reviewByID(req: IRequestWithIssuer, res: NextApiResponse) {

    if (req.method === 'DELETE' && req.user) {
        const reviewRepo = container.getReviewRepo()
        const output = reviewRepo.deleteReview(Number(req.query.id), req.user?.email)
        if (output) {
            res.status(200).json({status: OK_MESSAGE, message: "Deletion Successful"})
        }else {
            res.status(400).json({status: ERROR_MESSAGE, message:"Unable to delete"})
        }
        return
    }
    
    else if (req.method === 'PUT' && req.user) {
        const reviewService = container.getReviewService()
        const output = await reviewService.updateReview(Number(req.query.id), req.body as IReview, req.user)
        // target id, updated fields, authenticated user
        // const output = reviewService.updateReview(req.query.id, req.body as IReview, req.user)
        if(output.status === ERROR_MESSAGE) {
            res.status(400).json(output)
        }
        res.status(200).json(output)

        return
    }

    else if (req.method === 'GET') {
        const reviewRepo = container.getReviewRepo()
        const output = reviewRepo.getReviewById(Number(req.query.id))
        if(output) {
            res.status(200).json({status: OK_MESSAGE, data:output})
        }else {
            res.status(404).json({status: ERROR_MESSAGE, message:"No review was found"})
        }
        return
    }

    res.status(401).json({status:ERROR_MESSAGE, message:"method did not match or user not authenticated"})
    return 

})

// TODO: add functions for adding, editing, and removing reviews.