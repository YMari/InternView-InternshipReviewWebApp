import { Container } from 'inversify';
import * as st from './domain/student';
import * as app from './application'
import {repositories} from './infrastructure';
import * as md from './middleware'

const container = new Container();

container.bind<st.IStudentService>(st.S_TYPES.IStudentService).to(st.StudentService)
container.bind<st.IStudyProgramRepository>(st.S_TYPES.IStudyProgramRepository).to(repositories.StudyProgramRepository)
container.bind<st.IUniversityRepository>(st.S_TYPES.IUniversityRepository).to(repositories.UniversityRepository)
container.bind<st.IStudentRepository>(st.S_TYPES.IStudentRepository).to(repositories.StudentRepository)
container.bind<app.application_interfaces.IAuthenticationService>(app.A_TYPES.IAuthenticationService).to(app.AuthenticationService)
container.bind<md.IMiddleware>(md.M_TYPES.IMiddleWare).to(md.MiddleWares);


export default container;
