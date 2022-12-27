import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {initialDiaspora} from '../core/_models'
import clsx from 'clsx'

import {useListView} from '../core/ListViewProvider'
import {ListLoading} from '../../../core/loading/ListLoading'
import {createDiaspora, updateDiaspora} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

import {DiasporasCard} from '../../../../../Diasporas/components/DiasporasCard'
import {uadFormModel} from '../../../../../Diasporas/components/core/_model'
import DropzoneComp from '../../../../../../../_metronic/partials/content/utilities/dropzonecomp'
import {CountryList} from '../../../../../../../_metronic/partials/content/selectionlists'

type Props = {
  isDiasporaLoading: boolean
  diaspora: uadFormModel
}

const editDiasporaSchema = Yup.object().shape({
  fName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First Name is required'),
  lName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last Name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),

  phone: Yup.string(),
  // .min(3, 'Minimum 3 symbols')
  // .max(50, 'Maximum 50 symbols')
  // .required('Primary Phone is required'),
})

const DiasporaEditModalForm: FC<Props> = ({diaspora, isDiasporaLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [diasporaForEdit] = useState({
    ...diaspora,
    fName: diaspora.fName || initialDiaspora.fName,
    lName: diaspora.lName || initialDiaspora.lName,
    email: diaspora.email || initialDiaspora.email,
    phone: diaspora.phone || initialDiaspora.phone,
    status: diaspora.status || initialDiaspora.status,
    avatar: diaspora.avatar || initialDiaspora.avatar,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const [editDiasporaDetails, setEditDiasporaDetails] = useState(false)

  const handleEditDiaspora = () => {
    setEditDiasporaDetails(!editDiasporaDetails)
  }

  const diasporaAvatarImg = toAbsoluteUrl(`/media/${diasporaForEdit.avatar}`)

  const formik = useFormik({
    initialValues: diasporaForEdit,
    validationSchema: editDiasporaSchema,
    // validateOnChange: false,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)

      try {
        if (isNotEmpty(values.id)) {
          const updatedProfile = {...diasporaForEdit, ...values}
          await createDiaspora(updatedProfile)
        } else {
          const newProfile = {
            ...values,
            id: values.email,
            dateSubmitted: new Date(),
            status: 'New',
          }
          await createDiaspora(newProfile)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
      <form
        id='kt_modal_add_diaspora_form'
        className='form'
        onSubmit={formik.handleSubmit}
        noValidate
      >
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_diaspora_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_diaspora_header'
          data-kt-scroll-wrappers='#kt_modal_add_diaspora_scroll'
          data-kt-scroll-offset='300px'
        >
          <div className='row g-5'>
            <div className='card-body'>
              <article className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                <DiasporasCard
                  fName={diasporaForEdit.fName}
                  lName={diasporaForEdit.lName}
                  email={diasporaForEdit.email}
                  phone={diasporaForEdit.phone}
                  profession={diasporaForEdit.profession}
                  countryRes={diasporaForEdit.countryRes}
                  insightAfrica={diasporaForEdit.insightAfrica}
                  countryOrig={diasporaForEdit.countryOrig}
                  avatar={diasporaAvatarImg}
                  interest={diasporaForEdit.interest}
                  undergrad={diasporaForEdit.undergrad}
                  grad={diasporaForEdit.grad}
                  summary={diasporaForEdit.summary}
                />
              </article>
            </div>

            <div className='card shadow'>
              <div className='card card-stretch card-bordered mb-5'>
                <div className='card-header d-flex justify-content-between'>
                  <h3 className='card-title'>Edit Diaspora Details</h3>
                  <div className='form-check form-switch form-check-custom form-check-solid me-5 mb-3'>
                    <input
                      className='form-check-input me-2'
                      type='checkbox'
                      {...formik.getFieldProps('featureddiasp')}
                      name='featureddiasp'
                      id='featureddiasp'
                      checked={formik.values.featureddiasp}
                      disabled={formik.isSubmitting}
                      onChange={() => {
                        formik.handleChange({
                          target: {name: 'featureddiasp', value: !formik.values.featureddiasp},
                        })
                      }}
                    />
                    <label className='form-check-label' htmlFor='featuredopp'>
                      Featured
                    </label>
                  </div>
                </div>

                <div className='card-body'>
                  {/* begin::Input group */}
                  <div className='fv-row mb-7'>
                    <label className='required fw-bold fs-6 mb-2'>First name</label>

                    <input
                      placeholder='First name'
                      {...formik.getFieldProps('fName')}
                      type='text'
                      name='fName'
                      className={clsx(
                        'form-control form-control-solid mb-3 mb-lg-0',
                        {'is-invalid': formik.touched.fName && formik.errors.fName},
                        {
                          'is-valid': formik.touched.fName && !formik.errors.fName,
                        }
                      )}
                      autoComplete='off'
                      disabled={formik.isSubmitting || isDiasporaLoading}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.fName}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='fv-row mb-7'>
                    <label className='required fw-bold fs-6 mb-2'>Last name</label>

                    <input
                      placeholder='Last name'
                      {...formik.getFieldProps('lName')}
                      type='text'
                      name='lName'
                      className={clsx(
                        'form-control form-control-solid mb-3 mb-lg-0',
                        {'is-invalid': formik.touched.lName && formik.errors.lName},
                        {
                          'is-valid': formik.touched.lName && !formik.errors.lName,
                        }
                      )}
                      autoComplete='off'
                      disabled={formik.isSubmitting || isDiasporaLoading}
                    />
                    {formik.touched.lName && formik.errors.lName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.lName}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='fv-row mb-7'>
                    {/* begin::Label */}
                    <label className='required fw-bold fs-6 mb-2'>Email</label>
                    {/* end::Label */}

                    {/* begin::Input */}
                    <input
                      placeholder='Email'
                      {...formik.getFieldProps('email')}
                      className={clsx(
                        'form-control form-control-solid mb-3 mb-lg-0',
                        {'is-invalid': formik.touched.email && formik.errors.email},
                        {
                          'is-valid': formik.touched.email && !formik.errors.email,
                        }
                      )}
                      type='email'
                      name='email'
                      autoComplete='off'
                      disabled={formik.isSubmitting || isDiasporaLoading}
                    />
                    {/* end::Input */}
                    {formik.touched.email && formik.errors.email && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.email}</span>
                      </div>
                    )}
                  </div>
                  {/* end::Input group */}

                  {/* begin::Input group */}
                  <div className='fv-row mb-7'>
                    {/* begin::Label */}
                    <label className='required fw-bold fs-6 mb-2'>Primary Phone Number</label>
                    {/* end::Label */}

                    {/* begin::Input */}
                    <input
                      placeholder='(xxx)-xxx-xxxx'
                      {...formik.getFieldProps('phone')}
                      type='tel'
                      name='phone'
                      className={clsx(
                        'form-control form-control-solid mb-3 mb-lg-0',
                        {'is-invalid': formik.touched.phone && formik.errors.phone},
                        {
                          'is-valid': formik.touched.phone && !formik.errors.phone,
                        }
                      )}
                      autoComplete='off'
                      disabled={formik.isSubmitting || isDiasporaLoading}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
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

                  <div className='fv-row mb-7'>
                    <label className='required fw-bold fs-6 mb-2'>Summary</label>

                    <textarea
                      placeholder='Professional summary'
                      {...formik.getFieldProps('summary')}
                      name='summary'
                      className={clsx(
                        'form-control form-control-solid mb-3 mb-lg-0',
                        {'is-invalid': formik.touched.summary && formik.errors.summary},
                        {
                          'is-valid': formik.touched.summary && !formik.errors.summary,
                        }
                      )}
                      autoComplete='off'
                      disabled={formik.isSubmitting || isDiasporaLoading}
                    />
                    {formik.touched.summary && formik.errors.summary && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.summary}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='separator separator-dashed my-5'></div>

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

                  <div className='fv-row mb-10'>
                    <label className='form-label text-muted' htmlFor='uadFile'>
                      Upload a profile photo or headshot
                    </label>
                    <DropzoneComp />
                  </div>

                  <div className='card-footer'>Footer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='button'
            onClick={() => handleEditDiaspora()}
            className='btn btn-light me-3'
            data-kt-diasporas-modal-action='reset'
            disabled={formik.isSubmitting || isDiasporaLoading}
          >
            Discard
          </button>

          <button
            type='button'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-diasporas-modal-action='cancel'
            disabled={formik.isSubmitting || isDiasporaLoading}
          >
            Cancel
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-diasporas-modal-action='submit'
            disabled={isDiasporaLoading || formik.isSubmitting}
          >
            <span className='indicator-label'>Save</span>
            {(formik.isSubmitting || isDiasporaLoading) && (
              <span className='indicator-progress'>
                Please wait...
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isDiasporaLoading) && <ListLoading />}
    </>
  )
}

export {DiasporaEditModalForm}
