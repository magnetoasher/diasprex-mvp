/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {useSearchParams} from 'react-router-dom'
import {AsideMenuItemWithSub} from '../AsideMenuItemWithSub'
import {AsideMenuItem} from '../AsideMenuItem'
import {KTSVG} from '../../../../helpers'

export function Business() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/opportunities_center'
        icon='/media/icons/duotune/art/art001.svg'
        title='Opportunities'
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/remittance_resources'
        icon='/media/icons/duotune/art/art005.svg'
        title='Remittance'
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/diasporas'
        icon='/media/icons/duotune/art/art005.svg'
        title='Diasporas'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/faqs'
        icon='/media/icons/duotune/art/art006.svg'
        title='FAQs'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>User</span>
        </div>
      </div>

      <AsideMenuItemWithSub
        to='profile'
        icon='/media/icons/duotune/art/art008.svg'
        title='My Profile'
        fontIcon='bi-app-indicator'
      >
        <AsideMenuItem
          to='my_opportunities'
          icon='/media/icons/duotune/art/art002.svg'
          title='My Opportunities/Proposals'
          fontIcon='bi-layers'
        />
        <AsideMenuItem to='profile/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='profile/settings' title='Settings' hasBullet={true} />
        <AsideMenuItem to='profile/subscription' title='Subscription' hasBullet={true} />
        {/* <AsideMenuItem to='profile/account' title='Account' hasBullet={true} /> */}
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to='/crafted/profile/settings'
        icon='/media/icons/duotune/art/art004.svg'
        title='Settings'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/chat/private-chat'
        icon='/media/icons/duotune/art/art007.svg'
        title='Messages'
        fontIcon='bi-layers'
      />
    </>
  )
}
