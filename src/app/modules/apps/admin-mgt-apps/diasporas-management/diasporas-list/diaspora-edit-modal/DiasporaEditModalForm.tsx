import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {initialDiaspora} from '../core/_models'
import clsx from 'clsx'
import {KTSVG} from '../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {DiasporasListLoading} from '../components/loading/DiasporasListLoading'
import {createDiaspora, updateDiaspora} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import {SponsorTiers, EnablerTiers} from './usertiers'
import {DiasporasCard} from '../../../../../Diasporas/components/DiasporasCard'
import {uadFormModel} from '../../../../../Diasporas/components/core/_model'

type Props = {
  isDiasporaLoading: boolean
  diaspora: uadFormModel
}

const editDiasporaSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),

  phone: Yup.string()
    // .min(3, 'Minimum 3 symbols')
    // .max(50, 'Maximum 50 symbols')
    .required('Primary Phone is required'),
})

const DiasporaEditModalForm: FC<Props> = ({diaspora, isDiasporaLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [diasporaForEdit] = useState<uadFormModel>({
    ...diaspora,
    avatar: diaspora.avatar || initialDiaspora.avatar,
    fName: diaspora.fName || initialDiaspora.fName,
    lName: diaspora.lName || initialDiaspora.lName,
    email: diaspora.email || initialDiaspora.email,
    phone: diaspora.phone || initialDiaspora.phone,
    status: diaspora.status || initialDiaspora.status,
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

  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  const diasporaAvatarImg = toAbsoluteUrl(`/media/${diasporaForEdit.avatar}`)

  const formik = useFormik({
    initialValues: diasporaForEdit,
    validationSchema: editDiasporaSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateDiaspora(values)
        } else {
          await createDiaspora(values)
        }
      } catch (ex) {
        console.error(ex)
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
            <div className='col-lg-4'>
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
                  avatar={toAbsoluteUrl(`/media/${diasporaForEdit.avatar}`)}
                  interest={diasporaForEdit.interest}
                  undergrad={diasporaForEdit.undergrad}
                  grad={diasporaForEdit.grad}
                  summary={diasporaForEdit.summary}
                />
              </article>
            </div>

            <div className='col-lg-7 shadow'>
              <div className='card card-stretch card-bordered mb-5'>
                <div className='card-header'>
                  <h3 className='card-title'>Edit Diaspora Details</h3>
                </div>
                <div className='card-body'>
                  {/* begin::Input group */}
                  <div className='fv-row mb-7'>
                    <label className='required fw-bold fs-6 mb-2'>First name</label>

                    <input
                      placeholder='First name'
                      {...formik.getFieldProps('fname')}
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
                      {...formik.getFieldProps('lname')}
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
                    {formik.touched.fName && formik.errors.fName && (
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

                  <div className='fv-row mb-7'>
                    {/* begin::Label */}
                    <label className='required fw-bold fs-6 mb-2'>Update Status</label>
                    {/* end::Label */}

                    {/* begin::Select */}
                    <select
                      className={clsx(
                        'form-select form-select-solid mb-3 mb-lg-0',
                        {'is-invalid': formik.touched.status && formik.errors.status},
                        {
                          'is-valid': formik.touched.status && !formik.errors.status,
                        }
                      )}
                      data-kt-select2='true'
                      data-placeholder='Update Status'
                      data-allow-clear='true'
                      defaultValue={diasporaForEdit.status || 'Choose Status'}
                      autoComplete='off'
                      disabled={formik.isSubmitting || isDiasporaLoading}
                    >
                      <option></option>
                      <option value='active'>Publish</option>
                      <option value='pending'>Pending</option>
                      <option value='suspended'>Declined</option>
                    </select>
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
            type='reset'
            onClick={() => handleEditDiaspora()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isDiasporaLoading}
          >
            Discard
          </button>

          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isDiasporaLoading}
          >
            Cancel
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={
              isDiasporaLoading || formik.isSubmitting || !formik.isValid || !formik.touched
            }
          >
            <span className='indicator-label'>Save</span>
            {(formik.isSubmitting || isDiasporaLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isDiasporaLoading) && <DiasporasListLoading />}
    </>
  )
}

export {DiasporaEditModalForm}
