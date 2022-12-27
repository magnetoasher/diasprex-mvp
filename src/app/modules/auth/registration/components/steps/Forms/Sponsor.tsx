import React, {FC, useMemo, useState} from 'react'
import {Field, ErrorMessage} from 'formik'
// @ts-ignore
import PaymentForm from '../../../../components/CreditCard'
// @ts-ignore
import AsyncSelect from 'react-select'
import countryList from 'react-select-country-list'
import {StateListUS} from '../../../../../../../_metronic/partials/content/selectionlists'

const Sponsor = () => {
  const [countryValue, setCountryValue] = useState({})
  const countryOptions = useMemo(() => countryList().getData(), [])
  const [dataObj, setDataObj] = useState({
    isRegistered: '',
  })

  const handleChange = (type: any, value: any) => {
    setDataObj({
      ...dataObj,
      [type]: value,
    })
  }
  const handleCountryChange = (e: any) => {
    setCountryValue(e)
  }
  const areaOptions = [
    {value: '', label: 'Select the closest'},
    {value: 'management', label: 'Management'},
    {value: 'accounting', label: 'Accounting'},
    {value: 'finance', label: 'Finance'},
    {value: 'civil', label: 'Civil'},
    {value: 'engineering', label: 'Engineering'},
    {value: 'mechanical', label: 'Mechanical'},
    {value: 'engineering', label: 'Engineering'},
    {value: 'oil_Gas', label: 'Oil and Gas'},
    {value: 'manufacturing', label: 'Manufacturing'},
    {value: 'mining_extraction', label: 'Mining and Extraction'},
    {value: 'environment', label: 'Environment'},
    {value: 'agriculture', label: 'Agriculture'},
    {value: 'marketing', label: 'Marketing'},
    {value: 'sales_marketing', label: 'Sales and Marketing'},
    {value: 'information_technology', label: 'Information Technology'},
    {value: 'transportation', label: 'Transportation'},
    {value: 'technology', label: 'Technology'},
    {value: 'water_resources', label: 'Water  Resources'},
    {value: 'public_health', label: 'Public Health'},
    {value: 'health_care', label: 'Health Care'},
    {value: 'biotechnology', label: 'Biotechnology'},
    {value: 'entertainment', label: 'Entertainment'},
    {value: 'journalism', label: 'Journalism'},
    {value: 'law', label: 'Law'},
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
        <label className='form-label required'>Name of Organization</label>
        <Field name='orgName' className='form-control form-control-lg' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='orgName' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Is your business registered?</label>
        <div role='group' aria-labelledby='my-radio-group'>
          <Field
            type='radio'
            value='Yes'
            name='orgRegistered'
            className='m-3'
            // checked={dataObj.isRegistered === 'Yes'}
            // onChange={(e: any) => handleChange('isRegistered', e.target.value)}
          />
          Yes &emsp;
          <Field
            type='radio'
            value='No'
            name='orgRegistered'
            className='m-3'
            // checked={dataObj.isRegistered === 'No'}
            // onChange={(e: any) => handleChange('isRegistered', e.target.value)}
          />
          No
        </div>
        <div className='text-danger mt-2'>
          <ErrorMessage name='orgRegistered' />
          <ErrorMessage name='isRegistered' />
          {/* {dataObj.isRegistered === 'No' && (
            <p>Sorry, you need a registered business to continue</p>
          )} */}
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Organization Type</label>
        <div role='group' aria-labelledby='my-radio-group'>
          <Field type='radio' value='business' name='orgType' className='m-3' />
          Business
          <Field type='radio' value='government' name='orgType' className='m-3' />
          Government &emsp;
          <Field type='radio' value='nonProfit' name='orgType' className='m-3' />
          Not-for-Profit &emsp;
        </div>
        <div className='text-danger mt-2'>
          <ErrorMessage name='orgType' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Industry</label>
        <Field component='select' name='industry' className='form-select form-select-lg'>
          {areaOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='industry' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>
          Country organization is registered or incorporated
        </label>
        <Field
          component='select'
          name='orgRegCountry'
          className='form-select form-select-lg'
          onChange={(e: any) => handleCountryChange(e.target.value)}
        >
          <option value=''>Select a country</option>
          {countryOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {/* <ReactCountryFlag
                  countryCode={option.value}
                  svg
                  style={{fontSize: '2em', lineHeight: '2em'}}
                /> */}
              {option.label}
            </option>
          ))}
        </Field>

        <div className='text-danger mt-2'>
          <ErrorMessage name='orgRegCountry' component='span' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>State/Province business registered or Incorporated</label>
        {countryValue === 'US' ? (
          <Field name='orgRegState' component='select' className='form-select form-select-lg'>
            <StateListUS />
          </Field>
        ) : (
          <Field name='orgRegState' className='form-control form-control-lg' />
        )}
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='orgRegState' />
        </div> */}
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Organization Physical Address</label>
        <Field name='orgAddress' className='form-control form-control-lg' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='orgAddress' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label'>
          Organization Mailing address (if different from physical address)
        </label>
        <Field name='orgMailingAddress' className='form-control form-control-lg' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='orgMailingAddress' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <h3>Contact Information (Only a staff of the business should complete this section)</h3>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>First Name</label>
        <Field name='fName' className='form-control form-control-lg' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='fName' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label'>Middle Initial</label>
        <Field name='mName' className='form-control form-control-lg' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='mInitial' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Last Name</label>
        <Field name='lName' className='form-control form-control-lg' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='lName' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Email Address</label>
        <Field name='email' className='form-control form-control-lg' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='email' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Primary Phone Number</label>
        <div className='d-flex flex-row mw-100 form-control form-control-lg'>
          <Field
            type='text'
            maxLength={5}
            name='phone.code'
            className='form-control mw-100px'
            placeholder='Intl code'
          />
          <Field
            type='text'
            maxLength={9}
            name='phone.phonenumber'
            className='form-control form-control-lg'
            placeholder='xxx-xxx-xxxx'
          />
        </div>
        {/* <div className='d-flex flex-row mw-100 form-control form-control-lg form-control-solid'>
            <PhoneInput
              inputStyle={{width: '100px'}}
              international
              defaultCountry='US'
              placeholder='Enter phone number'
              value={phoneNumber}
              onChange={() => setPhoneNumber}
            />
          </div> */}
        <div className='text-danger mt-2'>
          <ErrorMessage name='phone.code' component='span' />
        </div>
        <div className='text-danger mt-2'>
          <ErrorMessage name='phone.phonenumber' component='span' />
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label required'>Role at the Organization</label>
        <Field name='orgRole' className='form-control form-control-lg' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='orgRole' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>
          Professional Interests (Select up to four applicable areas)
        </label>
        <Field
          component='select'
          name='interest'
          className='form-select form-select-lg'
          multiple
          size='3'
          selectpicker
          data-live-search='true'
          cacheOptions
        >
          {areaOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        {/* <AsyncSelect
          name='interest'
          className='form-select form-select-lg form-select-solid'
          options={professions}
          // value={dataObj.professional_interest}
          defaultOptions
          cacheOptions
          isMulti
          onChange={(e: any) => handleChange('professional_interest', e)}
        /> */}
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='interest' />
        </div> */}
      </div>

      <div className='fv-row mb-10'>Terms &amp; Conditions:</div>
      <div className='fv-row mb-10'>
        <label>
          <Field type='checkbox' name='dpxterms' className='me-3' />I agree to the Terms &amp;
          Conditions of DIASPREX INC.
        </label>
        <div className='text-danger mt-2'>
          <ErrorMessage name='dpxterms' component='span' />
        </div>
      </div>

      {/* <div className='fv-row mb-10'>
        <label>
          <Field type='checkbox' name='sponsorterms' className='me-3' />I agree to the Terms &amp;
          Conditions of DIASPREX Sponsors
        </label>
        <div className='text-danger mt-2'>
          <ErrorMessage name='sponsorterms' component='span' />
        </div>
      </div> */}

      <div className='fv-row mb-10'>
        <label>
          <Field type='checkbox' name='emailcommunicate' className='me-3' />
          Email me relevant information from DIASPREX
        </label>
        {/* <div className='text-danger mt-2'>
            <ErrorMessage name='emailcommunicate' component='span' />
          </div> */}
      </div>
    </div>
  )
}

export default Sponsor
