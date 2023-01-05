/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {useSearchParams} from 'react-router-dom'
import {AsideMenuItemWithSub} from '../AsideMenuItemWithSub'
import {AsideMenuItem} from '../AsideMenuItem'

export function Enabler() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Resources</span>
        </div>
      </div>
      <AsideMenuItem
        to='/opportunities_center'
        icon='/media/icons/duotune/art/art001.svg'
        title='Opportunities'
        fontIcon='bi-app-indicator'
      />

      {/* <AsideMenuItem
        to='dif_resources'
        icon='/media/icons/duotune/art/art003.svg'
        title='DIF Investment'
        fontIcon='bi-app-indicator'
      /> */}
      <AsideMenuItem
        to='remittance_resources'
        icon='/media/icons/duotune/art/art004.svg'
        title='Remittance'
        fontIcon='bi-layers'
      />

      <AsideMenuItem
        to='diasporas'
        icon='/media/icons/duotune/art/art006.svg'
        title='Diasporas'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='faqs'
        icon='/media/icons/duotune/art/art007.svg'
        title='FAQs'
        fontIcon='bi-layers'
      />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>User</span>
        </div>
      </div>

      <AsideMenuItem
        to='my_opportunities'
        icon='/media/icons/duotune/art/art002.svg'
        title='My Opportunities/Proposals'
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
        <AsideMenuItem to='profile/subscription' title='Subscription' hasBullet={true} />
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
