import { Container } from 'inversify';
import * as st from './domain/student';
import * as com from './domain/company'
import * as app from './application'
import * as infrastruct from './infrastructure';
import * as md from './middleware'

const container = new Container();

container.bind<st.IStudentService>(st.S_TYPES.IStudentService).to(st.StudentService)
container.bind<st.IStudyProgramRepository>(st.S_TYPES.IStudyProgramRepository).to(infrastruct.repositories.StudyProgramRepository)
container.bind<st.IUniversityRepository>(st.S_TYPES.IUniversityRepository).to(infrastruct.repositories.UniversityRepository)
container.bind<st.IStudentRepository>(st.S_TYPES.IStudentRepository).to(st.StudentRepository)
container.bind<app.application_interfaces.IAuthenticationService>(app.A_TYPES.IAuthenticationService).to(app.AuthenticationService)
container.bind<md.IMiddleware>(md.M_TYPES.IMiddleWare).to(md.MiddleWares);
container.bind<infrastruct.interfaces.IEmailService>(infrastruct.I_TYPES.IEmailService).to(infrastruct.EmailService)
container.bind<com.ICompanyRepository>(com.C_TYPES.ICompanyRepository).to(infrastruct.repositories.CompanyRepository)

export default container;
