import React, {Context} from 'react'
import {IStudentDetailed} from '../../domain/student'


export const UserContext:Context<Partial<IStudentDetailed>> = React.createContext<Partial<IStudentDetailed>>(null)