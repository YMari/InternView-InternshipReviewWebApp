import * as i from './entities'

export interface IReviewRepository {
    createReview: (re: i.IReview) => Promise<i.IReview>;
    getReviewByAuthor: (email: string) => Promise<i.IReview>;
    getReviewById: (id: number) => Promise<i.IReview>;
    getReviewByCompany: (company: string) => Promise<i.IReview>;   // Change to company interface later
    getReviewSortedByDate: () => Promise<i.IReview[]>;
    getReviewBySortedByScore: () => Promise<i.IReview[]>;
}
