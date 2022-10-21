import React from 'react'
import { MenuItem } from '../MenuItem'
import { useIntl } from 'react-intl'

const Sponsor = () => {
    const intl = useIntl()

    return (
        <>
            <MenuItem title={intl.formatMessage({ id: 'MENU.DASHBOARD' })} to='/dashboard' />
            <MenuItem title='Create Opportunities' to='/createopportunities' />
            <MenuItem title='Proposals' to='/sponsor_proposals' />
            <MenuItem title='DIF Investment' to='dif_resources' />
            <MenuItem title='Diaspora' to='/diasporas' />
            <MenuItem title='Resources' to='faqs' />

        </>)
}

export default Sponsor