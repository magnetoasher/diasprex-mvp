/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {useSearchParams} from 'react-router-dom'
import {AsideMenuItemWithSub} from '../AsideMenuItemWithSub'
import {AsideMenuItem} from '../AsideMenuItem'
import {KTSVG} from '../../../../helpers'

export function Sponsor() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
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
        to='createopportunities'
        icon='/media/icons/duotune/art/art001.svg'
        title='Create Opportunities'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/sponsor_proposals'
        icon='/media/icons/duotune/art/art002.svg'
        title='Proposals'
        fontIcon='bi-layers'
      />

      <AsideMenuItem
        to='/diasporas'
        icon='/media/icons/duotune/art/art003.svg'
        title='Diasporas'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/faqs'
        icon='/media/icons/duotune/art/art004.svg'
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
        <AsideMenuItem to='profile/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='profile/settings' title='Settings' hasBullet={true} />
        <AsideMenuItem to='profile/billing' title='Billing' hasBullet={true} />
        {/* <AsideMenuItem to='profile/account' title='Account' hasBullet={true} /> */}
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to='/chat/private-chat'
        icon='/media/icons/duotune/art/art007.svg'
        title='Messages'
        fontIcon='bi-layers'
      />
    </>
  )
}
