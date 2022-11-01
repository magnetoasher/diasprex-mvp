/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState} from 'react'
import {Tab} from 'react-bootstrap'
import {KTSVG} from '../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'

const plans = [
  {
    title: 'Startup',
    subTitle: 'Best for startups',
    description: 'Optimal for 10+ team size and new startup',
    priceMonth: '39',
    priceAnnual: '399',
    pricing: true,
    default: true,
    custom: false,
    features: [
      {
        title: 'Up to 10 Active Users',
        supported: true,
      },
      {
        title: 'Up to 30 Project Integrations',
        supported: true,
      },
      {
        title: 'Analytics Module',
        supported: true,
      },
      {
        title: 'Finance Module',
        supported: false,
      },
      {
        title: 'Accounting Module',
        supported: false,
      },
      {
        title: 'Network Platform',
        supported: false,
      },
      {
        title: 'Unlimited Cloud Space',
        supported: false,
      },
    ],
  },

  {
    title: 'Advanced',
    subTitle: 'Best for 100+ team size',
    description: 'Optimal for 100+ team size and grown company',
    priceMonth: '339',
    priceAnnual: '3399',
    pricing: true,
    default: false,
    custom: false,
    features: [
      {
        title: 'Up to 10 Active Users',
        supported: true,
      },
      {
        title: 'Up to 30 Project Integrations',
        supported: true,
      },
      {
        title: 'Analytics Module',
        supported: true,
      },
      {
        title: 'Finance Module',
        supported: true,
      },
      {
        title: 'Accounting Module',
        supported: true,
      },
      {
        title: 'Network Platform',
        supported: false,
      },
      {
        title: 'Unlimited Cloud Space',
        supported: false,
      },
    ],
  },

  {
    title: 'Enterprise',
    subTitle: 'Best value for 1000+ team',
    description: 'Optimal for 1000+ team and enterpise',
    priceMonth: '999',
    priceAnnual: '9999',
    label: 'Most popular',
    pricing: true,
    default: false,
    custom: false,
    features: [
      {
        title: 'Up to 10 Active Users',
        supported: true,
      },
      {
        title: 'Up to 30 Project Integrations',
        supported: true,
      },
      {
        title: 'Analytics Module',
        supported: true,
      },
      {
        title: 'Finance Module',
        supported: true,
      },
      {
        title: 'Accounting Module',
        supported: true,
      },
      {
        title: 'Network Platform',
        supported: true,
      },
      {
        title: 'Unlimited Cloud Space',
        supported: true,
      },
    ],
  },

  {
    title: 'Custom',
    subTitle: 'Requet a custom license',
    default: false,
    custom: true,
  },
]

const UpgradePlan: FC = () => {
  const [currentState, setCurrentState] = useState<'month' | 'annual'>('month')
  const [selected, setSelected] = useState('Startup')
  console.log(currentState)

  return (
    <div className='card-rounded'>
      <div className='card shadow-sm mb-10 mb-lg-0 mt-5 d-flex justify-content-center align-items-center flex-column w-100'>
        <div className='card-header d-flex flex-column mt-13 mb-13 text-center'>
          <h1 className='mb-3'>Choose a Subscription Plan</h1>

          <div className='text-muted fw-bold fs-5'>
            If you need more info, please check{' '}
            <a href='#' className='link-primary fw-bolder'>
              Membership Guidelines
            </a>
            .
          </div>
        </div>
        <div className='card-body pt-0 pb-15 px-5 px-xl-20'>
          <div className='d-flex flex-column'>
            <div className='nav-group nav-group-outline mx-auto'>
              <Link
                to='#'
                className={
                  'btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 ' +
                  (currentState === 'month' && 'active')
                }
                onClick={() => {
                  setCurrentState('month')
                }}
                // data-kt-plan='month'
              >
                Monthly
              </Link>
              <Link
                to='#'
                className={
                  'btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 ' +
                  (currentState === 'annual' && 'active')
                }
                onClick={() => {
                  setCurrentState('annual')
                }}
                // data-kt-plan='annual'
              >
                Annual
              </Link>
            </div>

            <div className='row mt-10'>
              <div className='col-lg-6 mb-10 mb-lg-0'>
                <div className='nav flex-column'>
                  {plans.map((plan, index) => {
                    return (
                      <div
                        onClick={() => {
                          setSelected(plan.title)
                        }}
                        className={
                          `nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6 ` +
                          (index !== plans.length - 1 && 'mb-6 ') +
                          (plan.default && 'active ') +
                          (!plan.custom && 'btn-active btn-active-primary ')
                        }
                        data-bs-toggle='tab'
                        data-bs-target={`#kt_upgrade_plan_${index}`}
                        key={index}
                      >
                        <div className='d-flex align-items-center me-2'>
                          <div className='form-check form-check-custom form-check-solid form-check-success me-6'>
                            <input
                              className='form-check-input'
                              type='radio'
                              name='plan'
                              value={plan.title}
                              checked={selected === plan.title}
                              onChange={(e) => setSelected(e.target.value)}
                            />
                          </div>

                          <div className='flex-grow-1'>
                            <h2 className='d-flex align-items-center fs-2 fw-bolder flex-wrap'>
                              {plan.title}

                              {plan.label && (
                                <span className='badge badge-light-success ms-2 fs-7'>
                                  {plan.label}
                                </span>
                              )}
                            </h2>
                            <div className='fw-bold opacity-50'>{plan.subTitle}</div>
                          </div>
                        </div>

                        <div className='ms-5'>
                          {plan.custom && (
                            <button className='btn btn-sm btn-primary'>Contact Us</button>
                          )}
                          {!plan.custom && (
                            <>
                              <span className='mb-2'>$</span>

                              <span className='fs-3x fw-bolder'>
                                {currentState === 'month' ? plan.priceMonth : plan.priceAnnual}
                              </span>

                              <span className='fs-7 opacity-50'>
                                /<span data-kt-element='period'>Mon</span>
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='tab-content rounded h-100 bg-light p-10'>
                  {plans.map((plan, index) => {
                    return (
                      <div key={`custom${index}`}>
                        {!plan.custom && (
                          <>
                            <div
                              className={`tab-pane fade` + (plan.default && 'show active')}
                              id={`kt_upgrade_plan_${index}`}
                              key={index}
                            >
                              <div className='pb-5'>
                                <h2 className='fw-bolder text-dark'>What’s in Startup Plan?</h2>

                                <div className='text-gray-400 fw-bold'>{plan.description}</div>
                              </div>

                              <div className='pt-1'>
                                {plan.features!.map((feature, i) => {
                                  return (
                                    <div
                                      className={
                                        `d-flex align-items-center` +
                                        (i !== plan.features!.length - 1 && ' mb-7')
                                      }
                                      key={`${i}-${feature.title}`}
                                    >
                                      {feature.supported && (
                                        <>
                                          <span className='fw-bold fs-5 text-gray-700 flex-grow-1'>
                                            {feature.title}
                                          </span>

                                          <KTSVG
                                            path='/media/icons/duotune/general/gen043.svg'
                                            className='svg-icon-1 svg-icon-success'
                                          />
                                        </>
                                      )}
                                      {!feature.supported && (
                                        <>
                                          <span className='fw-bold fs-5 text-gray-400 flex-grow-1'>
                                            {feature.title}
                                          </span>
                                          <KTSVG
                                            path='/media/icons/duotune/general/gen040.svg'
                                            className='svg-icon-1'
                                          />
                                        </>
                                      )}
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* <div className='d-flex flex-center flex-row-fluid pt-12'>
            <button type='reset' className='btn btn-light me-3' data-bs-dismiss='modal'>
              Cancel
            </button>

            <button type='submit' className='btn btn-primary'>
              Upgrade Plan
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export {UpgradePlan}
