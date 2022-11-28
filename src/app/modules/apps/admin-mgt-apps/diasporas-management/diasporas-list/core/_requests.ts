import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../_metronic/helpers'
import {Diaspora, DiasporasQueryResponse} from './_models'
import {uadFormModel} from '../../../../../Diasporas/components/core/_model'

const API_URL = 'http://localhost:3000'
const DIASPORA_URL = `${API_URL}/diasporas`
const GET_DIASPORAS_URL = `${API_URL}/diasporas`

const getDiasporas = async (query: string): Promise<DiasporasQueryResponse> => {
  return await axios
    .get(`${GET_DIASPORAS_URL}`)
    .then((response: AxiosResponse<DiasporasQueryResponse>) => response.data)
}

const getDiasporaById = (id: ID): Promise<Diaspora | undefined> => {
  return axios
    .get(`${DIASPORA_URL}/${id}`)
    .then((response: AxiosResponse<Response<Diaspora>>) => response.data)
    .then((response: Response<Diaspora>) => {
      console.log('DiasporaForEdit', response.data)
      return response.data
    })
}

const createDiaspora = (diaspora: Diaspora): Promise<Diaspora | undefined> => {
  return axios
    .put(DIASPORA_URL, diaspora)
    .then((response: AxiosResponse<Response<Diaspora>>) => response.data)
    .then((response: Response<Diaspora>) => response.data)
}

const updateDiaspora = (diaspora: Diaspora): Promise<Diaspora | undefined> => {
  return axios
    .post(`${DIASPORA_URL}/${diaspora.id}`, diaspora)
    .then((response: AxiosResponse<Response<Diaspora>>) => response.data)
    .then((response: Response<Diaspora>) => response.data)
}

const deleteDiaspora = (diasporaId: ID): Promise<void> => {
  return axios.delete(`${DIASPORA_URL}/${diasporaId}`).then(() => {})
}

const deleteSelectedDiasporas = (diasporaIds: Array<ID>): Promise<void> => {
  const requests = diasporaIds.map((id) => axios.delete(`${DIASPORA_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {
  getDiasporas,
  deleteDiaspora,
  deleteSelectedDiasporas,
  getDiasporaById,
  createDiaspora,
  updateDiaspora,
}
