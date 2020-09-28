import * as i from '../interfaces'
import * as e from '../entities'
import db from '../../../infrastructure/prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class StudyProgramRepository implements i.IStudyProgramRepository {
    
    async getStudyProgramById(sp_id: number) : Promise<e.IStudyProgram>{

        const pr = await db.studyProgram.findOne({
            where:{
                id:sp_id
            }
        })

        return pr
        
    }
    
}


export default StudyProgramRepository;