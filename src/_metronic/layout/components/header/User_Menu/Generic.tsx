import React from 'react'
import {useIntl} from 'react-intl'
import {MenuItem} from '../MenuItem'
import {MenuItemHyper} from '../MenuItemHyper'

const Generic = () => {
  const intl = useIntl()

  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuItem title='Opportunities' to='/opportunities_center' />
      <MenuItem title='My Opportunities/Proposals' to='/my_opportunities' />
      <MenuItem title='My Proposals' to='/my_proposals' />
      {/* <MenuItem title='DIF Investment' to='dif_resources' /> */}
      <MenuItemHyper title='Remittance' to='/remittance_resources' />
      <MenuItemHyper title='Diaspora' to='/diasporas' />
      <MenuItemHyper title='FAQs' to='/faqs' />
    </>
  )
}

export default Generic
