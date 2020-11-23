import {IReviewRepository, IReviewFactory, IReviewService} from "./interfaces"
import {IReview} from "./entities"
// import * from "./services/review_service"
import ReviewRepository from '../../infrastructure/repositories/review_repository'
import ReviewService from './services/review_service'
import {R_TYPES} from './types'

export {
    ReviewRepository,
    ReviewService,
    R_TYPES
}

export type {
    IReviewRepository, 
    IReview,
    IReviewFactory, 
    IReviewService
}