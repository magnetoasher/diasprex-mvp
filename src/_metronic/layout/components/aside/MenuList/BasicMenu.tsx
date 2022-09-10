/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { useSearchParams } from 'react-router-dom'
import { AsideMenuItemWithSub } from '../AsideMenuItemWithSub'
import { AsideMenuItem } from '../AsideMenuItem'
import { KTSVG } from '../../../../helpers'

export function BasicMenu() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon='bi-app-indicator'
      />


      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <AsideMenuItem
        to='/opportunities'
        icon='/media/icons/duotune/art/art001.svg'
        title="Opportunities"
        fontIcon='bi-app-indicator'
      />


      <AsideMenuItem
        to='#'
        icon='/media/icons/duotune/art/art003.svg'
        title="DIF Investment"
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/art/art004.svg'
        title='Remittance'
        fontIcon='bi-layers'
      />



      <AsideMenuItem
        to='#'
        icon='/media/icons/duotune/art/art006.svg'
        title="Diasporas"
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='#'
        icon='/media/icons/duotune/art/art007.svg'
        title='Resources'
        fontIcon='bi-layers'
      />



      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>User</span>
        </div>
      </div>
      <AsideMenuItem
        to='/crafted/profile/overview'
        icon='/media/icons/duotune/art/art008.svg'
        title="My Account"
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/crafted/profile/settings'
        icon='/media/icons/duotune/art/art009.svg'
        title='Settings'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='#'
        icon='/media/icons/duotune/art/art003.svg'
        title='My Opportunities'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='#'
        icon='/media/icons/duotune/art/art005.svg'
        title='Send Money'
        fontIcon='bi-layers'
      />


      <AsideMenuItem
        to='#'
        icon='/media/icons/duotune/art/art004.svg'
        title='My Investment'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='#'
        icon='/media/icons/duotune/art/art001.svg'
        title='Referrals'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='#'
        icon='/media/icons/duotune/art/art002.svg'
        title='Messages'
        fontIcon='bi-layers'
      />
    </>

  )
}
