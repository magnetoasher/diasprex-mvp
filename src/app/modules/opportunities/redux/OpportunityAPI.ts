import axios from 'axios'
import { ID } from '../../../../_metronic/helpers'

const API_URL = process.env.REACT_APP_DIASPREX_API_URL
const OPPS_URL = `${API_URL}/opportunities`

const getAllOppsAPI = () => axios.get(`${OPPS_URL}`)

const getOppByIdAPI = (id: ID) => axios.get(`${OPPS_URL}/${id}`)

export {getAllOppsAPI, getOppByIdAPI}
