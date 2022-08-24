import React from 'react'
import { Formik, Form, FormikValues } from 'formik'
import { Field, ErrorMessage } from 'formik'

const CheckingAccount = () => {
    return (
        <>
            <div className='pb-10 pb-lg-15'>
                <h2 className='fw-bolder text-dark'>Billing Details</h2>

                <div className='text-gray-400 fw-bold fs-6'>
                    If you need more info, please check out
                    <a href='/dashboard' className='text-primary fw-bolder'>
                        {' '}
                        Help Page
                    </a>
                    .
                </div>
            </div>

            <div className='d-flex flex-column mb-7 fv-row'>
                <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                    <span className='required'>Routing Number</span>
                    <i
                        className='fas fa-exclamation-circle ms-2 fs-7'
                        data-bs-toggle='tooltip'
                        title="Specify the routing number"
                    ></i>
                </label>

                <Field
                    type='text'
                    className='form-control form-control-solid'
                    placeholder=''
                    name='routingNumber'
                />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='nameOnCard' />
                </div>
            </div>

            <div className='d-flex flex-column mb-7 fv-row'>
                <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                    <span className='required'>Account Number</span>
                    <i
                        className='fas fa-exclamation-circle ms-2 fs-7'
                        data-bs-toggle='tooltip'
                        title="Specify the account number"
                    ></i>
                </label>

                <Field
                    type='text'
                    className='form-control form-control-solid'
                    placeholder=''
                    name='accountNumber'
                />
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
                        title="Confirm the account number"
                    ></i>
                </label>

                <Field
                    type='text'
                    className='form-control form-control-solid'
                    placeholder=''
                    name='accountNumber'
                />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='nameOnCard' />
                </div>
            </div>

        </>
    )
}

export default CheckingAccount