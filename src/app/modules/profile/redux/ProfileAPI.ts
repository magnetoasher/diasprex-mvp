import axios from 'axios'
import {ID} from '../../../../_metronic/helpers'
import {IProfile} from '../../auth/registration/components/CreateAccountWizardHelper'
import {CustomUserClaim} from '@okta/okta-auth-js'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const PROFILE_URL = `${API_URL}/profile`

export interface IUserID {
  id: CustomUserClaim | CustomUserClaim[] | ID
  status?: string
}

const createUserProfileAPI = (data: IProfile) => {
  return axios.post(`${PROFILE_URL}/create`, data)
}

const getUserProfileAPI = (query: IUserID) => axios.get(`${PROFILE_URL}/${query.id}`)

const deactivateProfileAPI = (query: IUserID) => {
  return axios.put(`${PROFILE_URL}/${query.id}/status?status=${query.status}`,)
}

export {createUserProfileAPI, getUserProfileAPI, deactivateProfileAPI}
