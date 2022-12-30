import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {initialProposal, Proposal} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {ListLoading} from '../../../../apps/admin-mgt-apps/core/loading/ListLoading'
import {createProposal, updateProposal} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isProposalLoading: boolean
  proposal: Proposal
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
})

const PropReviewModalForm: FC<Props> = ({proposal, isProposalLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [proposalForReview] = useState<Proposal>({
    ...proposal,
    thumbnail: proposal.thumbnail || initialProposal.thumbnail,
    enabler: proposal.enabler || initialProposal.enabler,
    title: proposal.title || initialProposal.title,
    summary: proposal.summary || initialProposal.summary,
    country: proposal.country || initialProposal.country,
    status: proposal.status || initialProposal.status,
    admin_screening: proposal.admin_screening || initialProposal.admin_screening,
    date_submitted: proposal.date_submitted || initialProposal.date_submitted,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  const userAvatarImg = toAbsoluteUrl(`/media/${proposalForReview.thumbnail}`)

  const formik = useFormik({
    initialValues: proposalForReview,
    // validationSchema: editUserSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateProposal(values)
        } else {
          await createProposal(values)
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
        id='kt_modal_review_proposal_form'
        className='form'
        onSubmit={formik.handleSubmit}
        noValidate
      >
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_review_proposal_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_review_proposal_header'
          data-kt-scroll-wrappers='#kt_modal_review_proposal_scroll'
          data-kt-scroll-offset='300px'
        >
          <div className='row g-5'>
            {/* Begin sticky card */}
            <div className='col-lg-4'>
              {/* begin::Input group */}
              <div className='fv-row mb-7'>
                {/* begin::Label */}
                <label className='d-block fw-bold fs-6 mb-5'>Enabler Info</label>
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
                </div>
              </div>

              <div className='fv-row mb-7'>
                {/* begin::Label */}
                <label className=' fw-bold fs-6 mb-2'>Name</label>
                {/* end::Label */}

                {/* begin::Input */}
                <h5 className='mb-3 mb-lg-0 text-muted'> {formik.values.enabler}</h5>
                {/* end::Input */}
              </div>

              <div className='fv-row mb-7'>
                {/* begin::Label */}
                <label className=' fw-bold fs-6 mb-2'>Country</label>
                {/* end::Label */}

                {/* begin::Input */}
                <h5 className='mb-3 mb-lg-0 text-muted'> {formik.values.country}</h5>
                {/* end::Input */}
              </div>
              <div className='fv-row mb-7'>
                {/* begin::Label */}
                <label className=' fw-bold fs-6 mb-2'>Email</label>
                {/* end::Label */}

                {/* begin::Input */}
                <h5 className='mb-3 mb-lg-0 text-muted'> jj@gmail.com</h5>
                {/* end::Input */}
              </div>
              <div className='fv-row mb-7'>
                {/* begin::Label */}
                <label className=' fw-bold fs-6 mb-2'>Profession</label>
                {/* end::Label */}

                {/* begin::Input */}
                <h5 className='mb-3 mb-lg-0 text-muted'> Wealth Manager</h5>
                {/* end::Input */}
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='fv-row mb-7'>
                <div
                  className='card-header border-0 cursor-pointer'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#kt_prop_title'
                  aria-expanded='true'
                  aria-controls='kt_prop_title'
                >
                  <div className='card-title'>
                    <h3 className='fw-bolder m-0'>Proposal Title</h3>
                  </div>
                </div>
                <div id='kt_prop_title' className='collapse show'>
                  <p className='mx-10'>{formik.values.title}</p>
                </div>
              </div>
              <div className='separator separator-dashed my-5'></div>

              <div className='fv-row mb-7'>
                <div
                  className='card-header border-0 cursor-pointer'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#kt_prop_summary'
                  aria-expanded='true'
                  aria-controls='kt_prop_summary'
                >
                  <div className='card-title m-0'>
                    <h3 className='fw-bolder m-0'>Proposal Summary</h3>
                  </div>
                </div>
                <div id='kt_prop_summary' className='collapse'>
                  <p className='mx-10'>{formik.values.summary}</p>
                </div>
              </div>
              <div className='separator separator-dashed my-5'></div>

              <div className='fv-row mb-7'>
                <div
                  className='card-header border-0 cursor-pointer'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#kt_prop_detail'
                  aria-expanded='true'
                  aria-controls='kt_prop_detail'
                >
                  <div className='card-title m-0'>
                    <h3 className='fw-bolder m-0'>Proposal Detail</h3>
                  </div>
                </div>
                <div id='kt_prop_detail' className='collapse'>
                  <p className='mx-10'>Proposal detail description</p>
                </div>
              </div>
              <div className='separator separator-dashed my-5'></div>
              <div className='fv-row mb-7'>
                <label className='required fs-6 fw-bold mb-2'>Attachments</label>
                <div className='mb-3'>
                  <div className=' d-flex flex-row align-items-center'>
                    <p className='me-3'>Proposal attachment</p>
                    <button
                      type='button'
                      onClick={() => {}}
                      className='btn btn-light me-3'
                      disabled={formik.isSubmitting || isProposalLoading}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>

              {/* begin::Input group */}
              <div className='mb-7'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-5'>Decision</label>
                {/* end::Label */}
                {/* begin::Roles */}
                {/* begin::Input row */}
                <div className='d-flex fv-row'>
                  {/* begin::Radio */}
                  <div className='form-check form-check-custom form-check-solid'>
                    {/* begin::Input */}
                    <input
                      className='form-check-input me-3'
                      {...formik.getFieldProps('admin_screening')}
                      name='admin_screening'
                      type='checkbox'
                      checked={formik.values.admin_screening === true}
                      disabled={formik.isSubmitting || isProposalLoading}
                      onChange={() => {
                        formik.handleChange({
                          target: {
                            name: 'admin_screening',
                            value: !formik.values.admin_screening,
                          },
                        })
                      }}
                    />

                    {/* end::Input */}
                    {/* begin::Label */}
                    <label className='form-check-label' htmlFor='kt_modal_update_role_option_0'>
                      <div className='fw-bolder text-gray-800'>Admin Review Request</div>
                      <div className='text-gray-600'>
                        Requesting further review from Diasprex Admin may require additional fee
                      </div>
                    </label>
                    {/* end::Label */}
                  </div>
                  {/* end::Radio */}
                </div>
              </div>

              {/* end::Input row */}
              {/* end::Roles */}
            </div>
          </div>
          {/* end::Input group */}
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isProposalLoading}
          >
            Cancel
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={
              isProposalLoading || formik.isSubmitting || !formik.isValid || !formik.touched
            }
          >
            <span className='indicator-label'>Save</span>
            {(formik.isSubmitting || isProposalLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isProposalLoading) && <ListLoading />}
    </>
  )
}

export {PropReviewModalForm}
