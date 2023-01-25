import {validateClaims} from '@okta/okta-auth-js'
import {useFormik} from 'formik'
import {FC, useEffect} from 'react'
import {isError} from 'react-query'
import * as Yup from 'yup'
import {KTSVG} from '../../../../_metronic/helpers'
type Props = {
  id: string
  headertext: string
  title: string
  labeltext: string
  placeholder: string
}

const inits = {
  smscode: '',
}
const phoneValidationSchema = Yup.object().shape({
  smscode: Yup.string().length(6, 'Invalid code. Too short').required('Opps! Code cannot be empty'),
})

export const PhoneVerificationModal: FC<Props> = ({
  headertext,
  id,
  title,
  labeltext,
  placeholder,
}) => {
  const formik = useFormik({
    initialValues: inits,
    // validateOnChange: true,
    validationSchema: phoneValidationSchema,

    onSubmit: async (values, {setSubmitting}) => {
      // setSubmitting(true)
      const errors = {token: ''}
      if (values.smscode.length < 5) {
        errors.token = 'Invalid code. Too short.'
      } else {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 1000)
      }
    },
  })

  const AutoSubmitCode = (e: any) => {
    // Grab values and submitForm from context
    // const {values, submitForm} = useFormikContext()
    useEffect(() => {
      // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
      if (e.length === 6) {
        formik.handleSubmit()
      }
    }, [e])
    return null
  }

  return (
    <div className='modal fade' id={id} tabIndex={-1} aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered mw-650px'>
        <div className='modal-content'>
          <div className='modal-header flex-stack'>
            <h2>{headertext}</h2>

            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr061.svg'
                className='svg-icon svg-icon-2x'
              />
            </div>
          </div>

          <div className='modal-body scroll-y pt-10 pb-15 px-lg-17'>
            <div className='py-5'>
              <h3 className='text-dark fw-bold fs-3 mb-5'>{title}</h3>

              <div className='text-muted fw-semibold mb-10'>{labeltext}</div>
              <form className='form'>
                <input
                  type='tel'
                  {...formik.getFieldProps('smscode')}
                  name='smscode'
                  className='form-control'
                  placeholder={placeholder}
                  autoComplete='off'
                  disabled={formik.isSubmitting}
                  onChange={(e) => {
                    AutoSubmitCode(e)
                  }}
                />
                {formik.touched.smscode && formik.errors.smscode && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.smscode}</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
