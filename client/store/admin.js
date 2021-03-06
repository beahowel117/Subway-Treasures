import axios from 'axios'

const GOT_USERS = 'GOT_USERS'

const defaultAdmin = {}

const gotUsers = users => ({type: GOT_USERS, users})

export const getUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users/allusers')
    dispatch(gotUsers(data))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = defaultAdmin, action) {
  switch (action.type) {
    case GOT_USERS:
      return {...state, users: action.users}
    default:
      return state
  }
}
