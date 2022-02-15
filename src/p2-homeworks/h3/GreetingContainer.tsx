import React, {ChangeEvent,KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback:(name:string)=>void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => {
        const trimmedName = e.currentTarget.value.trim()
        if(trimmedName){
            setName(trimmedName)
            error && setError('')
        } else {
            name && setName('')
            setError('NAME IS REQUIRED!!')
        }

    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`) // need to fix
        setName('')
    }
    const onEnter = (e:KeyboardEvent<HTMLInputElement>) =>{
        if (e.key==='Enter' && name){
            addUser()

        }
    }

    const totalUsers = users.length
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
