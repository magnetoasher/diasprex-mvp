import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {initialOpps, Opps} from '../core/_models'
// import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {OppsListLoading} from '../components/loading/OppsListLoading'
import {createOpp, updateOpp} from '../core/_oppsrequests'
import {useQueryResponse} from '../core/QueryResponseProvider'

type Props = {
  isOppLoading: boolean
  opp: Opps
}

const editOppSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(150, 'Maximum 50 symbols')
    .required('Title is required'),
  
    summary: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(500, 'Maximum 500 symbols')
    .required('Summary is required'),
  
    oppdesc: Yup.string()
    .required('Description is required'),

  duedate: Yup.date()
    .required('Due date is required'),
  
    rewards: Yup.object()
    .required('Rewards type is required'),
})

const OppEditModalForm: FC<Props> = ({opp, isOppLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [oppForEdit] = useState<Opps>({
    ...opp,
    id: opp.id || initialOpps.id,
    thumbnail: opp.thumbnail || initialOpps.thumbnail,
    oppdesc: opp.oppdesc || initialOpps.oppdesc,
    title: opp.title || initialOpps.title,
    summary: opp.summary || initialOpps.summary,
    category: opp.category || initialOpps.category,
    sponsor: opp.sponsor || initialOpps.sponsor,
    datesubmitted: opp.datesubmitted || initialOpps.datesubmitted,
    duedate: opp.duedate || initialOpps.duedate,
    rewards: opp.rewards || initialOpps.rewards,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  const oppThumbnailImg = toAbsoluteUrl(`/media/${oppForEdit.thumbnail}`)

  const formik = useFormik({
    initialValues: oppForEdit,
    validationSchema: editOppSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateOpp(values)
        } else {
          await createOpp(values)
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
              <div className="card bg-light-normal shadow me-2 mb-2 px-10 py-10"
                data-kt-sticky="true"

>
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='d-block fw-bold fs-6 mb-5'>Opportunity Thumbnail</label>
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
                style={{backgroundImage: `url('${oppThumbnailImg}')`}}
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
            <div className='form-text'>Allowed file types: png, jpg, jpeg.</div>
            {/* end::Hint */}
          </div>
          
                {/* end::Input group */}

                 {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='fw-bold fs-6 mb-2'>ID:</label>
            {/* end::Label */}
            {/* begin::Span */}
           <span> {oppForEdit.id} </span>
            {/* end::Input */}
          </div>
                {/* end::Input group */}
                
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='fw-bold fs-6 mb-2'>Title:</label>
            {/* end::Label */}
            {/* begin::Span */}
                  <span> {oppForEdit.title} </span>
            {/* end::Input */}
          </div>
                {/* end::Input group */}
                
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='fw-bold fs-6 mb-2'>Category:</label>
            {/* end::Label */}
            {/* begin::Span */}
                  <span> {oppForEdit.category} </span>
            {/* end::Input */}
          </div>
          {/* end::Input group */}
          
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='fw-bold fs-6 mb-2'>Date Submitted:</label>
            {/* end::Label */}
            {/* begin::Span */}
                  <span> {oppForEdit.datesubmitted} </span>
            {/* end::Input */}
                </div>
                
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='fw-bold fs-6 mb-2'>Due Date:</label>
            {/* end::Label */}
            {/* begin::Span */}
                  <span> {oppForEdit.duedate} </span>
            {/* end::Input */}
          </div>
          {/* end::Input group */}
          
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='fw-bold fs-6 mb-2'>Sponsor:</label>
            {/* end::Label */}
            {/* begin::Span */}
                  <span> {oppForEdit.sponsor} </span>
            {/* end::Input */}
          </div>
                {/* end::Input group */}
                
                          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='fw-bold fs-6 mb-2'>Rewards:</label>
            {/* end::Label */}
            {/* begin::Span */}
            <span> Equity, Contract, Cash </span>
            {/* end::Input */}
          </div>
                {/* end::Input group */}
                
            {/* begin::Input group */}
          <div className='fv-row d-flex mb-7'>
                    <div>
                    <label className='fw-bold fs-6 mb-2 me-1 '>Followers:</label>
                    <span className= 'me-10' > 300 </span>
                  </div>
                    <div>
                    <label className='fw-bold fs-6 mb-2 me-1'>Show of Interest:</label>
                    <span> 120 </span>
                    </div>
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* end::Input group */}

        </div>
          {/* end::Scroll */}
            </div>
            
        
        <div className="col-lg-7">
           <div className="card card-stretch card-bordered mb-5">
            <div className="card-header">
                <h3 className="card-title">Height 100%</h3>
            </div>
            <div className="card-body">
                Lorem Ipsum is simply dummy text
            </div>
            <div className="card-footer">
                Footer
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
            disabled={formik.isSubmitting || isOppLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isOppLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Save Changes</span>
            {(formik.isSubmitting || isOppLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
            </button>
            </div>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isOppLoading) && <OppsListLoading />}
    </>
  )
}

export {OppEditModalForm}
