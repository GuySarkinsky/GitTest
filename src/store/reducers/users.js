import * as actionType from '../actions'

const initialState = {
    userData: {},
    showLoginModal: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.SET_USER_DATA: return {
            ...state,
            userData: action.userData
        }
        case actionType.SHOW_LOGIN_MODAL: return {
            ...state,
            showLoginModal: action.showLoginModal
        }
        default: return state
    }
}

export default usersReducer;