import {toAbsoluteUrl} from '../../../_metronic/helpers'

import {FeaturedDiasporas} from './components/diasporas/featureddiasporas'

import {ServicesSection} from './components/otherservices/otherservices'
import {Pricing} from './components/otherservices/pricing'
import {Testimonies} from './components/testimonies'
import {TrustedBy} from './components/trustedby'
import {Connect} from './components/connect'
import {RemitttanceSection} from './components/remittance/remitttancesection'
import {OppsSection} from './components/opportunities/oppssection'
import {DiasporasSection} from './components/diasporas/diasporassection'

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
        <div id='kt_opportunities_section' data-kt-scroll-offset='{default: 100, lg: 150}'></div>
        <OppsSection />
        {/* End second curve section */}
        <div id='kt_remittance_section' data-kt-scroll-offset='{default: 100, lg: 150}'></div>
        <RemitttanceSection />

        {/* Begin featured diasporas */}
        <div id='kt_diasporas_section' data-kt-scroll-offset='{default: 100, lg: 150}'></div>
        <DiasporasSection />
        {/* End featured diasporas */}
        {/* Begind testimonies */}
        <Testimonies />
        {/* End testimonies */}

        {/* Begin our services section */}
        <div id='kt_services_section' data-kt-scroll-offset='{default: 100, lg: 150}'></div>
        <ServicesSection />
        {/* End our services section */}

        {/* Begind pricing section*/}
        <Pricing />
        {/* End pricing section */}

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
