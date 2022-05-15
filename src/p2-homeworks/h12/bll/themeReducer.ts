
const initState = {
theme:'some'
};
type InitialStateType = typeof initState
type ActionType = ReturnType<typeof changeThemeAC>
export const themeReducer = (state = initState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "THEME": {
            return {...state, theme:action.theme}
        }
        default: return state;
    }
};

export const changeThemeAC = (theme:string) => ({type:'THEME', theme} as const)