import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../_metronic/helpers'
import {Trans, TransQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const TRANS_URL = `${API_URL}/remit`
const GET_TRANS_URL = `${API_URL}/remits/query`

const getTrans = (query: string): Promise<TransQueryResponse> => {
  return axios
    .get(`${GET_TRANS_URL}?${query}`)
    .then((d: AxiosResponse<TransQueryResponse>) => d.data)
}

const getTransById = (id: ID): Promise<Trans | undefined> => {
  return axios
    .get(`${TRANS_URL}/${id}`)
    .then((response: AxiosResponse<Response<Trans>>) => response.data)
    .then((response: Response<Trans>) => response.data)
}

const createTrans = (trans: Trans): Promise<Trans | undefined> => {
  return axios
    .put(TRANS_URL, trans)
    .then((response: AxiosResponse<Response<Trans>>) => response.data)
    .then((response: Response<Trans>) => response.data)
}

const updateTrans = (trans: Trans): Promise<Trans | undefined> => {
  return axios
    .post(`${TRANS_URL}/${trans.id}`, trans)
    .then((response: AxiosResponse<Response<Trans>>) => response.data)
    .then((response: Response<Trans>) => response.data)
}

const deleteTrans = (transId: ID): Promise<void> => {
  return axios.delete(`${TRANS_URL}/${transId}`).then(() => {})
}

const deleteSelectedTrans = (transIds: Array<ID>): Promise<void> => {
  const requests = transIds.map((id) => axios.delete(`${TRANS_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getTrans, deleteTrans, deleteSelectedTrans, getTransById, createTrans, updateTrans}
