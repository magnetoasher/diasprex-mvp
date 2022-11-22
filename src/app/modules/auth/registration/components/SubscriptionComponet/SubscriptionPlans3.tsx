/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck comment

import React, {FC, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Field, ErrorMessage} from 'formik'
import {KTSVG} from '../../../../../../_metronic/helpers'
import Tabs, {Tab} from 'react-best-tabs'
import 'react-best-tabs/dist/index.css'
import {HeaderNotificationsMenu, QuickLinks, Search} from '../../../../../../_metronic/partials'
import clsx from 'clsx'

const SubscriptionPlans3 = ({userType, setUserType, submitStep, setUserTypeFull, userTypeFull}) => {
  const [currentState, setCurrentState] = useState<'month' | 'annual'>('month')
  const [selectedEnabler, setSelectedEnabler] = useState('enabler1')
  const [selectedSponsor, setSelectedSponsor] = useState('sponsor1')
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [packagePrice, setPackagePrice] = useState()
  const [packageDuration, setPackageDuration] = useState()

  const titles = [
    {
      title: 'Enabler',
      value1: 'enabler',
      default: true,
    },

    {
      title: 'Sponsor',
      value1: 'sponsor',
      default: false,
    },
  ]
  const types = [
    {
      title: 'Monthly',

      value1: 'month',
    },

    {
      title: 'Annually',

      value1: 'annual',
    },
  ]
  const [enabler] = useState([
    {
      title: 'Basic Enabler (B.E.)',
      titleid: 'enabler1',
      subTitle: 'Ideal for any individuals',
      setupFee: '',
      priceMonth: '0',
      priceAnnual: '0',
      label: '',
      default: true,
      custom: false,
      value1: 'basic',
      valueType: 'basic_enabler',
      pricing: true,
      features: [
        {
          title: 'View Opportunities',
          supported: true,
        },
        {
          title: 'Remittance retainer program',
          supported: true,
        },
        {
          title: 'Remittance fee waiver',
          supported: false,
        },
        {
          title: 'View oportunity details and submit proposal',
          supported: false,
        },
        {
          title: 'Discounted third party products and services',
          supported: false,
        },
        {
          title: "Diasprex's financing services",
          supported: false,
        },
        {
          title: 'Unlimited business and financing support services',
          supported: false,
        },
        {
          title: 'Unlimited network with Diasprex Sponsors and Enablers',
          supported: false,
        },
        {
          title: 'Participation in Diasprex-seeded Opportunities',
          supported: false,
        },
        {
          title: 'Access to customized opportunity services',
          supported: false,
        },
        {
          title: 'Services or product advertisement',
          supported: false,
        },
        {
          title: 'Loyalty program reward provider',
          supported: false,
        },
      ],
    },
    {
      title: 'Standard Enabler (S.E.)',
      titleid: 'enabler2',
      subTitle: 'Ideal for individuals who wants to engage Diasprex opportunities',
      setupFee: '',
      priceMonth: '4.99',
      priceAnnual: '54.00',
      label: '',
      default: false,
      custom: false,
      value1: 'individual',
      valueType: 'standard_enabler',
      pricing: true,
      features: [
        {
          title: 'View Opportunities',
          supported: true,
        },
        {
          title: 'Remittance retainer program',
          supported: true,
        },
        {
          title: 'Remittance fee waiver',
          supported: true,
        },
        {
          title: 'View oportunity details and submit proposal',
          supported: true,
        },
        {
          title: 'Discounted third party products and services',
          supported: true,
        },
        {
          title: "Diasprex's financing services",
          supported: true,
        },
        {
          title: 'Unlimited business and financing support services',
          supported: false,
        },
        {
          title: 'Unlimited network with Diasprex Sponsors and Enablers',
          supported: false,
        },
        {
          title: 'Participation in Diasprex-seeded Opportunities',
          supported: false,
        },
        {
          title: 'Access to customized opportunity services',
          supported: false,
        },
        {
          title: 'Services or product advertisement',
          supported: false,
        },
        {
          title: 'Loyalty program reward provider',
          supported: false,
        },
      ],
    },
    {
      title: 'Super Enabler (Sp.E.)',
      titleid: 'enabler3',
      subTitle: 'Ideal for professional consultants',
      setupFee: '',
      priceMonth: '9.99',
      priceAnnual: '114.00',
      label: 'Most popular',
      default: false,
      custom: false,
      value1: 'individual',
      valueType: 'super_enabler',

      pricing: true,
      features: [
        {
          title: 'View Opportunities',
          supported: true,
        },
        {
          title: 'Remittance retainer program',
          supported: true,
        },
        {
          title: 'Remittance fee waiver',
          supported: true,
        },
        {
          title: 'View oportunity details and submit proposal',
          supported: true,
        },
        {
          title: 'Discounted third party products and services',
          supported: true,
        },
        {
          title: "Diasprex's financing services",
          supported: true,
        },
        {
          title: 'Unlimited business and financing support services',
          supported: true,
        },
        {
          title: 'Unlimited network with Diasprex Sponsors and Enablers',
          supported: true,
        },
        {
          title: 'Participation in Diasprex-seeded Opportunities',
          supported: true,
        },
        {
          title: 'Access to customized opportunity services',
          supported: false,
        },
        {
          title: 'Services or product advertisement',
          supported: false,
        },
        {
          title: 'Loyalty program reward provider',
          supported: false,
        },
      ],
    },
    {
      title: 'Enterprise Enabler (E.E.)',
      titleid: 'enabler4',
      subTitle: 'Ideal for medium to large enterprises',
      setupFee: '',
      priceMonth: 'Call customer service',
      priceAnnual: 'Call customer service',
      default: false,
      label: '',
      custom: true,
      value1: 'business',
      valueType: 'business_enabler',

      pricing: false,
      features: [
        {
          title: 'View Opportunities',
          supported: true,
        },
        {
          title: 'Remittance retainer program',
          supported: true,
        },
        {
          title: 'Remittance fee waiver',
          supported: true,
        },
        {
          title: 'View oportunity details and submit proposal',
          supported: true,
        },
        {
          title: 'Discounted third party products and services',
          supported: true,
        },
        {
          title: "Diasprex's financing services",
          supported: true,
        },
        {
          title: 'Unlimited business and financing support services',
          supported: true,
        },
        {
          title: 'Unlimited network with Diasprex Sponsors and Enablers',
          supported: true,
        },
        {
          title: 'Participation in Diasprex-seeded Opportunities',
          supported: true,
        },
        {
          title: 'Access to customized opportunity services',
          supported: true,
        },
        {
          title: 'Services or product advertisement',
          supported: true,
        },
        {
          title: 'Loyalty program reward provider',
          supported: true,
        },
      ],
    },
  ])
  const [sponsor] = useState([
    {
      title: 'Basic Sponsor (B.S.)',
      titleid: 'sponsor1',
      subTitle: 'Best for individuals',
      setupFee: '$50 One Time Setup Fee',
      priceMonth: '0',
      priceAnnual: '0',
      label: '',
      default: true,
      value1: 'sponsor',
      valueType: 'basic_sponsor',
      pricing: true,
      custom: false,
      features: [
        {
          title: 'Opportunity submission',
          supported: true,
        },
        {
          title: 'Receives show of interest',
          supported: true,
        },
        {
          title: 'Diasprex financing services',
          supported: true,
        },
        {
          title: 'Opportunity submission support',
          supported: false,
        },
        {
          title: 'Network with Diasprex Sponsors and Enablers',
          supported: false,
        },
        {
          title: 'Individual Enabler partnership',
          supported: false,
        },
        {
          title: 'Enterprise Enabler partnership',
          supported: false,
        },
        {
          title: 'Show of interest review support',
          supported: false,
        },
        {
          title: 'External private investment support',
          supported: false,
        },
      ],
    },
    {
      title: 'Silver Sponsor (S.S.)',
      titleid: 'sponsor2',
      subTitle: 'Ideal for startups',
      setupFee: '$100 One Time Setup Fee',
      priceMonth: '14.99',
      priceAnnual: '174.00',
      label: '',
      default: false,
      value1: 'sponsor',
      valueType: 'silver_sponsor',

      pricing: true,

      custom: false,
      features: [
        {
          title: 'Opportunity submission',
          supported: true,
        },
        {
          title: 'Receives show of interest',
          supported: true,
        },
        {
          title: 'Diasprex financing services',
          supported: true,
        },
        {
          title: 'Opportunity submission support',
          supported: true,
        },
        {
          title: 'Network with Diasprex Sponsors and Enablers',
          supported: true,
        },
        {
          title: 'Individual Enabler partnership',
          supported: true,
        },
        {
          title: 'Enterprise Enabler partnership',
          supported: false,
        },
        {
          title: 'Show of interest review support',
          supported: false,
        },
        {
          title: 'External private investment support',
          supported: false,
        },
      ],
    },
    {
      title: 'Gold Sponsor (G.S.)',
      titleid: 'sponsor3',
      subTitle: 'Ideal for growth stage businesses',
      setupFee: '$200 One Time Setup Fee',
      priceMonth: '49.99',
      priceAnnual: '594.00',
      label: 'Most popular',
      default: false,
      value1: 'sponsor',
      valueType: 'gold_sponsor',

      pricing: true,

      custom: false,
      features: [
        {
          title: 'Opportunity submission',
          supported: true,
        },
        {
          title: 'Receives show of interest',
          supported: true,
        },
        {
          title: 'Diasprex financing services',
          supported: true,
        },
        {
          title: 'Opportunity submission support',
          supported: true,
        },
        {
          title: 'Network with Diasprex Sponsors and Enablers',
          supported: true,
        },
        {
          title: 'Individual Enabler partnership',
          supported: true,
        },
        {
          title: 'Enterprise Enabler partnership',
          supported: true,
        },
        {
          title: 'Show of interest review support',
          supported: true,
        },
        {
          title: 'External private investment support',
          supported: true,
        },
      ],
    },
    {
      title: 'Diamond Sponsor (D.S.)',
      titleid: 'sponsor4',
      subTitle: 'Ideal for enterprises and institutions',
      setupFee: 'Call customer service',
      priceMonth: 'Call customer service',
      priceAnnual: 'Call customer service',
      label: '',
      default: false,
      value1: 'sponsor',
      valueType: 'diamond_sponsor',

      pricing: false,

      custom: true,
      features: [
        {
          title: 'Opportunity submission',
          supported: true,
        },
        {
          title: 'Receives show of interest',
          supported: true,
        },
        {
          title: 'Diasprex financing services',
          supported: true,
        },
        {
          title: 'Opportunity submission support',
          supported: true,
        },
        {
          title: 'Network with Diasprex Sponsors and Enablers',
          supported: true,
        },
        {
          title: 'Individual Enabler partnership',
          supported: true,
        },
        {
          title: 'Enterprise Enabler partnership',
          supported: true,
        },
        {
          title: 'Show of interest review support',
          supported: true,
        },
        {
          title: 'External private investment support',
          supported: true,
        },
      ],
    },
  ])
  const handleFormSubmit = (value: any) => {
    let tempUser = ''
    let e = value.target.value.toLowerCase()
    if (e.split(' ').length > 1) {
      let stringValue = e.split(' ')
      tempUser = stringValue[1]
      setUserTypeFull(stringValue[0])
      localStorage.setItem('userTypeFull', stringValue[0])
    } else {
      tempUser = e
    }
    if (tempUser !== 'month' && tempUser !== 'annual') {
      setUserType(tempUser)
      localStorage.setItem('userType', tempUser)
    }
  }
  useEffect(() => {
    localStorage.setItem('userType', userType)
    localStorage.setItem('userTypeFull', userTypeFull)
    localStorage.setItem('packageDuration', currentState)
    localStorage.setItem('packagePrice', packagePrice)
  }, [userType, userTypeFull, currentState])

  // console.log(userType, userTypeFull, currentState, packagePrice)

  const tabPaneColorScheme =
    selectedIndex === 1
      ? 'light'
      : selectedIndex === 2
      ? 'success bg-opacity-10'
      : selectedIndex === 3
      ? 'info bg-opacity-10'
      : 'primary bg-opacity-10'

  const borderColorScheme =
    selectedIndex === 1
      ? 'light'
      : selectedIndex === 2
      ? 'success'
      : selectedIndex === 3
      ? 'info'
      : 'primary'
  return (
    <>
      <form onChange={(e) => handleFormSubmit(e)}>
        <div className='col-lg-12 mb-10 mb-lg-0 mt-5 d-flex justify-content-center align-items-center flex-column w-100'>
          <div className='nav flex justify-content-center align-items-center'>
            {titles.map((plan, index) => {
              return (
                <div
                  onClick={() => {
                    setUserTypeFull(`basic_${plan.value1}`)
                    setUserType(plan.value1.toLocaleLowerCase())

                    setSelectedEnabler('enabler1')
                    setSelectedSponsor('sponsor1')
                  }}
                  className={
                    `nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6  col-lg-4` +
                    'mb-6 ' +
                    (plan.default && 'active ') +
                    (!plan.custom && 'btn-active btn-active-primary ')
                  }
                  data-bs-toggle='tab'
                  data-bs-target={`#kt_usertype_pane_${index}`}
                  key={index}
                >
                  <div className='d-flex align-items-center me-2'>
                    <div className='form-check form-check-custom form-check-solid form-check-success me-6'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='user'
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
            {types.map((type, index) => {
              return (
                <div
                  onClick={() => {
                    setCurrentState(type.value1)
                    setPackageDuration(type.title)
                  }}
                  className={`cnav-link  d-flex flex-stack text-start p-6  col-lg-4` + 'mb-6 '}
                  data-bs-toggle='tab'
                  key={index}
                >
                  <div className='d-flex align-items-center me-2'>
                    <div className='form-check form-check-custom form-check-solid form-check-success me-6'>
                      <input
                        className='form-check-input-type'
                        type='radio'
                        name='type'
                        value={type.value1}
                        checked={currentState === type.value1}
                        onChange={(e) => setCurrentState(e.target.value)}
                      />
                    </div>

                    <div className='flex-grow-1'>
                      <h5 className='d-flex align-items-center   flex-wrap'>{type.title}</h5>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {(userType === 'enabler' || userType === 'Enabler') && (
          <div className='row mt-10'>
            <div className='col-lg-7 mb-10 mb-lg-0'>
              <div className='nav flex-column'>
                {enabler.map((plan, index) => {
                  return (
                    <div
                      onClick={() => {
                        setUserTypeFull(plan.valueType)

                        {
                          currentState === 'month'
                            ? setPackagePrice(plan.priceMonth)
                            : setPackagePrice(plan.priceAnnual)
                        }
                        setSelectedEnabler(plan.titleid)
                        setSelectedIndex(index)
                      }}
                      className={
                        `nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6 ` +
                        (index !== enabler.length - 1 && 'mb-6 ') +
                        (plan.default && 'active ') +
                        (!plan.custom && 'btn-active btn-active-primary')
                      }
                      id={`kt_usertype_pane_${index}`}
                      data-bs-toggle='tab'
                      data-bs-target={`#kt_upgrade_plan_${index}`}
                      key={index}
                    >
                      <div className='d-flex align-items-center me-2'>
                        {!plan.custom && (
                          <div className='form-check form-check-custom form-check-solid form-check-success me-6'>
                            <input
                              className='form-check-input'
                              type='radio'
                              name='plan'
                              value={plan.titleid}
                              checked={selectedEnabler === plan.titleid}
                              onChange={(e) => setSelectedEnabler(e.target.value)}
                            />
                          </div>
                        )}
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
                              /
                              <span data-kt-element='period'>
                                {currentState === 'month' ? 'Month' : 'Year'}
                              </span>
                            </span>

                            <div className='fw-bold opacity-50'>{plan.setupFee}</div>
                          </>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='col-lg-5'>
              <div className={`tab-content rounded h-100 p-10`}>
                <div key={`custom${selectedIndex}`}>
                  <div
                    className={`tab-pane fade` + (enabler[selectedIndex].default && 'show active')}
                    id={`kt_upgrade_plan_${selectedIndex}`}
                    key={selectedIndex}
                  >
                    <div className='pb-5' id='kt_upgrade_plan_0' key='0'>
                      <h2 className='fw-bolder text-dark'>
                        What’s in {enabler[selectedIndex].title} Plan?
                      </h2>

                      <div className='text-gray-400 fw-bold'>
                        The decscription for plan {enabler[selectedIndex].title}
                      </div>
                    </div>

                    <div className='pt-1'>
                      {enabler[selectedIndex].features!.map((feature, i) => {
                        return (
                          <div
                            className={
                              `d-flex align-items-center` +
                              (i !== enabler[selectedIndex].features!.length - 1 && ' mb-7')
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
                </div>
              </div>
            </div>
          </div>
        )}
        {(userType === 'sponsor' || userType === 'Sponsor') && (
          <div className='row mt-10'>
            <div className='col-lg-7 mb-10 mb-lg-0'>
              <div className='nav flex-column'>
                {sponsor.map((plan, index) => {
                  return (
                    <div
                      onClick={() => {
                        setUserTypeFull(plan.valueType)
                        setSelectedSponsor(plan.titleid)
                        setSelectedIndex(index)
                      }}
                      className={
                        `nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6 ` +
                        (index !== sponsor.length - 1 && 'mb-6 ') +
                        (plan.default && 'active ') +
                        (!plan.custom && 'btn-active btn-active-primary ')
                      }
                      id={`kt_usertype_pane_${index}`}
                      data-bs-toggle='tab'
                      data-bs-target={`#kt_upgrade_plan_${index}`}
                      key={index}
                    >
                      <div className='d-flex align-items-center me-2'>
                        {!plan.custom && (
                          <div className='form-check form-check-custom form-check-solid form-check-success me-6'>
                            <input
                              className='form-check-input'
                              type='radio'
                              name='plan'
                              value={plan.titleid}
                              checked={selectedSponsor === plan.titleid}
                              onChange={(e) => setSelectedSponsor(e.target.value)}
                            />
                          </div>
                        )}
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
                              /
                              <span data-kt-element='period'>
                                {currentState === 'month' ? 'Month' : 'Year'}
                              </span>
                            </span>
                            <div className='fw-bold opacity-75'>{plan.setupFee}</div>
                          </>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='col-lg-5'>
              <div className={`tab-content rounded h-100 p-10`}>
                <div key={`custom${selectedIndex}`}>
                  <div
                    className={`tab-pane fade` + (sponsor[selectedIndex].default && 'show active')}
                    id={`kt_upgrade_plan_${selectedIndex}`}
                    key={selectedIndex}
                  >
                    <div className='pb-5' id='kt_upgrade_plan_0' key='0'>
                      <h2 className='fw-bolder text-dark'>
                        What’s in {sponsor[selectedIndex].title} Plan?
                      </h2>

                      <div className='text-gray-400 fw-bold'>
                        The decscription for plan {sponsor[selectedIndex].title}
                      </div>
                    </div>

                    <div className='pt-1'>
                      {sponsor[selectedIndex].features!.map((feature, i) => {
                        return (
                          <div
                            className={
                              `d-flex align-items-center` +
                              (i !== sponsor[selectedIndex].features!.length - 1 && ' mb-7')
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
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  )
}

export default SubscriptionPlans3
