// import { ADD_NEW_USER } from '../constants'
import Axios from "axios"


// const findOrCreateUser = (data) => {
//     return {
//         type: ADD_NEW_USER,
//         data: data
//     }
// }


export const addUser = (userData) => dispatch => {
    return Axios.post('/api/users/adduser/', userData)
        .then((newUser) => {
            if (newUser.data === 'x') {
                return true
            } else {
                return false
            }
        })
}