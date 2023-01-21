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
  country: string
  language?: string
  timeZone?: string
  organization?: string
  orgAddress?: string
  orgMailAddress?: string
  orgIndustry?: string
  orgRegNumber?: string
  orgRegCountry?: string
  oecd?: string
  address: string
  profession?: string
  degree?: string
  communications: {
    email: boolean
    phone: boolean
  }
  allowMarketing: boolean
}

export interface ISponsorProfileDetails {
  avatar: string
  contactfName: string
  contactmInitial?: string
  contactlName: string
  email: string
  company?: string
  contactOrgRole?: string
  contactPhone: string
  orgCountry: string
  orgName?: string
  orgType?: string
  orgPhysicalAddress?: string
  orgMailAddress?: string
  orgIndustry?: string
  orgRegNumber?: string
  orgRegCountry?: string
  contactProfession?: string
  contactDegree?: string
  communications: {
    email: boolean
    phone: boolean
  }
  allowMarketing: boolean
  acknowledgeDPXTerms?: boolean
}

export interface IBusinessProfileDetails {
  id?: ID
  dpxid?: ID
  usertype?: string
  subscriptionTier?: string
  avatar: string
  contactfName: string
  contactmInitial?: string
  contactlName: string
  email: string
  company?: string
  contactOrgRole?: string
  contactPhone: string
  orgCountry: string
  orgName?: string
  orgType?: string
  orgPhysicalAddress?: string
  orgMailAddress?: string
  orgIndustry?: string
  orgRegNumber?: string
  orgRegCountry?: string
  orgRegState?: string
  contactProfession?: string
  contactDegree?: string
  communications: {
    email: boolean
    phone: boolean
  }
  allowMarketing: boolean
  acknowledgeDPXTerms?: boolean
}

export interface IIndividualProfile {
  id?: ID
  dpxid?: ID
  usertype?: string
  subscriptionTier?: string
  fName?: string
  mName?: string
  lName?: string
  avatar?: string
  email?: string
  address: {
    addressLine: string
    city: string
    state: string
    postCode: string
  }
  countryRes?: string
  countryOrig?: string
  remit_on?: boolean
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
export interface IUpdateEmail {
  newEmail: string
  confirmPassword: string
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
  country: 'South Africa',
  language: '',
  timeZone: '',
  orgRole: 'President and CEO',
  organization: '',
  orgIndustry: 'Advertisement',
  orgRegNumber: 'NGN0004874653',
  orgRegCountry: 'South Africa',
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
}

export const updateEmail: IUpdateEmail = {
  newEmail: 'support@keenthemes.com',
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
