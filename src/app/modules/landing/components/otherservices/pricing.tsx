import React from 'react'
import SubscriptionPlanColumn from '../../../auth/registration/components/SubscriptionComponet/SubscriptionPlanColumn'
import {SubscriptionPlanTable} from './SubscriptionPlanTable'

export const Pricing = () => {
  return (
    <div className='mt-sm-n20'>
      <div className='landing-curve landing-dark-color'>
        <svg viewBox='15 -1 1470 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z'
            fill='currentColor'
          ></path>
        </svg>
      </div>

      <div className='py-20 landing-dark-bg'>
        <div className='container'>
          <div className='d-flex flex-column container pt-lg-20'>
            <div className='mb-13 text-center'>
              <h1
                className='fs-2hx fw-bold text-white mb-5'
                id='pricing'
                data-kt-scroll-offset='{default: 100, lg: 150}'
              >
                Our Subscription Plan
              </h1>
              <div className='text-gray-600 fw-semibold fs-5'>
                Save thousands to millions of bucks by using single tool for different
                <br />
                amazing and outstanding cool and great useful admin
              </div>
            </div>
            <div className='bg-light text-center' id='kt_pricing'>
              <SubscriptionPlanTable />
            </div>
            <div className='d-flex justify-content-center min-w-200px mt-5'>
              <a href='/auth' className='btn btn-light-primary fw-bold mx-auto'>
                Join Now
              </a>
            </div>
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
