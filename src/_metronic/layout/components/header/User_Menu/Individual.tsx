import React from 'react'
import { MenuItem } from '../MenuItem'
import { useIntl } from 'react-intl'

const Individual = () => {
    const intl = useIntl()

    return (
        <>
            <MenuItem title={intl.formatMessage({ id: 'MENU.DASHBOARD' })} to='/dashboard' />
            <MenuItem title='Opportunities' to='opportunities' />
            <MenuItem title='My Opportunities' to='my_opportunities' />
            <MenuItem title='DIF Investment' to='#' />
            <MenuItem title='Remittance' to='#' />
        </>
    )
}

export default Individual