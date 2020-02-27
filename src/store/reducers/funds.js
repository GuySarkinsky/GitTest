import * as actionType from '../actions'

const initialState = {
    funds: []
}

const projectsReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.SET_FUNDS: return {
            ...state,
            projects: action.projects
        }
        default: return state
    }

}


export default projectsReducer;
