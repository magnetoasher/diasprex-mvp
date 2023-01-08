import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../_metronic/helpers'
import {PayMethod, PayMethodQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const PAYMETHOD_URL = `${API_URL}/paymethods`
const GET_PAYMETHOD_URL = `${API_URL}/paymethods`

const getPayMethod = (query: string): Promise<PayMethodQueryResponse> => {
  return axios
    .get(`${GET_PAYMETHOD_URL}?${query}`)
    .then((d: AxiosResponse<PayMethodQueryResponse>) => d.data)
}

const getPayMethodById = (id: ID): Promise<PayMethod | undefined> => {
  return axios
    .get(`${PAYMETHOD_URL}/${id}`)
    .then((response: AxiosResponse<Response<PayMethod>>) => response.data)
    .then((response: Response<PayMethod>) => response.data)
}

const createPayMethod = (paymethod: PayMethod): Promise<PayMethod | undefined> => {
  return axios
    .put(PAYMETHOD_URL, paymethod)
    .then((response: AxiosResponse<Response<PayMethod>>) => response.data)
    .then((response: Response<PayMethod>) => response.data)
}

const updatePayMethod = (paymethod: PayMethod): Promise<PayMethod | undefined> => {
  return axios
    .post(`${PAYMETHOD_URL}/${paymethod.id}`, paymethod)
    .then((response: AxiosResponse<Response<PayMethod>>) => response.data)
    .then((response: Response<PayMethod>) => response.data)
}

const deletePayMethod = (paymethodId: ID): Promise<void> => {
  return axios.delete(`${PAYMETHOD_URL}/${paymethodId}`).then(() => {})
}

const deleteSelectedPayMethod = (paymethodIds: Array<ID>): Promise<void> => {
  const requests = paymethodIds.map((id) => axios.delete(`${PAYMETHOD_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {
  getPayMethod,
  deletePayMethod,
  deleteSelectedPayMethod,
  getPayMethodById,
  createPayMethod,
  updatePayMethod,
}
