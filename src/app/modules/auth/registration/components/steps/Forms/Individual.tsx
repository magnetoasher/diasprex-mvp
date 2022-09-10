import React, { FC, useMemo, useState } from 'react'
import { Field, ErrorMessage } from 'formik'
// @ts-ignore
import AsyncSelect from 'react-select'
import countryList from 'react-select-country-list'

const Individual = () => {
    const countryOptions = useMemo(() => countryList().getData(), [])
    const [dataObj, setDataObj] = useState({
        area_of_interest: '',
        professional_interest: ''
    })

    const handleChange = (type: any, value: any) => {
        setDataObj({
            ...dataObj,
            [type]: value,
        });
    };
    console.log(dataObj)
    const professions = [
        { value: 'acturarial', label: 'Acturarial' },
        { value: 'analytics & research', label: 'Analytics & Research' },
        { value: 'administrative/clerical', label: 'Administrative/Clerical' },
        { value: 'business intellegence & marketing', label: 'Business Intellegence & Marketing' },
        { value: 'claim', label: 'Claims' },
        { value: 'communications', label: 'Communications' },
        { value: 'customer service', label: 'Customer Service' },
        { value: 'corporate service', label: 'Corporate Service' },
        { value: 'human resources', label: 'Human Resources' },
        { value: 'legal', label: 'legal' },
        { value: 'finance and accounting', label: 'Finance and Accounting' },
        { value: 'nurse', label: 'Nursing' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'project management', label: 'Project Management' },
        { value: 'operations', label: 'Operations' },
        { value: 'sales', label: 'Sales' },
        { value: 'technology', label: 'Technology' },
        { value: 'underwriting', label: 'Underwriting' },
    ]

    const areaOptions = [
        { value: 'management', label: 'Management' },
        { value: 'accounting', label: 'Accounting' },
        { value: 'finance', label: 'Finance' },
        { value: 'civil', label: 'Civil' },
        { value: 'engineering', label: 'Engineering' },
        { value: 'mechanical', label: 'Mechanical' },
        { value: 'engineering', label: 'Engineering' },
        { value: 'oil_Gas', label: 'Oil and Gas' },
        { value: 'manufacturing', label: 'Manufacturing' },
        { value: 'mining_extraction', label: 'Mining and Extraction' },
        { value: 'environment', label: 'Environment' },
        { value: 'agriculture', label: 'Agriculture' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'sales_marketing', label: 'Sales and Marketing' },
        { value: 'information_technology', label: 'Information Technology' },
        { value: 'transportation', label: 'Transportation' },
        { value: 'technology', label: 'Technology' },
        { value: 'water_resources', label: 'Water  Resources' },
        { value: 'public_health', label: 'Public Health' },
        { value: 'health_care', label: 'Health Care' },
        { value: 'biotechnology', label: 'Biotechnology' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'journalism', label: 'Journalism' },
        { value: 'law', label: 'Law' },
    ]


    return (
        <div className='w-100'>
            <div className='pb-10 pb-lg-12'>
                <h2 className='fw-bolder text-dark'>Account Details</h2>
                <div className='text-gray-400 fw-bold fs-6'>
                    If you need more info, please check out
                    <a href='/faqs' className='link-primary fw-bolder'>
                        {' '}
                        Help Page
                    </a>
                    .
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>First Name</label>
                <Field name='fName' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("first_name", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Middle Initial</label>
                <Field name='mName' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("middle_name", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Last Name</label>
                <Field name='lName' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("last_name", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Email Address</label>
                <Field name='email' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("email", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Primary Phone Number</label>
                <Field name='businessName' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("primary_phone", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>

            <div className='fv-row mb-10'>
                <label className='form-label required'>Profession</label>
                <Field name='profession' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("profession", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>

            <div className='fv-row mb-10'>
                <label className='form-label required'>Highest Degree</label>
                <Field name='degree' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("highest_degree", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Professional Field (choose most related)</label>
                <AsyncSelect
                    name='areaOptions'
                    className='form-select form-select-lg form-select-solid'
                    options={areaOptions}
                    value={dataObj.area_of_interest}
                    onChange={(e: any) => handleChange("area_of_interest", e)}
                />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessType' />
                </div>
            </div>

            <div className='fv-row mb-10'>
                <label className='form-label required'>Professional Interest</label>
                <AsyncSelect
                    name='businessType'
                    className='form-select form-select-lg form-select-solid'
                    options={professions}
                    // value={dataObj.professional_interest}
                    defaultOptions
                    cacheOptions
                    isMulti
                    onChange={(e: any) => handleChange("professional_interest", e)}
                />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessType' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Country of Origin</label>
                <AsyncSelect
                    name='businessType'
                    className='form-select form-select-lg form-select-solid'
                    options={countryOptions}
                    // value={countryValue}
                    onChange={(e: any) => handleChange("origin", e)}
                />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessType' />
                </div>
            </div>

            <div className='fv-row mb-10'>
                <label className='form-label required'>Country of Residence</label>
                <AsyncSelect
                    name='businessType'
                    className='form-select form-select-lg form-select-solid'
                    options={countryOptions}
                    // value={countryValue}
                    onChange={(e: any) => handleChange("country", e)}
                />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessType' />
                </div>
            </div>

            <div className='fv-row mb-10'>Terms &amp; Conditions:</div>
            <input type='checkbox' required />
            <div className='fv-row mb-10'>
                <p>I agree to the Terms &amp; Conditions of DIASPREX Enablers</p>
            </div>
            <input type='checkbox' required />
            <div className='fv-row mb-10'>
                <p>
                    I agree to the Terms &amp; Conditions of DIASPREX International
                </p>
            </div>
            <input type='checkbox' required />
            <div className='fv-row mb-10'>
                <p>
                    Email me relevant information from DIASPREX
                </p>
            </div>
        </div>
    )
}

export default Individual