import React, {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'
import Swal from 'sweetalert2'
import {
  CountriesCodeList,
  SponsorCountryList,
} from '../../../../../../_metronic/partials/content/selectionlists'
import {VerificationModal} from '../../../components/verificationmodal'

type Props = {
  userType?: any
}
const PhoneVerification: FC<Props> = ({userType}) => {
  const [phoneIsConfirmed, setPhoneIsConfirmed] = useState()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isValidPhone, setIsValidPhone] = useState(false)
  const [phoneCode, setPhoneCode] = useState('+1')
  const [selectedCountry, setSelectedCountry] = useState('united states')
  const CountriesList = userType === 'enabler' ? CountriesCodeList : SponsorCountryList
  const handlePhoneValidate = (value: any) => {
    const isValid = isValidPhoneNumber(value)

    if (isValid) {
      setIsValidPhone(isValid)
      Swal.fire({
        text: 'Thank you, but we still need to verify your phone',
        icon: 'success',
        buttonsStyling: false,
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
      })
    } else
      Swal.fire({
        text: 'Invalid phone number',
        icon: 'warning',
        buttonsStyling: false,
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
      })
  }
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>
          Phone Verification (The country code is used to determine the country of residence and
          geolocation)
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>
          Please enter your primary phone contact with country code
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Primary Phone Number</label>
        <span className='d-flex me-2'>
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
                  {CountriesList.map((option) => (
                    <a
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
          <Field
            name='phonenumber'
            className='form-control form-control-lg'
            onChange={(e: any) => {
              setPhoneNumber(e.target.value)
            }}
          />
        </span>

        <div className='text-danger mt-2'>
          <ErrorMessage name='phonenumber' component='span' />
        </div>
      </div>

      {!isValidPhone && (
        <div
          className='btn btn-light btn-active-ligth-success'
          onClick={async () => await handlePhoneValidate(`${phoneCode}${phoneNumber}`)}
        >
          Verify Phone Number
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

      {/* <div className='mb-10 fv-row'>
        <label className='form-label mb-3'>Phone Number</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='phone.phonenumber'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='phone.phonenumber' />
        </div>
      </div> */}

      <VerificationModal
        id='modal_phoneVerification'
        headertext='Verify Your Phone Number'
        title='Please enter the 6 digit code sent to your device'
        labeltext='Enter your mobile phone number with country code'
        placeholder='Mobile number with country code...'
      />
    </div>
  )
}

export {PhoneVerification}
