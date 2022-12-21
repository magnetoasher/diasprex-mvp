import {FC, createContext, useMemo, useState, useContext, useEffect, useRef} from 'react'
import {toAbsoluteUrl, WithChildren} from '../../../helpers'
import {KTSVG} from '../../../helpers'
import {Link} from 'react-router-dom'
import {useFormik, FormikValues, FormikContext} from 'formik'
import countryList from 'react-select-country-list'
import axios from 'axios'
import * as Yup from 'yup'
import {uadFormModel} from '../../../../app/modules/Diasporas/components/core/_model'

type remitModel = {
  fName: string
  mInitial: string
  lName: string
  countryRes: string
  recFirstName: string
  recLastName: string
  recCountry: string
  recdpxnumber: string
  amount: number
  retainerpct: number
  comment: string
  mto: string
}

const initialRemitValues: remitModel = {
  fName: '',
  mInitial: '',
  lName: '',
  countryRes: '',
  recFirstName: '',
  recLastName: '',
  recCountry: '',
  recdpxnumber: '',
  amount: 0,
  retainerpct: 0,
  comment: '',
  mto: 'remitly',
}

const mtopartners = [
  {
    title: 'Remitly',
    value1: 'remitly',
    default: true,
  },

  {
    title: 'Nala',
    value1: 'nala',
    default: false,
  },
  {
    title: 'MoneyGram',
    value1: 'moneygram',
    default: false,
  },
]

const remitSchema = Yup.object().shape({
  // fName: Yup.string()
  //   .min(1, 'Minimum 3 symbols')
  //   .max(50, 'Maximum 50 symbols')
  //   .required('Name is required'),
  // lName: Yup.string()
  //   .min(1, 'Minimum 3 symbols')
  //   .max(50, 'Maximum 50 symbols')
  //   .required('Name is required'),
  // email: Yup.string()
  //   .email('Wrong email format')
  //   .min(3, 'Minimum 3 symbols')
  //   .max(50, 'Maximum 50 symbols')
  //   .required('Email is required'),
  // phone: Yup.string()
  //   .min(3, 'Minimum 3 symbols')
  //   .max(50, 'Maximum 50 symbols')
  //   .matches(phoneRegExp, 'Phone number is not valid')
  //   .required('Primary Phone is required'),
  // countryRes: Yup.string().required('Country of Residence is required'),
  recFirstName: Yup.string()
    .min(1, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Recipient's firt name is required"),
  recLastName: Yup.string()
    .min(1, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Recipient's last name is required"),
  recCountry: Yup.string().required("Recipient's country is required"),
  // comment: Yup.string()
  //   .min(5, 'minimum 5 characters')
  //   .max(3000, 'maximum 3000 characters')
  //   .required('Professional summary is required'),
  amount: Yup.number()
    .moreThan(0, 'Amount must be more than 0')
    .required('Amount to send is missing'),
  // retainerpct: Yup.number().moreThan(0, 'Just a reminder you can retain something').nullable(),
  mto: Yup.string().required('please select an mto for this transaction'),
  //   )
})

// type RemitContextProps = {
//   Response: remitModel
//   setResponse?: any
// }

// export const RemitValuesContext = createContext<RemitContextProps>({Response: initialRemitValues})
// export const RemitContextProvider: FC<WithChildren> = ({children}) => {
//   const [remitValues, setRemitValues] = useState(initialRemitValues)
//   return (
//     <RemitValuesContext.Provider value={{Response: remitValues, setResponse: setRemitValues}}>
//       {children}
//     </RemitValuesContext.Provider>
//   )
// }

export const SendMoneyModal: FC = () => {
  const userType = localStorage.getItem('userType')
  const userTypeFull = localStorage.getItem('userTypeFull')
  const countryOptions = useMemo(() => countryList().getData(), [])
  const [remitValues, setRemitValues] = useState(initialRemitValues)
  // const {Response, setResponse} = useContext(RemitValuesContext)

  const formik = useFormik({
    initialValues: initialRemitValues,
    onSubmit: (values, {setSubmitting}) => {
      setSubmitting(true)

      const data = {
        ...values,
        dateSubmitted: new Date(),
      }
      try {
        setRemitValues(data)
      } catch (error) {
        error = console.log(error)
      } finally {
        formik.resetForm()
      }
    },
    validationSchema: remitSchema,
  })

  useEffect(() => {
    console.log('RemitValuesContext', remitValues)
  }, [remitValues])

  return (
    <div className='modal fade' id='kt_send_money_modal' data-bs-menu='true'>
      <div className='modal-dialog mw-900px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>

          <div className='modal-body scroll-y mx-5 mx-xl-18 pb-15'>
            <div className='text-center mb-5'>
              <h1 className='mb-3'>Send Money</h1>

              <div className='text-muted fw-bold fs-5'>
                You are sending money through a third party MTO partner
                {/* <a href='#' className='link-primary fw-bolder'>
                  {' '}
                  FAQ Page
                </a> */}
              </div>
            </div>
            {userType !== 'sponsor' && userTypeFull === 'basic_enabler' && (
              <div className='d-flex flex-column mb-5 mt-4 p-5 bg-primary rounded '>
                <div className='text-center text-white fw-bold fs-3 mb-5'>
                  We noticed you are not taking full advantage of our remittance retainer service.
                  You can qualify for full fee waiver by upgrading to a paid Enabler's account
                </div>
                <div className='d-flex justify-content-center'>
                  <button
                    type='button'
                    className='btn btn-light-primary rounded-circle me-2'
                    data-bs-toggle='modal'
                    data-bs-target='#upgrade_plan'
                  >
                    Upgrade Plan
                  </button>
                </div>
              </div>
            )}

            <>
              <form onSubmit={formik.handleSubmit}>
                <div className='mw-900px'>
                  {/* <!--begin::Input group--> */}

                  <div className='mb-10'>
                    <label className='form-label'>Enter the recipient's firstname</label>
                    <input
                      {...formik.getFieldProps('recFirstName')}
                      name='recFirstName'
                      type='text'
                      className='form-control'
                      placeholder="Recipient's Firstname"
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                    {formik.touched.recFirstName && formik.errors.recFirstName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block text-danger'>
                          <span role='alert'>{formik.errors.recFirstName}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Enter the recipient's lastname</label>
                    <input
                      {...formik.getFieldProps('recLastName')}
                      name='recLastName'
                      type='text'
                      className='form-control'
                      placeholder="Recipient's Lastname"
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                    {formik.touched.recLastName && formik.errors.recLastName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block text-danger'>
                          <span role='alert'>{formik.errors.recLastName}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Enter the recipient's Diasprex ID</label>
                    <input
                      {...formik.getFieldProps('recdpxnumber')}
                      name='recdpxnumber'
                      type='text'
                      className='form-control'
                      placeholder="Recipient's DPX ID"
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                  </div>

                  <div className=' mb-10'>
                    <label className='form-label'>Select recipient's country</label>
                    <select
                      className='form-select form-select-white'
                      aria-label='recCountry'
                      {...formik.getFieldProps('recCountry')}
                      name='recCountry'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    >
                      <option value=''>Select a country</option>
                      {countryOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {formik.touched.recCountry && formik.errors.recCountry && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block text-danger'>
                          <span role='alert'>{formik.errors.recCountry}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Enter the amount to send</label>
                    <div className='input-group'>
                      <span className='input-group-text'>
                        <i className='bi bi-graph-down fs-2'></i>
                      </span>
                      <input
                        {...formik.getFieldProps('amount')}
                        name='amount'
                        type='number'
                        className='form-control'
                        placeholder='Amount in US dollar'
                        autoComplete='off'
                        disabled={formik.isSubmitting}
                      />
                      <span className='input-group-text'>.00</span>
                    </div>
                    {formik.touched.amount && formik.errors.amount && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block text-danger'>
                          <span role='alert'>{formik.errors.amount}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='mb-10'>
                    <label className='form-label'>Percent to retain in Diasprex</label>
                    <div className='input-group'>
                      <span className='input-group-text'>
                        <i className='bi bi-graph-down fs-2'></i>
                      </span>
                      <input
                        {...formik.getFieldProps('retainerpct')}
                        name='retainerpct'
                        type='number'
                        className='form-control'
                        placeholder='Percent to retain'
                        autoComplete='off'
                        disabled={formik.isSubmitting}
                      />
                      <span className='input-group-text'>%</span>
                    </div>

                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block text-info'>
                        <span role='alert'>Just a reminder you can retain something</span>
                      </div>
                    </div>
                  </div>

                  <div className='separator d-flex flex-center mb-8'>
                    <label className='form-label'>Comments</label>
                  </div>

                  <textarea
                    className='form-control form-control-solid mb-8'
                    rows={3}
                    placeholder='Type your comment here'
                    {...formik.getFieldProps('comment')}
                    name='comment'
                    autoComplete='off'
                    disabled={formik.isSubmitting}
                  ></textarea>

                  <div className='mb-10'>
                    <div>
                      <label className='form-label'>Select a money transfer channel</label>
                    </div>

                    <div className='d-flex flex-row align-items-center'>
                      <div className='border border-2 border-gray-300 border-hover cursor-pointer me-5 mw-200px'>
                        <div className='d-flex input-group align-items-center px-5'>
                          <span className='input-group-text d-flex flex-row'>
                            <span className='form-check form-check-custom form-check-solid'>
                              <input
                                {...formik.getFieldProps('mto')}
                                className='form-check-input'
                                type='radio'
                                name='mto'
                                value='remitly'
                                disabled={formik.isSubmitting}
                              />
                              <img
                                src={toAbsoluteUrl('/media/logos/remitly-logo-rect.png')}
                                alt='mto1_logo'
                                className='mw-100'
                              />
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className='border border-2 border-gray-300 border-hover cursor-pointer me-5 mw-200px'>
                        <div className='d-flex input-group align-items-center px-5'>
                          <span className='form-check form-check-custom form-check-solid'>
                            <input
                              {...formik.getFieldProps('mto')}
                              className='form-check-input'
                              type='radio'
                              name='mto'
                              value='moneygram'
                              disabled={formik.isSubmitting}
                            />
                            <img
                              src={toAbsoluteUrl('/media/logos/moneygram-logo.png')}
                              alt='mto2_logo'
                              className='mw-100'
                            />
                          </span>
                        </div>
                      </div>

                      <div className='border border-2 border-gray-300 border-hover cursor-pointer me-5 mw-200px'>
                        <div className='d-flex input-group align-items-center px-5'>
                          <span className='form-check form-check-custom form-check-solid'>
                            <input
                              {...formik.getFieldProps('mto')}
                              className='form-check-input'
                              type='radio'
                              name='mto'
                              value='nala'
                              disabled={formik.isSubmitting}
                            />
                            <img
                              src={toAbsoluteUrl('/media/logos/nala-logo.png')}
                              alt='mto3_logo'
                              className='mw-100'
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <!--end::Input group--> */}
                  </div>
                  {/* <!--end::Input group--> */}
                </div>
                <div className='form-footer'>
                  <div className='text-center pt-15'>
                    <button type='button' className='btn btn-light me-2' data-bs-dismiss='modal'>
                      Discard
                    </button>

                    <button
                      type='submit'
                      className='btn btn-primary'
                      data-bs-toggle={
                        Object.keys(formik.touched).length !== 0 &&
                        Object.keys(formik.errors).length === 0
                          ? 'modal'
                          : ''
                      }
                      data-bs-target={
                        Object.keys(formik.touched).length !== 0 &&
                        Object.keys(formik.errors).length === 0
                          ? '#kt_proceed_modal'
                          : ''
                      }

                      // onClick={() => {
                      //   console.log('Clicked SubmitEvent', formik.errors, formik.touched)
                      // }}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </form>
            </>
          </div>
        </div>
      </div>
    </div>
  )
}
