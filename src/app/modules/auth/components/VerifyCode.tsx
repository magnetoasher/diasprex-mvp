import React, {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {verifyCode} from '../redux/AuthCRUD'

const initialValues = {
  codeString: '',
}

const verifyCodeSchema = Yup.object().shape({
  codeString: Yup.string()
      .min(6, '6 digits code')
      .max(6, '6 digits code')
      .required('Code is required')
})

export function VerifyCode(props: any) {
  const {email, completeRegistration} = props
  const [loading, setLoading] = useState(false)
  const [verified, setVerified] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: verifyCodeSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        verifyCode(email, values.codeString)
          .then((data) => {
            setHasErrors(false)
            setVerified(true)
            completeRegistration(setStatus, setSubmitting, setLoading)
          })
          .catch(() => {
            setLoading(false)
            setHasErrors(true)
            setSubmitting(false)
            setStatus('The confirmation code is incorrect')
          })
      }, 1000)
    },
  })

  return (
    <>
      <form
        className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
        noValidate
        id='kt_login_password_reset_form'
        onSubmit={formik.handleSubmit}
      >
        <div className='text-center mb-10'>
          {/* begin::Title */}
          <h1 className='text-dark mb-3'>Confirmation Code</h1>
          {/* end::Title */}

          {/* begin::Link */}
          <div className='text-gray-400 fw-bold fs-4'>Check your email for the confirmation code</div>
          {/* end::Link */}
        </div>

        {/* begin::Title */}
        {hasErrors === true && (
          <div className='mb-lg-15 alert alert-danger'>
            <div className='alert-text font-weight-bold'>
              Sorry, looks like there are some errors detected, please try again.
            </div>
          </div>
        )}

        {hasErrors === false && (
          <div className='mb-10 bg-light-info p-8 rounded'>
            <div className='text-info'>Email Confirmed!</div>
          </div>
        )}
        {/* end::Title */}

        {/* begin::Form group */}
        <div className='fv-row mb-10'>
          <label className='form-label fw-bolder text-gray-900 fs-6'>Code</label>
          <input
            type='text'
            placeholder='Confirmation Code'
            autoComplete='off'
            {...formik.getFieldProps('codeString')}
            className={clsx(
              'form-control form-control-lg form-control-solid',
              {'is-invalid': formik.touched.codeString && formik.errors.codeString},
              {
                'is-valid': formik.touched.codeString && !formik.errors.codeString,
              }
            )}
          />
          {formik.touched.codeString && formik.errors.codeString && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.codeString}</span>
              </div>
            </div>
          )}
        </div>
        {/* end::Form group */}

        {/* begin::Form group */}
        {!verified && <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
          <button
            type='submit'
            id='kt_password_reset_submit'
            className='btn btn-lg btn-primary fw-bolder me-4'
          >
            {!loading && <span className='indicator-label'>Confirm</span>}
            {loading && <span className='indicator-label'>Please Wait...</span>}
          </button>
          <Link to='/auth'>
            <button
              type='button'
              id='kt_login_password_reset_form_cancel_button'
              className='btn btn-lg btn-light-primary fw-bolder'
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Cancel
            </button>
          </Link>{' '}
        </div>}
        {/* end::Form group */}
      </form>
    </>
  )
}
