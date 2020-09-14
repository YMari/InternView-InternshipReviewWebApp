import { PrismaClient } from '@prisma/client';

export interface CreateStudent {
    email: string,
    passwordHash: string,
    name: string,
    univeristyId: number,
    studyProgramId: number
}

interface StudentOutputResult {
    status: boolean,
    message: string | undefined,
    data: Object
}

export async function createStudent(student:CreateStudent): Promise<StudentOutputResult> {

    const client = new PrismaClient({errorFormat:"minimal"})

    try {

        // Check If student exists
        const check_if_exists = await client.student.findOne({
            where:{ email: student.email }
        })

        if (check_if_exists !== null) {
            return {
                status: false,
                message: "Student already exists",
                data: check_if_exists
            }
        }

        // Create the student and return its info
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
            },
            
            select : {
                name:true, email:true, studyprogram:true, university:true, id:true
            }
        })

        // return results
        return {
            status: true,
            message: "Created Successfully",
            data: res
        }

    } catch ( e ) {
        
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