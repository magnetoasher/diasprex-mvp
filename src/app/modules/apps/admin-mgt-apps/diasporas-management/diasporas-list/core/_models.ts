import {Response} from '../../../../../../../_metronic/helpers'
import {uadFormModel} from '../../../../../Diasporas/components/core/_model'
export type Diaspora = uadFormModel

export type DiasporasQueryResponse = Response<Array<uadFormModel>>

export const initialDiaspora: uadFormModel = {
  avatar: 'avatars/300-6.jpg',
  fName: 'Tosin',
  lName: 'Dada',
  email: '',
  status: '',
}
