/* eslint-disable react/jsx-no-target-blank */
import {useContext} from 'react'
import {useIntl} from 'react-intl'
import {useSearchParams} from 'react-router-dom'
import {Sponsor} from './MenuList/Sponsor'
import {AdminMenu} from './MenuList/AdminMenu'
import {Enabler} from './MenuList/Enabler'
import {GenericMenu} from './MenuList/GenericMenu'
import {BusinessMenu} from './MenuList/Business'
import {profileContext} from '../../../../app/context/profile'

export function AsideMenuMain() {
  const {profile} = useContext(profileContext)

  return (
    <>
      {localStorage.getItem('userType') === 'admin' ? (
        <AdminMenu />
      ) : profile?.usertype === 'sponsor' ? (
        <Sponsor />
      ) : profile?.usertype == 'enabler' &&
        ['basic_enabler', 'standard_enabler', 'super_enabler'].includes(
          profile?.subscriptiontier
        ) ? (
        <Enabler />
      ) : profile?.usertype === 'enabler' && profile?.subscriptiontier !== 'business_enabler' ? (
        <BusinessMenu />
      ) : (
        <GenericMenu />
      )}
    </>
  )
}
