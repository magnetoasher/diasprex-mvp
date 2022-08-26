/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck comment

import React, { FC, useState, useEffect } from 'react'
import { Field, ErrorMessage } from 'formik'
import { KTSVG } from '../../../../../../_metronic/helpers'
import Tabs, { Tab } from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import { HeaderNotificationsMenu, QuickLinks, Search } from '../../../../../../_metronic/partials';
import clsx from 'clsx'


const SubscriptionPlans = ({ userType, setUserType, submitStep, setUserTypeFull, userTypeFull }) => {
    const [currentState, setCurrentState] = useState<'month' | 'annual'>('month')
    const [generic] = useState([
        {
            title: 'Generic',
            subTitle: 'Ideal for individuals and small companies',
            description: 'Ideal for individuals and small companies',
            priceMonth: 'Free',
            priceAnnual: 'Free',
            default: true,
            custom: false,
            value1: 'basic',
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

    ])
    const titles = [
        {
            title: 'Generic',

            value1: 'basic',


        },

        {
            title: 'Enabler',

            value1: 'Enabler',



        },

        {
            title: 'Sponsor',

            value1: 'sponsor',



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
            title: 'Basic Enabler (BE)',
            subTitle: 'Best for 100+ team size',
            description: 'Ideal for individuals and startups',
            priceMonth: '4.99',
            priceAnnual: '54.00',
            default: false,
            custom: false,
            value1: 'individual',
            valueType: 'Basic_Enabler individual',
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
            value1: 'individual',
            valueType: 'Super_Enabler individual',

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
            value1: 'business',
            valueType: 'Business_Enabler business',

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
            default: false,
            value1: 'sponsor',
            valueType: 'Basic_Sponsor sponsor',

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
            valueType: 'Silver_Sponsor sponsor',

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
            valueType: 'Gold_Sponsor sponsor',

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
            valueType: 'Diamond_Sponsor sponsor',

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
        }
    ])
    const handleFormSubmit = (value: any) => {
        let tempUser = ""
        let e = value.target.value.toLowerCase()
        if (e.split(" ").length > 1) {
            let stringValue = e.split(" ")
            tempUser = stringValue[1]
            setUserTypeFull(stringValue[0])
            localStorage.setItem("userTypeFull", stringValue[0]);


        }
        else {
            tempUser = e
        }
        if (tempUser !== "month" && tempUser !== "annual") {
            setUserType(tempUser)
            localStorage.setItem("userType", tempUser);
        }
    }
    useEffect(() => {
        localStorage.setItem("userType", userType);
        localStorage.setItem("userTypeFull", userTypeFull);
    }, [userType, userTypeFull])

    console.log(userType)
    return (
        <>

            <form onChange={(e) => handleFormSubmit(e)}>

                <div className='col-lg-12 mb-10 mb-lg-0 mt-5 d-flex justify-content-center align-items-center flex-column w-100'>
                    <div className='nav flex justify-content-center align-items-center'>
                        {titles.map((plan, index) => {
                            return (
                                <div
                                    onClick={() => {
                                        setUserType(plan.value1.toLocaleLowerCase())
                                        userTypeFull(plan.valueType)
                                    }}
                                    className={
                                        `cnav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6  col-lg-4` +
                                        ('mb-6 ') +
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
                                        `cnav-link  d-flex flex-stack text-start p-6  col-lg-4` +
                                        ('mb-6 ')
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






                    {
                        userType === "basic" && <div className=' mt-5'>
                            <div className='tab-content rounded h-100 bg-light p-10 ' >
                                {generic.map((plan, index) => {
                                    return (
                                        <div key={`custom${index}`} >
                                            {!plan.custom && (
                                                <>
                                                    <div
                                                        className={`tab-pane fade ` + (plan.default && 'show active')}
                                                        id={`kt_upgrade_plan_${index}`}
                                                        key={index}
                                                    >
                                                        <div className='pb-5'>
                                                            <h2 className='fw-bolder text-dark'>{plan.title}</h2>

                                                            <div className='text-gray-400 fw-bold'>{plan.description}</div>
                                                            <div className='d-flex m-5'>
                                                                {plan.pricing && <span className='mb-2'>$</span>}

                                                                <h4 style={{ color: '#429FF7', margin: '2px' }}>
                                                                    {currentState === 'month' ? `${plan.priceMonth}` : plan.priceAnnual}
                                                                </h4>


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
                                            <div className='d-flex align-items-center justify-content-center mt-5' style={{ visibility: 'hidden' }}>
                                                <Field checked type='radio' value={`${plan.valueType}`} name='accountTypeEnabler' required className="m-1" />
                                                Choose &emsp;
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }

                    {
                        (userType === "Enabler" || userType === "business" || userType === "individual" || userType === "enabler") && <div className=' mt-5'>
                            <div className='tab-content rounded h-100 bg-light p-10 d-flex justify-content-between' >
                                {enabler.map((plan, index) => {
                                    return (
                                        <div key={`custom${index}`} className="m-4 col-md-3">
                                            {!plan.custom && (
                                                <>
                                                    <div
                                                        className={`tab-pane fade` + (plan.default && 'show active')}
                                                        id={`kt_upgrade_plan_${index}`}
                                                        key={index}
                                                    >
                                                        <div className='pb-5'>
                                                            <h2 className='fw-bolder text-dark'>{plan.title}</h2>

                                                            <div className='text-gray-400 fw-bold h-40px'>{plan.description}</div>
                                                            <div className='d-flex m-5'>
                                                                {plan.pricing && <span className='mb-2'>$</span>}

                                                                <h4 style={{ color: '#429FF7', margin: '2px' }}>
                                                                    {currentState === 'month' ? `${plan.priceMonth}` : plan.priceAnnual}
                                                                </h4>

                                                                {plan.pricing && <span className='align-self-center fs-7 opacity-50'>
                                                                    /<span data-kt-element='period'>{currentState === 'month' ? 'month' : 'year'}</span>
                                                                </span>}
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
                                            <div className='d-flex align-items-center justify-content-center mt-5' >
                                                <Field type='radio' value={`${plan.valueType}`} name='accountTypeEnabler' required className="m-1" />
                                                Choose &emsp;
                                            </div>

                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                    }

                    {
                        (userType === "sponsor" || userType === "Sponsor") && <div className='mt-5'>
                            <div className='tab-content rounded h-100 bg-light p-10 d-flex justify-content-between'>
                                {sponsor.map((plan, index) => {
                                    return (
                                        <div key={`custom${index}`} className="col-md-3" style={{ marginInline: '3px' }}>
                                            {!plan.custom && (
                                                <>
                                                    <div
                                                        className={`tab-pane fade` + (plan.default && 'show active')}
                                                        id={`kt_upgrade_plan_${index}`}
                                                        key={index}
                                                    >
                                                        <div className='pb-5'>
                                                            <h2 className='fw-bolder text-dark '>{plan.title}</h2>

                                                            <div className='text-gray-400 fw-bold h-40px'>{plan.description}</div>
                                                            <div className='d-flex m-5'>
                                                                {plan.pricing && <span className='align-self-end'>$</span>}

                                                                <h4 style={{ color: '#429FF7', margin: '2px' }}>
                                                                    {currentState === 'month' ? `${plan.priceMonth}` : plan.priceAnnual}
                                                                </h4>

                                                                {plan.pricing && <span className='align-self-center fs-7 opacity-50'>
                                                                    /<span data-kt-element='period'>{currentState === 'month' ? 'month' : 'year'}</span>
                                                                </span>}
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
                                                                        style={{ marginInline: '5px' }}
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
                                                            <div className='d-flex align-items-center justify-content-center mt-5' >
                                                                <Field type='radio' value={`${plan.valueType}`} name='accountTypeEnabler' required className="m-1" />
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
                    }

                </div>
            </form >
        </>
    )
}

export default SubscriptionPlans