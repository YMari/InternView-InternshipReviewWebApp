import {student_interfaces, entities} from '../../domain/student'
import db from '../prisma-cli'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class StudyProgramRepository implements student_interfaces.IStudyProgramRepository {
    
    async getStudyProgramById(sp_id: number) : Promise<entities.IStudyProgram>{

        const pr = await db.studyProgram.findOne({
            where:{
                id:sp_id
            }
        })

        return pr
        
    }
    
    async getAllStudyProgram() : Promise<entities.IStudyProgram[]>{

        const pr = await db.studyProgram.findMany({})

        return pr
        
    }
}


export default StudyProgramRepository;