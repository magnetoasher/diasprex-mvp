import clsx from 'clsx'
import React, {FC, useContext} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {
  HeaderNotificationsMenu,
  HeaderUserMenu,
  QuickLinks,
  Search,
  ThemeModeSwitcher,
} from '../../../partials'
import {AdminHeaderUserMenu} from '../../../partials/layout/header-menus/AdminHeaderUserMenu'
import {useLayout} from '../../core'
import {profileContext} from '../../../../app/context/profile'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px',
  toolbarButtonIconSizeClass = 'svg-icon-1'
const itemClass = 'ms-1 ms-lg-3'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
const btnIconClass = 'svg-icon-1'
const Topbar: FC = () => {
  const {config} = useLayout()

  const {profile} = useContext(profileContext)

  const blankImg = '/media/avatars/blank.png'

  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      <div className='d-flex align-items-stretch flex-shrink-0'>
        {/* Begin: Search */}
        <div className={clsx('d-flex align-items-stretch', toolbarButtonMarginClass)}>
          <Search />
        </div>
      </div>

      {/* CHAT */}
      {/* <div className={clsx('app-navbar-item', itemClass)}>
        <div className={clsx('position-relative', btnClass)} id='kt_drawer_chat_toggle'>
          <KTSVG path='/media/icons/duotune/communication/com012.svg' className={btnIconClass} />
          <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink' />
        </div>
      </div> */}
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        <div
          className={clsx(
            'btn btn-icon btn-active-light-primary btn-custom position-relative',
            toolbarButtonHeightClass
          )}
          id='kt_drawer_chat_toggle'
        >
          <KTSVG
            path='/media/icons/duotune/communication/com012.svg'
            className={toolbarButtonIconSizeClass}
          />

          <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink'></span>
        </div>
      </div>
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        {/* begin::Menu- wrapper */}

        <div
          className={clsx(
            'btn btn-icon btn-active-light-primary btn-custom',
            toolbarButtonHeightClass
          )}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <KTSVG
            path='/media/icons/duotune/general/gen022.svg'
            className={toolbarButtonIconSizeClass}
          />
        </div>
        <HeaderNotificationsMenu />
        {/* end::Menu wrapper */}

        {/* <div className={clsx('app-navbar-item', itemClass)}>
          <ThemeModeSwitcher toggleBtnClass={clsx('btn-active-light-primary btn-custom')} />
        </div> */}
        {/* end::Menu wrapper */}
      </div>

      {/* begin::User */}
      <div
        className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
        id='kt_header_user_menu_toggle'
      >
        {/* begin::Toggle */}
        <div
          className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <img src={toAbsoluteUrl(profile?.avatar || blankImg)} alt='metronic' />
        </div>
        {profile?.usertype === 'admin' ? <AdminHeaderUserMenu /> : <HeaderUserMenu />}

        {/* end::Toggle */}
      </div>
      {/* end::User */}

      {/* begin::Aside Toggler */}
      {config.header.left === 'menu' && (
        <div className='d-flex align-items-center d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className='svg-icon-1' />
          </div>
        </div>
      )}
    </div>

    // <div className='d-flex align-items-stretch flex-shrink-0'>
    //   Search
    //   <div className={clsx('d-flex align-items-stretch', toolbarButtonMarginClass)}>
    //     <Search />
    //   </div>

    //   {/* Activities */}
    //   <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
    //     {/* begin::Drawer toggle */}
    //     <div
    //       className={clsx('btn btn-icon btn-active-light-primary btn-custom', toolbarButtonHeightClass)}
    //       id='kt_activities_toggle'
    //     >
    //       <KTSVG
    //         path='/media/icons/duotune/general/gen032.svg'
    //         className={toolbarButtonIconSizeClass}
    //       />
    //     </div>
    //     {/* end::Drawer toggle */}
    //   </div>

    //   {/* NOTIFICATIONS */}
    //   <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
    //     {/* begin::Menu- wrapper */}
    //     <div
    //       className={clsx(
    //         'btn btn-icon btn-active-light-primary btn-custom',
    //         toolbarButtonHeightClass
    //       )}
    //       data-kt-menu-trigger='click'
    //       data-kt-menu-attach='parent'
    //       data-kt-menu-placement='bottom-end'
    //       data-kt-menu-flip='bottom'
    //     >
    //       <KTSVG
    //         path='/media/icons/duotune/general/gen022.svg'
    //         className={toolbarButtonIconSizeClass}
    //       />
    //     </div>
    //     <HeaderNotificationsMenu />
    //     {/* end::Menu wrapper */}
    //   </div>

    //   {/* Quick links */}
    //   <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
    //     {/* begin::Menu wrapper */}
    //     <div
    //       className={clsx('btn btn-icon btn-active-light-primary btn-custom', toolbarButtonHeightClass)}
    //       data-kt-menu-trigger='click'
    //       data-kt-menu-attach='parent'
    //       data-kt-menu-placement='bottom-end'
    //       data-kt-menu-flip='bottom'
    //     >
    //       <KTSVG
    //         path='/media/icons/duotune/general/gen025.svg'
    //         className={toolbarButtonIconSizeClass}
    //       />
    //     </div>
    //     <QuickLinks />
    //     {/* end::Menu wrapper */}
    //   </div>

    // </div>
  )
}

export {Topbar}
