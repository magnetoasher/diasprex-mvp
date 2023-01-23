import axios from 'axios'
import { ID } from '../../../../_metronic/helpers'
import { ICreateAccount } from '../../auth/registration/components/CreateAccountWizardHelper'
import { CustomUserClaim } from '@okta/okta-auth-js'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const PROFILE_URL = `${API_URL}/profile`

export interface IUserID {
  id: CustomUserClaim | CustomUserClaim[] | ID
}

const createUserProfileAPI = (data: ICreateAccount) => {
  return axios.post(`${PROFILE_URL}/create`, data)
}

const getUserProfileAPI = (query: IUserID) => axios.get(`${PROFILE_URL}/${query.id}`)

export {createUserProfileAPI, getUserProfileAPI}
