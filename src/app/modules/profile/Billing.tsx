/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck comment

import React, {FC, useState, useEffect} from 'react'
import {Field, ErrorMessage} from 'formik'
import {KTSVG} from '../../../_metronic/helpers'
import 'react-best-tabs/dist/index.css'
import {Formik, Form, FormikValues} from 'formik'
import SweetAlert from 'react-bootstrap-sweetalert'
import {Step4} from '../auth/registration/components/steps/Step4'
import BillingCardComponent from './BillingCardComponent'

import {
  ICreateAccount,
  createAccountSchemas,
  inits,
} from '../auth/registration/components/CreateAccountWizardHelper'
import CheckingAccount from '../auth/registration/components/steps/CheckingAccount'

const Billing = () => {
  const [tabs, setTabs] = useState('debit-card')
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [userType, setUserType] = useState<string>(localStorage.getItem('userType'))
  const [userTypeChecking] = useState(localStorage.getItem('userType'))
  const [currentState, setCurrentState] = useState<'month' | 'annual'>('month')
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)

  const enablerTitles = [
    {
      title: 'Enabler',

      value1: 'enabler',
      default: true,
    },
  ]
  const sponsorTitle = [
    {
      title: 'Sponsor',
      value1: 'sponsor',
    },
  ]
  const types = [
    {
      title: 'Monthly',

      value1: 'month',
      default: true,
    },

    {
      title: 'Annually',

      value1: 'annual',
      default: false,
    },
  ]
  const [enabler] = useState([
    {
      title: 'Basic Enabler (BE)',
      subTitle: 'Best for 100+ team size',
      description: 'Ideal for individuals and startups',
      priceMonth: '0.00',
      priceAnnual: '0.00',
      default: true,
      custom: false,
      value1: 'enabler',
      valueType: 'basic_enabler',
      pricing: true,
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
      title: 'Standard Enabler (SE)',
      subTitle: 'Best for 100+ team size',
      description: 'Ideal for individuals and startups',
      priceMonth: '4.99',
      priceAnnual: '54.00',
      default: true,
      custom: false,
      value1: 'enabler',
      valueType: 'basic_enabler',
      pricing: true,
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
      title: 'Super Enabler (BE)',
      subTitle: 'Best for 100+ team size',
      description: 'Ideal for individuals, startups & small businesses',
      priceMonth: '9.99',
      priceAnnual: '114.00',
      default: false,
      custom: false,
      value1: 'enabler',
      valueType: 'super_enabler',
      pricing: true,
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
      title: 'Business Enabler (BE)',
      subTitle: 'Best for 100+ team size',
      description: 'Ideal for medium enterprises',
      priceMonth: 'Call customer service',
      priceAnnual: 'Call customer service',
      default: false,
      custom: false,
      value1: 'enabler',
      valueType: 'business_enabler',
      pricing: false,
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
  ])

  const [sponsor] = useState([
    {
      title: 'Basic (BS)',
      subTitle: 'Best value for 1000+ team',
      description: 'Ideal for new & startup businesses',
      priceMonth: 'Free',
      priceAnnual: 'Free',
      label: 'Most popular',
      default: true,
      value1: 'sponsor',
      pricing: false,
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
      title: 'Silver (SS)',
      subTitle: 'Best value for 1000+ team',
      description: 'Ideal for startup businesses',
      priceMonth: '14.99',
      priceAnnual: '174.00',
      label: 'Most popular',
      default: false,
      value1: 'sponsor',
      pricing: true,

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
      title: 'Gold (GS)',
      subTitle: 'Best value for 1000+ team',
      description: 'Ideal for growth stage businesses',
      priceMonth: '49.99',
      priceAnnual: '594.00',
      label: 'Most popular',
      default: false,
      value1: 'sponsor',
      pricing: true,

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
      title: 'Diamond (DS)',
      subTitle: 'Best value for 1000+ team',
      description: 'ideal for enterprises and institutions',
      priceMonth: 'Call customer service',
      priceAnnual: 'Call customer service',
      label: 'Most popular',
      default: false,
      value1: 'sponsor',
      pricing: false,

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
  ])
  const handleFormSubmit = (value: any) => {
    // let e = value.target.value.toLowerCase()
    // if (e !== "month" && e !== "annual") {
    //     localStorage.setItem("userType", e);
    //     // setUserType(e)
    // }
  }

  const onConfirm = () => {
    setIsShowAlert(false)
  }
  const onCancel = () => {
    setIsShowAlert(false)
  }
  const submitStep = (values: ICreateAccount, actions: FormikValues) => {}
  console.log(userType)
  return (
    <div className='d-flex flex-column'>
      <button
        data-bs-toggle='modal'
        data-bs-target='#changePlan'
        type='button'
        className='btn btn-primary mb-5'
        style={{
          width: 'fit-content',
          alignSelf: 'end',
        }}
        onClick={() => setIsShowAlert(true)}
      >
        Change Plan
      </button>
      <div className='card mb-5 mb-xl-10 mt-5'>
        <div className='modal ' tabIndex={-1} id='changePlan'>
          <div className='modal-dialog modal-xl'>
            <div className='modal-content'>
              <div className='modal-body'>
                <Formik
                  validationSchema={currentSchema}
                  initialValues={initValues}
                  onSubmit={submitStep}
                >
                  {() => (
                    <form onChange={(e) => handleFormSubmit(e)}>
                      <div className='col-lg-12 mb-10 mb-lg-0 mt-5 d-flex justify-content-center align-items-center flex-column w-100'>
                        <div className='nav flex justify-content-center align-items-center'>
                          {userTypeChecking !== 'sponsor'
                            ? enablerTitles.map((plan, index) => {
                                return (
                                  <div
                                    onClick={() => {
                                      setUserType(plan.value1)
                                    }}
                                    className={
                                      `cnav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6  col-lg-4` +
                                      'mb-6 ' +
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
                                          checked={userType === plan.value1}
                                          onChange={(e) => setUserType(e.target.value)}
                                        />
                                      </div>

                                      <div className='flex-grow-1'>
                                        <h2 className='d-flex align-items-center fs-2 fw-bolder flex-wrap'>
                                          {plan.title}
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })
                            : sponsorTitle.map((plan, index) => {
                                return (
                                  <div
                                    onClick={() => {
                                      setUserType(plan.value1)
                                    }}
                                    className={
                                      `cnav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6  col-lg-4` +
                                      'mb-6 ' +
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
                                          checked={userType === plan.value1}
                                          onChange={(e) => setUserType(e.target.value)}
                                        />
                                      </div>

                                      <div className='flex-grow-1'>
                                        <h2 className='d-flex align-items-center fs-2 fw-bolder flex-wrap'>
                                          {plan.title}
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                        </div>

                        <div className='nav flex justify-content-center align-items-center'>
                          {types.map((plan, index) => {
                            return (
                              <div
                                onClick={() => {
                                  setCurrentState(plan.value1)
                                }}
                                className={
                                  `cnav-link  d-flex flex-stack text-start p-6  col-lg-4` + 'mb-6 '
                                }
                                data-bs-toggle='tab'
                                // data-bs-target={`#kt_upgrade_plan_price_${index}`}
                                key={index}
                              >
                                <div className='d-flex align-items-center me-2'>
                                  <div className='form-check form-check-custom form-check-solid form-check-success me-6'>
                                    <input
                                      className='form-check-input-type'
                                      type='radio'
                                      name='type'
                                      value={plan.value1}
                                      checked={currentState === plan.value1}
                                      onChange={(e) => setCurrentState(e.target.value)}
                                    />
                                  </div>

                                  <div className='flex-grow-1'>
                                    <h5 className='d-flex align-items-center   flex-wrap'>
                                      {plan.title}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>

                        {userType === 'enabler' && (
                          <div className=' mt-5'>
                            <div className='tab-content rounded h-100 bg-light p-10 d-flex justify-content-between'>
                              {enabler.map((plan, index) => {
                                return (
                                  <div key={`custom${index}`} className='m-4 col-md-3'>
                                    {!plan.custom && (
                                      <>
                                        <div
                                          className={
                                            `tab-pane fade` + (plan.default && 'show active')
                                          }
                                          id={`kt_upgrade_plan_${index}`}
                                          key={index}
                                        >
                                          <div className='pb-5'>
                                            <h2 className='fw-bolder text-dark'>{plan.title}</h2>

                                            <div className='text-gray-400 fw-bold h-40px'>
                                              {plan.description}
                                            </div>
                                            <div className='d-flex m-5'>
                                              {plan.pricing && <span className='mb-2'>$</span>}

                                              <h4
                                                style={{
                                                  color: '#429FF7',
                                                  margin: '2px',
                                                }}
                                              >
                                                {currentState === 'month'
                                                  ? `${plan.priceMonth}`
                                                  : plan.priceAnnual}
                                              </h4>

                                              {plan.pricing && (
                                                <span className='align-self-center fs-7 opacity-50'>
                                                  /
                                                  <span data-kt-element='period'>
                                                    {currentState === 'month' ? 'month' : 'year'}
                                                  </span>
                                                </span>
                                              )}
                                            </div>
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
                                    <div className='d-flex align-items-center justify-content-center mt-5'>
                                      <Field
                                        type='radio'
                                        value={`${plan.value1}`}
                                        name='accountTypeEnabler'
                                        required
                                        className='m-1'
                                      />
                                      Choose &emsp;
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )}

                        {(userType === 'sponsor' || userType === 'Sponsor') && (
                          <div className='mt-5'>
                            <div className='tab-content rounded h-100 bg-light p-10 d-flex justify-content-between'>
                              {sponsor.map((plan, index) => {
                                return (
                                  <div
                                    key={`custom${index}`}
                                    className='col-md-3'
                                    style={{marginInline: '3px'}}
                                  >
                                    {!plan.custom && (
                                      <>
                                        <div
                                          className={
                                            `tab-pane fade` + (plan.default && 'show active')
                                          }
                                          id={`kt_upgrade_plan_${index}`}
                                          key={index}
                                        >
                                          <div className='pb-5'>
                                            <h2 className='fw-bolder text-dark '>{plan.title}</h2>

                                            <div className='text-gray-400 fw-bold h-40px'>
                                              {plan.description}
                                            </div>
                                            <div className='d-flex m-5'>
                                              {plan.pricing && (
                                                <span className='align-self-end'>$</span>
                                              )}

                                              <h4
                                                style={{
                                                  color: '#429FF7',
                                                  margin: '2px',
                                                }}
                                              >
                                                {currentState === 'month'
                                                  ? `${plan.priceMonth}`
                                                  : plan.priceAnnual}
                                              </h4>

                                              {plan.pricing && (
                                                <span className='align-self-center fs-7 opacity-50'>
                                                  /
                                                  <span data-kt-element='period'>
                                                    {currentState === 'month' ? 'month' : 'year'}
                                                  </span>
                                                </span>
                                              )}
                                            </div>
                                          </div>

                                          <div className='pt-1'>
                                            {plan.features!.map((feature, i) => {
                                              return (
                                                <div
                                                  className={
                                                    `d-flex align-items-center ` +
                                                    (i !== plan.features!.length - 1 && ' mb-7')
                                                  }
                                                  key={`${i}-${feature.title}`}
                                                  style={{
                                                    marginInline: '5px',
                                                  }}
                                                >
                                                  {feature.supported && (
                                                    <>
                                                      <span className='fw-bold fs-5 text-gray-700 flex-grow-1 '>
                                                        {feature.title}
                                                      </span>

                                                      <KTSVG
                                                        path='/media/icons/duotune/general/gen043.svg'
                                                        className='svg-icon-1 svg-icon-success '
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
                                            <div className='d-flex align-items-center justify-content-center mt-5'>
                                              <Field
                                                type='radio'
                                                value={`${plan.value1}`}
                                                name='accountTypeEnabler'
                                                required
                                                className='m-1'
                                              />
                                              Choose &emsp;
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
              <div class='modal-footer'>
                <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>
                  Close
                </button>
                <button type='button' class='btn btn-primary'>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='card-header card-header-stretch pb-0'>
          <div className='card-title'>
            <h3 className='m-0'>Payment Methods</h3>
          </div>

          <div className='card-toolbar m-0'>
            <ul className='nav nav-stretch nav-line-tabs border-transparent' role='tablist'>
              <li
                className='nav-item'
                role='presentation'
                onClick={() => {
                  setTabs('debit-card')
                }}
              >
                <a
                  id='kt_billing_creditcard_tab'
                  className='nav-link fs-5 fw-bolder me-5 active'
                  data-bs-toggle='tab'
                  role='tab'
                  href='#kt_billing_creditcard'
                >
                  Credit / Debit Card
                </a>
              </li>

              <li className='nav-item' role='presentation'>
                <a
                  id='kt_billing_paypal_tab'
                  className='nav-link fs-5 fw-bolder'
                  data-bs-toggle='tab'
                  role='tab'
                  href='#kt_billing_paypal'
                >
                  Paypal
                </a>
              </li>
              <li
                className='nav-item'
                role='presentation'
                onClick={() => {
                  setTabs('checking-account')
                }}
              >
                <a
                  id='kt_billing_paypal_tab'
                  className='nav-link fs-5 fw-bolder'
                  data-bs-toggle='tab'
                  role='tab'
                  href='#kt_billing_paypal'
                >
                  Checking Account
                </a>
              </li>
            </ul>
          </div>
        </div>
        {tabs == 'debit-card' ? (
          <BillingCardComponent />
        ) : (
          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => <CheckingAccount />}
          </Formik>
        )}
      </div>
      )
    </div>
  )
}

export default Billing
