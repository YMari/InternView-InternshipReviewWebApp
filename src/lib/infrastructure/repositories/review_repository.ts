import * as re from '../../domain/review'

import db from '../prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'


@injectable()
class ReviewRepository implements re.IReviewRepository {
    async createReview(re: re.IReview): Promise<re.IReview> {

        try {

            const res = await db.review.create({
                data: {
                    content: re.content,
                    date: re.date,
                    anonymous: re.anonymous,
                    email: re.email,
                    experienceType: re.experienceType,
                    degreeType: re.degreeType,
                    helpfulScore: re.score,
                    location: re.location,
                    salary: re.salary,
                    duration: re.duration, // in weeks? idk
                    interviewDifficulty: re.interviewDifficulty,
                    reviewTitle: re.reviewTitle,
                    company: re.company, // Might be company interface?
                    interviewQuestions: re.interviewQuestions
                },
            })

            await db.$disconnect()
            return res

        } catch ( e ) {
            
            await db.$disconnect()
            return null

        } 
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

    async getReviewById (id: number): Promise<re.IReview> {
        try{
            let result = await db.review.findOne({

                where:{ id: id },
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

    async getReviewByCompany (company: string): Promise<re.IReview> {
        try{
            let result = await db.review.findOne({

                where:{ company: company },
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

    async getReviewSortedByDate (): Promise<re.IReview[]>{
        try{
            let result = await db.review.findMany({
                orderBy: 
                    {
                        dateCreated: 'asc',
                    },

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

    async getReviewBySortedByScore (): Promise<re.IReview[]> {
        try{
            let result = await db.review.findMany({
                orderBy: 
                    {
                        Rating: 'asc',
                    },

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
    
}

export default ReviewRepository