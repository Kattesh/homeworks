import {UserType} from "../HW8";

type ActionsType = sortAT|checkAT
export type sortAT = {
    type: 'sort'
    payload:'up'|'down'
}
export type checkAT = {
    type: 'check'
    payload:number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) =>
                a.name < b.name ? -1 : 1
            )
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}