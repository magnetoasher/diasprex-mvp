import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {IRemittanceDetails, remittanceDetailsInitValues as initialValues} from '../PreferencesModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {CountryList} from '../../../../../../_metronic/partials/content/selectionlists'

const preferencesSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  company: Yup.string().required('Company name is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  companySite: Yup.string().required('Company site is required'),
  country: Yup.string().required("Sender's country is required"),
  rcountry: Yup.string().required("Reciepient's country is required"),
  currency: Yup.string().required('Currency is required'),
})

const RemittancePreferences: React.FC = () => {
  const [data, setData] = useState<IRemittanceDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IRemittanceDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IRemittanceDetails>({
    initialValues,
    validationSchema: preferencesSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        values.communications.email = data.communications.email
        values.communications.phone = data.communications.phone
        values.autoretain = data.autoretain
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
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Remittance Preferences</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Sender's Information</h3>
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
                      disabled={true}
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
                      disabled={true}
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

            <div className='row mb-6 mt-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Preferred Phone</span>
              </label>

              <div className='col-lg-8 fv-row'>
                {/* <label className="form-label">Enter your primary phone contact for remittance activities</label> */}
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Preferred phone number'
                  disabled={true}
                  {...formik.getFieldProps('contactPhone')}
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
                <span className='required'>Sender's Country</span>
              </label>
              <div className='col-lg-8 fv-row'>
                {/* <label className="form-label">Select your country of residence</label> */}
                <select
                  disabled={true}
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

            <div className='row mb-6 mt-6 content-align-center'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Preffered Recipient's Information</h3>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Preferred Recipient</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder=" Recipient's first name"
                      {...formik.getFieldProps('rfName')}
                    />
                    {formik.touched.fNamerecpt && formik.errors.fNamerecpt && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.fNamerecpt}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    {/* <label className="form-label">Enter primary recipients last name</label> */}
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder=" Recipient's last name"
                      {...formik.getFieldProps('rlName')}
                    />
                    {formik.touched.lNamerecpt && formik.errors.fNamerecpt && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.lNamerecpt}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Recipient's Country</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg fw-bold'
                  {...formik.getFieldProps('country')}
                >
                  <CountryList />
                </select>
                {formik.touched.recipientctr && formik.errors.recipientctr && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.recipientctr}</div>
                  </div>
                )}
                <div className='form-text'>Please select recipient's country.</div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Currency</label>

              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  {...formik.getFieldProps('currency')}
                >
                  <option value=''>Select a currency..</option>
                  <option value='USD'>USD - USA dollar</option>
                  <option value='GBP'>GBP - British pound</option>
                  <option value='AUD'>AUD - Australian dollar</option>
                  <option value='JPY'>JPY - Japanese yen</option>
                  <option value='SEK'>SEK - Swedish krona</option>
                  <option value='CAD'>CAD - Canadian dollar</option>
                  <option value='CHF'>CHF - Swiss franc</option>
                  <option value='NGR'>NGR - Nigerian naira</option>
                  <option value='KES'>KES - Kenyan chilling</option>
                  <option value='GHS'>GHS - Ghanian cedi</option>
                </select>
                {formik.touched.currency && formik.errors.currency && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.currency}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Communication</label>

              <div className='col-lg-8 fv-row'>
                <div className='d-flex align-items-center mt-3'>
                  <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.email}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: !data.communications?.email,
                            phone: data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Email</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Phone</span>
                  </label>
                </div>
              </div>
            </div>

            <div className='row mb-0'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Auto Retainer</label>

              <div className='col-lg-8 d-flex align-items-center'>
                <div className='form-check form-check-solid form-switch fv-row'>
                  <input
                    className='form-check-input w-45px h-30px'
                    type='checkbox'
                    id='autoretainer'
                    defaultChecked={data.autoretain}
                    onChange={() => {
                      updateData({autoretain: !data.autoretain})
                    }}
                  />
                  <label className='form-check-label'></label>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                  Preferred MTO
                </label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg'
                    {...formik.getFieldProps('prefmto')}
                  >
                    <option value=''>Select your preferred MTO..</option>
                    <option value='USD'>Money Gram</option>
                    <option value='GBP'>Nala Pay</option>
                    <option value='AUD'>Remitly</option>
                  </select>
                  {formik.touched.currency && formik.errors.currency && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.currency}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Save Changes'}
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

export {RemittancePreferences}
