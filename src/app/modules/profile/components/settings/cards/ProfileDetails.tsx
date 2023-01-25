import React, {useContext, useEffect, useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
// import { IProfileDetails, profileDetailsInitValues as initialValues } from '../SettingsModel'
import {
  IProfile,
  inits as initialValues,
} from '../../../../auth/registration/components/CreateAccountWizardHelper'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import axios from 'axios'
import {useOktaAuth} from '@okta/okta-react'
import {
  CountryList,
  YearList,
  StateListUS,
} from '../../../../../../_metronic/partials/content/selectionlists'
import {Field, ErrorMessage} from 'formik'

import {ListLoading} from '../../../../apps/admin-mgt-apps/core/loading/ListLoading'
import {profileContext} from '../../../../../context/profile'
import {createUserProfileAPI} from '../../../redux/ProfileAPI'
import Swal from 'sweetalert2'

const profileDetailsSchema = Yup.object().shape({
  // fName: Yup.string().required('First name is required'),
  // lName: Yup.string().required('Last name is required'),
  // email: Yup.string().email('Wrong email format'),
  // // orgName: Yup.string().required('Organization name is required'),
  // mobilePhone: Yup.string().required('Mobile phone is required'),
  // phonenumber: Yup.string().required('Primary phone is required'),
  // countryres: Yup.string().required('Country is required'),
  // orgRole: Yup.string().required('Role is required'),
  // address: Yup.string().required('Address is required'),
  // profession: Yup.string().required('Profession is required'),
  // degree: Yup.string().required('Degree is required'),
})
const areaOptions = [
  {value: 'acturarial', label: 'Acturarial'},
  {value: 'analytics & research', label: 'Analytics & Research'},
  {value: 'administrative/clerical', label: 'Administrative/Clerical'},
  {value: 'business intellegence & marketing', label: 'Business Intellegence & Marketing'},
  {value: 'claim', label: 'Claims'},
  {value: 'communications', label: 'Communications'},
  {value: 'customer service', label: 'Customer Service'},
  {value: 'corporate service', label: 'Corporate Service'},
  {value: 'human resources', label: 'Human Resources'},
  {value: 'legal', label: 'legal'},
  {value: 'finance and accounting', label: 'Finance and Accounting'},
  {value: 'nurse', label: 'Nursing'},
  {value: 'marketing', label: 'Marketing'},
  {value: 'project management', label: 'Project Management'},
  {value: 'operations', label: 'Operations'},
  {value: 'sales', label: 'Sales'},
  {value: 'technology', label: 'Technology'},
  {value: 'underwriting', label: 'Underwriting'},
  {value: 'other', label: 'Other'},
]
const ProfileDetails: React.FC<any> = (isLoading) => {
  const {authState} = useOktaAuth()
  const [data, setData] = useState<IProfile>(initialValues)
  const {profile} = useContext(profileContext)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DIASPREX_API_URL}/profile/${profile?.id}`).then((res) => {
      const newProfile = res.data.data[0]
      formik.setValues(newProfile)
    })
  }, [profile])

  const updateData = (fieldsToUpdate: Partial<IProfile>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }
  const [areaOfInterest, setAreaOfInterest] = useState(['Web', 'App', 'Mobile'])

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfile>({
    initialValues: data,
    enableReinitialize: true,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      createUserProfileAPI({
        ...values,
        id: profile?.id ?? '',
        usertype: profile?.usertype ?? '',
        countryres: profile?.countryres ?? '',
        subscriptiontier: profile?.subscriptiontier ?? '',
        status: profile?.status ?? '',
      }).then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Successfully done',
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something went wrong',
          })
        }
      })
      setData(values)
      formik.setValues(values)
      setLoading(false)
    },
  })

  let subscriptiontier = localStorage.getItem('userTypeFull')
  let usertype = localStorage.getItem('userType')

  return (
    <>
      {!profile ? (
        <ListLoading />
      ) : (
        <div className='card mb-5 mb-xl-10'>
          <div
            className='card-header border-0 cursor-pointer'
            role='button'
            data-bs-toggle='collapse'
            data-bs-target='#kt_profile_profile_details'
            aria-expanded='true'
            aria-controls='kt_profile_profile_details'
          >
            <div className='card-title m-0'>
              <h3 className='fw-bolder m-0'>Profile Details</h3>
            </div>
          </div>

          <div id='kt_profile_profile_details' className='collapse show'>
            <form onSubmit={formik.handleSubmit} noValidate className='form'>
              <div className='card-body border-top p-9'>
                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label fw-bold fs-6'>Avatar</label>
                  <div className='col-lg-8'>
                    <div
                      className='image-input image-input-outline'
                      data-kt-image-input='true'
                      style={{backgroundImage: `url(${toAbsoluteUrl(profile.avatar)})`}}
                    >
                      <div
                        className='image-input-wrapper w-125px h-125px'
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl('/media/logos/megold-logo.png')})`,
                        }}
                      ></div>
                      {/* end::Preview existing avatar */}

                      {/* begin::Label */}
                      <label
                        className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='change'
                        data-bs-toggle='tooltip'
                        title='Change Picture'
                      >
                        <i className='bi bi-pencil-fill fs-7'></i>

                        <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
                        <input type='hidden' name='avatar_remove' />
                      </label>
                      {/* end::Label */}

                      {/* begin::Cancel */}
                      {/* <span
                      className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                      data-kt-image-input-action='cancel'
                      data-bs-toggle='tooltip'
                      title='Cancel avatar'
                    >
                      <i className='bi bi-x fs-2'></i>
                    </span> */}
                      {/* end::Cancel */}

                      {/* begin::Remove */}
                      <span
                        className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                        data-kt-image-input-action='remove'
                        data-bs-toggle='tooltip'
                        title='Remove Picture'
                      >
                        <i className='bi bi-x fs-2'></i>
                      </span>
                      {/* end::Remove */}
                    </div>
                  </div>
                </div>

                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

                  <div className='col-lg-8'>
                    <div className='row'>
                      <div className='col-lg-4 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control mb-3 mb-lg-0'
                          placeholder='First name'
                          {...formik.getFieldProps('fName')}
                          name='fName'
                        />
                        {formik.touched.fName && formik.errors.fName && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.fName}</div>
                          </div>
                        )}
                      </div>

                      <div className='col-lg-4 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control'
                          placeholder='Middle initial'
                          {...formik.getFieldProps('mInitial')}
                          name='mInitial'
                        />
                        {formik.touched.mInitial && formik.errors.mInitial && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.mInitial}</div>
                          </div>
                        )}
                      </div>
                      <div className='col-lg-4 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control'
                          placeholder='Last name'
                          {...formik.getFieldProps('lName')}
                          name='lName'
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

                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label fw-bold fs-6'>
                    <span className='required'>
                      Email Address
                      {/* {user === 'basic_enabler' ? 'Additional Email Address' : 'Email Address'} */}
                    </span>
                  </label>

                  <div className='col-lg-8 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control'
                      placeholder='Email address'
                      {...formik.getFieldProps('email')}
                      name='email'
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.email}</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label fw-bold fs-6'>
                    <span className='required'>Primary Phone Number</span>
                  </label>

                  <div className='col-lg-8 fv-row'>
                    <input
                      type='tel'
                      className='form-control form-control-lg form-control'
                      placeholder='Phone number'
                      {...formik.getFieldProps('phonenumber')}
                      name='phonenumber'
                    />
                    {formik.touched.phonenumber && formik.errors.phonenumber && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.phonenumber}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label fw-bold fs-6'>
                    <span className='required'>Mobile Phone Number</span>
                  </label>

                  <div className='col-lg-8 fv-row'>
                    <input
                      type='tel'
                      className='form-control form-control-lg form-control'
                      placeholder='Mobile phone number'
                      {...formik.getFieldProps('mobilephone')}
                      name='mobilephone'
                    />
                    {formik.touched.mobilephone && formik.errors.mobilephone && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.mobilephone}</div>
                      </div>
                    )}
                  </div>
                </div>

                {usertype !== 'sponsor' && (
                  <>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Country of Origin
                      </label>

                      <div className='col-lg-8 fv-row'>
                        <select
                          className='form-select form-select form-select-lg fw-bold'
                          {...formik.getFieldProps('countryorig')}
                          name='countryorig'
                        >
                          <CountryList />
                        </select>
                        {formik.touched.countryorig && formik.errors.countryorig && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.countryorig}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Country of Residence
                      </label>

                      <div className='col-lg-8 fv-row'>
                        <select
                          className='form-select form-select form-select-lg fw-bold'
                          {...formik.getFieldProps('countryres')}
                          name='countryres'
                        >
                          <CountryList />
                        </select>
                        {formik.touched.countryres && formik.errors.countryres && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.countryres}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Areas of Interest
                      </label>

                      <div className='col-lg-8 fv-row'>
                        <select
                          className='form-select form-select form-select-lg fw-bold'
                          {...formik.getFieldProps('')}
                        >
                          {areaOfInterest.map((e, index) => (
                            <option key={index} value={e}>
                              {e}
                            </option>
                          ))}
                        </select>
                        {formik.touched.countryres && formik.errors.countryres && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.countryres}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {usertype !== 'sponsor' && subscriptiontier === 'business_enabler' && (
                  <>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Name of Business
                      </label>
                      <div className='col-lg-8 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control'
                          placeholder='Company name'
                          {...formik.getFieldProps('orgName')}
                          name='orgName'
                        />
                        {formik.touched.orgName && formik.errors.orgName && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgName}</div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Role at the Organization
                      </label>
                      <div className='col-lg-8 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control'
                          placeholder='Company name'
                          {...formik.getFieldProps('orgRole')}
                          name='orgRole'
                        />
                        {formik.touched.orgRole && formik.errors.orgRole && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgRole}</div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Business Physical Address
                      </label>
                      <div className='col-lg-8 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control'
                          placeholder='Business Physical Address'
                          {...formik.getFieldProps('orgAddress')}
                          name='orgAddress'
                        />
                        {formik.touched.orgAddress && formik.errors.orgAddress && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgAddress}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        {' '}
                        Business Mailing address
                      </label>
                      <div className='col-lg-8 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control'
                          placeholder='Business Mailing Address'
                          {...formik.getFieldProps('orgMailingAddress')}
                          name='orgMailingAddress'
                        />
                        {formik.touched.orgMailingAddress && formik.errors.orgMailingAddress && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgMailingAddress}</div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Industry
                      </label>
                      <div className='col-lg-8 fv-row'>
                        <select
                          className='form-select form-select form-select-lg fw-bold'
                          {...formik.getFieldProps('orgIndustry')}
                          name='orgIndustry'
                        >
                          <option value=''>Select Closest to Your Industry...</option>
                          <option value='AF'>Agriculture</option>
                          {/* <option value='AX'>Manufacturing</option>
                          <option value='AL'>Education</option>
                          <option value='DZ'>Transportation</option>
                          <option value='AS'>Biotechnology</option>
                          <option value='AD'>Aviation</option> */}
                          <option value='AD'>Healthcare</option>
                          {/* <option value='AD'>Hospitality</option>
                          <option value='AD'>Tourism</option> */}
                        </select>

                        {formik.touched.orgIndustry && formik.errors.orgIndustry && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgIndustry}</div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Business registration number
                      </label>
                      <div className='col-lg-8 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control'
                          placeholder='Business Registration Number'
                          {...formik.getFieldProps('orgRegNumber')}
                          name='orgRegNumber'
                        />
                        {formik.touched.orgRegNumber && formik.errors.orgRegNumber && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgRegNumber}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Year business registered or incorporated
                      </label>
                      <div className='col-lg-8 fv-row'>
                        <select
                          className='form-select form-select form-select-lg fw-bold'
                          {...formik.getFieldProps('orgRegYear')}
                          name='orgRegYear'
                        >
                          <YearList />
                        </select>
                        {formik.touched.orgRegYear && formik.errors.orgRegYear && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgRegYear}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Country business registered or incorporated
                      </label>

                      <div className='col-lg-8 fv-row'>
                        <select
                          className='form-select form-select form-select-lg fw-bold'
                          {...formik.getFieldProps('orgRegCountry')}
                          name='orgRegCountry'
                        >
                          <CountryList />
                        </select>
                        {formik.touched.orgRegCountry && formik.errors.orgRegCountry && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgRegCountry}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        State/Province business registered or Incorporated
                      </label>

                      <div className='col-lg-8 fv-row'>
                        <select
                          className='form-select form-select form-select-lg fw-bold'
                          {...formik.getFieldProps('orgRegState')}
                          name='orgRegState'
                        >
                          <StateListUS />
                        </select>
                        {formik.touched.orgRegState && formik.errors.orgRegState && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgRegCountry}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {usertype !== 'sponsor' && subscriptiontier !== 'basic_enabler' && (
                  <>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label fw-bold fs-6'>
                        <span className='required'>Highest Degree</span>
                      </label>

                      <div className='col-lg-8 fv-row'>
                        <input
                          type='tel'
                          className='form-control form-control-lg form-control-solid'
                          placeholder='Highest degree'
                          {...formik.getFieldProps('degree')}
                          name='degree'
                        />
                        {formik.touched.degree && formik.errors.degree && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.degree}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label fw-bold fs-6'>
                        <span className='required'>Profession</span>
                      </label>

                      <div className='col-lg-8 fv-row'>
                        <input
                          type='tel'
                          className='form-control form-control-lg form-control'
                          placeholder='Profession'
                          {...formik.getFieldProps('profession')}
                          name='profession'
                        />
                        {formik.touched.profession && formik.errors.profession && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.profession}</div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label fw-bold fs-6'>
                        <span className='required'>Professional Field</span>
                      </label>

                      <div className='col-lg-8 fv-row'>
                        <input
                          type='tel'
                          className='form-control form-control-lg form-control-solid'
                          placeholder='Professional field'
                          {...formik.getFieldProps('proffield')}
                          name='proffield'
                        />
                        {formik.touched.proffield && formik.errors.proffield && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.proffield}</div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label fw-bold fs-6'>
                        <span className='required'>Professional Interest</span>
                      </label>

                      <div className='col-lg-8 fv-row'>
                        <input
                          type='tel'
                          className='form-control form-control-lg form-control-solid'
                          placeholder='Professional interest'
                          {...formik.getFieldProps('interest')}
                          name='interest'
                        />
                        {formik.touched.interest && formik.errors.interest && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.interest}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Country of Origin
                      </label>

                      <div className='col-lg-8 fv-row'>
                        <select
                          className='form-select form-select-solid form-select-lg fw-bold'
                          {...formik.getFieldProps('countryorig')}
                          name='countryorig'
                        >
                          <CountryList />
                        </select>
                        {formik.touched.countryorig && formik.errors.countryorig && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.countryorig}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Country of Residence
                      </label>

                      <div className='col-lg-8 fv-row'>
                        <select
                          className='form-select form-select-solid form-select-lg fw-bold'
                          {...formik.getFieldProps('countryres')}
                          name='countryres'
                        >
                          <CountryList />
                        </select>
                        {formik.touched.countryres && formik.errors.countryres && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.countryres}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {usertype === 'sponsor' && (
                  <>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Role at the Organization
                      </label>
                      <div className='col-lg-8 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control'
                          placeholder='Role in your organization'
                          {...formik.getFieldProps('orgRole')}
                          name='orgRole'
                        />
                        {formik.touched.orgRole && formik.errors.orgRole && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgRole}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Name of Organization
                      </label>
                      <div className='col-lg-8 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control'
                          placeholder='Organization name'
                          {...formik.getFieldProps('orgName')}
                          name='orgName'
                        />
                        {formik.touched.orgName && formik.errors.orgName && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgName}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Organization Physical Address
                      </label>
                      <div className='col-lg-8 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control'
                          placeholder='Organization Address'
                          {...formik.getFieldProps('orgAddress')}
                          name='orgAddress'
                        />
                        {formik.touched.orgAddress && formik.errors.orgAddress && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgAddress}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='row mb-6'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>
                        Organization Mailing Address if Different from Physical Address
                      </label>
                      <div className='col-lg-8 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control'
                          placeholder='Organization mailing address'
                          {...formik.getFieldProps('orgMailingAddress')}
                          name='orgMailingAddress'
                        />
                        {formik.touched.orgMailingAddress && formik.errors.orgMailingAddress && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.orgMailingAddress}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* {
                user !== "individual" &&
                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label fw-bold fs-6'>
                    <span className='required'>Country</span>
                  </label>
                  <div className='col-lg-8 fv-row'>
                    <select
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
              } */}
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
      )}
    </>
  )
}

export {ProfileDetails}
