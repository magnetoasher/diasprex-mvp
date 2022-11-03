import clsx from 'clsx'
import React, {FC} from 'react'
import {useOktaAuth} from '@okta/okta-react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, QuickLinks, Search} from '../../../partials'
import {useLayout} from '../../core'
import {Topbar} from './Topbar'

export const PublicNavBar = () => {
  const {authState} = useOktaAuth()
  console.log(authState)
  return (
    <div className='mb-0' id='home'>
      <div
        className='bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg'
        style={{
          backgroundImage: `url(${toAbsoluteUrl('/media/svg/illustrations/landing.svg')})`,
        }}
      >
        <div
          className='landing-header'
          data-kt-sticky='true'
          data-kt-sticky-name='landing-header'
          data-kt-sticky-offset="{default: '200px', lg: '300px'}"
        >
          <div className='container'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center flex-equal'>
                <button
                  className='btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none'
                  id='kt_landing_menu_toggle'
                >
                  <span className='svg-icon svg-icon-2hx'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z'
                        fill='currentColor'
                      />
                      <path
                        opacity='0.3'
                        d='M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </button>

                <Link to='/'>
                  <img
                    alt='Logo'
                    src={toAbsoluteUrl('/media/logos/diasprexlogo-light.svg')}
                    className='logo-default h-25px h-lg-50px'
                  />
                  <img
                    alt='Logo'
                    src={toAbsoluteUrl('/media/logos/diasprex-logo.png')}
                    className='logo-sticky h-20px h-lg-45px'
                  />
                </Link>
              </div>

              <div className='d-lg-block' id='kt_header_nav_wrapper'>
                <div
                  className='d-lg-block p-5 p-lg-0'
                  data-kt-drawer='true'
                  data-kt-drawer-name='landing-menu'
                  data-kt-drawer-activate='{default: true, lg: false}'
                  data-kt-drawer-overlay='true'
                  data-kt-drawer-width='200px'
                  data-kt-drawer-direction='start'
                  data-kt-drawer-toggle='#kt_landing_menu_toggle'
                  data-kt-swapper='true'
                  data-kt-swapper-mode='prepend'
                  data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}"
                >
                  <div
                    className='menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-500 menu-state-title-primary nav nav-flush fs-5 fw-semibold'
                    id='kt_landing_menu'
                  >
                    <div className='menu-item'>
                      <Link
                        className='menu-link nav-link active py-3 px-4 px-xxl-6'
                        to='/'
                        data-kt-scroll-toggle='true'
                        // data-kt-scrol-top='true'
                        data-kt-drawer-dismiss='true'
                      >
                        Home
                      </Link>
                    </div>
                    <div className='menu-item'>
                      <a
                        className='menu-link nav-link py-3 px-4 px-xxl-6'
                        href='#'
                        data-kt-scroll-toggle='true'
                        data-kt-drawer-dismiss='true'
                      >
                        What We Do
                      </a>
                    </div>

                    <div className='menu-item'>
                      <a
                        className='menu-link nav-link py-3 px-4 px-xxl-6'
                        href='#'
                        data-kt-scroll-toggle='true'
                        data-kt-drawer-dismiss='true'
                      >
                        Opportunities
                      </a>
                    </div>

                    <div className='menu-item'>
                      <Link
                        className='menu-link nav-link py-3 px-4 px-xxl-6'
                        to='/remittance_resources'
                        data-kt-scroll-toggle='true'
                        data-kt-drawer-dismiss='true'
                      >
                        Remittance
                      </Link>
                    </div>

                    <div className='menu-item'>
                      <Link
                        className='menu-link nav-link py-3 px-4 px-xxl-6'
                        to='/diasporas'
                        data-kt-scroll-toggle='true'
                        data-kt-drawer-dismiss='true'
                      >
                        Diasporas
                      </Link>
                    </div>

                    {/* <div className='menu-item'>
                  <a
                    className='menu-link nav-link py-3 px-4 px-xxl-6'
                    href='#'
                    data-kt-scroll-toggle='true'
                    data-kt-drawer-dismiss='true'
                  >
                    Resources
                  </a>
                </div> */}
                    {/* <div className='menu-item'>
                  <a
                    className='menu-link nav-link py-3 px-4 px-xxl-6'
                    href='#'
                    data-kt-scroll-toggle='true'
                    data-kt-drawer-dismiss='true'
                  >
                    About Us
                  </a>
                </div> */}
                    {/* <div className='menu-item'>
                  <a
                    className='menu-link nav-link py-3 px-4 px-xxl-6'
                    href='#'
                    data-kt-scroll-toggle='true'
                    data-kt-drawer-dismiss='true'
                  >
                    Contact Us
                  </a>
                </div> */}
                  </div>
                </div>
              </div>
              {!(authState && authState.isAuthenticated) ? (
                <div className='flex-equal text-end ms-1'>
                  <Link to='/auth' className='btn btn-primary text-dark me-3'>
                    Sign In
                  </Link>
                  {/* </div>
              <div className='flex-equal text-end ms-1'> */}
                  <Link to='/auth/registration' className='btn btn-light-primary text-dark me-3'>
                    Join
                  </Link>
                </div>
              ) : (
                <Topbar />
              )}
            </div>
          </div>
        </div>

        {/* End Curve Bottom*/}
      </div>
      {/* Begin Curve Bottome*/}
      <div className='landing-curve landing-dark-color mb-10 mb-lg-20'>
        <svg viewBox='15 12 1470 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z'
            fill='currentColor'
          ></path>
        </svg>
      </div>
    </div>
  )
}
