import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (id:number) => void
    filter: FilterType

}

function Affairs(props: AffairsPropsType) {
    let mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

//     let setAll = ()=>{
//         props.setFilter('all')
//     }
//     let setHigh = ()=>{
//         props.setFilter('high')
//     }
//     let setMiddle = ()=>{
//         props.setFilter('middle')
//     }
//     let setLow = ()=>{
//         props.setFilter('low')
//     }
let set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        props.setFilter(e.currentTarget.value as FilterType)
}
// let onAll = s.button + ' '+(props.filter === 'all'? s.active : '')
// let onHigh = s.button + ' '+(props.filter === 'high'? s.active : '')
// let onMiddle = s.button + ' '+(props.filter === 'middle'? s.active : '')
// let onLow = s.button + ' '+(props.filter === 'low'? s.active : '')
  let setClass = (filter: FilterType)=>{
        return s.button + (props.filter === filter ? ' '+ s.active:'')
  }

    return (
        <div>

            {mappedAffairs}

            {/*<button onClick={setAll} className={onAll}>All</button>*/}
            {/*<button onClick={setHigh} className={onHigh}>High</button>*/}
            {/*<button onClick={setMiddle} className={onMiddle}>Middle</button>*/}
            {/*<button onClick={setLow} className={onLow}>Low</button>*/}

            <button onClick={set} className={setClass('all')} value={'all'}>All</button>
            <button onClick={set} className={setClass('high')} value={'high'}>High</button>
            <button onClick={set} className={setClass('middle')} value={'middle'}>Middle</button>
            <button onClick={set} className={setClass('low')} value={'low'}>Low</button>
        </div>
    )
}

export default Affairs
