//@ts-nocheck
import {createSlice} from '@reduxjs/toolkit'

import {inits as InitialProfile} from '../../auth/registration/components/CreateAccountWizardHelper'

export const profiledataSlice = createSlice({
  name: 'profiledata',
  initialState: InitialProfile,
  reducers: {
    fNameSet: (profiledata, action) => {
      profiledata.fName = action.payload
    },
    lNameSet: (profiledata, action) => {
      profiledata.lName = action.payload
    },
    emailSet: (profiledata, action) => {
      profiledata.email = action.payload
    },
    phoneSet: (profiledata, action) => {
      profiledata.phonenumber = action.payload
    },
  },
})
// console.log('Slice', profiledataSlice)
export const {fNameSet, lNameSet, emailSet, phoneSet} = profiledataSlice.actions

export default profiledataSlice.reducer
