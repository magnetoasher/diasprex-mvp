import {ID} from '../../../../../_metronic/helpers'

export interface IProfileDetails {
  avatar: string
  fName: string
  mInitial?: string
  lName: string
  email: string
  company?: string
  orgRole?: string
  contactPhone: string
  companySite?: string
  country?: string
  countryRes: string
  countryOrig?: string
  language?: string
  timeZone?: string
  organization?: string
  orgAddress?: string
  orgMailAddress?: string
  orgIndustry?: string
  orgRegNumber?: string
  orgRegCountry?: string
  orgType?: string
  orgName?: string
  oecd?: string
  address: string
  profession?: string
  degree?: string
  communications: {
    email: boolean
    phone: boolean
  }
  allowMarketing: boolean
  usertype?: string
  status?: string
  phonenumber?: string
}

export interface IUpdateEmail {
  email: string
  confirmPassword?: string
}

export interface IUpdatePassword {
  currentPassword: string
  newPassword: string
  passwordConfirmation: string
}

export interface IConnectedProfiles {
  google: boolean
  github: boolean
  stack: boolean
}

export interface IEmailPreferences {
  successfulPayments: boolean
  payouts: boolean
  freeCollections: boolean
  customerPaymentDispute: boolean
  refundAlert: boolean
  invoicePayments: boolean
  webhookAPIEndpoints: boolean
}

export interface INotifications {
  notifications: {
    email: boolean
    phone: boolean
  }
  billingUpdates: {
    email: boolean
    phone: boolean
  }
  newTeamMembers: {
    email: boolean
    phone: boolean
  }
  completeProjects: {
    email: boolean
    phone: boolean
  }
  newsletters: {
    email: boolean
    phone: boolean
  }
}

export interface IDeactivateProfile {
  confirm: boolean
}

export const profileDetailsInitValues: IProfileDetails = {
  avatar: '/media/avatars/diasprex/dxp-6.jpg',
  fName: 'John',
  mInitial: 'J',
  lName: 'Smith',
  email: 'm.smith@diasprex.com',
  company: 'Julius Berger PLC',
  contactPhone: '044 3276 454 935',
  companySite: 'keenthemes.com',
  countryRes: 'South Africa',
  language: '',
  timeZone: '',
  orgRole: 'President and CEO',
  organization: '',
  orgIndustry: 'Advertisement',
  orgRegNumber: 'NGN0004874653',
  orgRegCountry: 'South Africa',
  orgName: 'Organization',
  orgType: 'Org',
  countryOrig: 'South Africa',
  phonenumber: '1234567',
  oecd: '',
  address: '1750 Gemsbok St',
  orgAddress: '7868 Wamco Rd, Ikeja Lagos, Nigeria',
  orgMailAddress: '7868 Wamco Rd, Ikeja Lagos, Nigeria',
  profession: '',
  degree: '',
  communications: {
    email: false,
    phone: false,
  },
  allowMarketing: false,
  usertype: 'super',
  status: 'active',
}

export const updateEmail: IUpdateEmail = {
  email: 'support@keenthemes.com',
  confirmPassword: '',
}

export const updatePassword: IUpdatePassword = {
  currentPassword: '',
  newPassword: '',
  passwordConfirmation: '',
}

export const connectedProfiles: IConnectedProfiles = {
  google: true,
  github: true,
  stack: false,
}

export const emailPreferences: IEmailPreferences = {
  successfulPayments: false,
  payouts: true,
  freeCollections: false,
  customerPaymentDispute: true,
  refundAlert: false,
  invoicePayments: true,
  webhookAPIEndpoints: false,
}

export const notifications: INotifications = {
  notifications: {
    email: true,
    phone: true,
  },
  billingUpdates: {
    email: true,
    phone: true,
  },
  newTeamMembers: {
    email: true,
    phone: false,
  },
  completeProjects: {
    email: false,
    phone: true,
  },
  newsletters: {
    email: false,
    phone: false,
  },
}

export const deactivateProfile: IDeactivateProfile = {
  confirm: false,
}
