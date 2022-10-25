import React from 'react'
import { MenuItem } from '../MenuItem'
import { useIntl } from 'react-intl'


export const AdminMenu = () => {
    const intl = useIntl()

    return (
        <>
            <MenuItem title={intl.formatMessage({ id: 'MENU.ADMIN.DASHBOARD' })} to='/admindashboard' />
            <MenuItem title='Opportunities' to='/opportunities' />
            <MenuItem title='Settings' to='/admin/settings' />
            <MenuItem title='User Management' to='/user_management' />
            <MenuItem title='Opportunity Management' to='/opp_management' />
            <MenuItem title='Proposal Management' to='/prop_management' />
            {/* <MenuItem title='Remittance Management' to='/rr_management' /> */}
            <MenuItem title='Diaspora' to='/diasporas' />
            <MenuItem title='FAQs' to='/faqs' />
        </>
    )
}