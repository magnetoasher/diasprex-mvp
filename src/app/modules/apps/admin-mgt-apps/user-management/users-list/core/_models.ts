import {ID, Response} from '../../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  dpxid?: ID
  userType?: string
  subscriptionTier?: string
  fName?: string
  mInitial?: string
  lName?: string
  name?: string
  avatar?: string
  email?: string
  city?: string
  state?: string
  countryRes?: string
  countryOrig?: string
  remit_on?: boolean
  position?: string
  role?: string
  tier?: string
  accountstatus?: string
  billing?: string
  last_login?: string
  verification?: boolean
  two_step?: boolean
  joined_day?: string
  online?: boolean
  phone?: string
  mobilephone?: string
  initials?: {
    label: string
    state: string
  }
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Super Admin',
  name: '',
  email: '',
}
