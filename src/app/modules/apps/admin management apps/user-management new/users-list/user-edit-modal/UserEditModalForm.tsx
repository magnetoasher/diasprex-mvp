import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {initialUser, User} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {UsersListLoading} from '../components/loading/UsersListLoading'
import {createUser, updateUser} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isUserLoading: boolean
  user: User

}

const editUserSchema = Yup.object().shape({
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

const UserEditModalForm: FC<Props> = ({user, isUserLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [userForEdit] = useState<User>({
    ...user,
    avatar: user.avatar || initialUser.avatar,
    role: user.role || initialUser.role,
    position: user.position || initialUser.position,
    name: user.name || initialUser.name,
    email: user.email || initialUser.email,
    phone: user.phone || initialUser.phone,
    status: user.status|| initialUser.status,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  const userAvatarImg = toAbsoluteUrl(`/media/${userForEdit.avatar}`)

  const formik = useFormik({
    initialValues: userForEdit,
    validationSchema: editUserSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateUser(values)
        } else {
          await createUser(values)
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
      <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_user_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_user_header'
          data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
          data-kt-scroll-offset='300px'
        >
          <div className="row g-5">
      
            {/* Begin sticky card */}
            <div className="col-lg-4">
              <div className='card bg-light-normal shadow me-2 mb-2 px-10 py-10'
              data-kt-sticky ='true' >
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='d-block fw-bold fs-2 mb-5'>User Summary</label>
            {/* end::Label */}

            {/* begin::Image input */}
            <div
              className='image-input image-input-outline'
              data-kt-image-input='true'
              style={{backgroundImage: `url('${blankImg}')`}}
            >
              {/* begin::Preview existing avatar */}
              <div
                className='image-input-wrapper w-125px h-125px'
                style={{backgroundImage: `url('${userAvatarImg}')`}}
              ></div>
              {/* end::Preview existing avatar */}

              {/* begin::Label */}
              {/* <label
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='change'
              data-bs-toggle='tooltip'
              title='Change avatar'
            >
              <i className='bi bi-pencil-fill fs-7'></i>

              <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
              <input type='hidden' name='avatar_remove' />
            </label> */}
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
              {/* <span
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='remove'
              data-bs-toggle='tooltip'
              title='Remove avatar'
            >
              <i className='bi bi-x fs-2'></i>
            </span> */}
              {/* end::Remove */}
            </div>
            {/* end::Image input */}

            {/* begin::Hint */}
            {/* <div className='form-text'>Allowed file types: png, jpg, jpeg.</div> */}
                  {/* end::Hint */}
                  <div className="separator my-6 mb-0"></div>
          </div>
                {/* end::Input group */}
                
                 {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='fw-bold fs-3 mb-0'>Product details</label>
                  {/* end::Label */}
                </div>
                
          <div>
            {/* begin::Span */}
                  <div>
                    <span className='badge badge-info fs-4'> { userForEdit.name}</span>
                    <span className='fs-6'> $99.99/ Year</span>
                    <div className="separator my-6 mb-0"></div>
           </div>
            {/* end::Input */}
          </div>
                {/* end::Input group */}
                </div>
              </div>

            {/* Begin Right Panel */}
        <div className="col-lg-7">
           <div className="card card-stretch card-bordered mb-5">
            <div className="card-header">
                <h3 className="card-title">Edit User Details</h3>
            </div>
            <div className="card-body">
                {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Full Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Full name'
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.name && formik.errors.name},
                {
                  'is-valid': formik.touched.name && !formik.errors.name,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.name}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}


          {/* begin::Input group */}
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
              disabled={formik.isSubmitting || isUserLoading}
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
              type='text'
              name='phone'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.phone && formik.errors.phone},
                {
                  'is-valid': formik.touched.phone && !formik.errors.phone,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.phone && formik.errors.phone&& (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.phone}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
        </div>



          {/* begin::Input group */}
          <div className='mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-5'>User Type</label>
            {/* end::Label */}
            {/* begin::Roles */}
            {/* begin::Input row */}
            <div className='d-flex fv-row'>
              {/* begin::Radio */}
              <div className='form-check form-check-custom form-check-solid'>
                {/* begin::Input */}
                <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='SuperAdmin'
                  id='kt_modal_update_role_option_0'
                  checked={formik.values.role === 'SuperAdmin'}
                  disabled={formik.isSubmitting || isUserLoading}
                />

                {/* end::Input */}
                {/* begin::Label */}
                <label className='form-check-label' htmlFor='kt_modal_update_role_option_0'>
                  <div className='fw-bolder text-gray-800'>Super Admin</div>
                  <div className='text-gray-600'>
                    Only for Diasprex's staff with maximum administrative priviledges. Only Super Admins can add new users
                  </div>
                </label>
                {/* end::Label */}
              </div>
              {/* end::Radio */}
            </div>
            {/* end::Input row */}
            <div className='separator separator-dashed my-5'></div>
            {/* begin::Input row */}
            <div className='d-flex fv-row'>
              {/* begin::Radio */}
              <div className='form-check form-check-custom form-check-solid'>
                {/* begin::Input */}
                <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='Administrator'
                  id='kt_modal_update_role_option_1'
                  checked={formik.values.role === 'Administrator'}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                {/* end::Input */}
                {/* begin::Label */}
                <label className='form-check-label' htmlFor='kt_modal_update_role_option_1'>
                  <div className='fw-bolder text-gray-800'>Standard Admin</div>
                  <div className='text-gray-600'>
                    For Diasprex's staff with standard administrative priviledges. Cannot add new user.
                  </div>
                </label>
                {/* end::Label */}
              </div>
              {/* end::Radio */}
            </div>
            {/* end::Input row */}
            <div className='separator separator-dashed my-5'></div>
            {/* begin::Input row */}
            <div className='d-flex fv-row'>
              {/* begin::Radio */}
              <div className='form-check form-check-custom form-check-solid'>
                {/* begin::Input */}
                <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='Enabler'
                  id='kt_modal_update_role_option_2'
                  checked={formik.values.role === 'Enabler'}
                  disabled={formik.isSubmitting || isUserLoading}
                />

                {/* end::Input */}
                {/* begin::Label */}
                <label className='form-check-label' htmlFor='kt_modal_update_role_option_2'>
                  <div className='fw-bolder text-gray-800'>Enabler</div>
                  <div className='text-gray-600'>
                    For prospective Enablers
                  </div>
                </label>
                {/* end::Label */}
              </div>
              {/* end::Radio */}
            </div>
            {/* end::Input row */}
            <div className='separator separator-dashed my-5'></div>
            {/* begin::Input row */}
            <div className='d-flex fv-row'>
              {/* begin::Radio */}
              <div className='form-check form-check-custom form-check-solid'>
                {/* begin::Input */}
                <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='Sponsor'
                  id='kt_modal_update_role_option_3'
                  checked={formik.values.role === 'Sponsor'}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                {/* end::Input */}
                {/* begin::Label */}
                <label className='form-check-label' htmlFor='kt_modal_update_role_option_3'>
                  <div className='fw-bolder text-gray-800'>Sponsor</div>
                  <div className='text-gray-600'>
                    For prospective sponsors.
                  </div>
                </label>
                {/* end::Label */}
              </div>
              {/* end::Radio */}
            </div>
            {/* end::Input row */}
            {/* <div className='separator separator-dashed my-5'></div> */}
            {/* begin::Input row */}
            {/* <div className='d-flex fv-row'> */}
              {/* begin::Radio */}
              {/* <div className='form-check form-check-custom form-check-solid'> */}
                {/* begin::Input */}
                {/* <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  id='kt_modal_update_role_option_4'
                  value='Trial'
                  checked={formik.values.role === 'Trial'}
                  disabled={formik.isSubmitting || isUserLoading}
                /> */}
                {/* end::Input */}
                {/* begin::Label */}
                {/* <label className='form-check-label' htmlFor='kt_modal_update_role_option_4'>
                  <div className='fw-bolder text-gray-800'>Trial</div>
                  <div className='text-gray-600'>
                    Best for people who need to preview content data, but don't need to make any
                    updates
                  </div>
                </label> */}
                {/* end::Label */}
              {/* </div> */}
              {/* end::Radio */}
            {/* </div> */}
            {/* end::Input row */}
            {/* end::Roles */}
          </div>
          {/* end::Input group */}
        
        {/* end::Scroll */}

        {/* Begine::Select Group */}
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
            defaultValue={''}
            autoComplete='off'
            disabled={formik.isSubmitting || isUserLoading}
            >
              <option></option>
              <option value='active'>Active</option>
              <option value='pending'>Pending</option>
              <option value='suspended'>Suspended</option>
                </select>
            </div>
            <div className="card-footer">
                Footer
            </div>
            
            </div>
            </div>
            </div>
                      </div>
          </div>

       
        


        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isUserLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isUserLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isUserLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isUserLoading) && <UsersListLoading />}
    </>
  )
}

export {UserEditModalForm}
