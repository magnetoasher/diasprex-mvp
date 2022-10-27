export interface IProfileDetails {
  avatar: string
  fName: string
  lName: string
  company: string
  contactPhone: string
  companySite: string
  country: string
  language: string
  timeZone: string
  role: string
  organization: string
  oecd: string
  address: string
  profession: string
  degree: string
  communications: {
    email: boolean
    phone: boolean
  }
  allowMarketing: boolean
  fNamerecpt?: string
  lNamerecpt?: string
  recipientctr?: string
  currency?: string
  retainerstatus?: boolean
  autoretain?: boolean
  prefmto?: string
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
  fName: 'Max',
  lName: 'Smith',
  company: 'Keenthemes',
  contactPhone: '044 3276 454 935',
  companySite: 'keenthemes.com',
  country: 'South Africa',
  language: '',
  timeZone: '',
  role: '',
  organization: '',
  oecd: '',
  address: '1750 Gemsbok St',
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
