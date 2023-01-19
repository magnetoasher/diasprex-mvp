import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {
  initialProposal,
  Proposal,
} from '../../../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {ListLoading} from '../../../../apps/admin-mgt-apps/core/loading/ListLoading'
import {createProposal, updateProposal} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import {Link} from 'react-router-dom'
import moment from 'moment'

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
    enablerName: proposal.enablerName || initialProposal.enablerName,
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

  const propBadgeColor =
    proposal?.status === 'new'
      ? 'info'
      : proposal?.status === 'selected'
      ? 'success'
      : proposal?.status === 'draft'
      ? 'gray-800'
      : proposal?.status === 'declined'
      ? 'danger'
      : proposal?.status === 'pending'
      ? 'gray-600'
      : proposal?.status === 'completed'
      ? 'gray-800'
      : proposal?.status === 'active'
      ? 'primary'
      : 'warning'

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
            <div className='card shadow-sm mb-6 mb-xl-9'>
              <div className='card-body pt-9 pb-0'>
                <div className='d-flex flex-wrap flex-sm-nowrap mb-6'>
                  <div
                    className={`d-flex flex-center flex-shrink-0 bg-light-${propBadgeColor} rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4`}
                  >
                    {proposalForReview?.thumbnail === '' ? (
                      <div
                        className={clsx(
                          'd-flex symbol-label mw-100 h-100px h-lg-150px align-items-center justify-content-center fs-1 rounded',
                          `bg-light-${propBadgeColor}`,
                          ` text-capitalize text-${propBadgeColor}`
                        )}
                      >
                        {proposalForReview?.country}
                      </div>
                    ) : (
                      <img
                        className='d-block mw-100 rounded'
                        src={proposalForReview?.thumbnail}
                        alt='oppsthumb'
                      />
                    )}
                  </div>
                  <div className='flex-grow-1'>
                    <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                      <div className='d-flex flex-column'>
                        <div className='d-flex align-items-center mb-1'>
                          <a
                            href='#'
                            className='text-gray-800 text-hover-primary fs-2 fw-bold me-3'
                          >
                            {proposalForReview?.enablerName}
                          </a>
                          <span className='symbol symbol-30px w-30px bg-light me-2'>
                            <img
                              src={toAbsoluteUrl(
                                `/media/flags/${proposalForReview?.country?.toLowerCase()}.svg`
                              )}
                              className='fs-6 fw-bold'
                              alt={proposalForReview?.opportunityObject?.country}
                              data-toggle='tooltips'
                              title={proposalForReview?.opportunityObject?.country}
                              data-bs-placement='bottom'
                            />
                          </span>
                        </div>

                        <div className='d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400'>
                          Title: {proposalForReview?.title}
                        </div>
                      </div>
                      <div className='d-flex mb-4'>
                        <span
                          className={`badge badge-${propBadgeColor} fs-4 text-uppercase me-3 py-3 px-3`}
                        >
                          {proposalForReview?.status}
                        </span>
                      </div>
                    </div>
                    <div className='d-flex flex-wrap justify-content-start'>
                      <div className='d-flex flex-wrap'>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex align-items-center'>
                            <div className='fs-4 fw-bold'>
                              {moment(proposalForReview?.date_submitted).format('MMM Do, YYYY')}
                            </div>
                          </div>

                          <div className='fw-semibold fs-6 text-gray-400'>Date Submitted</div>
                        </div>
                      </div>

                      <div className='d-flex flex-wrap'>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex align-items-center'>
                            <div className='fs-4 fw-bold'>
                              {proposalForReview?.admin_screening ? 'YES' : 'NO'}
                            </div>
                          </div>

                          <div className='fw-semibold fs-6 text-gray-400'>
                            Admin Review Requested
                          </div>
                        </div>
                      </div>
                      <div className='d-flex flex-wrap'>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex justify-content-end align-items-center '>
                            <div className='bg-light text-uppercase py-3 px-3'>
                              <span className='fs-2 fw-bold me-3'>Opportunity:</span>
                              <Link
                                to={`/opportunities/${proposalForReview?.opportunityObject?.uuid}`}
                                className='text-muted text-hover-primary fs-2 '
                              >
                                {proposalForReview?.opportunityObject?.dpxid}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card mb-5 mb-xl-10'>
              <div
                className='card-header border-0 cursor-pointer'
                role='button'
                data-bs-toggle='collapse'
                data-bs-target='#kt_prop_title'
                aria-expanded='true'
                aria-controls='kt_prop_title'
              >
                <div className='card-title m-0'>
                  <h3 className='fw-bolder m-0'>Title</h3>
                </div>
              </div>
              <div id='kt_prop_title' className='collapse show'>
                <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                  <div className='text-muted me-2 fs-7'>{proposalForReview?.title}</div>
                </div>
              </div>

              <div
                className='card-header border-0 cursor-pointer'
                role='button'
                data-bs-toggle='collapse'
                data-bs-target='#kt_prop_summary'
                aria-expanded='true'
                aria-controls='kt_prop_summary'
              >
                <div className='card-title m-0'>
                  <h3 className='fw-bolder m-0'>Summary</h3>
                </div>
              </div>
              <div id='kt_prop_summary' className='collapse show'>
                <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                  <div className='text-muted me-2 fs-7'>{proposalForReview?.summary}</div>
                </div>
              </div>
              <div
                className='card-header border-0 cursor-pointer'
                role='button'
                data-bs-toggle='collapse'
                data-bs-target='#kt_prop_propdesc'
                aria-expanded='true'
                aria-controls='kt_prop_propdesc'
              >
                <div className='card-title m-0'>
                  <h3 className='fw-bolder m-0'>Details</h3>
                </div>
              </div>
              <div id='kt_prop_propdesc' className='collapse'>
                <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                  <div className='text-muted me-2 fs-7'>{proposalForReview?.propdesc}</div>
                </div>
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
          </div>
        </div>
        {/* end::Input group */}
        {/* </div> */}
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
