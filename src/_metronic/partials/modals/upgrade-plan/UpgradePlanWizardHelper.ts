import * as Yup from 'yup'

export interface IUpgradePlan {
  usertype?: string
  userTypeFull?: string
  packageDuration?: string
  packagePrice?: string
  accountType: string
  accountTeamSize: string
  accountName: string
  accountPlan: string
  businessName: string
  businessDescriptor: string
  businessType: string
  businessDescription: string
  businessEmail: string
  paymethod?: string
  nameOnCard: string
  cardNumber: string
  cardExpiryMonth: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
  accountnumber?: string
  routingnumber?: string
}

const upgradePlanSchemas = [
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),

  Yup.object({
    paymethod: Yup.string().required('Select a payment method'),
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
  businessName: 'Keenthemes Inc.',
  businessDescriptor: 'KEENTHEMES',
  businessType: '1',
  businessDescription: '',
  businessEmail: 'corp@support.com',
  nameOnCard: 'Max Doe',
  cardNumber: '4111 1111 1111 1111',
  cardExpiryMonth: '1',
  cardExpiryYear: '2025',
  cardCvv: '123',
  saveCard: '1',
}

export {upgradePlanSchemas, inits}
