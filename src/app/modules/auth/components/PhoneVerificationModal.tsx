import {validateClaims} from '@okta/okta-auth-js'
import {useFormik} from 'formik'
import {FC, useEffect, useLayoutEffect, useState} from 'react'
import {isError} from 'react-query'
import * as Yup from 'yup'
import {KTSVG} from '../../../../_metronic/helpers'
import {Modal} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {
  countryCodeSet,
  phoneNumberSet,
  verifiedSet,
} from '../../profile/redux/PhoneVerificationSlice'
import {IPhoneVerification} from '../registration/components/CreateAccountWizardHelper'
import {CountryCodeList} from '../../../../_metronic/partials/content/selectionlists'

type Props = {
  id: string
  headertext: string
  title: string
  labeltext: string
  placeholder: string
  showVerifyPhone: boolean
  setShowVerifyPhone: any
  phoneCode: string
  phoneNumber: string
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
  showVerifyPhone,
  setShowVerifyPhone,
  phoneCode,
  phoneNumber,
}) => {
  const handleClose = () => setShowVerifyPhone(false)
  const handleShowTimer = () => {}
  const [isPhoneConfirmed, setIsPhoneConfirmed] = useState(false)
  // const phoneVerificationData: IPhoneVerification = useSelector((state) => state.phoneverification)

  const formik = useFormik({
    initialValues: inits,
    // validateOnChange: true,
    validationSchema: phoneValidationSchema,

    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)

      setIsPhoneConfirmed(true)
    },
  })

  // console.log('ShowVerify', showVerifyPhone)

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
  // console.log('ShowModal', showVerifyPhone)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(phoneNumberSet(phoneNumber))
    dispatch(countryCodeSet(phoneCode))
    dispatch(verifiedSet(isPhoneConfirmed))
  }, [phoneCode, phoneNumber, isPhoneConfirmed])

  return (
    <Modal show={showVerifyPhone} onHide={handleClose} onShow={handleShowTimer} id={id}>
      {/* <div className='modal fade' id={id} tabIndex={-1} aria-hidden='true'> */}
      <Modal.Header>
        <Modal.Title>{headertext}</Modal.Title>

        <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
          <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon svg-icon-2x' />
        </div>
      </Modal.Header>

      <Modal.Body className='modal-body scroll-y pt-10 pb-15 px-lg-17'>
        <div className='py-5'>
          <h3 className='text-dark fw-bold fs-3 mb-5'>{title}</h3>

          <div className='text-muted fw-semibold mb-10'>{labeltext}</div>
          <form className='form'>
            <input
              type='tel'
              // {...formik.getFieldProps('smscode')}
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
      </Modal.Body>
      <Modal.Footer>
        <div className='d-flex flex-center'>
          <button type='button' className='btn btn-primary' onClick={() => formik.handleSubmit}>
            <span className='indicator-label'>Submit</span>
            <span className='indicator-progress'>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          </button>
          <button type='reset' className='btn btn-light me-3' onClick={handleClose}>
            Cancel
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}