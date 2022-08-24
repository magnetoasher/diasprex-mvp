import React, { FC, useMemo, useState } from 'react'
import { Field, ErrorMessage } from 'formik'
// @ts-ignore
import PaymentForm from '../../../../components/CreditCard'
const Sponsor = () => {
    const [dataObj, setDataObj] = useState({})

    const handleChange = (type: any, value: any) => {
        setDataObj({
            ...dataObj,
            [type]: value,
        });
    };

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
                <Field name='business_name' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("business_name", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>


            <div className='fv-row mb-10'>
                <label className='form-label required'>Organization Type</label>
                <div role="group" aria-labelledby="my-radio-group">
                    <Field type='radio' value='government' name='type' className="m-3" />
                    Government &emsp;
                    <Field type='radio' value='nonProfit' name='type' className="m-3" />
                    Not-for-Profit
                </div>
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>

            <div className='fv-row mb-10'>
                <label className='form-label required'>Organization Physical Address</label>
                <Field name='business_address' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("business_address", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Organization Mailing address (if different
                    from  physical address)</label>
                <Field name='email_address' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("email_address", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>

            {/* <PaymentForm /> */}

            <div className='fv-row mb-10'>
                <label className='form-label '> Verification Status:</label>
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>

            <div className='fv-row mb-10'>
                <h3>Contact Information</h3>
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
                <label className='form-label required'>Role at the Organization</label>
                <Field name='role_at_organization' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("role_at_organization", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>

            <div className='fv-row mb-10'>Terms &amp; Conditions:</div>
            <input type='checkbox' required />
            <div className='fv-row mb-10'>
                <p>I agree to the Terms &amp; Conditions of DIASPREX Sponsors</p>
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

export default Sponsor