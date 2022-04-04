import React from 'react'
import Affair from './Affair'
import {AffairType, PriorityType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter:PriorityType) => void
    deleteAffairCallback: (id:number) => void
    filter: PriorityType
}

function Affairs(props: AffairsPropsType) {
    let mappedAffairs = props.data.map((a, index) => (
        <Affair
            key={a._id} 
            affair={a}
            deleteAffair={props.deleteAffairCallback}
        />
    ))

let set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        props.setFilter(e.currentTarget.value as PriorityType)
}

  let setClass = (filter: PriorityType)=>{
        return s.button + (props.filter === filter ? ' '+ s.active:'')
  }

    return (
        <div>
            {mappedAffairs}
            <button onClick={set} className={setClass('all')} value={'all'}>All</button>
            <button onClick={set} className={setClass('high')} value={'high'}>High</button>
            <button onClick={set} className={setClass('middle')} value={'middle'}>Middle</button>
            <button onClick={set} className={setClass('low')} value={'low'}>Low</button>
        </div>
    )
}

export default Affairs
