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
