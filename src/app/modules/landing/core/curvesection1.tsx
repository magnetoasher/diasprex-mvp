import React from 'react'
import {OctagonModel} from '../../../../_metronic/partials/content/utilities/octagonmodel'

export const CurveTop2 = () => {
  return (
    <div className='mt-sm-n10'>
      <div className='landing-curve landing-dark-color'>
        <svg viewBox='15 -1 1470 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z'
            fill='currentColor'
          ></path>
        </svg>
      </div>

      <div className='pb-15 pt-18 landing-dark-bg'>
        <div className='container'>
          <div
            className='text-center mt-15 mb-18'
            id='achievements'
            data-kt-scroll-offset='{default: 100, lg: 150}'
          >
            <h3 className='fs-2hx text-white fw-bold mb-5'>
              We Connect African Opportunities with the Diaspora Resources{' '}
            </h3>

            <div className='fs-5 text-white text-muted fw-bold'>
              Promoting African economic development through diasporas' economic and intellectual
              collaboration with African businesses and organizations.
              <br />
              Connecting capital market resources from the diaspora to the promoters of business and
              developmental projects in Africa
            </div>
          </div>

          <div className='d-flex flex-center'>
            <div className='d-flex flex-wrap flex-center justify-content-lg-between mb-15 mx-auto w-xl-900px'>
              <OctagonModel
                imgscr='/media/icons/duotune/communication/com006.svg'
                imgcolor='info'
                title1='1.5 Million'
                label='Diapora Members'
                width='250px'
                height='250px'
                bgcolor='light'
              />

              <OctagonModel
                imgscr='/media/icons/duotune/finance/fin008.svg'
                imgcolor='primary'
                title1='75'
                label='Total Deals'
                width='250px'
                height='250px'
                bgcolor='light'
              />

              <OctagonModel
                imgscr='/media/icons/duotune/finance/fin006.svg'
                imgcolor='success'
                title1='$2.3B'
                label='Deal Value'
                width='250px'
                height='250px'
                bgcolor='light'
              />
            </div>
          </div>

          <div className='fs-2 fw-semibold text-muted text-center mb-3'>
            <span className='fs-1 lh-1 text-gray-700'>“</span>When you care about your topic, you’ll
            write about it in a
            <br />
            <span className='text-gray-700 me-1'>more powerful</span>, emotionally expressive way
            <span className='fs-1 lh-1 text-gray-700'>“</span>
          </div>

          <div className='fs-2 fw-semibold text-muted text-center'>
            <a href='../../demo1/dist/account/security.html' className='link-primary fs-4 fw-bold'>
              Marcus Levy,
            </a>
            <span className='fs-4 fw-bold text-gray-600'>KeenThemes CEO</span>
          </div>
        </div>
      </div>

      <div className='landing-curve landing-dark-color'>
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
