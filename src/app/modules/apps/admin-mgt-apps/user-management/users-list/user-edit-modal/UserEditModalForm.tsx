import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {initialUser, User} from '../core/_models'
import clsx from 'clsx'
import {KTSVG} from '../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {ListLoading} from '../../../core/loading/ListLoading'
import {createUser, updateUser} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import {SponsorTiers, EnablerTiers} from './usertiers'

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
    usertype: user.usertype || initialUser.usertype,
    subscriptiontier: user.subscriptiontier || initialUser.subscriptiontier,
    fName: user.fName || initialUser.fName,
    email: user.email || initialUser.email,
    phonenumber: user.phonenumber || initialUser.phonenumber,
    countryorig: user.countryorig || initialUser.countryorig,
    status: user.status || initialUser.status,
  })
  console.log('User', userForEdit)
  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const [editUserDetails, setEditUserDetails] = useState(false)

  const handleEditUser = () => {
    setEditUserDetails(!editUserDetails)
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
          <div className='row g-5'>
            {/* Begin sticky card */}
            <div className='col-lg-4'>
              <div
                className='card card-flush bg-light-normal shadow me-2 mb-2 px-10 py-10'
                data-kt-sticky='true'
                data-kt-sticky-name='docs-sticky-summary'
                data-kt-sticky-offset="{default: false, xl: '200px'}"
                data-kt-sticky-width="{lg: '250px', xl: '300px'}"
                data-kt-sticky-left='auto'
                data-kt-sticky-top='100px'
                data-kt-sticky-animation='false'
                data-kt-sticky-zindex='95'
              >
                {/* begin::Input group */}
                <div className='fv-row mb-7'>
                  {/* begin::Label */}
                  <label className='d-block fw-bold fs-2 mb-5'>User Summary</label>
                  {/* end::Label */}
                  <div className='row g-5'>
                    <div className='col-lg-4'>
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
                    </div>
                    <div className='col-lg-8'>
                      <div className='d-flex justify-content-between align-items-start flex-wrap mb-2 px-3'>
                        <div className='d-flex flex-column'>
                          <div className='d-flex align-items-center mb-2'>
                            <a
                              href='#'
                              className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'
                            >
                              {userForEdit.fName}
                            </a>
                            <a href='#'>
                              <KTSVG
                                path='/media/icons/duotune/general/gen026.svg'
                                className='svg-icon-1 svg-icon-primary'
                              />
                            </a>
                          </div>

                          <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                            <a
                              href='#'
                              className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                            >
                              <KTSVG
                                path='/media/icons/duotune/communication/com006.svg'
                                className='svg-icon-4 me-1'
                              />
                              {userForEdit.usertype}
                            </a>
                            <a
                              href='#'
                              className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                            >
                              <KTSVG
                                path='/media/icons/duotune/general/gen018.svg'
                                className='svg-icon-4 me-1'
                              />
                              {userForEdit.orgAddress?.city || 'Seattle'},{' '}
                              {userForEdit.orgAddress?.state || 'WA'}
                            </a>
                            <a
                              href='#'
                              className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                            >
                              <KTSVG
                                path='/media/icons/duotune/communication/com011.svg'
                                className='svg-icon-4 me-1'
                              />
                              {userForEdit.email}
                            </a>
                          </div>
                          <div className='row mb-7'>
                            <label className='col-lg-6 fw-bold text-muted'>Subscription ID:</label>

                            <div className='col-lg-6 fv-row'>
                              <span className='fw-bold fs-6'>{userForEdit.id}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End :: User Info */}

                  <div className='col-lg-12'>
                    <div className='d-flex flex-wrap flex-stack'>
                      {/* <div className='d-flex flex-column flex-grow-1 pe-8'> */}
                      <div className='d-flex flex-wrap'>
                        <div className='border border-gray-300 border-dashed rounded min-w-100px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex flex-column align-items-center'>
                            <div className='fs-2 text-primary fw-bolder'>100</div>
                            <div className='fw-bold fs-6 text-muted'>Opps Engag.</div>
                          </div>
                        </div>

                        <div className='border border-gray-300 border-dashed rounded min-w-100px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex flex-column align-items-center'>
                            <div className='fs-2 text-danger fw-bolder'>23</div>
                            <div className='fw-bold fs-6 text-muted'> Proposals</div>
                          </div>
                        </div>

                        <div className='border border-gray-300 border-dashed rounded min-w-100px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex flex-column align-items-center'>
                            <div className='fs-2 text-success fw-bolder'>$6,000</div>
                            <div className='fw-bold fs-6 text-muted'>Retainer.</div>
                          </div>
                        </div>

                        {/* <div className='border border-gray-300 border-dashed rounded min-w-100px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex flex-column align-items-center'>
                            <div className='fs-2 text-light fw-bolder'>$20,000</div>
                          <div className='fw-bold fs-6 text-muted'>Loan.</div>
                            </div>
                            </div> */}
                        {/* </div> */}
                      </div>
                    </div>
                  </div>

                  {/* <div className="separator my-6 mb-0"></div> */}
                </div>
                {/* end::Input group */}

                {/* begin::Input group */}
                <div className='col-lg-12 mb-3'>
                  <div className='fv-row mb-7'>
                    {/* begin::Label */}
                    <label className='fw-bold fs-3 mb-0'>Product Details</label>
                    {/* end::Label */}
                  </div>

                  <div className='row mb-7'>
                    {/* begin::Span */}
                    <div className='col-6 mb-3'>
                      <span className='badge badge-info fs-4'> {userForEdit.usertype}</span>
                    </div>
                    <div className='col-6 mb-3 text-start'>
                      <span className='fs-6'> $99.99/ Year</span>
                    </div>
                    {/* end::Input */}
                  </div>
                  {/* begin::edit payment button*/}

                  <div className='mb-3 text-end'>
                    <button
                      className='btn btn-sm btn-primary me-2'
                      onClick={handleEditUser}
                      disabled={editUserDetails}
                    >
                      Edit User Details
                    </button>
                  </div>
                  <div className='separator my-6 mb-0'></div>
                  {/* end:: Payment Details */}
                </div>
                <div className='col-lg-12 mb-3'>
                  <div className='fv-row mb-7'>
                    {/* begin::Label */}
                    <label className='fw-bold fs-3 mb-0'>Payment Details</label>
                    {/* end::Label */}
                  </div>

                  <div className='row mb-7'>
                    <div className='col-6 mb-3 text-end'>
                      <img
                        src={toAbsoluteUrl('/media/svg/card-logos/visa.svg')}
                        alt=''
                        className='h-25px'
                      />
                      <img
                        src={toAbsoluteUrl('/media/svg/card-logos/mastercard.svg')}
                        alt=''
                        className='h-25px'
                      />
                      <img
                        src={toAbsoluteUrl('/media/svg/card-logos/american-express.svg')}
                        alt=''
                        className='h-25px'
                      />
                    </div>

                    {/* begin::edit payment button*/}

                    <div className='col-6 mb-3 text-end'>
                      <button className='btn btn-primary btn-sm me-2'>Edit Method </button>
                    </div>
                  </div>

                  <div className='separator my-6 mb-0'></div>
                  {/* end::Input */}

                  {/* end::Input group */}
                </div>

                <div className='col-lg-12'>
                  <div className='fv-row mb-7'>
                    {/* begin::Label */}
                    <label className='fw-bold fs-3 mb-0'>Remittance Details</label>
                    {/* end::Label */}
                  </div>

                  {/* begin::Span */}

                  <div className='row mb-7'>
                    <label className='col-lg-6 fw-bold text-muted'>Date Joined:</label>

                    <div className='col-lg-6 fv-row'>
                      <span className='fw-bold fs-6'>{userForEdit.datejoined}</span>
                    </div>
                  </div>

                  <div className='row mb-7'>
                    <label className='col-lg-6 fw-bold text-muted'>Status:</label>

                    <div className='col-lg-6 fv-row'>
                      <span className='fw-bold fs-6'>{userForEdit.status || 'Pending'}</span>
                    </div>
                  </div>

                  <div className='row mb-7'>
                    <label className='col-lg-6 fw-bold text-muted'>Remittance Retainer:</label>

                    <div className='col-lg-6 fv-row'>
                      <span className='fw-bold fs-6'>
                        {userForEdit.remittanceretainer || 'Pending'}
                      </span>
                    </div>
                  </div>
                  {/* end::Input */}

                  {/* Start :: Edit Subscription Button */}
                  <div className='col mb-3 text-end'>
                    <button className='btn btn-sm btn-primary me-2'>
                      Edit Remittance Details{' '}
                    </button>
                  </div>
                  {/* end::Input group */}
                </div>
              </div>
            </div>

            {/* Begin Right Panel */}

            <div className='col-lg-7 shadow'>
              <div className='card card-stretch card-bordered mb-5'>
                <div className='card-header'>
                  <h3 className='card-title'>Edit User Details</h3>
                </div>
                <div className='card-body'>
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
                        {'is-invalid': formik.touched.fName && formik.errors.fName},
                        {
                          'is-valid': formik.touched.fName && !formik.errors.fName,
                        }
                      )}
                      autoComplete='off'
                      disabled={formik.isSubmitting || isUserLoading || !editUserDetails}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.fName}</span>
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
                      disabled={formik.isSubmitting || isUserLoading || !editUserDetails}
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
                        {'is-invalid': formik.touched.phonenumber && formik.errors.phonenumber},
                        {
                          'is-valid': formik.touched.phonenumber && !formik.errors.phonenumber,
                        }
                      )}
                      autoComplete='off'
                      disabled={formik.isSubmitting || isUserLoading || !editUserDetails}
                    />
                    {formik.touched.phonenumber && formik.errors.phonenumber && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.phonenumber}</span>
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
                          value='superadmin'
                          id='kt_modal_update_role_option_0'
                          checked={formik.values.usertype === 'superadmin'}
                          disabled={formik.isSubmitting || isUserLoading || !editUserDetails}
                        />

                        {/* end::Input */}
                        {/* begin::Label */}
                        <label className='form-check-label' htmlFor='kt_modal_update_role_option_0'>
                          <div className='fw-bolder text-gray-800'>Super Admin</div>
                          <div className='text-gray-600'>
                            Only for Diasprex's staff with maximum administrative priviledges. Only
                            Super Admins can add new users
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
                          value='administrator'
                          id='kt_modal_update_role_option_1'
                          checked={formik.values.usertype === 'administrator'}
                          disabled={formik.isSubmitting || isUserLoading || !editUserDetails}
                        />
                        {/* end::Input */}
                        {/* begin::Label */}
                        <label className='form-check-label' htmlFor='kt_modal_update_role_option_1'>
                          <div className='fw-bolder text-gray-800'>Standard Admin</div>
                          <div className='text-gray-600'>
                            For Diasprex's staff with standard administrative priviledges. Cannot
                            add new user.
                          </div>
                        </label>
                        {/* end::Label */}
                      </div>
                      {/* end::Radio */}
                    </div>
                    {/* end::Input row */}
                    <div className='separator separator-dashed my-5'></div>
                    {/* begin::Input row */}
                    <div className='d-flex flex-column fv-row'>
                      {/* begin::Radio */}
                      <div className='form-check form-check-custom form-check-solid'>
                        {/* begin::Input */}
                        <input
                          className='form-check-input me-3'
                          {...formik.getFieldProps('usertype')}
                          name='role'
                          type='radio'
                          value='enabler'
                          id='kt_modal_update_role_option_2'
                          checked={formik.values.usertype === 'enabler'}
                          disabled={formik.isSubmitting || isUserLoading || !editUserDetails}
                        />

                        {/* end::Input */}
                        {/* begin::Label */}
                        <label className='form-check-label' htmlFor='kt_modal_update_role_option_2'>
                          <div className='fw-bolder text-gray-800'>Enabler</div>
                          <div className='text-gray-600'>For prospective Enablers</div>
                        </label>
                        {/* end::Label */}
                      </div>
                      {/* end::Radio */}
                      {formik.values.usertype == 'enabler' && (
                        <div className='col d-flex fv-row text-end'>
                          <EnablerTiers />
                        </div>
                      )}
                    </div>
                    {/* end::Input row */}

                    <div className='separator separator-dashed my-5'></div>
                    {/* begin::Input row */}
                    <div className='d-flex flex-column fv-row'>
                      {/* begin::Radio */}
                      <div className='form-check form-check-custom form-check-solid'>
                        {/* begin::Input */}
                        <input
                          className='form-check-input me-3'
                          {...formik.getFieldProps('role')}
                          name='role'
                          type='radio'
                          value='sponsor'
                          id='kt_modal_update_role_option_3'
                          checked={formik.values.usertype === 'sponsor'}
                          disabled={formik.isSubmitting || isUserLoading || !editUserDetails}
                        />
                        {/* end::Input */}
                        {/* begin::Label */}
                        <label className='form-check-label' htmlFor='kt_modal_update_role_option_3'>
                          <div className='fw-bolder text-gray-800'>Sponsor</div>
                          <div className='text-gray-600 mb-3'>For prospective sponsors.</div>
                        </label>
                        {/* end::Label */}
                      </div>
                      {/* end::Radio */}
                    </div>
                    {formik.values.usertype == 'sponsor' && (
                      <div className='row d-flex fv-row text-end'>
                        <SponsorTiers />
                      </div>
                    )}
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
                  <div className='separator separator-dashed my-5'></div>
                  {/* begin::Input row */}
                  <div className='d-flex fv-row'>
                    {/* begin::Radio */}
                    <div className='form-check form-check-custom form-check-solid'>
                      {/* begin::Input */}
                      <input
                        className='form-check-input me-3'
                        {...formik.getFieldProps('usertype')}
                        name='usertype'
                        type='radio'
                        value='generic'
                        id='kt_modal_update_role_option_4'
                        checked={formik.values.usertype === 'generic'}
                        disabled={formik.isSubmitting || isUserLoading || !editUserDetails}
                      />
                      {/* end::Input */}
                      {/* begin::Label */}
                      <label className='form-check-label' htmlFor='kt_modal_update_role_option_1'>
                        <div className='fw-bolder text-gray-800'>Generic</div>
                        <div className='text-gray-600'>For generic free users.</div>
                      </label>
                      {/* end::Label */}
                    </div>
                    {/* end::Radio */}
                  </div>
                  {/* end::Input group */}
                  <div className='separator separator-dashed my-5'></div>

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
                      defaultValue={userForEdit.status || 'Choose Status'}
                      autoComplete='off'
                      disabled={formik.isSubmitting || isUserLoading || !editUserDetails}
                    >
                      <option></option>
                      <option value='active'>Active</option>
                      <option value='pending'>Pending</option>
                      <option value='suspended'>Suspended</option>
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
            onClick={() => handleEditUser()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isUserLoading || !editUserDetails}
          >
            Discard
          </button>

          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isUserLoading || !editUserDetails}
          >
            Cancel
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={
              isUserLoading ||
              formik.isSubmitting ||
              !formik.isValid ||
              !formik.touched ||
              !editUserDetails
            }
          >
            <span className='indicator-label'>Save</span>
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
      {(formik.isSubmitting || isUserLoading) && <ListLoading />}
    </>
  )
}

export {UserEditModalForm}
