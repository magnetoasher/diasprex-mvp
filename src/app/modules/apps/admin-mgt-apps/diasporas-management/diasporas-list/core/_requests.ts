import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../_metronic/helpers'
import {Diaspora, DiasporasQueryResponse} from './_models'
import {uadFormModel} from '../../../../../Diasporas/components/core/_model'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL

const DIASPORA_URL = `${API_URL}/diaspora`
// const GET_DIASPORAS_URL = `${API_URL}/diaspora`

const getDiasporas = async (query: string): Promise<DiasporasQueryResponse> => {
  return await axios
    .get(`${DIASPORA_URL}?${query}`)
    .then((response: AxiosResponse<DiasporasQueryResponse>) => {
      return response.data
    })
}

const getDiasporaById = (id: ID): Promise<Diaspora | undefined> => {
  return axios
    .get(`${DIASPORA_URL}?email=${id}`)
    .then((response: AxiosResponse<Response<Diaspora>>) => response.data)
    .then((response: Response<Diaspora>) => {
      return response.data
    })
}

const createDiaspora = (diaspora: Diaspora): Promise<Diaspora | undefined> => {
  return axios
    .post(`${DIASPORA_URL}/create`, diaspora)
    .then((response: AxiosResponse<Response<Diaspora>>) => response.data)
    .then((response: Response<Diaspora>) => response.data)
}

const updateDiaspora = (diaspora: Diaspora): Promise<Diaspora | undefined> => {
  return axios
    .put(`${DIASPORA_URL}/${diaspora.id}`, diaspora)
    .then((response: AxiosResponse<Response<Diaspora>>) => response.data)
    .then((response: Response<Diaspora>) => response.data)
}

const deleteDiaspora = (diasporaId: ID): Promise<void> => {
  return axios.delete(`${DIASPORA_URL}/${diasporaId}`).then(() => {})
}

const deleteSelectedDiasporas = (diasporaIds: Array<ID>): Promise<void> => {
  const requests = diasporaIds.map((id) => changeDiasporaStatus(id, 'Deleted'))
  return axios.all(requests).then(() => {})
}

const publishSelectedDiasporas = (diasporaIds: Array<ID>): Promise<void> => {
  const requests = diasporaIds.map((id) => changeDiasporaStatus(id, 'Published'))
  return axios.all(requests).then(() => {})
}

const changeDiasporaStatus = (id: ID, status: string): Promise<void> => {
  return axios.put(`${DIASPORA_URL}/status?email=${id}&status=${status}`).then(() => {})
}

export {
  getDiasporas,
  deleteDiaspora,
  deleteSelectedDiasporas,
  getDiasporaById,
  createDiaspora,
  updateDiaspora,
  changeDiasporaStatus,
  publishSelectedDiasporas,
}
