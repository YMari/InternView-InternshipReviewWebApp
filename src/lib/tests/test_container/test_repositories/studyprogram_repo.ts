import * as st from '../../../domain/student'
import db from '../../../infrastructure/prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class StudyProgramRepository implements st.IStudyProgramRepository {
    
    async getStudyProgramById(sp_id: number) : Promise<st.IStudyProgram>{

        const pr = await db.studyProgram.findOne({
            where:{
                id:sp_id
            }
        })

        return pr
        
    }
    
    async getAllStudyProgram() : Promise<st.IStudyProgram[]>{

        const pr = await db.studyProgram.findMany({})

        return pr
        
    }
}


export default StudyProgramRepository;