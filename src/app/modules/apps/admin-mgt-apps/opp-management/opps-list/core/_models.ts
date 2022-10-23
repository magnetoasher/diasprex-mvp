import {ID, Response} from '../../../../../../../_metronic/helpers'

// type model for opportunities
export type Opps= {
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
  rewards?: {
    equity: boolean
    cash: boolean
    contract: boolean
    other: {
      selected: boolean
      description: string
    }
  }
  initials?: {
    label: string
    state: string
  }
}

export type OppsQueryResponse = Response<Array<Opps>>


export const initialOpps: Opps = {
  title: 'Vaccine Production Manufacturing Plant',
  id: 'DXXXXXXXXXX',
  thumbnail: 'avatars/300-6.jpg',
  sponsor: 'MeGOLD Nig. Ltd',
  summary: 'Opportunity summary ',
  status: 'pending',
  datesubmitted: '10 May 2022',
  duedate: '12 December 2022',
  category: 'Manufacturing'
}