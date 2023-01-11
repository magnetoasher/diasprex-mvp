import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {
  IRemittanceDetails,
  remittanceDetailsInitValues as initialValues,
} from '../../../Remittance/Components/Preferences/PreferencesModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {CountryList} from '../../../../../_metronic/partials/content/selectionlists'

const loanrequestSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  address: Yup.string().required('Address is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  companySite: Yup.string().required('Company site is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  rcountry: Yup.string().required("Reciepient's country is required"),
  currency: Yup.string().required('Currency is required'),
})

export const LoanRequest: React.FC = () => {
  const [data, setData] = useState<IRemittanceDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IRemittanceDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IRemittanceDetails>({
    initialValues,
    validationSchema: loanrequestSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        values.communications.email = data.communications.email
        values.communications.phone = data.communications.phone
        values.allowMarketing = data.allowMarketing
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_request_loan_form'
        aria-expanded='true'
        aria-controls='kt_request_loan_form'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Request a Loan Application</h3>
        </div>
      </div>

      <div id='kt_request_loan_form' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder mb-6 text-muted'>
                  Please Note: This form is to request for loan application. Not for loan
                  determining loan eligibility{' '}
                </h3>
              </div>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Borrowers Information</h3>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    {/* <label className="form-label">Enter your firs tname</label> */}
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='First name'
                      {...formik.getFieldProps('fName')}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.fName}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    {/* <label className="form-label">Enter your last name</label> */}
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='Last name'
                      {...formik.getFieldProps('lName')}
                    />
                    {formik.touched.lName && formik.errors.lName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.lName}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className='row mb-6 mt-6 content-align-center'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Address</h3>
              </div>
            </div>

            <div className='row mb-6 mt-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Street</span>
              </label>

              <div className='col-lg-8 fv-row'>
                {/* <label className="form-label">Enter your primary phone contact for remittance activities</label> */}
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Please enter your street'
                  {...formik.getFieldProps('street')}
                />
                {formik.touched.contactPhone && formik.errors.contactPhone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.contactPhone}</div>
                  </div>
                )}
              </div>
            </div>
            <div className='row mb-6 mt-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>City</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Please enter your city'
                  {...formik.getFieldProps('city')}
                />
                {formik.touched.contactPhone && formik.errors.contactPhone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.contactPhone}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6 mt-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Zip Code/Postal Code</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Please enter your Zip or Postal code'
                  {...formik.getFieldProps('zipcode')}
                />
                {formik.touched.contactPhone && formik.errors.contactPhone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.contactPhone}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Country</span>
              </label>
              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg fw-bold'
                  {...formik.getFieldProps('country')}
                >
                  <CountryList />
                </select>
                {formik.touched.country && formik.errors.country && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.country}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>State</span>
              </label>
              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg fw-bold'
                  {...formik.getFieldProps('state')}
                >
                  <CountryList />
                </select>
                {formik.touched.country && formik.errors.country && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.country}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6 mt-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Primary Phone</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Preferred phone number'
                  {...formik.getFieldProps('contactPhone')}
                />
                {formik.touched.contactPhone && formik.errors.contactPhone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.contactPhone}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6 mt-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Loan Request Amount (USD)</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Loan request in nearest USD'
                  {...formik.getFieldProps('contactPhone')}
                />
                {formik.touched.contactPhone && formik.errors.contactPhone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.contactPhone}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='reset' className='btn btn-light me-2' disabled={loading}>
              {!loading && 'Discard'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>

            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Submit'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
