import React from 'react'
import { useIntl } from 'react-intl'
import { MenuItem } from '../MenuItem'

const Generic = () => {
    const intl = useIntl()

    return (
        <>
            <MenuItem title={intl.formatMessage({ id: 'MENU.DASHBOARD' })} to='/dashboard' />
            <MenuItem title='Opportunities' to='opportunities' />
            <MenuItem title='My Opportunities' to='my_opportunities' />
            <MenuItem title='DIF Investment' to='#' />
            <MenuItem title='Remittance' to='#' />
            <MenuItem title='Diaspora' to='#' />
            <MenuItem title='Resources' to='#' />
        </>
    )
}

export default Generic