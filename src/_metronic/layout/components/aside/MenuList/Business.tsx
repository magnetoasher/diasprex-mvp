/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { useSearchParams } from 'react-router-dom'
import { AsideMenuItemWithSub } from '../AsideMenuItemWithSub'
import { AsideMenuItem } from '../AsideMenuItem'
import { KTSVG } from '../../../../helpers'

export function Business() {
    const intl = useIntl()

    return (
        <>
            <AsideMenuItem
                to='/dashboard'
                icon='/media/icons/duotune/art/art002.svg'
                title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
                fontIcon='bi-app-indicator'
            />


            <AsideMenuItem
                to='/opportunities'
                icon='/media/icons/duotune/art/art001.svg'
                title="Opportunities"
                fontIcon='bi-app-indicator'
            />


            <AsideMenuItem
                to='#'
                icon='/media/icons/duotune/art/art005.svg'
                title="Diasporas"
                fontIcon='bi-app-indicator'
            />
            <AsideMenuItem
                to='#'
                icon='/media/icons/duotune/art/art006.svg'
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
                icon='/media/icons/duotune/art/art003.svg'
                title="My Account"
                fontIcon='bi-app-indicator'
            />
            <AsideMenuItem
                to='my_opportunities'
                icon='/media/icons/duotune/art/art002.svg'
                title='My Opportunities'
                fontIcon='bi-brightness-alt-high'
            />
            <AsideMenuItem
                to='/crafted/profile/settings'
                icon='/media/icons/duotune/art/art004.svg'
                title='Settings'
                fontIcon='bi-layers'
            />





        </>
    )
}
