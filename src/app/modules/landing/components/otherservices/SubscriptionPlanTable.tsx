import React, {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'

const enabler = {
  month: {basic: '0', standard: '4.99', super: '9.99', Enterprice: 'Contact Us'},
  annual: {basic: '0', standard: '49.99', super: '99.99', Enterprice: 'Contact Us'},
}

const PricingFeatures = [
  {
    feature: 'View Opportunities',
    basic: true,
    standard: true,
    super: true,
    enterprise: true,
  },
  {
    feature: 'Remittance retainer program',
    basic: true,
    standard: true,
    super: true,
    enterprise: true,
  },
  {
    feature: 'Remittance fee waiver',
    basic: false,
    standard: true,
    super: true,
    enterprise: true,
  },
  {
    feature: 'View oportunity details and submit proposal',
    basic: false,
    standard: true,
    super: true,
    enterprise: true,
  },
  {
    feature: 'Discounted third party products and services',
    basic: false,
    standard: true,
    super: true,
    enterprise: true,
  },
  {
    feature: "Diasprex's financing services",
    basic: false,
    standard: true,
    super: true,
    enterprise: true,
  },
  {
    feature: 'Unlimited business and financing support services',
    basic: false,
    standard: false,
    super: true,
    enterprise: true,
  },
  {
    feature: 'Unlimited network with Diasprex Sponsors and Enablers',
    basic: false,
    standard: false,
    super: true,
    enterprise: true,
  },
  {
    feature: 'Participation in Diasprex-seeded Opportunities',
    basic: false,
    standard: false,
    super: true,
    enterprise: true,
  },
  {
    feature: 'Access to customized opportunity services',
    basic: false,
    standard: false,
    super: false,
    enterprise: true,
  },
  {
    feature: 'Services or product advertisement',
    basic: false,
    standard: false,
    super: false,
    enterprise: true,
  },
  {
    feature: 'Loyalty program reward provider',
    basic: false,
    standard: false,
    super: false,
    enterprise: true,
  },
]

export const SubscriptionPlanTable = () => {
  const [currentState, setCurrentState] = useState<'month' | 'annual'>('month')
  const [packagePricing, setPackagePricing] = useState(enabler.month)
  const Supported = (
    <KTSVG
      path={toAbsoluteUrl('/media/icons/duotune/arrows/arr085.svg')}
      className={`svg-icon-1 svg-icon svg-icon-1tx svg-icon-success`}
    />
  )

  const NotSupported = (
    <KTSVG
      path={toAbsoluteUrl('/media/icons/duotune/arrows/arr061.svg')}
      className={`svg-icon-1 svg-icon svg-icon-1tx svg-icon-gray-500`}
    />
  )

  return (
    <div className='card-body px-5 px-lg-10 pt-10 pb-10'>
      <div className='table-responsive'>
        <table className='table align-middle table-striped gy-7'>
          <thead className='align-middle'>
            <tr id='kt_pricing'>
              <th>
                <div
                  className='nav-group d-flex flex-row rounded-pill px-3 py-2 ms-9 mb-15'
                  data-kt-buttons='true'
                >
                  <button
                    type='button'
                    className={
                      'btn  fw-bold btn-color-gray-600 py-3 px-5 m-1 btn-active btn-active-dark rounded-pill' +
                      (currentState === 'month' && 'nav-link active')
                    }
                    onClick={() => {
                      setCurrentState('month')
                      setPackagePricing(enabler.month)
                    }}
                    data-kt-plan='month'
                  >
                    Monthly
                  </button>

                  <button
                    type='button'
                    className={
                      'btn  fw-bold btn-color-gray-600 py-3 px-5 m-1 btn-active btn-active-dark rounded-pill' +
                      (currentState === 'annual' && 'nav-link active')
                    }
                    onClick={() => {
                      setCurrentState('annual')
                      setPackagePricing(enabler.annual)
                    }}
                    data-kt-plan='annual'
                  >
                    Annually
                  </button>
                </div>
              </th>
              <th className='text-center min-w-200px'>
                <div className='min-w-200px mb-15'>
                  <div className='text-primary fs-3 fw-bold mb-7'>Basic</div>
                  <div className='fs-5x fw-semibold d-flex justify-content-center align-items-start lh-sm'>
                    <span className='align-self-start fs-2 mt-3'>$</span>
                    {packagePricing.basic}
                  </div>
                  <div className='text-muted fw-bold mb-7'>Monthly</div>
                  {/* <a href='#' className='btn btn-light-primary fw-bold mx-auto'>
                    Start
                  </a> */}
                </div>
              </th>
              <th className='text-center min-w-200px'>
                <div className='min-w-200px mb-15'>
                  <div className='text-primary fs-3 fw-bold mb-7'>Standard</div>
                  <div className='fs-5x fw-semibold d-flex justify-content-center align-items-start lh-sm'>
                    <span className='align-self-start fs-2 mt-3'>$</span>
                    {packagePricing.standard}
                  </div>
                  <div className='text-muted fw-bold mb-7'>Monthly</div>
                  {/* <a href='#' className='btn btn-light-primary fw-bold mx-auto'>
                    Start
                  </a> */}
                </div>
              </th>

              <th className='text-center min-w-200px'>
                <div className='min-w-200px mb-15'>
                  <div className='text-primary fs-3 fw-bold mb-7'>Supper</div>
                  <div className='fs-5x fw-semibold d-flex justify-content-center align-items-start lh-sm'>
                    <span className='align-self-start fs-2 mt-3'>$</span>
                    {packagePricing.super}
                  </div>
                  <div className='text-muted fw-bold mb-7'>Monthly</div>
                  {/* <a href='#' className='btn btn-light-primary fw-bold mx-auto'>
                    Start
                  </a> */}
                </div>
              </th>

              <th className='text-center min-w-200px'>
                <div className='min-w-200px mb-15'>
                  <div className='text-primary fs-3 fw-bold mb-7'>Enterprise</div>
                  <div className='fs-2x btn btnactive btn-active-primary d-flex justify-content-center align-items-start'>
                    <span
                      className='fw-semibold'
                      data-kt-plan-price-month='199'
                      data-kt-plan-price-annual='999'
                    >
                      Contact Us
                    </span>
                  </div>
                  <div className='text-muted fw-bold mb-7'>Monthly</div>
                  {/* <a href='#' className='btn btn-light-primary fw-bold mx-auto'>
                    Select
                  </a> */}
                </div>
              </th>
            </tr>
          </thead>
          {PricingFeatures.map((plan) => (
            <tbody>
              <tr className='h-20px'>
                <th className='card-rounded-start'>
                  <div className='fw-bold d-flex align-items-center text-start fs-6'>
                    {plan.feature}
                  </div>
                </th>
                <td className='card-rounded-end'>{plan.basic ? Supported : NotSupported}</td>

                <td className='card-rounded-end'>{plan.standard ? Supported : NotSupported}</td>
                <td className='card-rounded-end'>{plan.super ? Supported : NotSupported}</td>
                <td className='card-rounded-end'>{plan.enterprise ? Supported : NotSupported}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}
