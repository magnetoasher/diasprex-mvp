import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'

import {BiModalConfirm} from '../../../../../_metronic/partials/modals/upgrade-plan/bimodalconfirm'

export const HowRemitWorks = () => {
  return (
    <div className='py-10 py-lg-20'>
      <div className='container'>
        <div className='text-center mb-12'>
          <div className='text-center mb-17'>
            <h3 className='fs-2hx text-dark mb-5' id='how_remittance_works'>
              How Our RemitFund Works
            </h3>
            <div className='fs-5 text-muted fw-bold'>
              We save our diasporas thousands of dollars in remittance transfer fees
              <br />
              and create opportunity to create wealth through remittances
            </div>
          </div>

          <div className='row w-100 gy-10 mb-md-20'>
            <div className='col-md-3 px-5'>
              <div className='text-center mb-10 mb-md-0'>
                <img
                  src={toAbsoluteUrl('/media/illustrations/sketchy-1/2.png')}
                  className='mh-125px mb-9'
                  alt=''
                />

                <div className='d-flex flex-center mb-5'>
                  <span className='badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3'>
                    1
                  </span>

                  <div className='fs-5 fs-lg-3 fw-bold text-dark'>Become a Member</div>
                </div>

                <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                  Register as a new Enabler or sign in to your Enabler's account
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
                  src={toAbsoluteUrl('/media/illustrations/sketchy-1/8.png')}
                  className='mh-125px mb-9'
                  alt=''
                />

                <div className='d-flex flex-center mb-5'>
                  <span className='badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3'>
                    2
                  </span>

                  <div className='fs-5 fs-lg-3 fw-bold text-dark'>Initiate Monety Transfer</div>
                </div>

                <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                  Initiate your money transer transmission from your account dashboard
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
                  src={toAbsoluteUrl('/media/illustrations/sketchy-1/12.png')}
                  className='mh-125px mb-9'
                  alt=''
                />

                <div className='d-flex flex-center mb-5'>
                  <span className='badge badge-circle badge-light-success fw-bold p-5 me-3 fs-3'>
                    3
                  </span>

                  <div className='fs-5 fs-lg-3 fw-bold text-dark'>Notify Your Recipient</div>
                </div>

                <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                  Notify your recipient of the transmission
                </div>
              </div>
            </div>
          </div>

          <div className='text-center mt-10 ms-1'>
            <Link to='/remittance_resources' className='btn btn-light-primary rounded-pill'>
              Learn more
            </Link>
            <span className='fs-2 fw-bold'> or </span>
            <Link className='btn btn-primary rounded-pill min-w- 100px' to='/auth' role='button'>
              Sign In to Send Money
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
