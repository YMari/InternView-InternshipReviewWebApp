import * as re from '../../domain/review'
import db from '../prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'


@injectable()
class ReviewRepository implements re.IReviewRepository {
    

    private selectObject = {
        id: true,
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
        company: true
    }

    async getReviewByAuthorAndCompany(authorEmail: string, companyName: string): Promise<re.IReview[]> {
        try{
            let result = await db.review.findMany({

                where:{ 
                    authorEmail: authorEmail,
                    AND: {
                        company: {
                            name: companyName
                        }
                    }
                },

                select : this.selectObject,
                orderBy: 
                {
                    dateCreated: 'desc',
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

    async createReview(re: re.IReview): Promise<re.IReview> {

        try {

            const res = await db.review.create({
                data: {
                    recommendation: re.recommendation,
                    interviewQuestions: {
                        set: re.interviewQuestions,
                    },
                    dateCreated: re.dateCreated,
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
                select : this.selectObject
            })

            return res

        } catch ( e ) {
            console.log(e)
            await db.$disconnect()
            return null
        } 
    }

    async getReviewByAuthorEmail (email: string): Promise<re.IReview[]>{
        try{
            let result = await db.review.findMany({

                where:{ authorEmail: email },
                select : this.selectObject,
                orderBy: 
                {
                    dateCreated: 'desc',
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
                select : this.selectObject
            })
    
            if (result == null) {
                await db.$disconnect()
                return null
            }

            await db.$disconnect()
            return result

        } catch ( e ){
            console.log(e)
            await db.$disconnect()

            return null

        }
    }

    async getReviewByCompany (company: string): Promise<re.IReview[]> {
        try{
            let result = await db.review.findMany({

                where:{ company: {name: company} },
                select : this.selectObject,
                orderBy: 
                {
                    dateCreated: 'desc',
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

    async getReviewBySortedByScore (): Promise<re.IReview[]> {
        throw Error("Not implemented")
    }  
    
    async deleteReview(id: number, authorEmail: string): Promise<boolean> {

        const res = await db.review.deleteMany({
            where: {
                id: id,
                AND: {
                    Student: {
                        email:authorEmail
                    }
                }
            }
        })
        await db.$disconnect()
        return res.count > 0
        
    }

    async updateReview (id: number, re: re.IReview): Promise<re.IReview>{

        try {
            const res = await db.review.update({
                where:{ 
                    id: id
                },
                data: {
                    recommendation: re.recommendation,
                    interviewQuestions: {
                        set: re.interviewQuestions,
                    },
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
                },
                select : this.selectObject,
            })
            await db.$disconnect()
            return res

        } catch ( e ) {
            await db.$disconnect()
            return null

        } 
    }


    async getRecentReviews(): Promise<re.IReview[]> {
        try {
            const res = await db.review.findMany({
                orderBy:{
                    dateCreated:'desc'
                },
                select:this.selectObject,
                take:5
            })
            await db.$disconnect()
            return res

        } catch ( e ) {
            await db.$disconnect()
            return null

        } 
    }

}

export default ReviewRepository