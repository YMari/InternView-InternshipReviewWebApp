import { Container } from 'inversify';
import * as st from './domain/student';
import * as app from './application'
import {repositories} from './test_repositories;
import * as md from './middleware'

const container = new Container();

container.bind<st.IStudyProgramRepository>(st.S_TYPES.IStudyProgramRepository).to(repositories.StudyProgramRepository)
container.bind<st.IUniversityRepository>(st.S_TYPES.IUniversityRepository).to(repositories.UniversityRepository)
container.bind<st.IStudentRepository>(st.S_TYPES.IStudentRepository).to(repositories.StudentRepository)

export default container;