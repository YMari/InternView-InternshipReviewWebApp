import * as i from '../interfaces';
import * as e from '../entities';
import db from '../../../infrastructure/prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class StudentRepository implements i.IStudentRepository {

    async getStudentById(st_id: number): Promise<e.IStudentDetailed> {
        
        return null;
    }
    
    async getStudentByEmail(st_email: string): Promise<e.IStudentDetailed> {

        return null;
    }

    async updateStudent(st_id:number, st_target: e.IStudentWithPassword): Promise<e.IStudentDetailed> {

        return null;
    }
    
    async createStudent(st: e.IStudentWithPassword): Promise<e.IStudentDetailed> {
        
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