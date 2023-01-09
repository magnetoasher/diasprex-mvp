// @ts-nocheck comment
import React, {useState, Component} from 'react'
import {Tabs, Col, Row, Select, DatePicker, Button, Input, Card, Checkbox} from 'antd'
import moment from 'moment'
import {
  initialOpps,
  createOppsSchemas,
} from '../../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import {UploadOutlined} from '@ant-design/icons'
import {Upload} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import {Editor} from 'react-draft-wysiwyg'
import {CountryList, IndustryList} from '../../../../_metronic/partials/content/selectionlists'
import {Formik, useFormik} from 'formik'
import {nanoid} from '@reduxjs/toolkit'
import axios from 'axios'
import {getUniqueIdWithPrefix} from '../../../../_metronic/assets/ts/_utils'
import {OppsCategory} from '../../../../_metronic/partials/content/selectionlists/oppscategory'
import {DefaultDraftInlineStyle} from 'draft-js'

export const Create = () => {
  const {Option} = Select
  const {TextArea} = Input
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  const [isOtherSelected, setIsOtherSelected] = useState(false)

  const onChange = (value) => {
    console.log(`selected ${value}`)
  }

  const formik = useFormik({
    initialValues: initialOpps,
    // validationSchema: createOppsSchemas,
    validateOnChange: false,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      const idNumber = nanoid()
      const data = {
        ...values,
        uuid: idNumber,
        id: idNumber,
        sponsorUserId: nanoid(),
        sponsor: localStorage.getItem('userTypeFull'),
        status: 'new',
        open: false,
        datesubmitted: new Date(),
        duedate:
          values.duedate < moment(new Date()).add(90, 'days').toDate()
            ? moment(new Date()).add(90, 'days').toDate()
            : values.duedate > moment(new Date()).add(6, 'months').toDate()
            ? moment(new Date()).add(6, 'months').toDate()
            : values.duedate,
        otherdealtype: !isOtherSelected ? null : values.otherdealtype,
      }
      try {
        // console.log('CreateOpps', data)
        await axios
          .post(`${process.env.REACT_APP_DIASPREX_API_URL}/opportunities/create`, data)
          .then((res) => console.log('onSubmit', res))
          .catch((error) => error)
      } catch (err) {
        console.log(formik.errors)
      } finally {
        formik.resetForm()
      }
    },
  })

  return (
    <Card
      style={{
        margin: 'auto',
        padding: '5rem',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className='row px-10'>
          <div className='d-flex flex-column justify-content-start mb-10'>
            <h5>
              <b className=' fw-bolder text-uppercase text-primary fs-6 mb-2'>
                Opportunity submission form
              </b>
            </h5>
            <p className='fs-6 text-mute'>
              Please complete this form to submit your opportunity fro publicationion Diasprex
              website.
            </p>
          </div>
        </div>

        <div className='row px-10'>
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
                  defaultValue={moment('06/01/2023', dateFormatList[0])}
                  format={dateFormatList}
                  onChange={(date, dateString) => {
                    formik.handleChange({target: {name: 'duedate', value: date}})
                    console.log('Date', moment(date).format('DD MMM YYYY'), dateString)
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

            <div className='form-group col-md-8 px-10'>
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
                    disabled={formik.isSubmitting}
                  />
                  <label className='form-check-label' htmlFor='dealtype3'>
                    Contract/Consulting
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
          <div className='d-flex flex-column fv-row mb-10 '>
            <h5>
              <b className='required fw-bold fs-6 mb-2'>Opportunity Details</b>
            </h5>
            <p className='text-muted'>
              Please describe the opportunity in details as best as you can and ensure to address
              the following without disclosing any proprietary information. Proprietary materials
              can be included as a file attachments.
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
          </div>

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
                <label className='form-check-label fw-bold ps-2 fs-6' htmlFor='crowdfunding'>
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
                <label className='form-check-label fw-bold ps-2 fs-6' htmlFor='crowdlending'>
                  Crowdlending Campaign Through Diasprex (Coming soon)
                </label>
              </span>
            </div>
            <div className='text-muted'>
              Checking these boxes does not guarantee Diasprex's financing. Only outstading
              opportunities that meet Diasprex's fiancing criteria are selected
            </div>
          </div>

          <div className='text-center pt-15'>
            <button type='reset' className='btn btn-light me-3' disabled={formik.isSubmitting}>
              Discard
            </button>
            <button
              type='button'
              className='btn btn-light-primary me-3'
              disabled={formik.isSubmitting}
            >
              Save Draft
            </button>

            <button type='submit' className='btn btn-primary' disabled={formik.isSubmitting}>
              <span className='indicator-label'>Submit</span>
              {/* {(formik.isSubmitting || isOppLoading) && (
                <span className='indicator-progress'>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )} */}
            </button>
          </div>
          <div className='d-flex flex-column fv-row py-10'>
            <lable style={{fontSize: '10px', fontWeight: '700', color: '#b6b6b6'}}>
              Disclaimer: Opportunity submittted will only be published if it passes all review
              criteria. Publication on Diasprex does not guarantee positive outcome.
            </lable>
          </div>
        </div>
      </form>
    </Card>
  )
}
