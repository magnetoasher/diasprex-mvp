import React from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PublicNavBar} from '../../../_metronic/layout/components/header/PublicNavBar'
import {Carousel2} from './components/Carousel2'
import {WhoWeAre} from './components/whoweare'
import {FeaturedDiasporas} from './components/featureddiasporas'
import {HowItWorks} from './components/howitworks'
import {ServicesSection} from './components/servicessection'
import {Pricing} from './components/pricing'
import {Testimonies} from './components/testimonies'
import {TrustedBy} from './components/trustedby'
import {Connect} from './components/connect'
import {FeaturedOpportunities} from './components/featuredopps'
import {ContactUs} from '../resources/components/contactus'

export const Landing = () => {
  return (
    <body
      id='kt_body'
      data-bs-spy='scroll'
      data-bs-target='#kt_landing_menu'
      className='bg-white position-relative app-blank'
    >
      <div className='d-flex flex-column flex-root' id='kt_app_root'>
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
            {/* <HowItWorks /> */}
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
        <WhoWeAre />
        {/* End second curve section */}

        {/* Begin how it works */}
        <HowItWorks />
        {/* End how it works */}

        {/* Begin featured diasporas */}

        <FeaturedOpportunities />

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
        {/* Begind Footer Section */}
        <Connect />
        {/* End Footer Section */}
      </div>
    </body>
  )
}
