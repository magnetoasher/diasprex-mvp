import React, { FC, useMemo, useState } from 'react'
import { Field, ErrorMessage } from 'formik'
// @ts-ignore
import AsyncSelect from 'react-select'
import countryList from 'react-select-country-list'

const Step3: FC = () => {
  const countryOptions = useMemo(() => countryList().getData(), [])
  const [countryValue, setCountryValue] = useState({})
  const [areaOfInterest, setAreaOfInterest] = useState([])

  const areaOptions = [
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

  const handleCountryChange = (e: any) => {
    setCountryValue(e)
  }

  const handleAreaOfInterest = (e: any) => {
    setAreaOfInterest(e)
  }

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
        <Field name='businessName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessName' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Middle Name</label>
        <Field name='businessName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessName' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Last Name</label>
        <Field name='businessName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessName' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Additional Email Address</label>
        <Field name='businessName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessName' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Primary Phone Number</label>
        <Field name='businessName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessName' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Country of Residence</label>
        <AsyncSelect
          name='businessType'
          className='form-select form-select-lg form-select-solid'
          options={countryOptions}
          value={countryValue}
          onChange={handleCountryChange}
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessType' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Areas of Interest</label>
        <AsyncSelect
          name='businessType'
          className='form-select form-select-lg form-select-solid'
          options={areaOptions}
          value={areaOfInterest}
          defaultOptions
          cacheOptions
          isMulti
          onChange={handleAreaOfInterest}
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessType' />
        </div>
      </div>
      <div className='fv-row mb-10'>Terms &amp; Conditions:</div>
      <input type='checkbox' required />
      <div className='fv-row mb-10'>
        <p>I agree to the Terms &amp; Conditions of DIASPREX International</p>
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
export { Step3 }
