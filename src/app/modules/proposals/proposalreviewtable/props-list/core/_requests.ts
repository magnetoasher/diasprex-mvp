import {useEffect} from 'react'
import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {
  Proposal,
  ProposalsQueryResponse,
} from '../../../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'
import {useOktaAuth} from '@okta/okta-react'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const PROP_URL = `${API_URL}/proposals`
const GET_PROP_URL = `${API_URL}/proposals`

const getProposals = (query: string): Promise<ProposalsQueryResponse> => {
  return axios
    .get(`${GET_PROP_URL}?${query}`)
    .then((d: AxiosResponse<ProposalsQueryResponse>) => d.data)
}

const getProposalById = (id: ID): Promise<Proposal | undefined> => {
  return axios
    .get(`${PROP_URL}/${id}`)
    .then((response: AxiosResponse<Response<Proposal>>) => response.data)
    .then((response: Response<Proposal>) => {
      return response.data
    })
}

const createProposal = (proposal: Proposal): Promise<Proposal | undefined> => {
  return axios
    .put(PROP_URL, proposal)
    .then((response: AxiosResponse<Response<Proposal>>) => response.data)
    .then((response: Response<Proposal>) => response.data)
}

const updateProposal = (proposal: Proposal): Promise<Proposal | undefined> => {
  return axios
    .post(`${PROP_URL}/${proposal.id}`, proposal)
    .then((response: AxiosResponse<Response<Proposal>>) => response.data)
    .then((response: Response<Proposal>) => response.data)
}

const deleteProposal = (proposalId: ID): Promise<void> => {
  return axios.delete(`${PROP_URL}/${proposalId}`).then(() => {})
}

// const deleteSelectedProposals = (userIds: Array<ID>): Promise<void> => {
//   const requests = userIds.map((id) => axios.delete(`${PROP_URL}/${id}`))
//   return axios.all(requests).then(() => {})
// }
const deleteSelectedProposals = (oppsIds: Array<ID>): Promise<void> => {
  const requests = oppsIds.map((id) => changePropsStatus(id, 'deleted'))
  return axios.all(requests).then(() => {})
}

const changeSelectedProposals = (oppsIds: Array<ID>, status: string): Promise<void> => {
  const requests = oppsIds.map((id) => changePropsStatus(id, status))
  return axios.all(requests).then(() => {})
}

const changePropsStatus = (id: ID, status: string): Promise<void> => {
  const data = {
    status,
  }
  return axios.put(`${PROP_URL}/${id}/status?status=${status}`, data).then(() => {})
}

export {
  getProposals,
  deleteProposal,
  deleteSelectedProposals,
  getProposalById,
  createProposal,
  updateProposal,
  changePropsStatus,
  changeSelectedProposals,
}
