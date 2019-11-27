import { LOG_IN_USER } from '../constants';

const initialState = {
    currentUser: {},
    isLoggedIn: false,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_USER:{
            return Object.assign({}, state, { currentUser: action.user, isLoggedIn: true })
        }
        default:
            return state
    }
}