import { ICompany } from "../company";
import { IStudent, IStudyProgram, IUniversity } from "../student";

export interface IReview {
    recommendation: string; 
    interviewQuestions?: string[];
    date?: Date;
    anonymous: boolean;
    experienceType: string;
    seekingDegree: string;
    location: string;
    salary: number;
    duration: number; // in weeks? idk
    interviewDifficultyRating: number; // 0 to 5
    acceptedStatus: string;
    experienceRating: number, // 0 to 5
    reviewTitle: string;
    studyProgram?: IStudyProgram;
    university?: IUniversity;
    company: ICompany;
    author: IStudent;
}