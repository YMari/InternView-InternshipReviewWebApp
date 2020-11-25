
interface ReviewMakeModel {
    reviewTitle: string;
    acceptedStatus: string;
    location: string;
    duration: number;
    salary: number;
    seekingDegree: string;
    experienceType: string;
    recommendation: string;
    experienceRating: number;
    interviewDifficultyRating: number;
    anonymous: boolean;
}

interface ReviewViewModel extends ReviewMakeModel {
    dateCreated?: Date
    interviewQuestions: String[]
    company:{
        id:number,
        name:string,
        imageUrl:string
    }
}


export type {
    ReviewMakeModel,
    ReviewViewModel
}