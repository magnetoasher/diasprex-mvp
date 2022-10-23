import {ID, Response} from '../../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  name?: string
  avatar?: string
  email?: string
  city?: string
  state?: string
  rcountry?: string
  afcountry?: string
  remiton?: boolean
  position?: string
  role?: string
  tier?: string
  status?: string
  billing?: string
  last_login?: string
  verification?: boolean
  two_step?: boolean
  joined_day?: string
  online?: boolean
  phone?: string
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