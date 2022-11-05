import React from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'

export const HowRemitWorks = () => {
  return (
    <div className='py-10 py-lg-20'>
      <div className='container'>
        <div className='text-center mb-12'>
          <div className='text-center mb-17'>
            <h3
              className='fs-2hx text-dark mb-5'
              id='how-it-works'
              data-kt-scroll-offset='{default: 100, lg: 150}'
            >
              How Our Remittance Mobilization Works
            </h3>
            <div className='fs-5 text-muted fw-bold'>
              We save our diasporas thousands of dollars in remittance transfer fees
              <br />
              and create opportunity to create wealth through remittances
            </div>
          </div>

          <div className='row w-100 gy-10 mb-md-20'>
            <div className='col-md-4 px-5'>
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

                  <div className='fs-5 fs-lg-3 fw-bold text-dark'>Jane Miller</div>
                </div>

                <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                  Save thousands to millions of bucks
                  <br />
                  by using single tool for different
                  <br />
                  amazing and great
                </div>
              </div>
            </div>

            <div className='col-md-4 px-5'>
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

                  <div className='fs-5 fs-lg-3 fw-bold text-dark'>Setup Your App</div>
                </div>

                <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                  Save thousands to millions of bucks
                  <br />
                  by using single tool for different
                  <br />
                  amazing and great
                </div>
              </div>
            </div>

            <div className='col-md-4 px-5'>
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

                  <div className='fs-5 fs-lg-3 fw-bold text-dark'>Enjoy Nautica App</div>
                </div>

                <div className='fw-semibold fs-6 fs-lg-4 text-muted'>
                  Save thousands to millions of bucks
                  <br />
                  by using single tool for different
                  <br />
                  amazing and great
                </div>
              </div>
            </div>
          </div>
          <div className='tns tns-default'></div>
          <div className='text-center mb-18 mt-10 ms-1'>
            <Link to='/remittance_resources' className='btn btn-light-primary fs-2'>
              Learn more
            </Link>
            <span className='fs-2 fw-bold'> or </span>
            <Link to='/sendmoney' className='btn btn-light-primary fs-2'>
              Send Money
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
