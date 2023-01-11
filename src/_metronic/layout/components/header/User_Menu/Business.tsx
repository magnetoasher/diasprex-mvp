import React from 'react'
import {MenuItem} from '../MenuItem'
import {useIntl} from 'react-intl'
import {MenuItemHyper} from '../MenuItemHyper'

const Business = () => {
  const intl = useIntl()

  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuItem title='Opportunities' to='/opportunities_center' />
      <MenuItem title='My Opportunities/Proposals' to='/my_opportunities' />
      {/* <MenuItem title='DIF Investment' to='dif_resources' /> */}
      <MenuItem title='Remittance' to='remittance_resources' />
      <MenuItemHyper title='Diaspora' to='/diasporas' />
      <MenuItemHyper title='FAQs' to='faqs' />
    </>
  )
}

export default Business
