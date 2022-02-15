import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void
    addUser: ()=>void
    onEnter: (e:KeyboardEvent<HTMLInputElement>)=>void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error? s.errorInput : s.input

    return (
        <div className={s.greeting}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}

                    onBlur={setNameCallback}
                />
                <div className = {s.error}>{error}</div>
            </div>
                <button onClick={addUser} className={s.button} disabled={!name}>Add</button>
                <div className={s.count}>{totalUsers}</div>

        </div>

    )
}

export default Greeting
