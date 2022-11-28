import React from 'react'
import {MenuItem} from '../MenuItem'
import {useIntl} from 'react-intl'
import {MenuInnerWithSub} from '../MenuInnerWithSub'

export const AdminMenu = () => {
  const intl = useIntl()

  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.ADMIN.DASHBOARD'})} to='/admindashboard' />
      <MenuItem title='Opportunities' to='/opportunities_center' />
      <MenuItem title='Settings' to='/admin/settings' />
      {/* <MenuItem title='Users' to='/admin/users_management' />
      <MenuItem title='Opportunities Admin' to='/admin/opps_management' />
      <MenuItem title='Proposals Admin' to='/admin/props_management' />
      <MenuItem title='Diasporas Admin' to='/admin/diaspora_management' />
      <MenuItem title='Remittances Admin' to='/admin/rr_management' />
      <MenuItem title='Transactions Admin' to='/admin/trans_management' />
      <MenuItem title='Payment Admin' to='/admin/paymethod_management' /> */}
      {/* <MenuItem title='FAQs' to='/faqs' /> */}

      <MenuInnerWithSub title='Admin' to='table' menuPlacement='bottom-start' menuTrigger='click'>
        <MenuItem to='/table/users_management' title='Users' hasBullet={true} />
        <MenuItem to='/table/opps_management' title='Opportunities' hasBullet={true} />
        <MenuItem to='/table/props_management' title='Proposals' hasBullet={true} />
        <MenuItem to='/table/rr_management' title='Remittance Retainer' hasBullet={true} />
        <MenuItem to='/table/trans_management' title='Transactions' hasBullet={true} />
        <MenuItem to='/table/paymethod_management' title='Payment Methods' hasBullet={true} />
        <MenuItem to='/table/diaspora_management' title='Diasporas' hasBullet={true} />
      </MenuInnerWithSub>
    </>
  )
}
