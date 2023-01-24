import {ID, Response} from '../../../../../../../_metronic/helpers'
import {
  IProfile,
  inits as InitialValues,
} from '../../../../../auth/registration/components/CreateAccountWizardHelper'

export type User = IProfile

export type UsersQueryResponse = Response<Array<User>>

export const initialUser = InitialValues
