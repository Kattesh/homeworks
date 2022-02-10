import React, {useState} from 'react'
import Affairs from './Affairs'


export type FilterType  = 'high' | 'low' | 'middle'|'all'
export type AffairType = {
    _id: number
    name: string
    priority: FilterType
}
// export type FilterType = 'all' | AffairPriorityType


let defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'}
]

// pure helper functions
export let filterAffairs = (affairs: AffairType[], filter: FilterType ): AffairType[]=> {
    if (filter === 'all') return affairs
    else return affairs.filter(a=>a.priority === filter)
}
export let deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(a=> a._id !==_id)
}

function HW2() {
    let [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    let [filter, setFilter] = useState<FilterType >('all')

    let filteredAffairs = filterAffairs(affairs, filter)
    let deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}

            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
