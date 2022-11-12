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
  let user = localStorage.getItem('userType')

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
      {user == 'admin' ? <AdminMenu /> : user == 'sponsor' ? <Sponsor /> : <Enabler />}
    </>
  )
}
