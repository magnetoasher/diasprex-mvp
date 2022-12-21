import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'

export const HowOppsWorks = () => {
  return (
    <div className='py-10 py-lg-20'>
      <div className='container'>
        <div className='mb-12'>
          <div className='mb-17'>
            <h3 className='fs-2hx text-center text-dark mb-5' id='how_opps_works'>
              How Our Opportunity Engagement Works
            </h3>
          </div>
          <div className='w-100 gy-10 mb-md-20'>
            <div className='fs-2 text-muted fw-bold mb-10 '>
              How it works for Sponsors
              <br />
            </div>

            <div className='row  text-center'>
              <div className='col-md-3 px-5'>
                <div className='text-center mb-10 mb-md-0'>
                  <img
                    src={toAbsoluteUrl('/media/svg/diasprex_icons/icon-4.svg')}
                    className='mh-125px mb-9'
                    alt=''
                  />

                  <div className='d-flex flex-center mb-5'>
                    <span className='badge badge-circle badge-light-primary fw-bold p-5 me-3 fs-3'>
                      1
                    </span>

                    <div className='fs-5 fs-lg-3 fw-bold text-dark'>Sign Up</div>
                  </div>

                  <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                    Register as a new Sponsor or sign up into your Sponsor's account
                  </div>
                </div>
              </div>

              <div className='col-md-1 d-flex align-items-center px-5'>
                <div className='text-center mb-10 mb-md-0'>
                  <KTSVG
                    path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                    className={`svg-icon-1 svg-icon svg-icon-4tx svg-icon-primary rotate-180`}
                  />
                </div>
              </div>

              <div className='col-md-3 px-5'>
                <div className='text-center mb-10 mb-md-0'>
                  <img
                    src={toAbsoluteUrl('/media/svg/diasprex_icons/icon-20-blue.svg')}
                    className='mh-125px mb-9 rotate-90'
                    alt=''
                  />

                  <div className='d-flex flex-center mb-5'>
                    <span className='badge badge-circle badge-light-primary fw-bold p-5 me-3 fs-3'>
                      2
                    </span>

                    <div className='fs-5 fs-lg-3 fw-bold text-dark'>Account Verification</div>
                  </div>

                  <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                    If new user, we verify your information and your organization details Verified
                    users skip this step
                  </div>
                </div>
              </div>

              <div className='col-md-1 d-flex align-items-center px-5'>
                <div className='text-center mb-10 mb-md-0'>
                  <KTSVG
                    path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                    className={`svg-icon-1 svg-icon svg-icon-4tx svg-icon-primary rotate-180`}
                  />
                </div>
              </div>

              <div className='col-md-3 px-5'>
                <div className='text-center mb-10 mb-md-0'>
                  <img
                    src={toAbsoluteUrl('/media/svg/diasprex_icons/icon-3.svg')}
                    className='mh-125px mb-9'
                    alt=''
                  />

                  <div className='d-flex flex-center mb-5'>
                    <span className='badge badge-circle badge-light-primary fw-bold p-5 me-3 fs-3'>
                      3
                    </span>

                    <div className='fs-5 fs-lg-3 fw-bold text-dark'>Post Opportunities</div>
                  </div>

                  <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                    Verified Sponsors can submit opportunities. All opportunites go through our
                    review process before publishing to our users
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-100 gy-10 mb-md-20'>
            <div className='fs-2 text-muted fw-bold mb-10 '>
              How it works for Enablers
              <br />
            </div>

            <div className='row  text-center'>
              <div className='col-md-3 px-5'>
                <div className='text-center mb-10 mb-md-0'>
                  <img
                    src={toAbsoluteUrl('/media/svg/diasprex_icons/icon-4-dark.svg')}
                    className='mh-125px mb-9'
                    alt=''
                  />

                  <div className='d-flex flex-center mb-5'>
                    <span className='badge badge-circle badge-light fw-bold p-5 me-3 fs-3'>1</span>

                    <div className='fs-5 fs-lg-3 fw-bold text-dark'>Sign Up</div>
                  </div>

                  <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                    Register as a new Enabler or sign up into your Enabler's account
                  </div>
                </div>
              </div>

              <div className='col-md-1 d-flex align-items-center px-5'>
                <div className='text-center mb-10 mb-md-0'>
                  <KTSVG
                    path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                    className={`svg-icon-1 svg-icon svg-icon-4tx`}
                  />
                </div>
              </div>

              <div className='col-md-3 px-5'>
                <div className='text-center mb-10 mb-md-0'>
                  <img
                    src={toAbsoluteUrl('/media/svg/diasprex_icons/icon-11.svg')}
                    className='mh-125px mb-9 rotate-90'
                    alt=''
                  />

                  <div className='d-flex flex-center mb-5'>
                    <span className='badge badge-circle badge-light fw-bold p-5 me-3 fs-3'>2</span>

                    <div className='fs-5 fs-lg-3 fw-bold text-dark'>Review Opportunities</div>
                  </div>

                  <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                    Review open opportunities. Contact Sponsors and/or Diasprex for questions.
                  </div>
                </div>
              </div>

              <div className='col-md-1 d-flex align-items-center px-5'>
                <div className='text-center mb-10 mb-md-0'>
                  <KTSVG
                    path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                    className={`svg-icon-1 svg-icon svg-icon-4tx`}
                  />
                </div>
              </div>

              <div className='col-md-3 px-5'>
                <div className='text-center mb-10 mb-md-0'>
                  <img
                    src={toAbsoluteUrl('/media/svg/diasprex_icons/icon-24.svg')}
                    className='mh-125px mb-9'
                    alt=''
                  />

                  <div className='d-flex flex-center mb-5'>
                    <span className='badge badge-circle badge-light fw-bold p-5 me-3 fs-3'>3</span>

                    <div className='fs-5 fs-lg-3 fw-bold text-dark'>Submit Show of Interest</div>
                  </div>

                  <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                    All registered Enablers can view opportunities but only subscribed Enablers can
                    submit show of interest to activie opportunites.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='tns tns-default'></div>
          <div className='text-center mb-18 mt-10 ms-1'>
            <Link to='/faqs' className='btn btn-primary rounded-pill fs-2'>
              See FAQs to Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
