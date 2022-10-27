import {
  profileDetailsInitValues,
  IProfileDetails,
} from '../../../profile/components/settings/SettingsModel'

export interface IRemittanceDetails extends IProfileDetails {
  fNamerecpt: string
  lNamerecpt: string
  recipientctr: string
  currency: string
  retainerstatus: boolean
  autoretain: boolean
  prefmto: string
}

export const remittanceDetailsInitValues: IRemittanceDetails = {
  ...profileDetailsInitValues,
  fNamerecpt: 'Adebolu',
  lNamerecpt: 'Olaniyi',
  recipientctr: 'Nigeria',
  currency: 'USD - US Dollar',
  retainerstatus: true,
  autoretain: true,
  prefmto: 'moneygram',
}

export interface IDeactivateRemittance {
  confirm: boolean
}

export const deactivateRemittance: IDeactivateRemittance = {
  confirm: false,
}

export interface ITransModel {
  tDate: string[]
  tType: string[]
  tAmount: number[]
}

export const RemittanceTransModel: ITransModel = {
  tDate: [
    '02 May 2022',
    '09 May 2022',
    '15 May 2022',
    '03 June 2022',
    '22 June 2022',
    '29 June 2022',
    '15 Aug 2022',
    '03 Sept 2022',
  ],
  tType: [
    'Money transfer to Nigeria',
    'Add funds to RR',
    'Remittance retainer',
    'Money transfer to Ghana',
    'Money transfer Nigeria',
    'Fund withdrawal',
    'Add funds to RR',
    'Adds funds to RR',
  ],
  tAmount: [45.23, 100.0, 340.5, 45.01, 100.0, 467.65, 35.0, 500.01],
}

export interface ITransModel2 {
  transDate: string
  transType: string
  transAmount: number
  transdescr: string
}

export const ITransArrayModel: ITransModel2[] = [
  {
    transDate: '02 May 2022',
    transType: 'transfer',
    transAmount: 45.23,
    transdescr: 'Money transfer to Nigeria',
  },
  {
    transDate: '09 May 2022',
    transType: 'addfund',
    transAmount: 100.01,
    transdescr: 'Add funds to RR',
  },
  {
    transDate: '15 May 2022',
    transType: 'retainer',
    transAmount: 340.05,
    transdescr: 'Remittance retainer',
  },
  {
    transDate: '03 June 2022',
    transType: 'transfer',
    transAmount: 45.01,
    transdescr: 'Money transfer to Ghana',
  },
  {
    transDate: '22 June 2022',
    transType: 'transfer',
    transAmount: 100.85,
    transdescr: 'Money transfer to Nigeria',
  },
  {
    transDate: '29 June 2022',
    transType: 'withdraw',
    transAmount: 467.65,
    transdescr: 'Fund withdrawal',
  },
  {
    transDate: '15 Aug 2022',
    transType: 'addfund',
    transAmount: 35.05,
    transdescr: 'Add funds to RR',
  },
  {
    transDate: '03 Sept 2022',
    transType: 'addfund',
    transAmount: 500.01,
    transdescr: 'Add funds to RR',
  },
]
