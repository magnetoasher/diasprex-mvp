import {ID, Response} from '../../../../../../_metronic/helpers'
import {Opps} from '../../../../apps/admin-mgt-apps/opp-management/opps-list/core/_models'

export type Proposal = {
  id?: ID
  title?: string
  thumbnail?: string
  enabler?: string
  summary?: string
  prop_desc?: string
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
  enabler: 'David Johnson',
  country: 'United States',
  title: 'Proposal Demo 1',
  summary: 'Proposal summary ',
  status: 'pending',
  admin_screening: false,
  date_submitted: '',
}
