import {IReview, IReviewFactory} from '../../domain/review'
import {injectable} from 'inversify'
import 'reflect-metadata'

@injectable()
class ReviewFactory implements IReviewFactory {
    
    makeInstance(data: IReview): IReview {

        if ( data.interviewDifficultyRating < 0 || data.interviewDifficultyRating > 5 ) {
            throw new Error("Invalid Interview Rating Range")
        }
        if (!data.experienceRating || data.experienceRating < 0 || data.experienceRating > 5){
            throw new Error("Invalid Experience Rating")
        }
        if (!data.interviewQuestions) {
            throw new Error("interviewQuestions cannot be null")
        }
        if (data.duration < 0) {
            throw new Error("duration has to be a positive value")
        }
        if (data.salary <= 0) {
            throw new Error("Salary has to be more than 0")
        }
        if (!data.studyProgram){
            throw new Error("No study program provided")
        } 
        if (!data.university){
            throw new Error("No university provided")
        }
        if (!data.company) {
            throw new Error("No company provided")
        }
        if (!data.reviewTitle) {
            throw new Error("No Title provided")
        }

        return Object.freeze(Object.assign(data, {}))

    }

}   

export default ReviewFactory