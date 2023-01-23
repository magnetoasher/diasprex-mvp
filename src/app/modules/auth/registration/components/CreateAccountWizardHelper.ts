import * as Yup from 'yup'
import {ID, phoneRegExp} from '../../../../../_metronic/helpers'

interface address {
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  postCode: string
}

export interface IProfile {
  id?: ID
  dpxid?: ID
  usertype?: string
  subscriptiontier?: string
  fName: string
  lName: string
  mInitial: string
  avatar?: string
  email: string
  countryorig: string
  countryres: string
  accountType: string
  phonenumber: string
  mobilephone: string
  profession: string
  proffield: string
  degree?: string
  interest?: string[]
  accountTeamSize: string
  accountName: string
  accountPlan: string
  orgName?: string
  orgAddress?: address
  orgMailingAddress?: string
  orgRegistered?: string
  orgRegNumber?: string
  orgRegYear?: string
  orgRegCountry?: string
  orgRegState?: string
  orgRole: string
  orgIndustry: string
  nameOnCard?: string
  cardNumber?: string
  cardExpiryMonth?: string
  cardExpiryYear?: string
  cardCvv?: string
  saveCard?: string
  accountNumber?: string
  routingNumber?: string
  acknowledgeDPXterms: boolean
  emailcommunicate: boolean
  online?: boolean
  status?: string
  verified: boolean
  twostepauth: boolean
  remittanceretainer: boolean
  datejoined: string
}

const createAccountSchemas = [
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),
  Yup.object({
    phonenumber: Yup.string().required().label('Phone Number'),
  }),
  Yup.object().shape({
    fName: Yup.string()
      .min(1, 'Minimum 1 symbols')
      .max(50, 'Maximum 50 symbols')
      .required()
      .label('First name'),
    lName: Yup.string()
      .min(1, 'Minimum 1 symbols')
      .max(50, 'Maximum 50 symbols')
      .required()
      .label('Last name'),
    email: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required()
      .label('Email'),
    // phone: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .matches(phoneRegExp, 'Phone number is not valid')
    //   .required()
    //   .label('Primary phone'),
    // countryRes: Yup.string().required().label('Country of Residence'),
    // countryOrig: Yup.string().required().label('Country of Origin'),
    // profession: Yup.string().required().label('Profession'),
    // proffield: Yup.string().required().label('Professional field'),
    // orgName: Yup.string().required().label('Organization Name'),
    // orgAddress: Yup.string().required().label('Organization Address'),
    // orgMailingAddress: Yup.string().required().label('Organization Mailing Address'),
    // orgRegistered: Yup.string().required('Please confirm you have a registered business'),
    // isRegistered: Yup.string().when('orgRegistered', {
    //   is: 'No',
    //   then: Yup.string().required('Sorry, you need a registered business to continue'),
    // }),
    // orgRegNumber: Yup.string().required().label('Organization registration number'),
    // orgRegYear: Yup.string().required().label('Organizationregistration year'),
    // orgRegCountry: Yup.string().required().label('Organization registration country'),
    // orgRegState: Yup.string().required().label('Organization registration state'),
    // orgRole: Yup.string().required().label('Organization role'),
    // orgType: Yup.string().required().label('Organization type'),
    // industry: Yup.string().required().label('Industry'),
    // dpxterms: Yup.bool().oneOf([true], 'You need to accept the general terms and conditions'),
    // enablerterms: Yup.bool().oneOf([true], 'You need to accept the Enablers terms and conditions'),
    // sponsorterms: Yup.bool().oneOf([true], 'You need to accept the Sponsors terms and conditions'),
  }),
  // Yup.object({
  //   businessDescriptor: Yup.string().required().label('Shortened Descriptor'),
  //   businessType: Yup.string().required().label('Corporation Type'),
  //   businessEmail: Yup.string().required().label('Contact Email'),
  // }),
  // Yup.object({
  //   nameOnCard: Yup.string().required().label('Name On Card'),
  //   cardNumber: Yup.string().required().label('Card Number'),
  //   cardExpiryMonth: Yup.string().required().label('Expiration Month'),
  //   cardExpiryYear: Yup.string().required().label('Expiration Year'),
  //   cardCvv: Yup.string().required().label('CVV'),
  // }),
]

const inits: IProfile = {
  fName: '',
  lName: '',
  mInitial: '',
  email: '',
  phonenumber: '',
  mobilephone: '',
  countryorig: '',
  countryres: '',
  profession: '',
  proffield: '',
  degree: '',
  interest: [],
  accountType: 'basic_enabler',
  accountTeamSize: '50+',
  accountName: '',
  accountPlan: '1',
  orgName: '',
  orgRegistered: '',
  orgRegNumber: '',
  orgRegYear: '',
  orgRegCountry: '',
  orgRegState: '',
  orgRole: '',
  orgIndustry: '',
  nameOnCard: 'Max Doe',
  cardNumber: '',
  cardExpiryMonth: '',
  cardExpiryYear: '',
  cardCvv: '123',
  saveCard: '1',
  accountNumber: '000123456789',
  routingNumber: '110000000',
  acknowledgeDPXterms: false,
  emailcommunicate: false,
  online: false,
  status: 'active',
  verified: false,
  twostepauth: false,
  remittanceretainer: false,
  datejoined: '02 Nov 2022',
}

export {createAccountSchemas, inits}
