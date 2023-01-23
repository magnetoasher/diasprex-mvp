import axios from 'axios'
import { ID } from '../../../../_metronic/helpers'
import { ICreateAccount } from '../../auth/registration/components/CreateAccountWizardHelper'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const PROPS_URL = `${API_URL}/profile`

const createUserProfileAPI = (data: ICreateAccount) => {
  return axios.post(`${PROPS_URL}/create`, data)
}

export {createUserProfileAPI}
