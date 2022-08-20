import React, { FC, useMemo, useState } from 'react'
import { Field, ErrorMessage } from 'formik'
// @ts-ignore
import AsyncSelect from 'react-select'
import countryList from 'react-select-country-list'

const Business = () => {
    const countryOptions = useMemo(() => countryList().getData(), [])
    const [countryValue, setCountryValue] = useState({})
    const [dataObj, setDataObj] = useState({
        isRegistered: ""
    })

    const handleCountryChange = (e: any) => {
        setCountryValue(e)
    }
    const handleChange = (type: any, value: any) => {
        debugger
        setDataObj({
            ...dataObj,
            [type]: value,
        });
    };

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
                <label className='form-label required'>Name of Business</label>
                <Field name='business_name' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("business_name", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='business_name' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Business Physical Address</label>
                <Field name='business_address' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("business_address", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Business Mailing address (if different
                    from  physical address)</label>
                <Field name='email_address' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("email_address", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Industry</label>
                <Field name='industry' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("industry", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Is your business registered?
                </label>
                <div role="group" aria-labelledby="my-radio-group" onChange={(e: any) => handleChange("isRegistered", e.target.value)}>
                    <Field type='radio' value="Yes" name='type' className="m-3" />
                    Yes &emsp;
                    <Field type='radio' value="No" name='type' className="m-3" />
                    No
                </div>
                <div className='text-danger mt-2'>
                    {dataObj.isRegistered === "No" && <p>Sorry, you need a registered business to continue</p>
                    }
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Business registration number</label>
                <Field name='industry' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("industry", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Year business registered or incorporated</label>
                <Field name='industry' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("industry", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <label className='form-label required'>Country business registered or incorporated</label>
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
                <label className='form-label required'>State/Province business registered or Incorporated</label>
                <Field name='industry' className='form-control form-control-lg form-control-solid' onChange={(e: any) => handleChange("industry", e.target.value)} />
                <div className='text-danger mt-2'>
                    <ErrorMessage name='businessName' />
                </div>
            </div>
            <div className='fv-row mb-10'>
                <h3>Contact Information (Individuals only
                    complete  this section)</h3>
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

            <div className='fv-row mb-10'>
                <label className='form-label required'>Areas of Interest</label>
                <AsyncSelect
                    name='areaOptions'
                    className='form-select form-select-lg form-select-solid'
                    options={areaOptions}
                    onChange={(e: any) => handleChange("area_of_interest", e)}
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

export default Business