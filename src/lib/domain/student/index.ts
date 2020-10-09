import * as student_interfaces from './interfaces';
import * as entities from './entities'
import StudentService from './services/student_service';
import StudentRepository from '../../infrastructure/repositories/student_repository';
import {S_TYPES} from './types'




export {
    S_TYPES,
    student_interfaces,
    entities,
    StudentService,
    StudentRepository
}
 