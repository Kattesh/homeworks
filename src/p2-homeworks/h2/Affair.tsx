import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffair: (id:number) => void
}

function Affair(props: AffairPropsType) {

    let priorityClass = s.item + ' ' + s[props.affair.priority]
    return (
        <div className={s.affair}>
            <button className={s.delete} onClick={ () => {props.deleteAffair(props.affair._id)}}>X</button>
            <div className={s.item}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>
        </div>
    )
}

export default Affair
