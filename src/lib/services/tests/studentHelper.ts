
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

    await client.$disconnect()

}

export async function tearDown() {

    const client  = new PrismaClient()
    
    await client.student.deleteMany({})

    await client.university.deleteMany({})

    await client.studyProgram.deleteMany({})

    await client.$disconnect()

}


export async function getTestProgram() {
    const client  = new PrismaClient()
    const sp = await client.studyProgram.findOne({where:{ name: TESTPROGRAM}})
    await client.$disconnect()
    return sp;
}


export async function getTestUniversity() {
    const client  = new PrismaClient()
    const u = await client.university.findOne({where:{ name: TESTUNIVERSITY}})
    await client.$disconnect()
    return u;
}