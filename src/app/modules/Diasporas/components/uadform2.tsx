import {useState} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Modal, Button, Form} from 'react-bootstrap'

import {Diasp, InitialDiasp} from './core/_model'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {CountryList} from '../../../../_metronic/partials/content/selectionlists'
import {UploadFile} from '../../../../_metronic/partials/modals/file-management/uploadfile'
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const editUADSchema = Yup.object().shape({
  fName: Yup.string()
    .min(1, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
  lName: Yup.string()
    .min(1, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  phone: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Primary Phone is required'),
  countryRes: Yup.string().required('Country of Residence is required'),
  countryOrig: Yup.string().required('Country of Origin is required'),
  summary: Yup.string()
    .min(5, 'minimum 5 characters')
    .max(3000, 'maximum 3000 characters')
    .required('Professional summary is required'),
  interest: Yup.array(Yup.string().required('At least one area of interest is required')).min(
    1,
    'At least one area of interest is required'
  ),
})

export const UadForm = () => {
  const [closeModal, setCloseModal] = useState(false)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fName: '',
      lName: '',
      dpxID: '',
      email: '',
      phone: '',
      countryRes: '',
      countryOrig: '',
      undergradInst: '',
      undergradField: '',
      undergradDegree: '',
      gradInst: '',
      gradField: '',
      gradDegree: '',
      summary: '',
      interest: [],
      insightAfrica: '',
      avatar: '',
    },
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)

      // await Axios.post('API url', values)
      try {
        await console.log('onSubmit', JSON.stringify(values))
      } catch {
        console.log(formik.errors)
      } finally {
        setCloseModal(true)
      }
    },
    validationSchema: editUADSchema,
  })

  const styleslabel = {
    display: 'flex',
    justifyContent: 'flex-end',
    fontWeight: 600,
  }
  // const [form] = Form.useForm()
  // const onSubmit = () => {
  //   form.validateFields().then(() => {
  //     console.log('submitted')
  //   })
  // }
  return (
    <div
      id='kt_modal_submit_profile'
      className='modal fade'
      role='dialog'
      tabIndex={-1}
      aria-hidden='true'
    >
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end' id='kt_oda_header'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>
          <div className='text-center mb-13'>
            <h1 className='mb-3'>Submit Your Profile</h1>

            <div className='text-muted fw-bold fs-5'>
              You are submitting your profile for Diasprex's monthly Feature
            </div>
          </div>
          <div
            className='scroll pe-5'
            data-kt-scroll='true'
            data-kt-scroll-height='60rem'
            data-kt-scroll-wrappers='#kt_modal_submit_profile'
            data-kt-scroll-dependencies='#kt_js_header, #kt_modal_submit_profile, #kt_oda_header'
            data-kt-scroll-offset='100px'
          >
            <form onSubmit={formik.handleSubmit}>
              <div className='modal-body border border-3 scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
                <div className='mw-900px'>
                  {/* <!--begin::Input group--> */}

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
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter your phone number'
                      {...formik.getFieldProps('phone')}
                      name='phone'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block text-danger'>
                          <span role='alert'>{formik.errors.phone}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className=' fv-row mb-10'>
                    <label className='form-label text-muted required fw-bold fs-6 mb-2'>
                      Please select your country of residence
                    </label>
                    <select
                      className='form-select form-select-white'
                      aria-label='countryRes'
                      {...formik.getFieldProps('countryRes')}
                      name='countryRes'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    >
                      <CountryList />
                    </select>
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
                    <select
                      className='form-select form-select-white'
                      aria-label='countryOrig'
                      {...formik.getFieldProps('countryOrig')}
                      name='countryOrig'
                      autoComplete='off'
                      disabled={formik.isSubmitting}
                    >
                      <CountryList />
                    </select>
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
                      Please enter your undergraduate information
                    </label>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control me-2'
                        placeholder='Institution'
                        {...formik.getFieldProps('undergradInst')}
                        name='undergradInst'
                        autoComplete='off'
                        disabled={formik.isSubmitting}
                      />
                      <input
                        type='text'
                        className='form-control me-2'
                        placeholder='Field of study'
                        {...formik.getFieldProps('undergradField')}
                        name='undergradField'
                        autoComplete='off'
                        disabled={formik.isSubmitting}
                      />
                      <select
                        className='form-select form-select-white mb-2'
                        aria-label='country'
                        defaultValue='Degree'
                        {...formik.getFieldProps('undergradDegree')}
                        name='undergradDegree'
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
                        {...formik.getFieldProps('gradInst')}
                        name='gradInst'
                        autoComplete='off'
                        disabled={formik.isSubmitting}
                      />
                      <input
                        type='text'
                        className='form-control me-2'
                        placeholder='Field of study'
                        {...formik.getFieldProps('gradField')}
                        name='gradField'
                        value={formik.values.gradField}
                        autoComplete='off'
                        disabled={formik.isSubmitting}
                      />
                      <select
                        className='form-select form-select-white mb-2'
                        aria-label='country'
                        defaultValue='Degree'
                        {...formik.getFieldProps('gradDegree')}
                        name='gradDegree'
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
                      <input type='text' className='form-control me-2' placeholder='Interest 1' />
                      <input type='text' className='form-control me-2' placeholder='Interest 2' />
                      <input type='text' className='form-control me-2' placeholder='Interest 3' />
                      <input type='text' className='form-control me-2' placeholder='Interest 4' />
                    </div>
                    {/* {formik.touched.interest && formik.errors.interest && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block text-danger'>
                          <span role='alert'>{formik.errors.interest}</span>
                        </div>
                      </div>
                    )} */}
                  </div>

                  <div className='fv-row mb-10'>
                    <label className='form-label text-muted'>
                      Your Insight on Africa's Furture
                    </label>

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

                  <div>
                    <label className='form-label text-muted' htmlFor='uadFile'>
                      Upload a profile photo or headshot
                    </label>
                    <input type='file' className='form-control' id='uadFile' />
                  </div>
                  {/* <UploadFile /> */}

                  {/* <!--end::Input group--> */}
                </div>
                <div className='form-footer'>
                  <div className='text-center pt-15'>
                    <button type='button' className='btn btn-light me-2' data-bs-dismiss='modal'>
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      disabled={Object.keys(formik.touched).length === 0}
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
