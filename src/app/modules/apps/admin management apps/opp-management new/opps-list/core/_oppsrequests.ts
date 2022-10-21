// Replace request file with this
// https:/ / diasprex - demo - api -default -rtdb.firebaseio.com /

// import { useEffect } from 'react'

// Firebose uis: j18c5SP2VhXEOIgBHgbf3kNvloS2

import axios, { AxiosResponse } from 'axios'
import {ID, Response} from '../../../../../../../_metronic/helpers'
// import { Opps } from './_models'
import { Opps, OppsQueryResponse } from './_models'

// For posting dummy data to Firebase. Delete at completion
// import FireBaseHelper from '../../../../../../_metronic/helpers/firebasehelper'
// FireBaseHelper()
// let username = 'o.dada@diasprex.com'
// let uid = 'j18c5SP2VhXEOIgBHgbf3kNvloS2'
// let useruid = `${username}.${uid}`
// let token = 'n0793EocywTXnolyidNY1KX6nG42fc14UPdVXaU2'
// const API_URL ='https://diasprex-demo-api-default-rtdb.firebaseio.com'
const API_URL = 'https://diasprex-api-demo-default-rtdb.firebaseio.com'
const OPPS_URL = `${API_URL}/oppsdata`
const GET_OPPS_URL = `${OPPS_URL}.json`

// const API_URL = process.env.REACT_APP_THEME_API_URL
// const USER_URL = `${API_URL}/user`
// const GET_USERS_URL = `${API_URL}/users/query`


//  const getOpps = (query: string) => {
//    fetch(`${GET_OPPS_URL}?${query}`)
//      .then((res) => res.json())
//    .then(data)
// };

const getOpps = async (query: string): Promise<OppsQueryResponse> => {
  const res = await fetch(`${GET_OPPS_URL}?${query}`);
  const resjson: OppsQueryResponse = await res.json();
  const result = {
    data: Object.values(resjson) as Opps[],
    payload: resjson.payload
  }
  return result
}

// }
// const getOpps = async (query: string):Promise<OppsQueryResponse> => {
//   const res: AxiosResponse = await axios.get(GET_OPPS_URL);
//   return res;
// };

// const getOpps = (query: string): Promise<OppsQueryResponse> => {
//   return axios
//     // .get(GET_OPPS_URL)
//     .get(`${GET_OPPS_URL}?${query}`)
//     .then((d: AxiosResponse<OppsQueryResponse>) => d.data)
// }

const getOppById = (id: ID): Promise<Opps | undefined> => {
  return axios
    .get(`${OPPS_URL}/${id}`)
    .then((response: AxiosResponse<Response<Opps>>) => response.data)
    .then((response: Response<Opps>) => response.data)
}

const createOpp = (opps: Opps): Promise<Opps | undefined> => {
  return axios
    .put(OPPS_URL, opps)
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

const deleteSelectedOpps = (oppsIds: Array<ID>): Promise<void> => {
  const requests = oppsIds.map((id) => axios.delete(`${OPPS_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getOpps, deleteOpps, deleteSelectedOpps, getOppById, createOpp, updateOpp}
