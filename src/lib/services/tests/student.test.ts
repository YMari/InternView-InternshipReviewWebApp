

import studentService from '../student'
import { CreateStudent } from '../student'
import { PrismaClient } from '@prisma/client';

// SETUP
const TESTPROGRAM = "TestProgram"
const TESTUNIVERSITY = "TestUniversity"

beforeAll(async ()=> {
    
    const client  = new PrismaClient()
    
    await client.student.deleteMany({})

    await client.university.deleteMany({})

    await client.studyProgram.deleteMany({})

    await client.university.create({
        data:{
            name:TESTUNIVERSITY,
            location: "TestVille"
        }
    }) 

    await client.studyProgram.create({
        data:{
            name:TESTPROGRAM
        }
    })

})

afterAll(async ()=> {

    const client  = new PrismaClient()

    await client.student.deleteMany({})

    await client.university.deleteMany({})

    await client.studyProgram.deleteMany({})

})
// End od setup

test("When creating student", async () => {
    
    const client  = new PrismaClient()

    const sp = await client.studyProgram.findOne({where:{ name:TESTPROGRAM}})
    const u = await client.university.findOne({where:{ name:TESTUNIVERSITY }}) 
    
    const student:CreateStudent = {
        id: null,
        name:"test",
        email:"test@test.com",
        passwordHash:"test",
        univeristyId:u.id,
        studyProgramId:sp.id
    }

    const res = await studentService.createStudent(student) 
    
    console.log(res.data)
    expect(res.status).toBeTruthy() 

    const studentFalse:CreateStudent = {
        id: null,
        name:"test",
        email:"test@test.com",
        passwordHash:"test",
        univeristyId:-1,
        studyProgramId:-1
    }

    const res2 = await studentService.createStudent(studentFalse)
    
    
    expect(res2.status).toBeFalsy() 

})