/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {useSearchParams} from 'react-router-dom'
import {AsideMenuItemWithSub} from '../AsideMenuItemWithSub'
import {AsideMenuItem} from '../AsideMenuItem'
import {KTSVG} from '../../../../helpers'

export function AdminMenu() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='admindashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.ADMIN.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/opportunities'
        icon='/media/icons/duotune/general/gen008.svg'
        title='Opportunities'
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/admin/settings'
        icon='/media/icons/duotune/coding/cod001.svg'
        title='Settings'
        fontIcon='bi-app-indicator'
      />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Admin</span>
        </div>
      </div>

      <AsideMenuItem
        to='user_management'
        icon='/media/icons/duotune/art/art003.svg'
        title='User Management'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='opp_management'
        icon='/media/icons/duotune/art/art004.svg'
        title='Opportunity Management'
        fontIcon='bi-layers'
      />

      <AsideMenuItem
        to='prop_management'
        icon='/media/icons/duotune/art/art006.svg'
        title='Proposal Management'
        fontIcon='bi-app-indicator'
      />
      {/* <AsideMenuItem
                to='/rr_management'
                icon='/media/icons/duotune/art/art007.svg'
                title='Remittance Management'
                fontIcon='bi-layers'
            /> */}

      <AsideMenuItem
        to='/diasporas'
        icon='/media/icons/duotune/art/art008.svg'
        title='Diasporas'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/faqs'
        icon='/media/icons/duotune/art/art009.svg'
        title='FAQs'
        fontIcon='bi-layers'
      />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>User</span>
        </div>
      </div>

      <AsideMenuItem
        to='/my_opportunities'
        icon='/media/icons/duotune/art/art002.svg'
        title='My Opportunities'
        fontIcon='bi-layers'
      />

      <AsideMenuItemWithSub
        to='profile'
        icon='/media/icons/duotune/art/art008.svg'
        title='My Profile'
        fontIcon='bi-app-indicator'
      >
        <AsideMenuItem to='profile/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='profile/settings' title='Settings' hasBullet={true} />
        {/* <AsideMenuItem to='profile/billing' title='Billing' hasBullet={true} /> */}
        {/* <AsideMenuItem to='profile/account' title='Account' hasBullet={true} /> */}
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='remittance'
        icon='/media/icons/duotune/art/art003.svg'
        title='My Remittances'
        fontIcon='bi-archive'
      >
        <AsideMenuItem to='remittance/summary' title='Summary' hasBullet={true} />
        <AsideMenuItem to='remittance/preferences' title='Preferences' hasBullet={true} />
        <AsideMenuItem to='remittance/sendmoney' title='Send Money' hasBullet={true} />
        <AsideMenuItem to='remittance/retainer' title='Remittance Retainer' hasBullet={true} />
        <AsideMenuItem to='remittance/loans' title='Loans' hasBullet={true} />
        <AsideMenuItem to='remittance/statements' title='Statements' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to='/referrals'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Referrals'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/chat/private-chat'
        icon='/media/icons/duotune/art/art002.svg'
        title='Messages'
        fontIcon='bi-layers'
      />
    </>
  )
}
