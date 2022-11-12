import {toAbsoluteUrl} from '../../../_metronic/helpers'

import {FeaturedDiasporas} from './components/diasporas/featureddiasporas'
import {OtherServicesSection} from './components/otherservices/service-section'
import {Pricing} from './components/otherservices/pricing'

import {TrustedBy} from './components/trustedby'
import {Connect} from './components/connect'
import {RemitttanceSection} from './components/remittance/remitttancesection'
import {OppsSection} from './components/opportunities/oppssection'
import {DiasporasSection} from './components/diasporas/diasporassection'
import {Link} from 'react-router-dom'
import {PublicNavBar} from '../../../_metronic/layout/components/header/publicnavbar/PublicNavBar'

export const Landing = () => {
  return (
    <body
      id='kt_body'
      data-bs-spy='scroll'
      data-bs-target='/#kt_landing_sections'
      data-bs-offset='50'
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
                <span
                  style={{
                    backgroundImage: 'linear-gradient(to right, #010b1a 0%, #4f0404 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Diaspora Resource Exchange
                </span>
              </h3>
              <div className='fs-2 text-gray-600 fw-bold'>
                A dynamic marketplace where people, business, and African development meet.
              </div>
            </div>
            <div className='d-flex mw-100 '>
              <div className='mb-lg-n15 position-relative z-index-2'>
                <div className='container'>
                  <div className='card'>
                    <div className='card-body p-lg-20'></div>
                    <img
                      src={toAbsoluteUrl('/media/stock/diasprex/img-9.jpg')}
                      className='mw-100'
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Begin Carouse */}
          </div>
          <div id='kt_landing_sections'>
            {/* Begin opps section */}
            <div
              id='kt_opportunities_section'
              data-kt-scroll-offset='{default: 100, lg: 150}'
            ></div>
            <OppsSection />

            {/* End second opps section */}
            <div
              className='mb-20'
              id='kt_remittance_section'
              data-kt-scroll-offset='{default: 100, lg: 150}'
            ></div>
            <RemitttanceSection />

            {/* Begin diasporas section */}
            <div
              className='mb-20'
              id='kt_diasporas_section'
              data-kt-scroll-offset='{default: 100, lg: 150}'
            ></div>
            <DiasporasSection />

            {/* End diasporas section*/}

            {/* Begin our services section */}
            <div id='kt_services_section' data-kt-scroll-offset='{default: 100, lg: 150}'></div>
            <OtherServicesSection />
            {/* End our services section */}
          </div>

          {/* Begind pricing section*/}
          {/* <Pricing /> */}
          {/* End pricing section */}

          {/* Begind Trusted By Section */}
          <TrustedBy />
          {/* End Trusted By Section */}
          {/* Begind Footer Section */}
          <Connect />
          {/* End Footer Section */}
        </div>
      </div>
    </body>
  )
}
