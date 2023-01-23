/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {KTSVG} from '../../../../../../_metronic/helpers'
import {IDeactivateProfile, deactivateProfile} from '../SettingsModel'
import SweetAlert from 'react-bootstrap-sweetalert'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {ICreateAccount} from '../../../../auth/registration/components/CreateAccountWizardHelper'

const deactivateProfileSchema = Yup.object().shape({
  confirm: Yup.boolean().oneOf([true], 'Please check the box to deactivate your profile'),
})
type Props = {
  profile?: ICreateAccount
}
const DeactivateProfile: React.FC<Props> = ({profile}) => {
  const [loading, setLoading] = useState(false)
  const [accountType, setAccountType] = useState(localStorage.getItem('userTypeFull'))
  const [openSweetAlert, setOpenSweetAlert] = useState(false)
  const onConfirm = () => {}
  const onCancel = () => {
    setOpenSweetAlert(false)
  }

  const formik = useFormik<IDeactivateProfile>({
    initialValues: {
      ...deactivateProfile,
    },
    validationSchema: deactivateProfileSchema,
    onSubmit: () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
      alert('Profile has been successfully deleted!')
    },
  })

  return (
    <div className='card'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_profile_deactivate'
        aria-expanded='true'
        aria-controls='kt_profile_deactivate'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Deactivate Account</h3>
        </div>
      </div>

      <div id='kt_profile_deactivate' className='collapse show'>
        <form onSubmit={formik.handleSubmit} id='kt_profile_deactivate_form' className='form'>
          <div className='card-body border-top p-9'>
            <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6'>
              <KTSVG
                path='/media/icons/duotune/general/gen044.svg'
                className='svg-icon-2tx svg-icon-warning me-4'
              />

              <div className='d-flex flex-stack flex-grow-1'>
                <div className='fw-bold'>
                  <h4 className='text-gray-800 fw-bolder'>You Are Deactivating Your Profile</h4>
                  <div className='fs-6 text-gray-600'>
                    For extra security, this requires admin confirmation for Enablers and Sponsors.
                    <br />
                    <a className='fw-bolder' href='/faqs'>
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <label
                style={{
                  fontWeight: 600,
                  fontSize: '14px',
                }}
              >
                Deactivate Account
              </label>
            </div>
            <div>
              <button
                type='button'
                className='btn btn-danger btn-active-light-primary px-6'
                onClick={() => {
                  setOpenSweetAlert(true)
                }}
              >
                Deactivate Account
              </button>
            </div>
          </div>
          <SweetAlert
            title={'Account Deactivation'}
            onConfirm={onConfirm}
            onCancel={onCancel}
            showCancel={true}
            show={openSweetAlert}
          >
            <div>
              {accountType !== 'basic_enabler' ? (
                <h3>
                  Please contact the admin at{' '}
                  <a className='btn btn-link' href='#'>
                    admin@diasprex.com{' '}
                  </a>{' '}
                  to deactivate your account.
                </h3>
              ) : (
                <h3>Are you sure to permanently delete your account?</h3>
              )}
            </div>
          </SweetAlert>

          {/* <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button
              id='kt_profile_deactivate_profile_submit'
              type='submit'
              className='btn btn-danger fw-bold'
            >
              {!loading && 'Deactivate Profile'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export {DeactivateProfile}
