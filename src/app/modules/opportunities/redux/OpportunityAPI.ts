import axios from 'axios'
import {ID} from '../../../../_metronic/helpers'
import {CustomUserClaim} from '@okta/okta-auth-js'
import {IQuery as IQuery2} from '../../proposals/redux/ProposalAPI'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const OPPS_URL = `${API_URL}/opportunities`

export interface IQuery {
  items_per_page?: number
  page?: number
  status?: string
  featuredopp?: boolean
  sponsorUserId?: CustomUserClaim | CustomUserClaim[]
  enablerUserId?: CustomUserClaim | CustomUserClaim[]
}

const getAllOppsAPI = (query?: IQuery) => axios.get(`${OPPS_URL}`, {params: query})

const getOppByIdAPI = (id: ID) => axios.get(`${OPPS_URL}/${id}`)

const getSupportedOppsAPI = (query?: IQuery) => axios.get(`${OPPS_URL}/supporting`, {params: query})

const acknowledgeOdaAPI = (query?: IQuery2) => {
  return axios.put(`${OPPS_URL}/${query?.opportunityUuid}/${query?.enablerUserId}/acknowledgeODA`)
}

const supportOppAPI = (query?: IQuery2) => {
  return axios.put(`${OPPS_URL}/${query?.opportunityUuid}/${query?.enablerUserId}/support`)
}

const unsupportOppAPI = (query?: IQuery2) => {
  return axios.put(`${OPPS_URL}/${query?.opportunityUuid}/${query?.enablerUserId}/unsupport`)
}

const changeOppStatusAPI = (query?: IQuery2) => {
  return axios.put(`${OPPS_URL}/${query?.opportunityUuid}/status`, {status: query?.status})
}

export {getAllOppsAPI, getOppByIdAPI, acknowledgeOdaAPI, supportOppAPI, unsupportOppAPI, getSupportedOppsAPI, changeOppStatusAPI}
