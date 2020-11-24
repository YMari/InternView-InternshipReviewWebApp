import { Container } from 'inversify';
import * as st from './domain/student';
import * as com from './domain/company'
import * as app from './application'
import * as infrastruct from './infrastructure';
import * as md from './middleware'
import * as re from './domain/review'
import { R_OK } from 'constants';

interface ILibContainer {

    getStudentService(): st.IStudentService
    getStudyProgramRepo(): st.IStudyProgramRepository
    getUniversityRepo(): st.IUniversityRepository
    getStudentRepo(): st.IStudentRepository
    getMiddleWares(): md.IMiddleware
    getEmailService(): infrastruct.interfaces.IEmailService
    getCompanyRepo(): com.ICompanyRepository
    getAuthenticationService(): app.application_interfaces.IAuthenticationService
    getReviewRepo(): re.IReviewRepository
    getReviewFactory(): re.IReviewFactory
    getReviewService(): re.IReviewService
}

class LibContainer extends Container implements ILibContainer {

    constructor() {
        super()
        this.bind<st.IStudentService>(st.S_TYPES.IStudentService).to(st.StudentService).inSingletonScope()
        this.bind<st.IStudyProgramRepository>(st.S_TYPES.IStudyProgramRepository).to(infrastruct.repositories.StudyProgramRepository).inSingletonScope()
        this.bind<st.IUniversityRepository>(st.S_TYPES.IUniversityRepository).to(infrastruct.repositories.UniversityRepository).inSingletonScope()
        this.bind<st.IStudentRepository>(st.S_TYPES.IStudentRepository).to(st.StudentRepository).inSingletonScope()
        this.bind<app.application_interfaces.IAuthenticationService>(app.A_TYPES.IAuthenticationService).to(app.AuthenticationService).inSingletonScope()
        this.bind<md.IMiddleware>(md.M_TYPES.IMiddleWare).to(md.MiddleWares).inSingletonScope();
        this.bind<infrastruct.interfaces.IEmailService>(infrastruct.I_TYPES.IEmailService).to(infrastruct.EmailService).inSingletonScope()
        this.bind<com.ICompanyRepository>(com.C_TYPES.ICompanyRepository).to(infrastruct.repositories.CompanyRepository).inSingletonScope()
        this.bind<re.IReviewRepository>(re.R_TYPES.IReviewRepository).to(infrastruct.repositories.ReviewRepository).inSingletonScope()
        this.bind<re.IReviewFactory>(re.R_TYPES.IReviewFactory).to(app.ReviewFactory).inSingletonScope()
        this.bind<re.IReviewService>(re.R_TYPES.IReviewService).to(re.ReviewService).inSingletonScope()
    }

    getStudentService(): st.IStudentService {
        return this.get<st.IStudentService>(st.S_TYPES.IStudentService)
    }

    getStudentRepo(): st.IStudentRepository {
        return this.get<st.IStudentRepository>(st.S_TYPES.IStudentRepository)
    }

    getStudyProgramRepo(): st.IStudyProgramRepository {
        return this.get<st.IStudyProgramRepository>(st.S_TYPES.IStudyProgramRepository)
    }

    getUniversityRepo(): st.IUniversityRepository {
        return this.get<st.IUniversityRepository>(st.S_TYPES.IUniversityRepository)
    }

    getMiddleWares(): md.IMiddleware {
        return this.get<md.IMiddleware>(md.M_TYPES.IMiddleWare)
    }

    getEmailService(): infrastruct.interfaces.IEmailService {
        return this.get<infrastruct.interfaces.IEmailService>(infrastruct.I_TYPES.IEmailService)
    }

    getCompanyRepo(): com.ICompanyRepository {
        return this.get<com.ICompanyRepository>(com.C_TYPES.ICompanyRepository)
    }

    getAuthenticationService(): app.application_interfaces.IAuthenticationService {
        return this.get<app.application_interfaces.IAuthenticationService>(app.A_TYPES.IAuthenticationService)
    }

    getReviewRepo(): re.IReviewRepository {
        return this.get<re.IReviewRepository>(re.R_TYPES.IReviewRepository)
    }

    getReviewFactory(): re.IReviewFactory{
        return this.get<re.IReviewFactory>(re.R_TYPES.IReviewFactory)
    }

    getReviewService(): re.IReviewService {
        return this.get<re.IReviewService>(re.R_TYPES.IReviewService)
    }

}

const container: ILibContainer = new LibContainer()

export default container

