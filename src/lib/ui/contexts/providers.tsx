import React from 'react';
import { ReactNode, useState } from 'react'
import { IStudentDetailed } from '../../domain/student';
import { UserContext } from './contexts'


interface ProviderProps {
    children:ReactNode,
    user:Partial<IStudentDetailed>
}

export function UserProvider(props:ProviderProps) {

    const [user, setUser] = useState<Partial<IStudentDetailed>>(props.user)

    React.useEffect(()=>{
        setUser(props.user)
    }, [props.user])

    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    )

}

