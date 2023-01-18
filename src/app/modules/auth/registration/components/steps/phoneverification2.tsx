import React, {FC, useState, useEffect} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'
import Swal from 'sweetalert2'
import {
  CountriesCodeList,
  SponsorCountryList,
} from '../../../../../../_metronic/partials/content/selectionlists'
import {VerificationModal} from '../../../components/verificationmodal'
import Input, {getCountries, getCountryCallingCode} from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en.json'
import 'react-phone-number-input/style.css'

type Props = {
  userType?: any
}
const PhoneVerification2: FC<Props> = ({userType}) => {
  const [phoneNumber, setPhoneNumber] = useState()
  const [country, setCountry] = useState()
  const [phoneIsConfirmed, setPhoneIsConfirmed] = useState()

  const [isValidPhone, setIsValidPhone] = useState(false)
  const [phoneCode, setPhoneCode] = useState('+1')
  const [selectedCountry, setSelectedCountry] = useState('united states')
  const CountriesList = userType === 'enabler' ? CountriesCodeList : SponsorCountryList

  const handleNavigator = (pos: any) => {
    const {latitude, longitude} = pos.coords
    const userCountryCode = lookupCountry({latitude, longitude})
    // setCountry(userCountryCode)
  }

  const lookupCountry = ({latitude, longitude}: any) => {
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_DIASPREX_GOOGLE_MAP_API_KEY}`
    const locationData = async () => await fetch(URL).then((res) => res.json())
    console.log('Location', locationData)
    // const [{address_components}] = locationData.results.filter(({types}:any) =>
    //   types.includes('country')
    // )
    // const [{short_name}] = address_components
    // return short_name
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleNavigator, () =>
      console.warn('permission was rejected')
    )
  }, [])

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
  const CountrySelect = ({value, onChange, labels, ...rest}: any) => (
    <select {...rest} value={value} onChange={(event) => onChange(event.target.value || undefined)}>
      <option value=''>{labels.ZZ}</option>
      {getCountries().map((country) => (
        <option key={country} value={country}>
          {labels[country]} +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>
  )
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
        <div>
          <label htmlFor='countrySelect'>Country Select</label>
          <CountrySelect labels={en} value={country} onChange={setCountry} name='countrySelect' />
        </div>
        <div>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <Input
            country={country}
            value={phoneNumber}
            onChange={() => {}}
            placeholder='Enter phone number'
            name='phoneNumber'
          />
        </div>
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='phonenumber' component='span' />
        </div> */}
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

export {PhoneVerification2}
