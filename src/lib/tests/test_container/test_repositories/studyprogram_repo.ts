import * as st from '../../../domain/student'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class StudyProgramRepository implements st.IStudyProgramRepository {

    db = {};

    
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