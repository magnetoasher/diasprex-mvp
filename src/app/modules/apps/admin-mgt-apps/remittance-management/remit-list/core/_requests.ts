import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../_metronic/helpers'
import {Remit, RemitsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const REMIT_URL = `${API_URL}/remits`
const GET_REMITS_URL = `${API_URL}/remits`

const getRemits = (query: string): Promise<RemitsQueryResponse> => {
  return axios
    .get(`${GET_REMITS_URL}?${query}`)
    .then((d: AxiosResponse<RemitsQueryResponse>) => d.data)
}

const getRemitById = (id: ID): Promise<Remit | undefined> => {
  return axios
    .get(`${REMIT_URL}/${id}`)
    .then((response: AxiosResponse<Response<Remit>>) => response.data)
    .then((response: Response<Remit>) => response.data)
}

const createRemit = (remit: Remit): Promise<Remit | undefined> => {
  return axios
    .put(REMIT_URL, remit)
    .then((response: AxiosResponse<Response<Remit>>) => response.data)
    .then((response: Response<Remit>) => response.data)
}

const updateRemit = (remit: Remit): Promise<Remit | undefined> => {
  return axios
    .post(`${REMIT_URL}/${remit.id}`, remit)
    .then((response: AxiosResponse<Response<Remit>>) => response.data)
    .then((response: Response<Remit>) => response.data)
}

const deleteRemit = (remitId: ID): Promise<void> => {
  return axios.delete(`${REMIT_URL}/${remitId}`).then(() => {})
}

const deleteSelectedRemits = (remitIds: Array<ID>): Promise<void> => {
  const requests = remitIds.map((id) => axios.delete(`${REMIT_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getRemits, deleteRemit, deleteSelectedRemits, getRemitById, createRemit, updateRemit}
