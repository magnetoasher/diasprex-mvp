//@ts-nocheck
import {createSlice} from '@reduxjs/toolkit'
import {IPhoneVerification} from '../../auth/registration/components/CreateAccountWizardHelper'

const initialState: IPhoneVerification = {
  countrylocation: {
    short: '',
    label: '',
  },
  countrycode: '',
  phonenumber: '',
  verified: false,
}

export const PhoneVerificationSlice = createSlice({
  name: 'phoneverification',
  initialState,
  reducers: {
    countryCodeSet: (phonedata, action) => {
      phonedata.countrycode = action.payload
    },
    phoneNumberSet: (phonedata, action) => {
      phonedata.phonenumber = action.payload
    },
    countrySet: (phonedata, action) => {
      phonedata.countrylocation = action.payload
    },

    verifiedSet: (phonedata, action) => {
      phonedata.verified = action.payload
    },
  },
})

export const {countryCodeSet, phoneNumberSet, countrySet, verifiedSet} =
  PhoneVerificationSlice.actions

export default PhoneVerificationSlice.reducer
