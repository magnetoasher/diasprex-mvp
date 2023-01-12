// @ts-nocheck comment
import React, {useState, Component} from 'react'
import {Tabs, Col, Row, Select, DatePicker, Button, Input, Card, Checkbox} from 'antd'
import {useDispatch} from 'react-redux'
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
import Swal from 'sweetalert2'

export const Create = ({sponsorUserId, getOpps}: any) => {
  const {Option} = Select
  const {TextArea} = Input
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  const [isOtherSelected, setIsOtherSelected] = useState(false)
  const [status, setStatus] = useState('')
  const initVals = {
    title: '',
    id: '',
    thumbnail: '',
    sponsor: '',
    summary: '',
    status: '',
    datesubmitted: '',
    duedate: '',
    category: '',
    following: [],
    showedinterest: [],
  }

  const onChange = (value) => {
    console.log(`selected ${value}`)
  }

  const formik = useFormik({
    initialValues: initVals,
    // validationSchema: createOppsSchemas,
    validateOnChange: false,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      const idNumber = nanoid()
      const data = {
        ...values,
        uuid: idNumber,
        id: idNumber,
        sponsorUserId: sponsorUserId,
        sponsor: localStorage.getItem('userTypeFull'),
        status: status,
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
        await axios
          .post(`${process.env.REACT_APP_DIASPREX_API_URL}/opportunities/create`, data)
          .then((res) => {
            if (res.status === 200) {
              getOpps()
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Successfully done!',
              })
            }
          })
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
      <form>
        <div className='row px-10'>
          <div className='d-flex flex-column text-center mb-10'>
            <h5>
              <b className=' fw-bolder text-uppercase text-primary fs-6 mb-2'>
                Opportunity submission form
              </b>
            </h5>
            <p className='fs-6 text-mute'>Please complete this form to submit your opportunity.</p>
          </div>
        </div>
        <div class='separator separator-content separator-dashed my-15'>
          <span class='w-250px fw-bold'>Opportunity Summary</span>
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

        <div class='separator separator-content separator-dashed my-15'>
          <span class='w-250px fw-bold'>Market / Opportunity</span>
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
                {...formik.getFieldProps('marketneed')}
                name='marketneed'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.marketneed && formik.errors.marketneed && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.marketneed}</span>
                    </div>
                  </div>
                )} */}
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='d-flex flex-column mb-10 fv-row'>
              <label className='required fs-6 fw-bold mb-2'>Market Size</label>
              <p className='text-muted'>
                What is the overall market opportunity for the need you are addressing? i.e., in
                terms of the number of end users and/or total revenue. (700 characters maximum)
              </p>
              <textarea
                className='form-control mb-2'
                maxLength={700}
                rows={5}
                placeholder='Type the summary of your opportunity  (max of 500 characters)'
                {...formik.getFieldProps('marketsize')}
                name='marketsize'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.marketsize && formik.errors.marketsize && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.marketsize}</span>
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
        <div class='separator separator-content separator-dashed my-15'>
          <span class='w-250px fw-bold'>Product / Services</span>
        </div>

        <div className='row g-6 g-xl-9'>
          <div className='d-flex flex-column mb-10 fv-row'>
            <label className='required fs-6 fw-bold mb-2'>Product / Services</label>
            <p className='text-muted'>
              Describe your product / service in 1 - 2 paragraphs (1,400 characters maximum)
            </p>
            <textarea
              className='form-control mb-2'
              rows={10}
              placeholder='Product and/or services (max of 1400 characters)'
              {...formik.getFieldProps('productservices')}
              name='productservices'
              autoComplete='off'
              disabled={formik.isSubmitting}
            ></textarea>
            {/* {formik.touched.productservices && formik.errors.productservices && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.productservices}</span>
                    </div>
                  </div>
                )} */}
          </div>
        </div>
        <div className='row g-6 g-xl-9'>
          <div className='d-flex flex-column mb-10 fv-row'>
            <label className='required fs-6 fw-bold mb-2'>Developmental Impact</label>
            <p className='text-muted'>
              Describe the broader impact of your business to your community (1,400 characters
              maximum)
            </p>
            <textarea
              className='form-control mb-2'
              rows={10}
              placeholder='Broader impact of your business (max of 1400 characters)'
              {...formik.getFieldProps('devimpact')}
              name='devimpact'
              autoComplete='off'
              disabled={formik.isSubmitting}
            ></textarea>
            {/* {formik.touched.devimpact && formik.errors.devimpact && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.devimpact}</span>
                    </div>
                  </div>
                )} */}
          </div>
        </div>

        <div class='separator separator-content separator-dashed my-15'>
          <span class='w-250px fw-bold'>Business Model</span>
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
                {...formik.getFieldProps('businessmodel')}
                name='businessmodel'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.businessmodel && formik.errors.businessmodel && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.businessmodel}</span>
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
                {...formik.getFieldProps('valueprop')}
                name='valueprop'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.valueprop && formik.errors.valueprop && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.valueprop}</span>
                    </div>
                  </div>
                )} */}
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='d-flex flex-column mb-10 fv-row'>
              <label className='required fs-6 fw-bold mb-2'>Go-to-Market Strategy</label>
              <p className='text-muted'>
                Please describe your primary market(s) for launch and your strategy for entering the
                market(s). Please include information on pricing, gross margin
              </p>
              <textarea
                className='form-control mb-2'
                maxLength={1400}
                rows={5}
                placeholder='Go to market strategy  (max of 1400 characters)'
                {...formik.getFieldProps('gotomarket')}
                name='gotomarket'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.gotomarket && formik.errors.gotomarket && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.gotomarket}</span>
                    </div>
                  </div>
                )} */}
            </div>
          </div>
        </div>

        <div class='separator separator-content separator-dashed my-15'>
          <span class='w-250px fw-bold'>Competitive Advantage</span>
        </div>

        <div className='row g-6 g-xl-9'>
          <div className='col-lg-6'>
            <div className='d-flex flex-column mb-10 fv-row'>
              <label className='required fs-6 fw-bold mb-2'>Competitors</label>
              <p className='text-muted'>
                Please list your top 3 competitors addressing the space you are seeking to enter or
                currently operating, and summarize your competitive advantages (700 characters
                maximum)
              </p>
              <textarea
                className='form-control mb-2'
                maxLength={700}
                rows={5}
                placeholder='Market need/problems  (max of 700 characters)'
                {...formik.getFieldProps('competitor')}
                name='competitor'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.competitor && formik.errors.competitor && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.competitor}</span>
                    </div>
                  </div>
                )} */}
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='d-flex flex-column mb-10 fv-row'>
              <label className='required fs-6 fw-bold mb-2'>Competitive Landscape</label>
              <p className='text-muted'>
                Please describe how your will change the competitive landscape (700 characters
                maximum)
              </p>
              <textarea
                className='form-control mb-2'
                maxLength={700}
                rows={5}
                placeholder='Market need/problems  (max of 700 characters)'
                {...formik.getFieldProps('complandscape')}
                name='complandscape'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.complandscape && formik.errors.complandscape && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.complandscape}</span>
                    </div>
                  </div>
                )} */}
            </div>
          </div>
        </div>

        <div class='separator separator-content separator-dashed my-15'>
          <span class='w-250px fw-bold'>Company / Team</span>
        </div>

        <div className='row g-6 g-xl-9'>
          <div className='col-lg-6'>
            <div className='d-flex flex-column mb-10 fv-row'>
              <label className='required fs-6 fw-bold mb-2'>Team and Expertise</label>
              <p className='text-muted'>
                List your key team members and their expertise, as it relates to your company and
                tell us how your team is uniquely positioned to solve the problem you are solving.
                Please indicate full-time (FT) or part-time (PT). (700 characters maximum)
              </p>
              <textarea
                className='form-control mb-2'
                maxLength={700}
                rows={5}
                placeholder='Market need/problems  (max of 700 characters)'
                {...formik.getFieldProps('companyteam')}
                name='companyteam'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.companyteam && formik.errors.companyteam && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.companyteam}</span>
                    </div>
                  </div>
                )} */}
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='d-flex flex-column mb-10 fv-row'>
              <label className='required fs-6 fw-bold mb-2'>Company</label>
              <p className='text-muted'>Tell us about your company. (1400 characters maximum)</p>
              <textarea
                className='form-control mb-2'
                maxLength={700}
                rows={5}
                placeholder='About your company  (max of 1400 characters)'
                {...formik.getFieldProps('company')}
                name='company'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.company && formik.errors.company && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.company}</span>
                    </div>
                  </div>
                )} */}
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='d-flex flex-column mb-10 fv-row'>
              <label className='required fs-6 fw-bold mb-2'>Diaspora Engagement</label>
              <p className='text-muted'>
                Tell us how you plan to engage African in diaspora to achieve your business vision.
                (700 characters maximum)
              </p>
              <textarea
                className='form-control mb-2'
                maxLength={700}
                rows={5}
                placeholder='Diaspora engagement  (max of 700 characters)'
                {...formik.getFieldProps('diaspengagement')}
                name='diaspengagement'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.diaspengagement && formik.errors.diaspengagement && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.diaspengagement}</span>
                    </div>
                  </div>
                )} */}
            </div>
          </div>
        </div>

        <div class='separator separator-content separator-dashed my-15'>
          <span class='w-250px fw-bold'>Traction / Milestones</span>
        </div>

        <div className='row g-6 g-xl-9'>
          <div className='col-lg-6'>
            <div className='d-flex flex-column mb-10 fv-row'>
              <label className='required fs-6 fw-bold mb-2'>Traction</label>
              <p className='text-muted'>
                Tell us about recent milestones your company has achieved. E.g. current partners,
                investment rounds, institutional recognitions, and validation of your products and
                services (700 characters maximum)
              </p>
              <textarea
                className='form-control mb-2'
                maxLength={700}
                rows={5}
                placeholder='Recent tractions  (max of 700 characters)'
                {...formik.getFieldProps('traction')}
                name='traction'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.traction && formik.errors.traction && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.traction}</span>
                    </div>
                  </div>
                )} */}
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='d-flex flex-column mb-10 fv-row'>
              <label className='required fs-6 fw-bold mb-2'>Next Milestones</label>
              <p className='text-muted'>
                List your next 3 or more value-adding milestones to accomplish. Start each milestone
                on a new line (700 characters maximum)
              </p>
              <textarea
                className='form-control mb-2'
                maxLength={700}
                rows={5}
                placeholder='Recent tractions  (max of 700 characters)'
                {...formik.getFieldProps('traction')}
                name='traction'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.traction && formik.errors.traction && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.traction}</span>
                    </div>
                  </div>
                )} */}
            </div>
          </div>
        </div>

        <div class='separator separator-content separator-dashed my-15'>
          <span class='w-250px fw-bold'>Ask</span>
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
                {...formik.getFieldProps('asks')}
                name='asks'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.asks && formik.errors.asks && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.asks}</span>
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
                {...formik.getFieldProps('exit')}
                name='exit'
                autoComplete='off'
                disabled={formik.isSubmitting}
              ></textarea>
              {/* {formik.touched.exit && formik.errors.exit && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block text-danger'>
                      <span role='alert'>{formik.errors.exit}</span>
                    </div>
                  </div>
                )} */}
            </div>
          </div>
        </div>

        <div className='row g-6 g-xl-9'>
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
            onClick={() => {
              setStatus('draft')
              formik.handleSubmit()
            }}
          >
            Save Draft
          </button>

          <button
            type='button'
            className='btn btn-primary'
            disabled={formik.isSubmitting}
            onClick={() => {
              setStatus('new')
              formik.handleSubmit()
            }}
          >
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
      </form>
    </Card>
  )
}
