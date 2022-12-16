import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../_metronic/helpers'
import {User, UsersQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const USER_URL = `${API_URL}/user`
const GET_USERS_URL = `${API_URL}/users/query`
// const GET_USERS_URL = 'http://localhost:3000/users'
// const USER_URL = 'http://localhost:3000/users'

// const getUsers = async (query: string) => {
//   return await axios.get(`${GET_USERS_URL}`).then((response: AxiosResponse) => {
//     console.log(response)
//     return response.data
//   })
// }

const getUsers = async (query: string): Promise<UsersQueryResponse> => {
  return await axios
    .get(`${GET_USERS_URL}?${query}`)
    .then((response: AxiosResponse<UsersQueryResponse>) => {
      return response.data
    })
}

const getUserById = (id: ID): Promise<User | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => {
      return response.data
    })
}

const createUser = (user: User): Promise<User | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const updateUser = (user: User): Promise<User | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser}
