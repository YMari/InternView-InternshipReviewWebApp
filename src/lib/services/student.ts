import { PrismaClient, Student, PrismaClientKnownRequestError } from '@prisma/client';

export interface CreateStudent extends Student {
    univeristyId: number,
    studyProgramId: number
}

interface CreateStudentResult {
    status: boolean,
    message: string | undefined,
    data: Student
}

export async function createStudent(student:CreateStudent): Promise<CreateStudentResult> {

    const client = new PrismaClient()

    try {

        const res = await client.student.create({
            data: {
                email: student.email,
                passwordHash: student.passwordHash,
                name: student.name,
                university: {
                    connect: { id:student.univeristyId }
                },
                studyprogram: {
                    connect: { id:student.studyProgramId }
                }
            }
        })

        return {
            status: true,
            message: "Created Successfully",
            data: res
        }

    } catch ( e ) {
        
        // TODO: check which error you are getting

        return {
            status: false,
            message: "Failed creating user",
            data:e
        }

    } finally {

        await client.$disconnect()

    }

}


const studentService = {
    createStudent:createStudent
}

export default studentService