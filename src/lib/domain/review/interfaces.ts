
import { IStudent } from '../student';
import * as i from './entities'

export interface IReviewRepository {
    createReview: (re: i.IReview) => Promise<i.IReview>;
    getReviewByAuthorEmail: (email: string) => Promise<i.IReview[]>;
    getReviewById: (id: number) => Promise<i.IReview>;
    getReviewByCompany: (company: string) => Promise<i.IReview[]>;   // Change to company interface later
    // getReviewBySortedByScore: () => Promise<i.IReview[]>;
    updateReview: (id: number, re: i.IReview) => Promise<i.IReview>;
}

export interface IReviewFactory {
    makeInstance(data: i.IReview): i.IReview // Validates on object creation
}

type ServiceOutput = {
    status: String,
    message: String,
    data?: i.IReview | i.IReview[]
}

export interface IReviewService {
    
    createReview(data: i.IReview, author: IStudent): Promise<ServiceOutput>

}
