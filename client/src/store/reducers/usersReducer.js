import { LOG_IN_USER } from '../constants';

const initialState = ""

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_USER: {
            return Object.assign({}, state, { currentUser: action.user })
        }
        default:
            return state
    }
}