import {useContext} from 'react'
import {useIntl} from 'react-intl'
import Sponsor from './User_Menu/Sponsor'
import Business from './User_Menu/Business'
import Generic from './User_Menu/Generic'
import Enabler from './User_Menu/Enabler'
import {AdminMenu} from './User_Menu/AdminMenu'
import {profileContext} from '../../../../app/context/profile'

export function MenuInner() {
  const intl = useIntl()
  const userType = localStorage.getItem('userType')
  const userTypeFull = localStorage.getItem('userTypeFull')
  const {profile} = useContext(profileContext)

  return (
    <>
      {/* {user === 'admin' ? (
        <AdminMenu />
      ) : user === 'sponsor' ? (
        <Sponsor />
      ) : user == 'individual' || user == 'business' ? (
        <Individual />
      ) : (
        <Generic />
      )} */}
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
        <Business />
      ) : (
        <Generic />
      )}
    </>
  )
}
