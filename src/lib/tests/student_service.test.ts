import container from '../container';
import * as st from '../domain/student'



const ser = container.get<st.student_interfaces.IStudentService>(st.S_TYPES.IStudentService)


test(" Example ", async ( ) => {
    await ser.registerStudent({
        name:"Test",
        email:"test@test.com",
        passwordHash:"dimelo",
        universityId:3,
        studyProgramId:3
    })
})