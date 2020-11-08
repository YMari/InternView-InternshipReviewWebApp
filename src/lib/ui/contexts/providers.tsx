import React from 'react';
import { ReactNode, useState } from 'react'
import { IStudent } from '../../domain/student';
import { UserContext } from './contexts'


interface UserProviderProps {
    children:ReactNode,
    user:Partial<IStudent>
}

export function UserProvider(props:UserProviderProps) {

    const [user, setUser] = useState<Partial<IStudent>>(props.user)

    React.useEffect(()=>{
        setUser(props.user)
    }, [props.user])

    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    )
}

interface SearchProviderProps {
    search: string
}

export function SearchProvider(props:SearchProviderProps) {
    
}

