import React from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {PublicNavBar} from '../../../../_metronic/layout/components/header/PublicNavBar'
import {Carousel2} from './Carousel2'
import {CurveTop2} from '../core/curvesection1'
import {FeaturedDiasporas} from './featureddiasporas'
import {HowItWorks} from './howitworks'
import {ServicesSection} from './servicessection'
import {Pricing} from '../core/pricing'
import {Testimonies} from './testimonies'
import {TrustedBy} from './trustedby'

export const Landing = () => {
  return (
    <body
      id='kt_body'
      data-bs-spy='scroll'
      data-bs-target='#kt_landing_menu'
      className='bg-white position-relative app-blank'
    >
      <div className='d-flex flex-column flex-root' id='kt_app_root'>
        <div className='mb-0' id='home'>
          <div
            className='bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg'
            style={{
              backgroundImage: `url(${toAbsoluteUrl('/media/svg/illustrations/landing.svg')})`,
            }}
          >
            <PublicNavBar />
            {/* End of Background */}
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
          {/* End Curve Bottom*/}
        </div>
        {/* End Header Section*/}
        {/* Begin How It Works*/}
        <div className='mb-n10 mb-lg-n20 z-index-2'>
          <div className='container'>
            <div className='text-center mb-17'>
              <h3
                className='fs-2hx text-uppercase mb-5'
                id='kt_diasprex'
                data-kt-scroll-offset='{default: 100, lg: 150}'
              >
                <span style={{color: 'rgba(50, 75, 120, 0.8)'}}>Diaspora Resource Exchange</span>
              </h3>
              <div className='fs-2 text-gray-600 fw-bold'>
                A dynamic marketplace where people, business, and African development meet.
              </div>
            </div>
            <HowItWorks />
            {/* End How It Works*/}

            <div className='d-flex mw-100'>
              <img src={toAbsoluteUrl('/media/stock/diasprex/img-9.jpg')} className='mw-100' />
            </div>

            {/* Begin Carouse */}
            {/* <Carousel2
              img1url={toAbsoluteUrl('/media/stock/diasprex/img-8.jpg')}
              img2url={toAbsoluteUrl('/media/stock/diasprex/img-3.jpg')}
              img3url={toAbsoluteUrl('/media/stock/diasprex/img-9.jpg')}
            /> */}
            {/* End Carosuel */}
          </div>
        </div>
        {/* Begin second curve section */}
        <CurveTop2 />
        {/* End second curve section */}

        {/* Begin featured diasporas */}
        <FeaturedDiasporas />
        {/* End featured diasporas */}

        {/* Begin our services section */}
        <ServicesSection />
        {/* End our services section */}

        {/* Begind pricing section*/}
        <Pricing />
        {/* End pricing section */}
        {/* Begin featured diasporas */}
        <FeaturedDiasporas />
        {/* End featured diasporas */}
        {/* Begind testimonies */}
        <Testimonies />
        {/* End testimonies */}
        {/* Begind Trusted By Section */}
        <TrustedBy />
        {/* End Trusted By Section */}
      </div>
    </body>
  )
}
