// @ts-ignore
import React, {FC, useMemo, useState} from 'react'
import {Field, ErrorMessage} from 'formik'
import countryList from 'react-select-country-list'
import {
  AfricanCountryList,
  IndustryList,
} from '../../../../../../../_metronic/partials/content/selectionlists'
import {OecdcountryList} from '../../../../../../../_metronic/partials/content/selectionlists/oecdcountrylist'
import Input, {getCountries, getCountryCallingCode} from 'react-phone-number-input'

const Individual = () => {
  const countryOptions = useMemo(() => countryList().getData(), [])
  const [dataObj, setDataObj] = useState({
    area_of_interest: '',
    professional_interest: '',
  })
  const [phoneNumber, setPhoneNumber] = useState()

  const handleChange = (type: any, value: any) => {
    setDataObj({
      ...dataObj,
      [type]: value,
    })
  }

  const areaOptions = [
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
        <span className='d-flex me-2'>
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
        </span>

        {/* <div className='d-flex flex-row mw-100 form-control form-control-lg form-control'>
          <Input
            inputStyle={{}}
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
        <Field component='select' name='countryOrig' className='form-select form-select-lg'>
          <option value=''>Select a country</option>
          <AfricanCountryList />
        </Field>

        <div className='text-danger mt-2'>
          <ErrorMessage name='countryOrig' component='span' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Country of Residence</label>
        <Field component='select' name='countryRes' className='form-select form-select-lg'>
          <OecdcountryList />
        </Field>

        <div className='text-danger mt-2'>
          <ErrorMessage name='countryRes' component='span' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Profession</label>
        <Field
          name='profession'
          className='form-control form-control-lg'
          placeholder='Enter your profession'
        />

        <div className='text-danger mt-2'>
          <ErrorMessage name='profession' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Professional Field (Choose most related)</label>
        <Field component='select' name='proffield' className='form-select form-select-lg'>
          <IndustryList />
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='proffield' />
        </div>

        {/* <AsyncSelect
          name='areaOptions'
          className='form-select form-select-lg form-select-solid'
          options={areaOptions}
          value={dataObj.area_of_interest}
          onChange={(e: any) => handleChange('area_of_interest', e)}
        /> */}
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>Highest Degree</label>
        <Field
          component='select'
          name='degree'
          className='form-select form-select-lg'
          // onChange={(e: any) => handleChange('highest_degree', e.target.value)}
        >
          <option value=''> Select your highest degree</option>
          <option value='Associate'> Associate</option>
          <option value='OND'> OND</option>
          <option value='BS'> B.S</option>
          <option value='BA'> B.A</option>
          <option value='HND'> HND</option>
          <option value='PHD'> Ph.D</option>
          <option value='MS'> MS</option>
          <option value='MD'> MD</option>
          <option value='JD'> J.D</option>
          <option value='MBA'> MBA</option>
        </Field>
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='degree' />
        </div> */}
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

      {/* <div className='fv-row mb-10'>
        <label>
          <Field type='checkbox' name='enablerterms' className='me-3' />I agree to the Terms &amp;
          Conditions of DIASPREX Enablers
        </label>
        <div className='text-danger mt-2'>
          <ErrorMessage name='enablerterms' component='span' />
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

      {/* <input type='checkbox' required />
      <div className='fv-row mb-10'>
        <p>I agree to the Terms &amp; Conditions of DIASPREX Enablers</p>
      </div>
      <input type='checkbox' required />
      <div className='fv-row mb-10'>
        <p>I agree to the Terms &amp; Conditions of DIASPREX International</p>
      </div>
      <input type='checkbox' required />
      <div className='fv-row mb-10'>
        <p>Email me relevant information from DIASPREX</p>
      </div> */}
    </div>
  )
}

export default Individual
