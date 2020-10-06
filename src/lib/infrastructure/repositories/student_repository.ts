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

    const student = await this.getStudentByEmail(st_email);
    let update = {
            where:{ email: st_email },
            data: {
                name: student.name,
                university: { connect: {id: student.university.id} },
                studyprogram: { connect: {id: student.studyprogram.id} },
            },
            select: {
                name:true, email:true, studyprogram:true, university:true
            }            
        }
    if (st_target.name){
        update.data.name = st_target.name;
    }
    if (st_target.universityId){
        update.data.university = {
            connect: { id :st_target.universityId }
        }
    }
    if (st_target.studyProgramId){
        update.data.studyprogram = {
            connect: { id:st_target.studyProgramId }
        }
    }

    try{
        const result = await db.student.update(update)
        await db.$disconnect()
            return result
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