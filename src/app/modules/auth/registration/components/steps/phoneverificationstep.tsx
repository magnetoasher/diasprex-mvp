//@ts-nocheck
import React, {FC, useEffect, useLayoutEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'
import Swal from 'sweetalert2'
import {
  CountriesCodeList,
  SponsorCountryList,
} from '../../../../../../_metronic/partials/content/selectionlists'

import {PhoneVerificationModal} from '../../../components/PhoneVerificationModal'
import {countrySet} from '../../../../profile/redux/PhoneVerificationSlice'
import axios, {AxiosPromise, AxiosResponse} from 'axios'
import {useDispatch} from 'react-redux'
import {IGeoData} from '../CreateAccountWizardHelper'
import {IPhoneVerification} from '../CreateAccountWizardHelper'
import {useSelector} from 'react-redux'
// type Props = {
//   props: any
// }

const PhoneVerificationStep: FC = (props: any) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isValidPhone, setIsValidPhone] = useState(false)
  const [phoneCode, setPhoneCode] = useState('+1')
  const [selectedCountry, setSelectedCountry] = useState('united states')
  const CountriesList = props.userType === 'enabler' ? CountriesCodeList : SponsorCountryList
  const [showVerifyPhone, setShowVerifyPhone] = useState(false)
  const [isPhoneConfirmed, setIsPhoneConfirmed] = useState(false)
  const [locationData, setLocationData] = useState<IGeoData>()
  const phoneVerificationData: IPhoneVerification = useSelector((state) => state.phoneverification)

  const handlePhoneFieldValue = (e) => {
    if (isPhoneConfirmed) {
      props.setFieldValue('phonenumber', `${phoneCode}${e.target.value}`)
    }
  }
  useEffect(() => {
    setIsPhoneConfirmed(phoneVerificationData.verified)
    // handlePhoneFieldValue()
    console.log('PhoneConfirmed', isPhoneConfirmed)
  }, [phoneCode, phoneNumber, phoneVerificationData.verified])

  const handleNavigator = (pos: any) => {
    const {latitude, longitude} = pos.coords
    const userCountryCode = LookupCountry({latitude, longitude})
    console.log('CountryCode', userCountryCode)
    // setCountry(userCountryCode)
  }

  const handlePhoneValidate = (value: any) => {
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
      setIsValidPhone(isValid)
    }
  }

  // const LookupCountry = ({latitude, longitude}: any) => {
  //   const URL = `${process.env.REACT_APP_GOOGLE_GEOCODING_API_URL}?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_DIASPREX_GOOGLE_MAP_API_KEY}`
  //   const getLocationData = () => {
  //     return axios.get(URL).then((d: AxiosResponse) => {
  //       setLocationData(d.data.results.filter(({types}: any) => types.includes('country'))[0])
  //       // console.log('GeoData', d.data.results)
  //       return d.data
  //     })
  //   }
  //   getLocationData()
  // }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleNavigator, () =>
      console.warn('permission was rejected')
    )
  }, [])

  const short_name = locationData?.address_components[0].short_name
  const long_name = locationData?.address_components[0].long_name
  const countryLocation = {short: short_name, label: long_name}

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(countrySet(countryLocation))
  }, [short_name, long_name])

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
            <input
              type='text'
              name='phonenumber'
              className='form-control form-control-lg'
              placeholder='Enter your phone number'
              onChange={(e: any) => {
                e.preventDefault()
                handlePhoneFieldValue()
                setIsValidPhone(false)
                setPhoneNumber(e.target.value)
              }}
            />
          </span>
        </div>

        <div className='text-danger mt-2'>
          <ErrorMessage name='phonenumber' component='span' />
        </div>
      </div>

      {!isPhoneConfirmed && (
        <div
          className='btn btn-primary btn-active-ligth-success'
          onClick={async () => await handlePhoneValidate(`${phoneCode}${phoneNumber}`)}
        >
          Verify Phone
        </div>
      )}

      <PhoneVerificationModal
        setPhoneFiledValue={props.setFieldValue}
        showVerifyPhone={showVerifyPhone}
        setShowVerifyPhone={setShowVerifyPhone}
        phoneCode={phoneCode}
        phoneNumber={phoneNumber}
        id='modal_phoneVerification'
        headertext='Verify Your Phone Number'
        title='Please enter the 6 digit code sent to your device'
        labeltext='Enter your mobile phone number with country code'
        placeholder='Enter the code sent to (xxx)-XXX-XXXX'
      />

      {/* <VerificationModal
        id='modal_phoneVerification'
        headertext='Verify Your Phone Number'
        title='Please enter the 6 digit code sent to your device'
        labeltext='Enter your mobile phone number with country code'
        placeholder='Mobile number with country code...'
        showVerifyPhone={showVerifyPhone}
      /> */}
    </div>
  )
}

export {PhoneVerificationStep}
