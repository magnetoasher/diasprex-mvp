import {ID, Response} from '../../../../../../_metronic/helpers'
import { Opps } from '../../../../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
export type User = {
  id?: ID
  name?: string
  avatar?: string
  email?: string
  position?: string
  role?: string
  last_login?: string
  two_steps?: boolean
  joined_day?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}

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
