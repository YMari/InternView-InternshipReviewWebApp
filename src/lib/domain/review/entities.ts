export interface IReview {
    content: string;
    date: Date;
    anonymous: boolean;
    email: string;
    experienceType: string;
    degreeType: string;
    score: number; // Helpful or not helpful
    location: string;
    salary: number;
    duration: number; // in weeks? idk
    interviewDifficulty: number;
    reviewTitle: string;
    company: string; // Might be company interface?
    interviewQuestions?: string;

}