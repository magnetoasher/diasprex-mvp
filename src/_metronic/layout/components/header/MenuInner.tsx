import {useIntl} from 'react-intl'
import Sponsor from './User_Menu/Sponsor'
import Business from './User_Menu/Business'
import Generic from './User_Menu/Generic'
import Enabler from './User_Menu/Enabler'
import {AdminMenu} from './User_Menu/AdminMenu'

export function MenuInner() {
  const intl = useIntl()
  const userType = localStorage.getItem('userType')
  const userTypeFull = localStorage.getItem('userTypeFull')

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
      {userType === 'admin' ? (
        <AdminMenu />
      ) : userType === 'sponsor' ? (
        <Sponsor />
      ) : userType == 'enabler' && userTypeFull !== 'basic_enabler' ? (
        <Enabler />
      ) : (
        <Generic />
      )}
    </>
  )
}
