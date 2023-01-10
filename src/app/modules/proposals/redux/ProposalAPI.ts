import { CustomUserClaim } from '@okta/okta-auth-js'
import axios from 'axios'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const PROPS_URL = `${API_URL}/proposals`

export interface IQuery {
  opportunityUuid?: string
  enablerUserId?: CustomUserClaim | CustomUserClaim[] | string
  status?: string
}

const getProposalsAPI = (query?: IQuery) => axios.get(`${PROPS_URL}`, {params: query})

const getProposalAPI = (query?: IQuery) => axios.get(`${PROPS_URL}/${query?.opportunityUuid}/${query?.enablerUserId}`)

export {getProposalsAPI, getProposalAPI}
