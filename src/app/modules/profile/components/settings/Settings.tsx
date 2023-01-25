import React from 'react'
import {ProfileDetails} from './cards/ProfileDetails'
import {SignInMethod} from './cards/SignInMethod'
import {ConnectedProfiles} from './cards/ConnectedAccounts'
import {EmailPreferences} from './cards/EmailPreferences'
import {Notifications} from './cards/Notifications'
import {DeactivateProfile} from './cards/DeactivateAccount'

interface Props {
  isLoading: boolean
}

export function Settings({isLoading}: Props) {
  return (
    <>
      <ProfileDetails isLoading={isLoading} />
      <SignInMethod />
      {/* <ConnectedProfiles /> */}
      {/* <EmailPreferences /> */}
      {/* <Notifications /> */}
      <DeactivateProfile isLoading={isLoading} />
    </>
  )
}
