import React from 'react'
import { useIntl } from 'react-intl'
import { MenuItem } from '../MenuItem'

const Generic = () => {
    const intl = useIntl()

    return (
        <>
            <MenuItem title={intl.formatMessage({ id: 'MENU.DASHBOARD' })} to='/dashboard' />
            <MenuItem title='Opportunities' to='/opportunities' />
            <MenuItem title='My Opportunities' to='#' />
            <MenuItem title='DIF Investment' to='dif_resources' />
            <MenuItem title='Remittance' to='remittance' />
            <MenuItem title='Diaspora' to='/diasporas' />
            <MenuItem title='Resources' to='faqs' />
        </>
    )
}

export default Generic