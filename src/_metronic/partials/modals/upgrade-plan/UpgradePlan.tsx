/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck comment
import React, {FC, useState} from 'react'
import {KTSVG} from '../../../helpers'

const UpgradePlan: FC = () => {
  const [selectedEnabler, setSelectedEnabler] = useState('enabler1')
  const [selectedSponsor, setSelectedSponsor] = useState('sponsor1')
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [userType] = useState(localStorage.getItem('userType'))
  const [packagePrice, setPackagePrice] = useState('')
  const [packageDuration, setPackageDuration] = useState('')

  const [billingCycle, setBillingCycle] = useState<'month' | 'annual'>('month')
  const [userTypeFull, setUserTypeFull] = useState('basic_enabler')

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

  return (
    <div className='w-100'>
      <div className='card'>
        <div className='card-body pt-0 pb-15 px-5 px-xl-20'>
          <div className='nav flex justify-content-center align-items-center'>
            <div
              className='nav-group d-flex flex-row nav-group-outline mx-auto'
              data-kt-buttons='true'
            >
              {types.map((type, index) => (
                <div key={index} className='d-flex cnav-link '>
                  <button
                    type='button'
                    className={
                      'nav-link btn btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 ' +
                      (billingCycle === type.value1 && 'active')
                    }
                    onClick={() => {
                      setBillingCycle(type.value1)
                    }}
                    data-kt-plan={type.value1}
                  >
                    {type.title}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {userType !== 'sponsor' ? (
            <div className='row mt-10'>
              <div className='col-lg-7 mb-10 mb-lg-0'>
                <div className='nav flex-column'>
                  {enabler.map((plan, index) => {
                    return (
                      <div
                        onClick={() => {
                          setUserTypeFull(plan.valueType)

                          {
                            billingCycle === 'month'
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
                                {billingCycle === 'month' ? plan.priceMonth : plan.priceAnnual}
                              </span>

                              <span className='fs-7 opacity-50'>
                                /
                                <span data-kt-element='period'>
                                  {billingCycle === 'month' ? 'Month' : 'Year'}
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
                      className={
                        `tab-pane fade` + (enabler[selectedIndex].default && 'show active')
                      }
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
          ) : (
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
                                {billingCycle === 'month' ? plan.priceMonth : plan.priceAnnual}
                              </span>

                              <span className='fs-7 opacity-50'>
                                /
                                <span data-kt-element='period'>
                                  {billingCycle === 'month' ? 'Month' : 'Year'}
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
                      className={
                        `tab-pane fade` + (sponsor[selectedIndex].default && 'show active')
                      }
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
