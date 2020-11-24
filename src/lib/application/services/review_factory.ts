import {IReview, IReviewFactory} from '../../domain/review'
import {injectable} from 'inversify'
import 'reflect-metadata'

@injectable()
class ReviewFactory implements IReviewFactory {

    validateValueObejcts(data:IReview) {
        if ( !data.interviewDifficultyRating || data.interviewDifficultyRating < 0 || data.interviewDifficultyRating > 5 ) {
            throw new Error("Invalid Interview Rating Range")
        }
        if (!data.experienceRating || data.experienceRating < 0 || data.experienceRating > 5){
            throw new Error("Invalid Experience Rating")
        }
        if (!data.interviewQuestions && data.interviewQuestions !== []) {
            throw new Error("interviewQuestions cannot be null")
        }
        if (!data.duration || data.duration < 0) {
            throw new Error("duration has to be a positive value")
        }
        if (!data.salary || data.salary <= 0) {
            throw new Error("Salary has to be more than 0")
        }
        if (!data.reviewTitle) {
            throw new Error("No Title provided")
        }
        if (!data.anonymous) {
            throw new Error("anonymous cannot be null")
        }
        if (!data.experienceType) {
            throw new Error("Experience Type is needed")
        }
        if(!data.seekingDegree) {
            throw new Error("Invalid degree")
        }
        if(!data.location) {
            throw new Error("No location")
        }
        if (!data.acceptedStatus) {
            throw new Error("No accepted status")
        }
        if (!data.reviewTitle) {
            throw new Error("No Title provided")
        }
    }

    makeUpdateInstance(data: IReview): IReview{
        this.validateValueObejcts(data)
        return Object.freeze(Object.assign(data, {}))
    }

    makeInstance(data: IReview): IReview {

        this.validateValueObejcts(data)

        if (!data.studyProgram){
            throw new Error("No study program provided")
        } 
        if (!data.university){
            throw new Error("No university provided")
        }
        if (!data.company) {
            throw new Error("No company provided")
        }

        return Object.freeze(Object.assign(data, {}))

    }

}   

export default ReviewFactory