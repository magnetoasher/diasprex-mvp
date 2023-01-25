import {FC, useState, useMemo, useEffect, forwardRef, createRef} from 'react'

import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {uadFormModel} from './core/_model'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'

import countryList from 'react-select-country-list'
import {AfricanCountryList} from '../../../../_metronic/partials/content/selectionlists'
import {UploadFile} from '../../../../_metronic/partials/modals/file-management/uploadfile'
import {phoneRegExp, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useNavigate} from 'react-router-dom'
import {OecdcountryList} from '../../../../_metronic/partials/content/selectionlists/oecdcountrylist'
import 'react-phone-number-input/style.css'
import Swal from 'sweetalert2'
import {CountriesCodeList} from '../../../../_metronic/partials/content/selectionlists'

import {VerificationModal} from '../../auth/components/verificationmodal'
import {PhoneVerificationModal} from '../../auth/components/PhoneVerificationModal'

const editUADSchema = Yup.object().shape({
  fName: Yup.string()
    .min(1, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
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
  //   .matches(phoneRegExp, 'Phone number is not valid')
  //   .required('Primary Phone is required'),
  // countryRes: Yup.string().required('Country of Residence is required'),
  // countryOrig: Yup.string().required('Country of Origin is required'),
  // summary: Yup.string()
  //   .min(5, 'minimum 5 characters')
  //   .max(3000, 'maximum 3000 characters')
  //   .required('Professional summary is required'),
  // interest: Yup.array()
  //   .min(1, 'At least one area of interest is required')
  //   .required('Area of interest is required'),

  // avatar: Yup.mixed()
  //   .required("*Avatar image is required")
  //   .test(
  //     "fileSize",
  //     "Image too large, max 8mb",
  //     value => value && value.size <= FILE_SIZE
  //   )
  //   .test(
  //     "fileFormat",
  //     "Images only",
  //     value => value && FILE_TYPES.includes(value.type)
  //   )
  dpxterms: Yup.boolean().required().label('Diasprex Terms and Conditions'),
})

export const UadFormPage: FC = () => {
  const [phoneValue, setPhoneValue] = useState('')
  const countryOptions = useMemo(() => countryList().getData(), [])
  const [countryResLabel, setCountryResLabel] = useState('united states')
  const [countryOrigLabel, setCountryOrigLabel] = useState('algeria')
  const [isPhoneConfirmed, setIsPhoneConfirmed] = useState(false)
  const [showVerifyPhone, setShowVerifyPhone] = useState(false)
  const [isValidPhone, setIsValidPhone] = useState(false)
  const [avatarFile, setAvatarFile] = useState(null)
  const [phoneCode, setPhoneCode] = useState('+1')
  const [selectedCountry, setSelectedCountry] = useState('united states')
  const navigate = useNavigate()

  const handleFormConfirm = () => {
    Swal.fire({
      text: 'Are you sure all information are entered correctly?',
      icon: 'warning',
      showCancelButton: true,
      buttonsStyling: false,
      confirmButtonText: 'Yes, Submit!',
      cancelButtonText: 'No, return',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-active-light',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(
        //   'SWAL',
        //   result.value,
        //   result.isConfirmed,
        //   result.isDismissed,
        //   result.dismiss,
        //   result.isDenied
        // )
        handleFormSubmit()
      } else if (result.isDismissed) {
        return
      }
    })
  }

  const handlePhoneValidate = (value: any) => {
    console.log('Button Clicked')
    const isValid = isValidPhoneNumber(value)
    // const PHONEAPI_URL = 'https://...'
    if (!isValid) {
      Swal.fire({
        text: 'Invalid phone number',
        icon: 'warning',
        buttonsStyling: false,
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
      })
    } else {
      setShowVerifyPhone(isValid)
    }
  }

  const handleFormSubmit = () => {
    formik.submitForm()
    Swal.fire({
      text: 'Congratutions! We have received your profile for Diasprex UAD',
      icon: 'success',
      buttonsStyling: false,
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    }).then((result) => {
      if (result) {
        handleNavigateDiasporas()
      }
    })
  }

  const handleNavigateDiasporas = () => {
    navigate({pathname: '/diasporas'})
  }

  const handleFormReset = (e: any) => {
    e.preventDefault()
    formik.resetForm()
    formik.setFieldValue('dpxterms', false)
  }

  const initialValues: uadFormModel = {
    fName: '',
    lName: '',
    dpxID: '',
    email: '',
    phone: '',
    countryRes: '',
    countryOrig: '',
    profession: '',
    undergrad: {
      inst: '',
      field: '',
      degree: 'B.S',
    },
    grad: {
      inst: '',
      field: '',
      degree: 'Ph.D',
    },
    summary: '',
    interest: ['', '', '', ''],
    insightAfrica: '',
    avatar: '',
  }
  const formik = useFormik({
    validateOnChange: true,
    enableReinitialize: true,
    initialValues,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      const data = {
        ...values,
        id: values.email,
        dateSubmitted: new Date(),
        status: 'New',
        phone: `${phoneCode}${values.phone}`,
      }
      try {
        !values.honeypot && values.dpxterms
          ? console.log('UADDATA', data)
          : // await axios
            //   .post(`${process.env.REACT_APP_DIASPREX_API_URL}/diaspora/create`, data)
            //   .then((res) => console.log('onSubmit', res))
            // .catch((error) => error)
            console.log('Robot Fill or Terms and Condition Error', data)
      } catch {
        console.log(formik.errors)
      } finally {
        // formik.resetForm()
        // navigate({pathname: '/diasporas'})
      }
    },
    validationSchema: editUADSchema,
  })

  const styleslabel = {
    display: 'flex',
    justifyContent: 'flex-end',
    fontWeight: 600,
  }

  useEffect(() => {
    if (formik.values.countryRes) {
      setCountryResLabel(formik.values.countryRes)
    }
    if (formik.values.countryOrig) {
      setCountryOrigLabel(formik.values.countryOrig.toLowerCase())
    }
  }, [formik.values.countryRes, formik.values.countryOrig])

  return (
    <div className='card  mw-960px'>
      <div className='card-header d-flex flex-column text-center mb-13'>
        <h1 className='mb-3'>Submit Your Profile</h1>
        <h3 className='text-muted fw-bold'>
          You are submitting your profile for Diasprex's monthly Feature
        </h3>
      </div>
      <div className='container'>
        <div className='card-body shadow-sm mx-5 mx-xl-18 pt-15 mb-15 pb-15'>
          <form>
            <div className='fv-row mb-10'>
              <label className='form-label required text-muted fw-bold fs-6 mb-2'>
                Enter your firstname
              </label>
              <input
                {...formik.getFieldProps('fName')}
                name='fName'
                type='text'
                className='form-control'
                placeholder='Enter your firstname'
                autoComplete='off'
                disabled={formik.isSubmitting}
              />
              {formik.touched.fName && formik.errors.fName && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block text-danger'>
                    <span role='alert'>{formik.errors.fName}</span>
                  </div>
                </div>
              )}
            </div>
            <div className='fv-row mb-10'>
              <label className='form-label required text-muted fw-bold fs-6 mb-2'>
                Enter your lastname
              </label>
              <input
                {...formik.getFieldProps('lName')}
                name='lName'
                type='text'
                className='form-control'
                placeholder='Enter your lastname'
                autoComplete='off'
                disabled={formik.isSubmitting}
              />
              {formik.touched.lName && formik.errors.lName && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block text-danger'>
                    <span role='alert'>{formik.errors.lName}</span>
                  </div>
                </div>
              )}
            </div>
            <div className='fv-row mb-10'>
              <label className='form-label text-muted fw-bold fs-6 mb-2'>
                Enter Diasprex ID if you are a member
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your Diasprex ID'
                {...formik.getFieldProps('dpxID')}
                name='dpxID'
                autoComplete='off'
                disabled={formik.isSubmitting}
              />
              {formik.touched.dpxID && formik.errors.dpxID && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.dpxID}</span>
                  </div>
                </div>
              )}
            </div>
            <div className='fv-row mb-10'>
              <label className='form-label required text-muted fw-bold fs-6 mb-2'>
                Enter a valid email
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your email'
                {...formik.getFieldProps('email')}
                name='email'
                autoComplete='off'
                disabled={formik.isSubmitting}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block text-danger'>
                    <span role='alert'>{formik.errors.email}</span>
                  </div>
                </div>
              )}
            </div>
            <div className='fv-row mb-10'>
              <label className='form-label required text-muted fw-bold fs-6 mb-2'>
                Enter a valid phone number
              </label>
              <div className='d-flex'>
                <div className='me-1'>
                  <button
                    className='btn btn-outline btn-active-light-primary dropdown-toggle'
                    type='button'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <span className='flagstrap-icon mw-100'>
                      <img
                        className='mw-15px m-0 me-2'
                        src={toAbsoluteUrl(`/media/flags/${selectedCountry}.svg`)}
                      />
                      {phoneCode}
                    </span>
                  </button>

                  <div
                    className='dropdown-menu menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-6 h=300px py-4 overflow-scroll'
                    data-kt-menu='true'
                  >
                    <div className='scroll h-200px'>
                      <ul style={{listStyle: 'none'}}>
                        {CountriesCodeList.map((option, index) => (
                          <a
                            key={index}
                            className='dropdown-item mb-2 h = 125px'
                            onClick={() => {
                              setPhoneCode(`+${option.phone}`)
                              setIsValidPhone(false)

                              setSelectedCountry(option.label)
                            }}
                          >
                            <li value={option.code} data-name={option.label}>
                              <span className='flagstrap-icon'>
                                <img
                                  className='mw-25px m-0 me-2'
                                  src={toAbsoluteUrl(`/media/flags/${option.label}.svg`)}
                                />
                              </span>
                              {`${option.label} (+${option.phone})`}
                            </li>
                          </a>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your phone number'
                  {...formik.getFieldProps('phone')}
                  name='phone'
                  autoComplete='off'
                  disabled={formik.isSubmitting}
                  onChange={(e) => {
                    e.preventDefault()
                    setIsValidPhone(false)
                    formik.handleChange({
                      target: {name: 'phone', value: e.target.value},
                    })
                  }}
                />
              </div>

              {formik.touched.phone && formik.errors.phone && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block text-danger'>
                    <span role='alert'>{formik.errors.phone}</span>
                  </div>
                </div>
              )}
            </div>
            {!isPhoneConfirmed && !isValidPhone && (
              <div
                className='btn btn-primary btn-active-ligth-success'
                onClick={async () =>
                  await handlePhoneValidate(`${phoneCode}${formik.values.phone}`)
                }
              >
                Continue
              </div>
            )}

            {/* <div className=' fv-row mb-10'>
              {!isValidPhone && (
                <div
                  className='btn btn-primary btn-active-ligth-success'
                  onClick={async () =>
                    await handlePhoneValidate(`${phoneCode}${formik.values.phone}`)
                  }
                >
                  Continue
                </div>
              )}

              {isValidPhone && (
                <div
                  className='btn btn-success btn-active-ligth-success'
                  data-bs-target='#modal_phoneVerification'
                  data-bs-toggle='modal'
                >
                  Verify
                </div>
              )}
            </div> */}

            {/* <VerificationModal
              id='modal_phoneVerification'
              headertext='Verify Your Phone Number'
              title='Please enter the 6 digit code sent to your device'
              labeltext='Enter your mobile phone number with country code'
              placeholder='Mobile number with country code...'
            /> */}

            <PhoneVerificationModal
              showVerifyPhone={showVerifyPhone}
              setShowVerifyPhone={setShowVerifyPhone}
              id='modal_phoneVerification'
              headertext='Verify Your Phone Number'
              title='Please enter the 6 digit code sent to your device'
              labeltext='Enter your mobile phone number with country code'
              placeholder='Enter the code sent to (xxx)-XXX-XXXX'
            />

            {isPhoneConfirmed && isValidPhone && (
              <>
                <div className=' fv-row mb-10'>
                  <label className='form-label text-muted required fw-bold fs-6 mb-2'>
                    Country of residence
                  </label>
                  <span className='d-flex flex-row'>
                    <div className='input-group-prepend'>
                      <div className='input-group' id='countryflag'>
                        <img
                          className='form-control mw-55px'
                          src={toAbsoluteUrl(`/media/flags/${selectedCountry}.svg`)}
                        />
                      </div>
                    </div>
                    <input
                      className='form-select form-select-white text-capitalize'
                      aria-label='countryRes'
                      {...formik.getFieldProps('countryRes')}
                      name='countryRes'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                      value={selectedCountry}
                    />
                  </span>
                  {formik.touched.countryRes && formik.errors.countryRes && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block text-danger'>
                        <span role='alert'>{formik.errors.countryRes}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className='fv-row mb-10'>
                  <label className='form-label text-muted required fw-bold fs-6 mb-2'>
                    Please select your country of origin
                  </label>
                  <span className='d-flex flex-row'>
                    <div className='input-group-prepend'>
                      <div className='input-group' id='countryflag'>
                        <img
                          className='form-control mw-55px'
                          src={toAbsoluteUrl(`/media/flags/${countryOrigLabel}.svg`)}
                        />
                      </div>
                    </div>

                    <select
                      className='form-select form-select-white'
                      aria-label='countryOrig'
                      {...formik.getFieldProps('countryOrig')}
                      name='countryOrig'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                      onChange={(e) => {
                        formik.handleChange({
                          target: {name: 'countryOrig', value: e.target.value},
                        })
                      }}
                    >
                      <AfricanCountryList />
                    </select>
                  </span>
                  {formik.touched.countryOrig && formik.errors.countryOrig && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block text-danger'>
                        <span role='alert'>{formik.errors.countryOrig}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className='fv-row mb-10'>
                  <label className='form-label text-muted fw-bold fs-6 mb-2'>
                    Enter your profession
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your profession'
                    {...formik.getFieldProps('profession')}
                    name='profession'
                    autoComplete='off'
                    disabled={formik.isSubmitting}
                  />
                  {formik.touched.profession && formik.errors.profession && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.profession}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className='fv-row mb-10'>
                  <label className='form-label text-muted fw-bold fs-6 mb-2'>
                    Please enter your undergraduate information
                  </label>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control me-2'
                      placeholder='Institution'
                      {...formik.getFieldProps('undergrad.inst')}
                      name='undergrad.inst'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                    <input
                      type='text'
                      className='form-control me-2'
                      placeholder='Field of study'
                      {...formik.getFieldProps('undergrad.field')}
                      name='undergrad.field'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                    <select
                      className='form-select form-select-white mb-2'
                      aria-label='country'
                      defaultValue='Degree'
                      {...formik.getFieldProps('undergrad.degree')}
                      name='undergrad.degree'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    >
                      <option> B.S</option>
                      <option> B.A</option>
                      <option> HND</option>
                      <option> OND</option>
                      <option> Associate</option>
                    </select>
                  </div>
                </div>

                <div className='fv-row mb-10'>
                  <label className='form-label text-muted fw-bold fs-6 mb-2'>
                    Please enetr your graduate school information if applicable
                  </label>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control me-2'
                      placeholder='Institution'
                      {...formik.getFieldProps('grad.inst')}
                      name='grad.inst'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                    <input
                      type='text'
                      className='form-control me-2'
                      placeholder='Field of study'
                      {...formik.getFieldProps('grad.field')}
                      name='grad.field'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                    <select
                      className='form-select form-select-white mb-2'
                      aria-label='country'
                      defaultValue='Degree'
                      {...formik.getFieldProps('grad.degree')}
                      name='grad.degree'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    >
                      <option> Ph.D</option>
                      <option> MS</option>
                      <option> MD</option>
                      <option> J.D</option>
                      <option> MBA</option>
                    </select>
                  </div>
                </div>
                <div className='fv-row mb-10'>
                  <label className='form-label required text-muted fw-bold fs-6 mb-2 text-primary'>
                    Please enter your professional summary (500 words max)
                  </label>

                  <textarea
                    className='form-control mb-2'
                    rows={5}
                    placeholder='Type your professional summary'
                    {...formik.getFieldProps('summary')}
                    name='summary'
                    autoComplete='off'
                    disabled={formik.isSubmitting}
                  ></textarea>
                  {formik.touched.summary && formik.errors.summary && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block text-danger'>
                        <span role='alert'>{formik.errors.summary}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className='fv-row mb-10'>
                  <label className='form-label required text-muted fw-bold fs-6 mb-2'>
                    Please list up to 4 professional interest
                  </label>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control me-2'
                      placeholder='Interest 1'
                      {...formik.getFieldProps('interest[0]')}
                      name='interest[0]'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                    <input
                      type='text'
                      className='form-control me-2'
                      placeholder='Interest 2'
                      {...formik.getFieldProps('interest[1]')}
                      name='interest[1]'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                    <input
                      type='text'
                      className='form-control me-2'
                      placeholder='Interest 3'
                      {...formik.getFieldProps('interest[2]')}
                      name='interest[2]'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                    <input
                      type='text'
                      className='form-control me-2'
                      placeholder='Interest 4'
                      {...formik.getFieldProps('interest[3]')}
                      name='interest[3]'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                  </div>
                  {formik.touched.interest && formik.errors.interest && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block text-danger'>
                        <span role='alert'>{formik.errors.interest}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className='fv-row mb-10'>
                  <label className='form-label text-muted'>Your Insight on Africa's Furture</label>

                  <textarea
                    className='form-control mb-8'
                    rows={3}
                    placeholder='Type your insight here'
                    {...formik.getFieldProps('insightAfrica')}
                    name='insightAfrica'
                    autoComplete='off'
                    disabled={formik.isSubmitting}
                  ></textarea>
                </div>

                {/* <div>
                    <button
                      type='button'
                      className='btn btn-primary'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_upload'
                    >
                      <span className='svg-icon svg-icon-2'>
                        <KTSVG
                          path='/media/icons/duotune/files/fil018.svg'
                          className='svg-icon-5 svg-icon-gray-600 me-1'
                        />
                      </span>
                      Upload Files
                    </button>
                  </div> */}
                <div className='row d-flex justify-content-center'>
                  <div className='col-lg-6 d-flex flex-column'>
                    <div className='fv-row mb-10'>
                      <label className='form-label text-muted' htmlFor='uadFile'>
                        Upload a profile photo or headshot
                      </label>
                      <div className='input-group'>
                        <input
                          type='file'
                          accept='image/*'
                          className='form-control'
                          id='uadFile'
                          {...formik.getFieldProps('avatar')}
                          name='avatar'
                          value={formik.values.avatar}
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        />
                        <button className='btn btn-secondary' type='button' id='upload'>
                          Upload
                        </button>
                      </div>
                    </div>

                    <div style={{display: 'none'}}>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Unfound African Diasporas'
                        {...formik.getFieldProps('honeypot')}
                        name='honeypot'
                        autoComplete='off'
                        disabled={formik.isSubmitting}
                      />
                    </div>

                    <div className='d-flex flex-column '>
                      <div className='fv-row fs-2 fw-bold mb-2'>Terms &amp; Conditions</div>
                      <div className='fv-row mb-5'>
                        <label>
                          <input
                            type='checkbox'
                            className='me-3'
                            {...formik.getFieldProps('dpxterms')}
                            name='dpxterms'
                            autoComplete='off'
                            disabled={formik.isSubmitting}
                            checked={formik.values.dpxterms === true}
                            onChange={() => {
                              formik.handleChange({
                                target: {name: 'dpxterms', value: !formik.values.dpxterms},
                              })
                            }}
                          />
                          I agree to the Terms &amp; Conditions of DIASPREX INC.
                        </label>
                        {formik.touched.dpxterms && formik.errors.dpxterms && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block text-danger'>
                              <span role='alert'>{formik.errors.dpxterms}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className='fv-row mb-5'>
                        <label>
                          <input
                            type='checkbox'
                            className='me-3'
                            {...formik.getFieldProps('publishcontactinfo')}
                            name='publishcontactinfo'
                            autoComplete='off'
                            disabled={formik.isSubmitting}
                            checked={formik.values.publishcontactinfo === true}
                            onChange={() => {
                              formik.handleChange({
                                target: {
                                  name: 'publishcontactinfo',
                                  value: !formik.values.publishcontactinfo,
                                },
                              })
                            }}
                          />
                          Publish my email and phone information so people can contact me.
                        </label>
                        {formik.touched.publishcontactinfo && formik.errors.publishcontactinfo && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block text-danger'>
                              <span role='alert'>{formik.errors.publishcontactinfo}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='g-recaptcha' data-sitekey='your_site_key'></div>
                  </div>
                </div>
              </>
            )}
            <div className='form-footer'>
              <div className='text-center pt-15'>
                <button
                  type='button'
                  className='btn btn-light-primary me-2'
                  onClick={(e) => {
                    handleFormReset(e)
                  }}
                >
                  Reset
                </button>
                <button
                  type='button'
                  className='btn btn-light-primary me-2'
                  onClick={(e) => {
                    handleNavigateDiasporas()
                  }}
                >
                  Cancel
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={(e) => {
                    // formik.handleSubmit()
                    handleFormConfirm()
                  }}
                  disabled={
                    Object.keys(formik.touched).length === 0 ||
                    Object.keys(formik.errors).length !== 0 ||
                    !formik.values.dpxterms
                  }
                  data-bs-dismiss={
                    Object.keys(formik.touched).length !== 0 &&
                    Object.keys(formik.errors).length === 0
                      ? 'modal'
                      : ''
                  }
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
