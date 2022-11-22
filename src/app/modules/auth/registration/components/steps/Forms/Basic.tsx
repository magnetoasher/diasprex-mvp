import React, {FC, useMemo, useState} from 'react'
import {Field, ErrorMessage} from 'formik'

// @ts-ignore
import AsyncSelect from 'react-select'
import countryList from 'react-select-country-list'
import ReactCountryFlag from 'react-country-flag'
import 'react-phone-number-input/style.css'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'
import {getCountries, getCountryCallingCode} from 'react-phone-number-input/input'
// import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {CountryList} from '../../../../../../../_metronic/partials/content/selectionlists'

const Basic: FC = () => {
  const countryOptions = useMemo(() => countryList().getData(), [])

  const [countryValue, setCountryValue] = useState({})
  const [areaOfInterest, setAreaOfInterest] = useState([])
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const areaOptions = [
    {value: 'acturarial', label: 'Acturarial'},
    {value: 'analytics & research', label: 'Analytics & Research'},
    {value: 'administrative/clerical', label: 'Administrative/Clerical'},
    {value: 'business intellegence & marketing', label: 'Business Intellegence & Marketing'},
    {value: 'claim', label: 'Claims'},
    {value: 'communications', label: 'Communications'},
    {value: 'customer service', label: 'Customer Service'},
    {value: 'corporate service', label: 'Corporate Service'},
    {value: 'human resources', label: 'Human Resources'},
    {value: 'legal', label: 'legal'},
    {value: 'finance and accounting', label: 'Finance and Accounting'},
    {value: 'nurse', label: 'Nursing'},
    {value: 'marketing', label: 'Marketing'},
    {value: 'project management', label: 'Project Management'},
    {value: 'operations', label: 'Operations'},
    {value: 'sales', label: 'Sales'},
    {value: 'technology', label: 'Technology'},
    {value: 'underwriting', label: 'Underwriting'},
    {value: 'other', label: 'Other'},
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

      <div>
        <div className='fv-row mb-10'>
          <label className='form-label required'>First Name</label>
          <Field
            name='fName'
            type='text'
            placeholder='Enter your first name'
            className='form-control form-control-lg'
          />

          <div className='text-danger mt-2'>
            <ErrorMessage name='fName' component='span' />
          </div>
        </div>
        <div className='fv-row mb-10'>
          <label className='form-label'>Middle Initial</label>
          <Field
            name='mInitial'
            type='text'
            placeholder='Enter your middle intial'
            className='form-control form-control-lg'
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='mInitial' />
          </div>
        </div>
        <div className='fv-row mb-10'>
          <label className='form-label required'>Last Name</label>
          <Field
            name='lName'
            type='text'
            placeholder='Enter your last name'
            className='form-control form-control-lg'
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='lName' component='span' />
          </div>
        </div>
        <div className='fv-row mb-10'>
          <label className='form-label required'>Email Address</label>
          <Field
            name='email'
            type='email'
            placeholder='Please enter a valid email'
            className='form-control form-control-lg'
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='email' component='span' />
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
              className='form-control'
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
          <label className='form-label required'>Country of Origin</label>
          <Field as='select' name='countryOrig' className='form-select form-select-lg'>
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
            <ErrorMessage name='countryOrig' component='span' />
          </div>
        </div>
        <div className='fv-row mb-10'>
          <label className='form-label required'>Country of Residence</label>
          <Field component='select' name='countryRes' className='form-select form-select-lg'>
            <option value=''>Select a country</option>
            {countryOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>

          <div className='text-danger mt-2'>
            <ErrorMessage name='countryRes' component='span' />
          </div>
        </div>
        <div className='fv-row mb-10'>
          <label className='form-label'>Areas of Interest (Choose most related)</label>

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
            options={areaOptions}
            value={areaOfInterest}
            defaultOptions
            cacheOptions
            isMulti
            onChange={handleAreaOfInterest}
          /> */}
          <div className='text-danger mt-2'>
            <ErrorMessage name='interest' component='span' />
          </div>
        </div>
        <div className='fv-row fw-bold mb-10'>Terms &amp; Conditions:</div>

        <div className='fv-row mb-10'>
          <label>
            <Field type='checkbox' name='dpxterms' className='me-3' />I agree to the Terms &amp;
            Conditions of DIASPREX INC.
          </label>
          <div className='text-danger mt-2'>
            <ErrorMessage name='dpxterms' component='span' />
          </div>
        </div>

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
    </div>
  )
}

export default Basic
