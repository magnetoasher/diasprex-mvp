import React from 'react'
import {MenuItem} from '../MenuItem'
import {useIntl} from 'react-intl'
import {MenuItemHyper} from '../MenuItemHyper'

const Sponsor = () => {
  const intl = useIntl()

  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuItem title='My Opportunities' to='/createopportunities' />
      <MenuItem title='Proposals' to='sponsor/props_review' />
      {/* <MenuItem title='DIF Investment' to='dif_resources' /> */}
      <MenuItemHyper title='Diaspora' to='/diasporas' />
      <MenuItemHyper title='FAQs' to='faqs' />
    </>
  )
}

export default Sponsor
