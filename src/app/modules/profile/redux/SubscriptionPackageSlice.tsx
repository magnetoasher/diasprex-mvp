//@ts-nocheck
import {createSlice} from '@reduxjs/toolkit'
import {ISubscriptionPackage} from '../../auth/registration/components/CreateAccountWizardHelper'

const initialState: ISubscriptionPackage = {
  userType: '',
  userTypeFull: '',
  packagePrice: '0.00',
  packageDuration: 'month',
}

export const SubscriptionPackageSlice = createSlice({
  name: 'subscriptionpackage',
  initialState,
  reducers: {
    packagePriceSet: (subscriptionpackage, action) => {
      subscriptionpackage.packagePrice = action.payload
    },
    packageDurationSet: (subscriptionpackage, action) => {
      subscriptionpackage.packageDuration = action.payload
    },
    userTypeSet: (subscriptionpackage, action) => {
      subscriptionpackage.userType = action.payload
    },
    userTypeFullSet: (subscriptionpackage, action) => {
      subscriptionpackage.userTypeFull = action.payload
    },
  },
})
// console.log('Slice', profiledataSlice)
export const {packagePriceSet, packageDurationSet, userTypeSet, userTypeFullSet} =
  SubscriptionPackageSlice.actions

export default SubscriptionPackageSlice.reducer
