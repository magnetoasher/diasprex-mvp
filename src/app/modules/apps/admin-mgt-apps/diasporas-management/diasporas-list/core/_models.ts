import {Response} from '../../../../../../../_metronic/helpers'
import {uadFormModel} from '../../../../../Diasporas/components/core/_model'
export type Diaspora = uadFormModel

export type DiasporasQueryResponse = Response<Array<uadFormModel>>

export const initialDiaspora: uadFormModel = {
  avatar: 'avatars/diasprex/dxp-1.jpg',
  fName: 'Tosin',
  lName: 'Dada',
  email: '',
  status: '',
  dpxID: '',
  phone: '',
  countryRes: '',
  countryOrig: '',
  profession: '',
  undergrad: {
    inst: '',
    field: '',
    degree: 'B.S',
  },
  grad: {
    inst: '',
    field: '',
    degree: 'Ph.D',
  },
  summary: '',
  interest: ['', '', '', ''],
  insightAfrica: '',
}
