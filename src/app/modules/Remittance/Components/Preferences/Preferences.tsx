import React from 'react'
import {RemittancePreferences} from './cards/RemittancePreferences'
// import {SignInMethod} from './cards/SignInMethod'
// import {ConnectedAccounts} from './cards/ConnectedAccounts'
// import {EmailPreferences} from './cards/EmailPreferences'
// import {Notifications} from './cards/Notifications'
import {DeactivateAccount} from './cards/DeactivateAccount'

export function Preferences() {
  return (
    <>
      <RemittancePreferences />
      {/* <EmailPreferences /> */}
      {/* <Notifications /> */}
      <DeactivateAccount />
    </>
  )
}
