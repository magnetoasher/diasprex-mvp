/* eslint-disable react/jsx-no-target-blank */

import {useIntl} from 'react-intl'
import {useSearchParams} from 'react-router-dom'
import {Sponsor} from './MenuList/Sponsor'
import {AdminMenu} from './MenuList/AdminMenu'
import {Enabler} from './MenuList/Enabler'
import {GenericMenu} from './MenuList/GenericMenu'

export function AsideMenuMain() {
  const intl = useIntl()

  const [searchParams, setSearchParams] = useSearchParams()
  let userType = localStorage.getItem('userType')
  let userTypeFull = localStorage.getItem('userTypeFull')

  return (
    <>
      {/* {user == 'admin' ? (
        <AdminMenu />
      ) : user == 'sponsor' ? (
        <Sponsor />
      ) : user == 'individual' || user == 'business' ? (
        <Individual />
      ) : (
        <GenericMenu />
      )} */}
      {userType == 'admin' ? (
        <AdminMenu />
      ) : userType == 'sponsor' ? (
        <Sponsor />
      ) : userType == 'enabler' && userTypeFull !== 'basic_enabler' ? (
        <Enabler />
      ) : (
        <GenericMenu />
      )}
    </>
  )
}
