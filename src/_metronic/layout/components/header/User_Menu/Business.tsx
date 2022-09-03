import React from 'react'
import { MenuItem } from '../MenuItem'
import { useIntl } from 'react-intl'

const Business = () => {
    const intl = useIntl()

    return (
        <>
            <MenuItem title={intl.formatMessage({ id: 'MENU.DASHBOARD' })} to='/dashboard' />
            <MenuItem title='Opportunities' to='opportunities' />
            <MenuItem title='My Opportunities' to='my_opportunities' />
        </>
    )
}

export default Business