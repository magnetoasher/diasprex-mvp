// @ts-nocheck comment
import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {initialProposal, Proposal} from '../core/_models'
import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {ListLoading} from '../../../core/loading/ListLoading'
import {createProposal, updateProposal} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import {Editor} from 'react-draft-wysiwyg'

type Props = {
  isProposalLoading: boolean
  proposal: Proposal
}

const editProposalSchema = Yup.object().shape({
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

const PropEditModalForm: FC<Props> = ({proposal, isProposalLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [proposalForEdit] = useState<Proposal>({
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
  const userAvatarImg = toAbsoluteUrl(`/media/${proposalForEdit.thumbnail}`)

  const formik = useFormik({
    initialValues: proposalForEdit,
    validationSchema: editProposalSchema,
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
        id='kt_modal_add_proposal_form'
        className='form'
        onSubmit={formik.handleSubmit}
        noValidate
      >
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_proposal_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_proposal_header'
          data-kt-scroll-wrappers='#kt_modal_add_proposal_scroll'
          data-kt-scroll-offset='300px'
        >
          <div className='row g-5'>
            <div className='col-lg-4'>
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
              <div className='d-flex flex-column mb-5 fv-row'>
                <label className='fs-6 fw-bold mb-2'>Proposal Title</label>

                <input
                  className='form-control'
                  placeholder='Title'
                  {...formik.getFieldProps('title')}
                  name='title'
                />
                {formik.touched.title && formik.errors.title && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.title}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className='d-flex flex-column mb-10 fv-row'>
                <label className='required fs-6 fw-bold mb-2'>Proposal Summary</label>
                <textarea
                  className='form-control mb-2'
                  rows={5}
                  placeholder='Type the summary of your opportunity  (max of 500 characters)'
                  {...formik.getFieldProps('summary')}
                  name='summary'
                  autoComplete='off'
                  disabled={formik.isSubmitting}
                ></textarea>
              </div>
              <div className='d-flex flex-column fv-row mb-10 '>
                <h5>
                  <b className='required fw-bold fs-6 mb-2'>Proposal Details</b>
                </h5>

                <Editor
                  editorStyle={{
                    border: '1px solid',
                    resize: 'vertical',
                    overflow: 'auto',
                    height: '300px', // whatever height you want
                    width: '100%',
                    borderRadius: '5px',
                  }}
                  // editorState={editorState}
                  {...formik.getFieldProps('propdesc')}
                  toolbarClassName='toolbarClassName'
                  wrapperClassName='wrapperClassName'
                  editorClassName='editorClassName'
                  value={formik.values.propdesc}
                  id='propdesc'
                  onContentStateChange={(val) => {
                    formik.handleChange({target: {name: 'oppdesc', value: val.blocks[0].text}})
                  }}
                  name='oppsdesc'
                  disabled={formik.isSubmitting}
                />
                {formik.touched.propdesc && formik.errors.propdesc && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.propdesc}</span>
                    </div>
                  </div>
                )}
              </div>
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
            </div>
            <div className='text-center pt-15'>
              <button
                type='reset'
                onClick={() => cancel()}
                className='btn btn-light me-3'
                data-kt-users-modal-action='cancel'
                disabled={formik.isSubmitting || isProposalLoading}
              >
                Discard
              </button>

              <button
                type='submit'
                className='btn btn-primary'
                data-kt-users-modal-action='submit'
                disabled={
                  isProposalLoading || formik.isSubmitting || !formik.isValid || !formik.touched
                }
              >
                <span className='indicator-label'>Submit</span>
                {(formik.isSubmitting || isProposalLoading) && (
                  <span className='indicator-progress'>
                    Please wait...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
      {(formik.isSubmitting || isProposalLoading) && <ListLoading />}
    </>
  )
}

export {PropEditModalForm}
