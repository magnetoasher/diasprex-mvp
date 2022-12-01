import React from 'react'
import {Formik, Form, FormikValues} from 'formik'
import {Field, ErrorMessage} from 'formik'

export const CheckingAccount = () => {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex flex-column mb-7 fv-row'>
        <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
          <span className='required'>Routing Number</span>
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Specify the routing number'
          ></i>
        </label>

        <Field
          type='text'
          className='form-control form-control-solid'
          placeholder=''
          name='routingNumber'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='routingNumber' />
        </div>
      </div>
      <div className='d-flex flex-column mb-7 fv-row'>
        <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
          <span className='required'>Account Number</span>
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Specify the account number'
          ></i>
        </label>

        <Field
          type='text'
          className='form-control form-control-solid'
          placeholder=''
          name='accountNumber'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='accountNumber' />
        </div>
        <div className='text-danger mt-2'>
          <p className='text-dark'>Your bank account must be checking account.</p>
        </div>
      </div>
      <div className='d-flex flex-column mb-7 fv-row'>
        <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
          <span className='required'>Confirm Account Number</span>
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Confirm the account number'
          ></i>
        </label>

        <Field
          type='text'
          className='form-control form-control-solid'
          placeholder=''
          name='accountNumberConfirm'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='accountNumberConfirm' />
        </div>
      </div>
      <div className='d-flex flex-stack'>
        <div className='me-5'>
          <label className='fs-6 fw-bold form-label'>Save account information?</label>
          <div className='fs-7 fw-bold text-gray-400'>
            Save account information for future funds transfer
          </div>
        </div>

        <label className='form-check form-switch form-check-custom form-check-solid'>
          <Field className='form-check-input' type='checkbox' value='1' name='saveAccount' />
          <span className='form-check-label fw-bold text-gray-400'>Save Account</span>
        </label>
      </div>
    </div>
  )
}
