import container from '../container';
import * as st from '../domain/student'



const ser = container.resolve(st.StudentService)


test(" Example ", async ( ) => {
    await ser.registerStudent({
        name:"Test",
        email:"test@test.com",
        universityId:3,
        studyProgramId:3
    })
})