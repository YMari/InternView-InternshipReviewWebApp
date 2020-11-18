import React, {Context} from 'react'
import {IStudent} from '../../domain/student'


export const UserContext:Context<Partial<IStudent>> = React.createContext<Partial<IStudent>>(null)
