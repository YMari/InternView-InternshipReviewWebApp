import React from 'react';
import { ReactNode, useState } from 'react'
import { IStudentDetailed } from '../../domain/student';
import { UserContext } from './contexts'


interface ProviderProps {
    children:ReactNode,
    user:Partial<IStudentDetailed>
}

export function UserProvider(props:ProviderProps) {

    return (
        <UserContext.Provider value={props.user}>
            {props.children}
        </UserContext.Provider>
    )

}

