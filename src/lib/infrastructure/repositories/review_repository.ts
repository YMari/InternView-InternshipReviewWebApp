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
                    recommendation: re.recommendation,
                    interviewQuestions: {
                        set: re.interviewQuestions,
                    },
                    dateCreated: re.date,
                    anonymous: re.anonymous,
                    experienceType: re.experienceType,
                    seekingDegree: re.seekingDegree,
                    location: re.location,
                    salary: re.salary,
                    duration: re.duration,
                    interviewDifficultyRating: re.interviewDifficultyRating,
                    acceptedStatus: re.acceptedStatus,
                    experienceRating: re.experienceRating,
                    reviewTitle: re.reviewTitle,
                    studyProgram: {
                        connect: { id:re.studyProgram.id}
                    },
                    university: {
                        connect: { id:re.university.id}
                    },
                    company: {
                        connect: { id:re.company.id}
                    },
                    Student: {
                        connect: { email:re.author.email}
                    },
                },
            })

            await db.$disconnect()
            return res

        } catch ( e ) {
            await db.$disconnect()
            return null

        } 
    }

    async getReviewByAuthorEmail (email: string): Promise<re.IReview>{
        try{
            let result = await db.review.findMany({

                where:{ authorEmail: email },
                select : {
                    recommendation:true, 
                    interviewQuestions:true, 
                    dateCreated:true, 
                    experienceType:true, 
                    seekingDegree:true,
                    location: true,
                    salary: true,
                    duration: true,
                    interviewDifficultyRating: true,
                    acceptedStatus: true,
                    experienceRating: true,
                    reviewTitle: true,
                    studyProgram: true,
                    university: true,
                    company: true,
                }
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
                select : {
                    recommendation:true, 
                    interviewQuestions:true, 
                    dateCreated:true, 
                    experienceType:true, 
                    seekingDegree:true,
                    location: true,
                    salary: true,
                    duration: true,
                    interviewDifficultyRating: true,
                    acceptedStatus: true,
                    experienceRating: true,
                    reviewTitle: true,
                    studyProgram: true,
                    university: true,
                    company: true,
                }
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
            let result = await db.review.findMany({

                where:{ company: {name: company} },
                select : {
                    recommendation:true, 
                    interviewQuestions:true, 
                    dateCreated:true, 
                    experienceType:true, 
                    seekingDegree:true,
                    location: true,
                    salary: true,
                    duration: true,
                    interviewDifficultyRating: true,
                    acceptedStatus: true,
                    experienceRating: true,
                    reviewTitle: true,
                    studyProgram: true,
                    university: true,
                    company: true,
                }
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