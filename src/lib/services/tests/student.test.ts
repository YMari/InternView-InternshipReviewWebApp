
import studentService from '../student'
import { CreateStudent } from '../student'
import * as help from './studentHelper';

// SETUP
beforeAll(async ()=> {
    
    await help.initDB()

})

afterAll(async ()=> {

    await help.tearDown()

})

// End of setup

// TODO: Make async functions exit

test("Creating Student Unit Test", async () => {

    const sp = await help.getTestProgram()
    const u = await help.getTestUniversity()
    
    const student:CreateStudent = {
        name:"test",
        email:"test@test.com",
        passwordHash:"test",
        univeristyId:u.id,
        studyProgramId:sp.id
    }

    const res = await studentService.createStudent(student) 
    
    console.log(res)

    expect(res.status).toBeTruthy() 
    
    // Fail when trying to create a user with non existant study program or university

    const studentFalse:CreateStudent = {
        name:"test2",
        email:"test2@test2.com",
        passwordHash:"test2",
        univeristyId:-1,
        studyProgramId:-1
    }

    const res2 = await studentService.createStudent(studentFalse)
    
    expect(res2.status).toBeFalsy()
    
    // Fail if student already exists

    const res3 = await studentService.createStudent(student);

    expect(res3.status).toBeFalsy()

})