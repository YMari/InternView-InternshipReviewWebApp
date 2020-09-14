
import { PrismaClient } from '@prisma/client';


export const TESTPROGRAM = "TestProgram"
export const TESTUNIVERSITY = "TestUniversity"


export async function initDB() {

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

    client.$disconnect()

}

export async function tearDown() {

    const client  = new PrismaClient()
    
    await client.student.deleteMany({})

    await client.university.deleteMany({})

    await client.studyProgram.deleteMany({})

    client.$disconnect()

}


export async function getTestProgram() {
    const client  = new PrismaClient()
    return await client.studyProgram.findOne({where:{ name: TESTPROGRAM}})
}


export async function getTestUniversity() {
    const client  = new PrismaClient()
    return await client.university.findOne({where:{ name: TESTUNIVERSITY}})
}