import {  NextApiResponse } from 'next';
import { IRequestWithIssuer } from '../../../lib/middleware'
import container from '../../../lib/container'
import { IReview } from '../../../lib/domain/review';
import {  ERROR_MESSAGE} from '../../../lib/application/constants';

const mid = container.getMiddleWares() 

// inject issuer 
export default 
mid.withUser(
async function reviewIndex(req: IRequestWithIssuer, res: NextApiResponse) {
    
    const reviewService = container.getReviewService()
    const studentService = container.getStudentService()

    // Create Review 
    if (req.method === 'POST') {
        const output = await reviewService.createReview(req.body as IReview, req.user)
        if (output.status === ERROR_MESSAGE) {
            res.status(400).json(output)
        }else {
            res.status(200).json(output)
        }
    }
    // Get Auth Users reviews
    else if (req.method === 'GET') {
        const output = await studentService.getStudentReviews(req.user)
        if (output.status === ERROR_MESSAGE) {
            res.status(400).json(output)
        }else {
            res.status(200).json(output)
        }
    }

}) 