import {FC, useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {isNotEmpty, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {initialOpps, Opps} from '../core/_models'
import {Editor} from 'react-draft-wysiwyg'
import moment from 'moment'
import {Upload, Col, Row, Select, DatePicker, Button, Input, Card, Checkbox} from 'antd'
import {UploadOutlined} from '@ant-design/icons'
import GeneralCardComponent from '../../../../../opportunities/GeneralCardOpportunityComponent/GeneralCardComponent'

// import clsx from 'clsx'
import {useListView} from '../core/ListViewProvider'
import {ListLoading} from '../../../core/loading/ListLoading'
import {createOpp, updateOpp} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import {nanoid} from '@reduxjs/toolkit'
import {CountryList} from '../../../../../../../_metronic/partials/content/selectionlists'
import {OppsCategory} from '../../../../../../../_metronic/partials/content/selectionlists/oppscategory'

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

  oppdesc: Yup.string().required('Description is required'),

  duedate: Yup.date().required('Due date is required'),

  rewards: Yup.object().required('Rewards type is required'),
})

const OppEditModalForm: FC<Props> = ({opp, isOppLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  const [isOtherSelected, setIsOtherSelected] = useState(false)

  const [oppForEdit] = useState<Opps>({
    ...opp,
    thumbnail: opp.thumbnail || initialOpps.thumbnail,
    oppdesc: opp.oppdesc || initialOpps.oppdesc,
    title: opp.title || initialOpps.title,
    summary: opp.summary || initialOpps.summary,
    category: opp.category || initialOpps.category,
    sponsorName: opp.sponsorName || initialOpps.sponsorName,
    datesubmitted: opp.datesubmitted || initialOpps.datesubmitted,
    duedate: opp.duedate || initialOpps.duedate,
    dealtype: opp.dealtype || initialOpps.dealtype,
  })

  const allDealType =
    oppForEdit.otherdealtype === undefined
      ? oppForEdit.dealtype
      : oppForEdit.dealtype?.concat(oppForEdit.otherdealtype)
  console.log('DealType', allDealType)

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
    validateOnChange: false,
    // validationSchema: editOppSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)

      const updatedOpp = {...oppForEdit, ...values}
      try {
        if (isNotEmpty(values.id)) {
          await createOpp(updatedOpp)
        } else {
          const idNumber = nanoid()
          const newOpp = {
            ...values,
            uuid: idNumber,
            id: idNumber,
            sponsorUserId: nanoid(),
            sponsor: 'Sponsor Name',
            status: 'new',
            open: false,
            datesubmitted: moment(new Date()).format('DD MMM YYYY'),
            // duedate: values.duedate === '' && moment(new Date()).add(90, 'days').toDate(),
            otherdealtype: !isOtherSelected ? undefined : values.otherdealtype,
          }
          await createOpp(newOpp)
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
      <form id='kt_modal_add_opp_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_opp_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_opp_header'
          data-kt-scroll-wrappers='#kt_modal_add_opp_scroll'
          data-kt-scroll-offset='300px'
        >
          <div className='row g-5'>
            {/* Begin sticky card */}
            <div className='col-lg-4'>
              {/* <Row gutter={8} justify='space-evenly'>
                <Col
                  xs={24}
                  sm={24}
                  md={6}
                  lg={6}
                  style={{margin: '5px'}}
                  className='box-shadow-style bg-white'
                > */}
              <GeneralCardComponent
                id={oppForEdit.id}
                sponsorName={oppForEdit.sponsorName}
                title={oppForEdit.title}
                country={oppForEdit.country}
                status={oppForEdit.status}
                oppdesc={oppForEdit.oppdesc}
                dealtype={allDealType}
                duedate={moment(oppForEdit.duedate).format('DD MMM YYYY')}
                open={oppForEdit.open}
                thumbnail={oppForEdit.thumbnail}
                summary={oppForEdit.summary}
                following={oppForEdit.following}
                showedinterest={oppForEdit.showedinterest}
              />
              {/* </Col> */}
              {/* </Row> */}
              <div
                className='card bg-light-normal shadow me-2 mb-2 px-10 py-10'
                data-kt-sticky='true'
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
                    <label
                      className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                      data-kt-image-input-action='change'
                      data-bs-toggle='tooltip'
                      title='Change avatar'
                    >
                      <i className='bi bi-pencil-fill fs-7'></i>

                      <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
                      <input type='hidden' name='thumbnail_remove' />
                    </label>
                    {/* end::Label */}

                    {/* begin::Cancel */}
                    <span
                      className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                      data-kt-image-input-action='cancel'
                      data-bs-toggle='tooltip'
                      title='Cancel thumbnail'
                    >
                      <i className='bi bi-x fs-2'></i>
                    </span>
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
                  <span> {moment(oppForEdit.datesubmitted).format('DD MMM YYYY')} </span>
                  {/* end::Input */}
                </div>

                {/* begin::Input group */}
                <div className='fv-row mb-7'>
                  {/* begin::Label */}
                  <label className='fw-bold fs-6 mb-2'>Due Date:</label>
                  {/* end::Label */}
                  {/* begin::Span */}
                  <span> {moment(oppForEdit.duedate).format('DD MMM YYYY')} </span>
                  {/* end::Input */}
                </div>
                {/* end::Input group */}

                {/* begin::Input group */}
                <div className='fv-row mb-7'>
                  {/* begin::Label */}
                  <label className='fw-bold fs-6 mb-2'>Sponsor:</label>
                  {/* end::Label */}
                  {/* begin::Span */}
                  <span> {oppForEdit.sponsorName} </span>
                  {/* end::Input */}
                </div>
                {/* end::Input group */}

                {/* begin::Input group */}
                <div className='fv-row mb-7'>
                  {/* begin::Label */}
                  <label className='fw-bold fs-6 mb-2 me-3'>Deal Type:</label>
                  {/* end::Label */}
                  {/* begin::Span */}
                  {allDealType?.map((deal, index) =>
                    index < allDealType?.length! - 1 ? (
                      <span key={index} className='me-1'>
                        {deal} |
                      </span>
                    ) : (
                      <span key={index} className='me-1'>
                        {deal}
                      </span>
                    )
                  )}
                  {/* end::Input */}
                </div>
                {/* end::Input group */}

                {/* begin::Input group */}
                <div className='fv-row d-flex mb-7'>
                  <div>
                    <label className='fw-bold fs-6 mb-2 me-1 '>Followers:</label>
                    <span className='me-10'> {oppForEdit.following} </span>
                  </div>
                  <div>
                    <label className='fw-bold fs-6 mb-2 me-1'>Show of Interest:</label>
                    <span> {oppForEdit.showedinterest} </span>
                  </div>
                  {/* end::Input */}
                </div>
                {/* end::Input group */}
                <div className='form-check form-switch form-check-custom form-check-solid me-5 mb-3'>
                  <input
                    className='form-check-input me-2'
                    type='checkbox'
                    {...formik.getFieldProps('open')}
                    name='open'
                    id='open'
                    checked={formik.values.open}
                    disabled={formik.isSubmitting}
                    onChange={() => {
                      formik.handleChange({target: {name: 'open', value: !formik.values.open}})
                    }}
                  />
                  <label className='form-check-label' htmlFor='open'>
                    Open Opportunity
                  </label>
                </div>
                <div className='form-check form-switch form-check-custom form-check-solid me-5 mb-3'>
                  <input
                    className='form-check-input me-2'
                    type='checkbox'
                    {...formik.getFieldProps('featuredopp')}
                    name='featuredopp'
                    id='featuredopp'
                    checked={formik.values.featuredopp}
                    disabled={formik.isSubmitting}
                    onChange={() => {
                      formik.handleChange({
                        target: {name: 'featuredopp', value: !formik.values.featuredopp},
                      })
                    }}
                  />
                  <label className='form-check-label' htmlFor='featuredopp'>
                    Featured
                  </label>
                </div>

                {/* <div className='text-center pt-15'>
                  <button
                    type='reset'
                    className='btn btn-light me-3'
                    disabled={formik.isSubmitting || isOppLoading}
                  >
                    View Feedback
                  </button>
                </div> */}

                {/* end::Input group */}
              </div>
              {/* end::Scroll */}
            </div>

            <div className='col-lg-7'>
              <div className='card card-stretch card-bordered mb-5'>
                <div className='card-header'>
                  <h3 className='card-title'>Add/Edit Opportunity</h3>
                </div>
                <div className='card-body'>
                  <div className='d-flex mb-5 fv-row'>
                    <div className='col-md-4'>
                      <div className='form-group mb-5'>
                        <h5>
                          <b className='required fw-bold fs-6 mb-2'>Select Category</b>
                        </h5>
                        <select
                          className='form-select form-select-lg'
                          aria-label='countryRes'
                          placeholder='Select Category'
                          {...formik.getFieldProps('category')}
                          name='category'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        >
                          <OppsCategory />
                        </select>
                        {formik.touched.category && formik.errors.category && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block text-danger'>
                              <span role='alert'>{formik.errors.category}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className='fv-row mb-5'>
                        <label className='form-label text-muted required fw-bold fs-6 mb-2'>
                          Please select the country for this opportunity
                        </label>
                        <select
                          className='form-select form-select-white'
                          aria-label='country'
                          {...formik.getFieldProps('country')}
                          name='country'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        >
                          <CountryList />
                        </select>
                        {formik.touched.country && formik.errors.country && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block text-danger'>
                              <span role='alert'>{formik.errors.country}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className='form-group mb-5'>
                        <h5>
                          <b className='required fw-bold fs-6 mb-2'>Due Date</b>
                        </h5>

                        <DatePicker
                          defaultValue={moment('01/01/2015', dateFormatList[0])}
                          format={dateFormatList}
                          // {...formik.getFieldProps('duedate')}
                          // name='duedate'
                        />
                        {/* {formik.touched.duedate && formik.errors.duedate && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.duedate}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>

                    <div className='form-group col-md-8 px-10'>
                      <label className='fs-6 fw-bold mb-2'>Deal Type</label>
                      <p className='text-muted'>
                        (Please select the deal types you are willing to consider)
                      </p>
                      <div className='input-group d-flex flex-wrap mb-3'>
                        <div className='form-check me-5 mb-3'>
                          <input
                            className='form-check-input me-2'
                            type='checkbox'
                            {...formik.getFieldProps('dealtype')}
                            name='dealtype'
                            id='dealtype1'
                            checked={formik.values.dealtype?.includes('Equity & Equity Finance')}
                            value='Equity & Equity Finance'
                            disabled={formik.isSubmitting}
                          />
                          <label className='form-check-label' htmlFor='dealtype1'>
                            Equity & Equity Financing
                          </label>
                        </div>

                        <div className='form-check me-5 mb-3'>
                          <input
                            className='form-check-input me-2'
                            type='checkbox'
                            {...formik.getFieldProps('dealtype')}
                            name='dealtype'
                            id='dealtype2'
                            checked={formik.values.dealtype?.includes('Debt Finance')}
                            value='Debt Finance'
                            disabled={formik.isSubmitting}
                          />
                          <label className='form-check-label' htmlFor='dealtype2'>
                            Debt Fnancing
                          </label>
                        </div>
                        <div className='form-check me-5 mb-3'>
                          <input
                            className='form-check-input me-2'
                            type='checkbox'
                            {...formik.getFieldProps('dealtype')}
                            name='dealtype'
                            id='dealtype3'
                            checked={formik.values.dealtype?.includes('Contract')}
                            value='Contract'
                            disabled={formik.isSubmitting}
                          />
                          <label className='form-check-label' htmlFor='dealtype3'>
                            Contract
                          </label>
                        </div>
                        <div className='form-check me-5 mb-3'>
                          <input
                            className='form-check-input me-2'
                            type='checkbox'
                            {...formik.getFieldProps('dealtype')}
                            name='dealtype'
                            id='dealtype4'
                            checked={formik.values.dealtype?.includes('Partnership')}
                            value='Partnership'
                            disabled={formik.isSubmitting}
                          />
                          <label className='form-check-label' htmlFor='dealtype4'>
                            Partnership
                          </label>
                        </div>
                        <div className='form-check me-5 mb-3'>
                          <input
                            className='form-check-input me-2'
                            type='checkbox'
                            {...formik.getFieldProps('dealtype')}
                            name='dealtype'
                            id='dealtype5'
                            checked={formik.values.dealtype?.includes('Consulting')}
                            value='Consulting'
                            disabled={formik.isSubmitting}
                          />
                          <label className='form-check-label' htmlFor='dealtype5'>
                            Consulting
                          </label>
                        </div>
                        <div className='form-check me-5 mb-3'>
                          <input
                            className='form-check-input me-2'
                            type='checkbox'
                            {...formik.getFieldProps('dealtype')}
                            name='dealtype'
                            id='dealtype6'
                            onChange={() => setIsOtherSelected(!isOtherSelected)}
                          />
                          <label className='form-check-label' htmlFor='dealtype6'>
                            Other
                          </label>
                        </div>
                      </div>
                      {isOtherSelected && (
                        <span>
                          <Input
                            style={{borderRadius: '10px', marginTop: '10px'}}
                            placeholder='Enter other type deals separated by comma'
                            {...formik.getFieldProps('otherdealtype')}
                            name='otherdealtype'
                            disabled={formik.isSubmitting}
                          />
                        </span>
                      )}
                      {formik.touched.dealtype && formik.errors.dealtype && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block text-danger'>
                            <span role='alert'>{formik.errors.dealtype}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='d-flex flex-column mb-5 fv-row'>
                    <label className='fs-6 fw-bold mb-2'>Opportunity Title</label>

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
                    <label className='required fs-6 fw-bold mb-2'>Opportunity Summary</label>
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
                  <div className='d-flex flex-column fv-row mb-5 '>
                    <h5>
                      <b className='required fw-bold fs-6 mb-2'>Opportunity Details</b>
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
                      //   editorState={editorState}
                      toolbarClassName='toolbarClassName'
                      wrapperClassName='wrapperClassName'
                      editorClassName='editorClassName'
                      // value={formik.values.oppdesc}
                      onContentStateChange={(val) => {
                        formik.handleChange({target: {name: 'oppdesc', value: val.blocks[0].text}})
                      }}
                      // name='oppsdesc'
                      // disabled={formik.isSubmitting}
                    />
                    {formik.touched.oppdesc && formik.errors.oppdesc && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block text-danger'>
                          <span role='alert'>{formik.errors.oppdesc}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className='card-footer'>
                  <div className='fv-row d-flex flex-row'>
                    <div style={{marginRight: '10px'}}>
                      <Upload>
                        <Button
                          className='d-flex justify-content-center align-items-center'
                          icon={<UploadOutlined />}
                        >
                          Upload File
                        </Button>
                      </Upload>
                    </div>
                    <div>
                      <Upload>
                        <Button
                          className='d-flex justify-content-center align-items-center'
                          icon={<UploadOutlined />}
                        >
                          Upload Thumbnail
                        </Button>
                      </Upload>
                    </div>
                  </div>
                  <div className='d-flex flex-column fv-row py-10'>
                    <div className='form-check form-check d-flex justify-content-start align-items-center mb-3'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        {...formik.getFieldProps('dpxfinancing')}
                        id='request_diasprex_financing'
                        name='dpxfinancing'
                        disabled={formik.isSubmitting}
                      />
                      <label
                        className='form-check-label fw-bold ps-2 fs-6'
                        htmlFor='request_diasprex_financing'
                      >
                        Requesting Diasprex's Financing
                      </label>
                    </div>
                    <div className='form-check form-check d-flex justify-content-start align-items-center mb-3'>
                      <span className='me-3'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          {...formik.getFieldProps('crowdfunding')}
                          id='crowdfunding'
                          name='crowdfunding'
                          disabled={true}
                        />
                        <label
                          className='form-check-label fw-bold ps-2 fs-6'
                          htmlFor='crowdfunding'
                        >
                          Crowdfunding Campaign Through Diasprex (Coming soon)
                        </label>
                      </span>
                      <span className='me-3'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          {...formik.getFieldProps('crowdlending')}
                          id='crowdlending'
                          name='crowdlending'
                          disabled={true}
                        />
                        <label
                          className='form-check-label fw-bold ps-2 fs-6'
                          htmlFor='crowdlending'
                        >
                          Crowdlending Campaign Through Diasprex (Coming soon)
                        </label>
                      </span>
                    </div>
                    <div className='text-muted'>
                      Checking these boxes does not guarantee Diasprex's financing. Only outstading
                      opportunities that meet Diasprex's fiancing criteria are selected
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
              onClick={() => formik.resetForm()}
              className='btn btn-light me-3'
              data-kt-opps-modal-action='reset'
              disabled={formik.isSubmitting || isOppLoading}
            >
              Discard
            </button>

            <button
              type='button'
              onClick={() => cancel()}
              className='btn btn-light me-3'
              data-kt-opps-modal-action='close'
              disabled={formik.isSubmitting || isOppLoading}
            >
              Cancel
            </button>

            <button
              type='submit'
              className='btn btn-primary'
              data-kt-users-modal-action='submit'
              disabled={isOppLoading || formik.isSubmitting}
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
      {(formik.isSubmitting || isOppLoading) && <ListLoading />}
    </>
  )
}

export {OppEditModalForm}
