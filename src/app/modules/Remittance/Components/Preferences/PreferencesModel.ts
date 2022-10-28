import {
  profileDetailsInitValues,
  IProfileDetails,
} from '../../../profile/components/settings/SettingsModel'

export interface IRemittanceDetails extends IProfileDetails {
  fNamerecpt?: string
  lNamerecpt?: string
  recipientctr?: string
  currency?: string
  retainerstatus?: boolean
  autoretain?: boolean
  prefmto?: string
}
export interface RemittanceRetainerAccount extends IRemittanceDetails {
  lTrans: string
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

export interface IRemittanceTransModel {
  transDate: string
  transType: string
  transAmount: number
  transdescr: string
  totalRetainer?: string
  lastRetainer?: string
}

export const ITransArrayModel: IRemittanceTransModel[] = [
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
