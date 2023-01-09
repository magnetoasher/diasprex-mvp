// Replace request file with this
// https:/ / diasprex - demo - api -default -rtdb.firebaseio.com /

// import { useEffect } from 'react'

// Firebose uis: j18c5SP2VhXEOIgBHgbf3kNvloS2

import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../_metronic/helpers'
// import { Opps } from './_models'
import {Opps, OppsQueryResponse} from './_models'

// For posting dummy data to Firebase. Delete at completion
// import FireBaseHelper from '../../../../../../_metronic/helpers/firebasehelper'
// FireBaseHelper()
// let username = 'o.dada@diasprex.com'
// let uid = 'j18c5SP2VhXEOIgBHgbf3kNvloS2'
// let useruid = `${username}.${uid}`
// let token = 'n0793EocywTXnolyidNY1KX6nG42fc14UPdVXaU2'
// const OPPS_URL = 'https://diasprex-api-demo-default-rtdb.firebaseio.com/oppsdata'
const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const OPPS_URL = `${API_URL}/opportunities`
const GET_OPPS_URL = `${API_URL}/opportunities`

const getOpps = async (query: string): Promise<OppsQueryResponse> => {
  return await axios
    .get(`${GET_OPPS_URL}?${query}`)
    .then((d: AxiosResponse<OppsQueryResponse>) => d.data)
}

const getOppById = (id: ID): Promise<Opps | undefined> => {
  return axios
    .get(`${OPPS_URL}/${id}`)
    .then((response: AxiosResponse<Response<Opps>>) => response.data)
    .then((response: Response<Opps>) => response.data)
}

const createOpp = (opps: Opps): Promise<Opps | undefined> => {
  return axios
    .post(`${OPPS_URL}/create`, opps)
    .then((response: AxiosResponse<Response<Opps>>) => response.data)
    .then((response: Response<Opps>) => response.data)
}

const updateOpp = (opps: Opps): Promise<Opps | undefined> => {
  return axios
    .post(`${OPPS_URL}/${opps.id}`, opps)
    .then((response: AxiosResponse<Response<Opps>>) => response.data)
    .then((response: Response<Opps>) => response.data)
}

const deleteOpps = (userId: ID): Promise<void> => {
  return axios.delete(`${OPPS_URL}/${userId}`).then(() => {})
}

// const deleteSelectedOpps = (oppsIds: Array<ID>): Promise<void> => {
//   const requests = oppsIds.map((id) => axios.delete(`${OPPS_URL}/${id}`))
//   return axios.all(requests).then(() => {})
// }

const deleteSelectedOpps = (oppsIds: Array<ID>): Promise<void> => {
  const requests = oppsIds.map((id) => changeOppsStatus(id, 'deleted'))
  return axios.all(requests).then(() => {})
}
const publishSelectedOpps = (oppsIds: Array<ID>): Promise<void> => {
  const requests = oppsIds.map((id) => changeOppsStatus(id, 'published'))
  return axios.all(requests).then(() => {})
}

const changeOppsStatus = (id: ID, status: string): Promise<void> => {
  const data = {
    status,
  }
  return axios.put(`${OPPS_URL}/${id}/status?status=${status}`, data).then(() => {})
}

export {
  getOpps,
  deleteOpps,
  deleteSelectedOpps,
  getOppById,
  createOpp,
  updateOpp,
  publishSelectedOpps,
  changeOppsStatus,
}
