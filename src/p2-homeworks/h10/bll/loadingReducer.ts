const initState = {
    isLoading:false
}
type InitialStateType = typeof initState
type ActionType = ReturnType<typeof loadingAC>
export const loadingReducer = (state:InitialStateType = initState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading:boolean) => ({type:'LOADING', isLoading} as const)