/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {KTSVG} from '../../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
const Step1: FC = (props: any) => {
  const [industry, setIndustry] = useState('')
  const [accountType, setAccountType] = useState('')

  const handleFormSubmit = (e: any) => {
    props.setUserType(e.target.value)
    setAccountType(e.target.value)
    if (e.accountType != 'basic') setIndustry(e)
  }
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Choose Account Type
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Registration is dependent on your selected account type'
          ></i>
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/faqs' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>
      <div className='fv-row'>
        <div className='row'>
          <form onChange={(e) => handleFormSubmit(e)}>
            <div className='col-lg-12'>
              <Field
                type='checkbox'
                className='btn-check'
                name='accountTypeBasic'
                value='basic'
                id='kt_create_account_form_account_type_basic'
              />
              <label
                className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
                htmlFor='kt_create_account_form_account_type_basic'
              >
                <KTSVG
                  path='/media/icons/duotune/communication/com005.svg'
                  className='svg-icon-3x me-5'
                />
                <span className='d-block fw-bold text-start'>
                  <span className='text-dark fw-bolder d-block fs-4 mb-2'>Basic User</span>
                  <span className='text-gray-400 fw-bold fs-6'>
                    For interacting on the platform with limited accesses
                  </span>
                </span>
              </label>
            </div>
            <div className='col-lg-12'>
              <Field
                type='checkbox'
                className='btn-check'
                name='accountTypeEnabler'
                value='enabler'
                id='kt_create_account_form_account_type_enabler'
              />
              <label
                className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
                htmlFor='kt_create_account_form_account_type_enabler'
              >
                <KTSVG
                  path='/media/icons/duotune/communication/com006.svg'
                  className='svg-icon-3x me-5'
                />
                <span className='d-block fw-bold text-start'>
                  <span className='text-dark fw-bolder d-block fs-4 mb-2'>Enabler Account</span>
                  <span className='text-gray-400 fw-bold fs-6'>
                    Create account to act as an Enabler or Investor &emsp;
                    <Field
                      type='radio'
                      value='individual'
                      name='accountTypeEnabler'
                      required
                      className='m-1'
                    />
                    Individual &emsp;
                    <Field
                      type='radio'
                      value='business'
                      name='accountTypeEnabler'
                      required
                      className='m-1'
                    />
                    Business
                  </span>
                </span>
              </label>
            </div>
            <div className='col-lg-12'>
              <Field
                type='checkbox'
                className='btn-check'
                name='accountTypeSponsor'
                value='sponsor'
                id='kt_create_account_form_account_type_sponsor'
              />
              <label
                className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
                htmlFor='kt_create_account_form_account_type_sponsor'
              >
                <KTSVG
                  path='/media/icons/duotune/finance/fin006.svg'
                  className='svg-icon-3x me-5'
                />
                <span className='d-block fw-bold text-start'>
                  <span className='text-dark fw-bolder d-block fs-4 mb-2'>Sponsor Account</span>
                  <span className='text-gray-400 fw-bold fs-6'>
                    Create account to act as a Sponsor of a project in Africa
                  </span>
                </span>
              </label>
            </div>
            <div className='text-danger mt-2'>
              <ErrorMessage name='accountType' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export {Step1}
