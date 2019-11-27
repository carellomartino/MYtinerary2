import { LOG_IN_USER } from "../constants"
import Axios from "axios"

const logInUser = (user) => ({
    type: LOG_IN_USER,
    user
});
// const logOutUser = () => ({
//     type: LOG_OUT_USER
// })


export const validateUser = (userData) => dispatch => {
    return Axios.post('/api/users/login', userData)
        .then((user) => {
            user.data === 'x' ?
                alert('Invalid email or password')
                :
                dispatch(logInUser(user.data))
        })
}













// export const validateSession = () => dispatch => {
//     return Axios.get('/api/users/isLoggedIn')
//         .then((user) => { dispatch(logInUser(user.data)) })
// }
// export const endSession = () => dispatch => {
//     Axios.get('/api/users/logout')
//         .then((msg) => { dispatch(logOutUser()) })
// }