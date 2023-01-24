import * as Yup from 'yup'
import { ID } from '../../../helpers'

interface address {
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  postCode: string
}

export interface IUpgradePlan {
  id?: ID
  dpxid?: ID
  usertype?: string
  subscriptiontier?: string
  packagePrice?: string
  packageDuration?: string
  fName?: string
  lName?: string
  mInitial?: string
  avatar?: string
  email?: string
  countryorig?: string
  countryres?: string
  accountType?: string
  phonenumber?: string
  mobilephone?: string
  profession?: string
  proffield?: string
  degree?: string
  interest?: string[]
  accountTeamSize?: string
  accountName?: string
  accountPlan?: string
  orgName?: string
  orgAddress?: address
  orgMailingAddress?: string
  orgRegistered?: string
  orgRegNumber?: string
  orgRegYear?: string
  orgRegCountry?: string
  orgRegState?: string
  orgRole?: string
  orgIndustry?: string
  nameOnCard?: string
  cardNumber?: string
  cardExpiryMonth?: string
  cardExpiryYear?: string
  cardCvv?: string
  saveCard?: string
  accountNumber?: string
  routingNumber?: string
  acknowledgeDPXterms?: boolean
  emailcommunicate?: boolean
  online?: boolean
  status?: string
  verified?: boolean
  twostepauth?: boolean
  remittanceretainer?: boolean
  datejoined?: string
  billing?: {
    packagePrice?: string
    packageDuration?: string
  }
}

const upgradePlanSchemas = [
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),

  Yup.object({
    paymethod: Yup.string(),
    nameOnCard: Yup.string().when('paymethod', {
      is: 'credit',
      then: Yup.string().required().label('Name on Card'),
    }),
    cardNumber: Yup.string().when('paymethod', {
      is: 'credit',
      then: Yup.string().required().label('Card Number'),
    }),
    cardExpiryMonth: Yup.string().when('paymethod', {
      is: 'credit',
      then: Yup.string().required().label('Expiration Month'),
    }),
    cardExpiryYear: Yup.string().when('paymethod', {
      is: 'credit',
      then: Yup.string().required().label('Expiration Year'),
    }),
    cardCvv: Yup.string().required().label('CVV'),

    accountNumber: Yup.string().when('paymethod', {
      is: 'checking',
      then: Yup.string().required().label('Checking Number'),
    }),
    accountNumberConfirm: Yup.string().when('paymethod', {
      is: 'checking',
      then: Yup.string().required().label('Account Number Confirmation'),
    }),
    routingNumber: Yup.string().when('paymethod', {
      is: 'checking',
      then: Yup.string().required().label('Routing Number'),
    }),
  }),
]

const inits: IUpgradePlan = {
  accountType: 'personal',
  accountTeamSize: '50+',
  accountName: '',
  accountPlan: '1',
  email: 'corp@support.com',
  nameOnCard: '',
  cardNumber: '',
  cardExpiryMonth: '',
  cardExpiryYear: '',
  cardCvv: '',
  saveCard: '',
}

export {upgradePlanSchemas, inits}
