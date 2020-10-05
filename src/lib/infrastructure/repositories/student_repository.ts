import {student_interfaces, entities} from '../../domain/student'

import db from '../prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'


@injectable()
class StudentRepository implements student_interfaces.IStudentRepository {

    async getStudentByEmail(st_email: string): Promise<entities.IStudentDetailed> {

      try{
            const result = await db.student.findOne({

                where:{ email: st_email },
                select: {
                    name:true, email:true, studyprogram:true, university:true
                }            
            })
    
            if (result == null) {
                await db.$disconnect()
                return null
            }

            await db.$disconnect()
            return result

        } catch ( e ){

            await db.$disconnect()

            return null

        }
    }

    async updateStudent(st_email: string, st_target: entities.IStudentWithPassword): Promise<entities.IStudentDetailed> {


    try{
        const result = await db.student.update({

            where:{ email: st_email },
            data: {
                name: st_target.name,
                university: {
                    connect: { id:st_target.universityId }
                },
                studyprogram: {
                    connect: { id:st_target.studyProgramId }
                }
            },
            select: {
                name:true, email:true, studyprogram:true, university:true
            }            
        })

        if (result == null) {
            await db.$disconnect()
            return null
        }
    }
    catch ( e ) {
        await db.$disconnect()
        return null
    } 
}
    
    async createStudent(st: entities.IStudentWithPassword): Promise<entities.IStudentDetailed> {
        
        try {

            const res = await db.student.create({
                data: {
                    email: st.email,
                    passwordHash: st.passwordHash,
                    name: st.name,
                    university: {
                        connect: { id:st.universityId }
                    },
                    studyprogram: {
                        connect: { id:st.studyProgramId }
                    }
                },
                
                select : {
                    name:true, email:true, studyprogram:true, university:true, id:true
                }
            })

            await db.$disconnect()
            // return results
            return res

        } catch ( e ) {
            
            await db.$disconnect()

            return null

        } 

    }


}


export default StudentRepository