import { CustomUserClaim } from '@okta/okta-auth-js'
import axios from 'axios'
import { ID } from '../../../../_metronic/helpers'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const PROPS_URL = `${API_URL}/proposals`

export interface IQuery {
  opportunityUuid?: ID
  enablerUserId?: CustomUserClaim | CustomUserClaim[] | string
  sponsorUserId?: CustomUserClaim | CustomUserClaim[] | string
  status?: string
}

const getProposalsAPI = (query?: IQuery) => axios.get(`${PROPS_URL}`, {params: query})

const getProposalAPI = (query?: IQuery) => axios.get(`${PROPS_URL}/${query?.opportunityUuid}/${query?.enablerUserId}`)

const changeProposalStatusAPI = (query?: IQuery) => {
  return axios.put(`${PROPS_URL}/${query?.opportunityUuid}/${query?.enablerUserId}/status`, {status: query?.status})}

export {getProposalsAPI, getProposalAPI, changeProposalStatusAPI}
