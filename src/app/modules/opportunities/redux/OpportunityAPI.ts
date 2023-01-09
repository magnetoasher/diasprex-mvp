import axios from 'axios'
import {ID} from '../../../../_metronic/helpers'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const OPPS_URL = `${API_URL}/opportunities`

export interface IQuery {
  items_per_page?: number
  page?: number
  status?: string
  featuredopp?: boolean
}

const getAllOppsAPI = (query?: IQuery) => axios.get(`${OPPS_URL}`, {params: query})

const getOppByIdAPI = (id: ID) => axios.get(`${OPPS_URL}/${id}`)

export {getAllOppsAPI, getOppByIdAPI}
