import React from 'react'
import {ProfileDetails} from './cards/ProfileDetails'
import {SignInMethod} from './cards/SignInMethod'
import {ConnectedProfiles} from './cards/ConnectedAccounts'
import {EmailPreferences} from './cards/EmailPreferences'
import {Notifications} from './cards/Notifications'
import {DeactivateProfile} from './cards/DeactivateAccount'

export function Settings({profile, isLoading, getProfile}: any) {
  return (
    <>
      <ProfileDetails profile={profile} isLoading={isLoading} getProfile={getProfile} />
      <SignInMethod />
      {/* <ConnectedProfiles /> */}
      {/* <EmailPreferences /> */}
      {/* <Notifications /> */}
      <DeactivateProfile profile={profile} isLoading={isLoading} getProfile={getProfile} />
    </>
  )
}
