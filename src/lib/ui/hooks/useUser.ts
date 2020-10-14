
import { useContext } from 'react'
import {UserContext} from '../contexts/contexts'


export function useUser(){

    const user = useContext(UserContext)

    return user

}
