import {student_interfaces, entities} from '../../domain/student'

import db from '../prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'


@injectable()
class StudentRepository implements student_interfaces.IStudentRepository {

    async getStudentById(st_id: number): Promise<entities.IStudentDetailed> {
        
        return null;
    }
    
    async getStudentByEmail(st_email: string): Promise<entities.IStudentDetailed> {

      try{
            const result = await db.student.findOne({

                where:{ email: st_email },
                select: {
                    name:true, email:true, studyprogram:true, university:true, id:true
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

    async updateStudent(st_id:number, st_target: entities.IStudentWithPassword): Promise<entities.IStudentDetailed> {

        return null;
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