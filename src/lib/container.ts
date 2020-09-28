import { Container } from 'inversify';
import * as st from './domain/student';


const container = new Container();

container.bind<st.student_interfaces.IStudentRepository>(st.S_TYPES.IStudentRepository).to(st.StudentRepository)
container.bind<st.student_interfaces.IStudentService>(st.S_TYPES.IStudentService).to(st.StudentService)
container.bind<st.student_interfaces.IStudyProgramRepository>(st.S_TYPES.IStudyProgramRepository).to(st.StudyProgramRepository)
container.bind<st.student_interfaces.IUniversityRepository>(st.S_TYPES.IUniversityRepository).to(st.UniversityRepository)

export default container;
