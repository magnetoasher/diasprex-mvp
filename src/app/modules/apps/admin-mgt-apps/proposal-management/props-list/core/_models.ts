import {ID, Response} from '../../../../../../../_metronic/helpers'
import * as Yup from 'yup'
import {Opps} from '../../../opp-management/opps-list/core/_models'
export type Proposal = {
  id?: ID
  dpxid?: ID
  title?: string
  thumbnail?: string
  enablerName?: string
  enablerUserId?: string
  sponsorUserId?: string
  opportunityUuid?: string
  summary?: string
  propdesc?: string
  country?: string
  status?: string
  date_submitted?: string
  admin_screening?: boolean
  opportunityObject?: Opps
  initials?: {
    label: string
    state: string
  }
}

export type ProposalsQueryResponse = Response<Array<Proposal>>

export const initialProposal: Proposal = {
  thumbnail: 'avatars/300-6.jpg',
  enablerName: 'David Johnson',
  country: 'United States',
  title: '',
  summary: '',
  status: 'pending',
  admin_screening: false,
  date_submitted: '',
}

export const createPropsSchemas = [
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),

  // Create/edit opps validation schema
  Yup.object({
    title: Yup.string().required().label('Title'),
    summary: Yup.string().required().label('Proposal summary'),
    oppsdesc: Yup.string().required().label('Proposal detail'),
  }),
]
