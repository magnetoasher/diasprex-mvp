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
import {
  CountryList,
  SponsorCountryList,
} from '../../../../../../../_metronic/partials/content/selectionlists'
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
              <div className='card bg-light-normal me-2 mb-2 px-10 py-10' data-kt-sticky='true'>
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
                  <span> {oppForEdit.dpxid} </span>
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
                    <span className='me-10'> {oppForEdit?.following?.length} </span>
                  </div>
                  <div>
                    <label className='fw-bold fs-6 mb-2 me-1'>Show of Interest:</label>
                    <span> {oppForEdit.showedinterest?.length} </span>
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
                  <div className='separator separator-content separator-dashed my-15'>
                    <span className='w-250px fw-bold'>Opportunity Summary</span>
                  </div>

                  <div className='row g-6 g-xl-9'>
                    <div className='col-lg-6'>
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
                          <option value=''>{formik.values.country}</option>
                          {SponsorCountryList.map((country, index) => (
                            <option key={index} value={country.label}>
                              {country.label}
                            </option>
                          ))}
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
                          defaultValue={moment(moment(oppForEdit.duedate), dateFormatList[0])}
                          format={dateFormatList}
                          onChange={(date, dateString) => {
                            formik.handleChange({target: {name: 'duedate', value: date}})
                          }}
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

                    <div className='col-lg-6'>
                      <label className='fs-6 fw-bold mb-2'>Deal Type</label>
                      <p className='text-muted'>(Please select the deal types you are seeking)</p>
                      <div className='input-group d-flex flex-wrap mb-3'>
                        <div className='form-check me-5 mb-3'>
                          <input
                            className='form-check-input me-2'
                            type='checkbox'
                            {...formik.getFieldProps('dealtype')}
                            name='dealtype'
                            id='dealtype1'
                            value='Equity & Equity Finance'
                            checked={oppForEdit.dealtype?.includes('Equity & Equity Finance')}
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
                            value='Debt Finance'
                            checked={oppForEdit.dealtype?.includes('Debt Finance')}
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
                            value='Contract'
                            checked={oppForEdit.dealtype?.includes('Contract')}
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
                            value='Partnership'
                            checked={oppForEdit.dealtype?.includes('Partnership')}
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
                            value='Consulting'
                            checked={oppForEdit.dealtype?.includes('Consulting')}
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
                            checked={oppForEdit.otherdealtype !== null}
                            onChange={() => setIsOtherSelected(!isOtherSelected)}
                          />
                          <label className='form-check-label' htmlFor='dealtype6'>
                            Other
                          </label>
                        </div>
                      </div>
                      {isOtherSelected && oppForEdit.otherdealtype !== null && (
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

                  <div className='separator separator-content separator-dashed my-15'>
                    <span className='w-250px fw-bold'>Market / Opportunity</span>
                  </div>
                  <div className='row g-6 g-xl-9'>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Market Need/Problem</label>
                        <p className='text-muted'>
                          What unmet need / problem are you addressing? (700 characters maximum)
                        </p>
                        <textarea
                          className='form-control mb-2'
                          rows={5}
                          placeholder='Market need/problems  (max of 700 characters)'
                          {...formik.getFieldProps('oppdesc.marketneed')}
                          name='oppdesc.marketneed'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.marketneed && formik.errors.oppdesc.marketneed && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.marketneed}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Market Size</label>
                        <p className='text-muted'>
                          What is the overall market opportunity for the need you are addressing?
                          i.e., in terms of the number of end users and/or total revenue. (700
                          characters maximum)
                        </p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={700}
                          rows={5}
                          placeholder='Type the summary of your opportunity  (max of 500 characters)'
                          {...formik.getFieldProps('oppdesc.marketsize')}
                          name='oppdesc.marketsize'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.marketsize && formik.errors.oppdesc.marketsize && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.marketsize}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>

                    {/* <div className='d-flex flex-column fv-row mb-10 '>
                <h5>
                  <b className='required fw-bold fs-6 mb-2'>Opportunity Details</b>
                </h5>
                <p className='text-muted'>
                  Please describe the opportunity in details as best as you can and ensure to
                  address the following without disclosing any proprietary information. Proprietary
                  materials can be included as a file attachments.
                  <ul>
                    <li>Market need</li>
                    <li>Your solution</li>
                    <li>Developmental impact</li>
                    <li>Market size</li>
                    <li>Company</li>
                    <li>The team</li>
                    <li>The Ask</li>
                    <li>Diaspora engagement plan</li>
                  </ul>
                </p>

                <Editor
                  editorStyle={{
                    border: '1px solid',
                    resize: 'vertical',
                    overflow: 'auto',
                    height: '300px', // whatever height you want
                    width: '100%',
                    borderRadius: '5px',
                  }}
                  id='oppsdesc'
                  // editorState={editorState}
                  toolbarClassName='toolbarClassName'
                  wrapperClassName='wrapperClassName'
                  editorClassName='editorClassName'
                  value={formik.values.oppdesc}
                  onContentStateChange={(val) => {
                    formik.handleChange({target: {name: 'oppdesc', value: val.blocks[0].text}})
                  }}
                  name='oppsdesc'
                  disabled={formik.isSubmitting}
                />
                {formik.touched.oppdesc && formik.errors.oppdesc && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc}</span>
                    </div>
                  </div>
                )}
              </div> */}
                  </div>
                  <div className='separator separator-content separator-dashed my-15'>
                    <span className='w-250px fw-bold'>Product / Services</span>
                  </div>

                  <div className='row g-6 g-xl-9'>
                    <div className='d-flex flex-column mb-10 fv-row'>
                      <label className='required fs-6 fw-bold mb-2'>Product / Services</label>
                      <p className='text-muted'>
                        Describe your product / service in 1 - 2 paragraphs (1,400 characters
                        maximum)
                      </p>
                      <textarea
                        className='form-control mb-2'
                        rows={10}
                        placeholder='Product and/or services (max of 1400 characters)'
                        {...formik.getFieldProps('oppdesc.productservices')}
                        name='oppdesc.productservices'
                        autoComplete='off'
                        disabled={formik.isSubmitting}
                      ></textarea>
                      {/* {formik.touched.oppdesc.productservices && formik.errors.oppdesc.productservices && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.productservices}</span>
                    </div>
                  </div>
                )} */}
                    </div>
                  </div>
                  <div className='row g-6 g-xl-9'>
                    <div className='d-flex flex-column mb-10 fv-row'>
                      <label className='required fs-6 fw-bold mb-2'>Developmental Impact</label>
                      <p className='text-muted'>
                        Describe the broader impact of your business to your community (1,400
                        characters maximum)
                      </p>
                      <textarea
                        className='form-control mb-2'
                        rows={10}
                        placeholder='Broader impact of your business (max of 1400 characters)'
                        {...formik.getFieldProps('oppdesc.devimpact')}
                        name='oppdesc.devimpact'
                        autoComplete='off'
                        disabled={formik.isSubmitting}
                      ></textarea>
                      {/* {formik.touched.oppdesc.devimpact && formik.errors.oppdesc.devimpact && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.devimpact}</span>
                    </div>
                  </div>
                )} */}
                    </div>
                  </div>

                  <div className='separator separator-content separator-dashed my-15'>
                    <span className='w-250px fw-bold'>Business Model</span>
                  </div>

                  <div className='row g-6 g-xl-9'>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Business Model</label>
                        <p className='text-muted'>
                          Please describe how your solution generates or plans to generate revenue.
                        </p>
                        <textarea
                          className='form-control mb-2'
                          rows={5}
                          placeholder='Business model (max of 700 characters)'
                          {...formik.getFieldProps('oppdesc.businessmodel')}
                          name='oppdesc.businessmodel'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.businessmodel && formik.errors.oppdesc.businessmodel && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.businessmodel}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Value Proposition</label>
                        <p className='text-muted'>
                          What is your unique value proposition? (700 characters maximum)
                        </p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={700}
                          rows={5}
                          placeholder='Market need/problems  (max of 700 characters)'
                          {...formik.getFieldProps('oppdesc.valueprop')}
                          name='oppdesc.valueprop'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.valueprop && formik.errors.oppdesc.valueprop && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.valueprop}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Go-to-Market Strategy</label>
                        <p className='text-muted'>
                          Please describe your primary market(s) for launch and your strategy for
                          entering the market(s). Please include information on pricing, gross
                          margin
                        </p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={1400}
                          rows={5}
                          placeholder='Go to market strategy  (max of 1400 characters)'
                          {...formik.getFieldProps('oppdesc.gotomarket')}
                          name='oppdesc.gotomarket'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.gotomarket && formik.errors.oppdesc.gotomarket && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.gotomarket}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>
                  </div>

                  <div className='separator separator-content separator-dashed my-15'>
                    <span className='w-250px fw-bold'>Competitive Advantage</span>
                  </div>

                  <div className='row g-6 g-xl-9'>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Competitors</label>
                        <p className='text-muted'>
                          Please list your top 3 competitors addressing the space you are seeking to
                          enter or currently operating, and summarize your competitive advantages
                          (700 characters maximum)
                        </p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={700}
                          rows={5}
                          placeholder='Market need/problems  (max of 700 characters)'
                          {...formik.getFieldProps('oppdesc.competitor')}
                          name='oppdesc.competitor'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.competitor && formik.errors.oppdesc.competitor && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.competitor}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>

                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Competitive Landscape</label>
                        <p className='text-muted'>
                          Please describe how your will change the competitive landscape (700
                          characters maximum)
                        </p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={700}
                          rows={5}
                          placeholder='Market need/problems  (max of 700 characters)'
                          {...formik.getFieldProps('oppdesc.complandscape')}
                          name='oppdesc.complandscape'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.complandscape && formik.errors.oppdesc.complandscape && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.complandscape}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>
                  </div>

                  <div className='separator separator-content separator-dashed my-15'>
                    <span className='w-250px fw-bold'>Company / Team</span>
                  </div>

                  <div className='row g-6 g-xl-9'>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Team and Expertise</label>
                        <p className='text-muted'>
                          List your key team members and their expertise, as it relates to your
                          company and tell us how your team is uniquely positioned to solve the
                          problem you are solving. Please indicate full-time (FT) or part-time (PT).
                          (700 characters maximum)
                        </p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={700}
                          rows={5}
                          placeholder='Market need/problems  (max of 700 characters)'
                          {...formik.getFieldProps('oppdesc.companyteam')}
                          name='oppdesc.companyteam'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.companyteam && formik.errors.oppdesc.companyteam && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.companyteam}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Company</label>
                        <p className='text-muted'>
                          Tell us about your company. (1400 characters maximum)
                        </p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={700}
                          rows={5}
                          placeholder='About your company  (max of 1400 characters)'
                          {...formik.getFieldProps('oppdesc.company')}
                          name='oppdesc.company'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.company && formik.errors.oppdesc.company && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.company}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Diaspora Engagement</label>
                        <p className='text-muted'>
                          Tell us how you plan to engage African in diaspora to achieve your
                          business vision. (700 characters maximum)
                        </p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={700}
                          rows={5}
                          placeholder='Diaspora engagement  (max of 700 characters)'
                          {...formik.getFieldProps('oppdesc.diaspengagement')}
                          name='oppdesc.diaspengagement'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.diaspengagement && formik.errors.oppdesc.diaspengagement && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.diaspengagement}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>
                  </div>

                  <div className='separator separator-content separator-dashed my-15'>
                    <span className='w-250px fw-bold'>Traction / Milestones</span>
                  </div>

                  <div className='row g-6 g-xl-9'>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Traction</label>
                        <p className='text-muted'>
                          Tell us about recent milestones your company has achieved. E.g. current
                          partners, investment rounds, institutional recognitions, and validation of
                          your products and services (700 characters maximum)
                        </p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={700}
                          rows={5}
                          placeholder='Recent tractions  (max of 700 characters)'
                          {...formik.getFieldProps('oppdesc.traction')}
                          name='oppdesc.traction'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.traction && formik.errors.oppdesc.traction && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.traction}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Next Milestones</label>
                        <p className='text-muted'>
                          List your next 3 or more value-adding milestones to accomplish. Start each
                          milestone on a new line (700 characters maximum)
                        </p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={700}
                          rows={5}
                          placeholder='Recent tractions  (max of 700 characters)'
                          {...formik.getFieldProps('oppdesc.nextmilestone')}
                          name='oppdesc.nextmilestone'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.nextmilestone && formik.errors.oppdesc.nextmilestone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.nextmilestone}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>
                  </div>

                  <div className='separator separator-content separator-dashed my-15'>
                    <span className='w-250px fw-bold'>Ask and Exit Strategy</span>
                  </div>

                  <div className='row g-6 g-xl-9'>
                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Asks</label>
                        <p className='text-muted'>What are the asks (700 characters maximum)</p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={700}
                          rows={5}
                          placeholder='Your asks (max of 700 characters)'
                          {...formik.getFieldProps('oppdesc.asks')}
                          name='oppdesc.asks'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.asks && formik.errors.oppdesc.asks && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.asks}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>

                    <div className='col-lg-6'>
                      <div className='d-flex flex-column mb-10 fv-row'>
                        <label className='required fs-6 fw-bold mb-2'>Exit Strategy</label>
                        <p className='text-muted'>
                          Tell us about your exit strategy (700 characters maximum)
                        </p>
                        <textarea
                          className='form-control mb-2'
                          maxLength={700}
                          rows={5}
                          placeholder='Your exit strategy (max of 700 characters)'
                          {...formik.getFieldProps('oppdesc.exit')}
                          name='oppdesc.exit'
                          autoComplete='off'
                          disabled={formik.isSubmitting}
                        ></textarea>
                        {/* {formik.touched.oppdesc.exit && formik.errors.oppdesc.exit && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.oppdesc.exit}</span>
                    </div>
                  </div>
                )} */}
                      </div>
                    </div>
                  </div>

                  <div className='row g-6 g-xl-9 mb-5'>
                    <div style={{marginRight: '10px'}}>
                      <Upload>
                        <Button
                          className='d-flex justify-content-center align-items-center'
                          icon={<UploadOutlined />}
                        >
                          Upload File
                        </Button>
                      </Upload>
                      <span className='text-muted'>
                        Upload additional materials such as your business pitch and company profile
                        as a single PDF
                      </span>
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
                      <span className='text-muted'>
                        Upload a thumbnail (300p x 300 pixel, jpg, png )for your opportunity
                      </span>
                    </div>
                  </div>
                  <div className='row g-6 g-xl-9'>
                    <div className='d-flex flex-column mb-10 fv-row'>
                      <label className='required fs-6 fw-bold mb-2' htmlFor='videourl'>
                        Video Url
                      </label>
                      <input
                        className='form-control'
                        placeholder='include the url (e.g Youtube, Vimeo) of your company and business if available'
                        {...formik.getFieldProps('videourl')}
                        name='videourl'
                      />
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

                    <div className='text-muted'>
                      Checking these boxes does not guarantee Diasprex's financing. Only outstading
                      opportunities that meet Diasprex's fiancing criteria are selected
                    </div>
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
