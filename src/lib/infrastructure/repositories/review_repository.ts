import * as re from '../../domain/review'

import db from '../prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'


@injectable()
class ReviewRepository implements re.IReviewRepository {
    async createReview (re: re.IReview):  Promise<re.IReview>{
        return null;
    }
    async getReviewByAuthorId (id: number): Promise<re.IReview>{
        try{
            let result = await db.review.findMany({

                where:{ authorId: id },
            })
    
            if (result == null) {
                await db.$disconnect()
                return null
            }

            await db.$disconnect()
            return result

        } catch ( e ){

            await db.$disconnect()

            return null

        }
    }
    getReviewById: (id: number) => Promise<re.IReview>
    getReviewByCompany: (company: string) => Promise<re.IReview>
    getReviewSortedByDate: () => Promise<re.IReview[]>
    getReviewBySortedByScore: () => Promise<re.IReview[]>
    
}


export default ReviewRepository