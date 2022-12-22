import {ID, Response} from '../../../../../../../_metronic/helpers'
import * as Yup from 'yup'

// type model for opportunities
export type Opps = {
  uuid?: ID
  id?: ID
  title?: string
  thumbnail?: string
  sponsor?: string
  category?: string
  summary?: string
  oppdesc?: string
  country?: string
  datesubmitted?: string
  status?: string
  duedate?: string
  open?: boolean
  dealtype?: string[]
  otherdealtype?: string
  featuredopp?: boolean
  initials?: {
    label: string
    state: string
  }
  following?: number
  showedinterest?: number
}

export type OppsQueryResponse = Response<Array<Opps>>

export const initialOpps: Opps = {
  title: '',
  id: '',
  thumbnail: '',
  sponsor: '',
  summary: '',
  status: '',
  datesubmitted: 'Todays Date',
  duedate: '',
  category: '',
  following: 0,
  showedinterest: 0,
}

export const createOppsSchemas = [
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),

  // Create/edit opps validation schema
  Yup.object({
    category: Yup.string().required().label('Category'),
    duedate: Yup.string().required().label('Due Date'),
    dealtype: Yup.string().required().label('Deal Type'),
    title: Yup.string().required().label('Title'),
    summary: Yup.string().required().label('Opportunity summary'),
    oppsdesc: Yup.string().required().label('Opportunity detail'),
  }),
]
