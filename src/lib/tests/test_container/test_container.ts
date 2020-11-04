import { Container } from 'inversify';
import * as st from '../../domain/student';
import student_repo from '../test_container/test_repositories/student_repo';
import university_repo from '../test_container/test_repositories/university_repo';
import studyprogram_repo from '../test_container/test_repositories/studyprogram_repo';

const container = new Container();

container.bind<st.IStudyProgramRepository>(st.S_TYPES.IStudyProgramRepository).to(studyprogram_repo)
container.bind<st.IUniversityRepository>(st.S_TYPES.IUniversityRepository).to(university_repo)
container.bind<st.IStudentRepository>(st.S_TYPES.IStudentRepository).to(student_repo)

export default container;