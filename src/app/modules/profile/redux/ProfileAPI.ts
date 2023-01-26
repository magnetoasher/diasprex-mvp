import axios from 'axios'
import {ID} from '../../../../_metronic/helpers'
import {IProfile} from '../../auth/registration/components/CreateAccountWizardHelper'
import {CustomUserClaim} from '@okta/okta-auth-js'
import { IUpgradePlan } from '../../../../_metronic/partials/modals/upgrade-plan/UpgradePlanWizardHelper'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const PROFILE_URL = `${API_URL}/profile`
const USER_URL = `${API_URL}/users/change`

export interface IUserID {
  id: CustomUserClaim | CustomUserClaim[] | ID
  status?: string
}

export interface IEmailPassword {
  email?: string
  id: CustomUserClaim | CustomUserClaim[] | ID
  oldPassword?: string
  newPassword?: string
}

const createUserProfileAPI = (data: IProfile) => {
  return axios.post(`${PROFILE_URL}/create`, data)
}

const getUserProfileAPI = (query: IUserID) => axios.get(`${PROFILE_URL}/${query.id}`)

const deactivateProfileAPI = (query: IUserID) => {
  return axios.put(`${PROFILE_URL}/${query.id}/status?status=${query.status}`,)
}

const updateProfileAPI = (data: IUpgradePlan) => {
  return axios.put(`${PROFILE_URL}/${data.id}/update`, data)
}

const updateEmailPasswordAPI = (data: IEmailPassword) => {
  if (data.email) {
    return axios.put(`${USER_URL}/email/${data.id}?newEmail=${data.email}`)
  } else {
    return axios.put(`${USER_URL}/password/${data.id}?oldPassword=${data.oldPassword}&newPassword=${data.newPassword}`)
  }
}

export {createUserProfileAPI, getUserProfileAPI, deactivateProfileAPI, updateProfileAPI, updateEmailPasswordAPI}
