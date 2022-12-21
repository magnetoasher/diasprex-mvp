import React from 'react'
import {ProfileDetails} from './cards/ProfileDetails'
import {SignInMethod} from './cards/SignInMethod'
import {ConnectedProfiles} from './cards/ConnectedAccounts'
import {EmailPreferences} from './cards/EmailPreferences'
import {Notifications} from './cards/Notifications'
import {DeactivateProfile} from './cards/DeactivateAccount'

export function Settings() {
  return (
    <>
      <ProfileDetails />
      <SignInMethod />
      {/* <ConnectedProfiles /> */}
      {/* <EmailPreferences /> */}
      {/* <Notifications /> */}
      <DeactivateProfile />
    </>
  )
}
