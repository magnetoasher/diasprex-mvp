// @ts-nocheck comment
import React, {useState, Component} from 'react'
import {Tabs, Col, Row, Select, DatePicker, Button, Input, Card, Checkbox} from 'antd'
import moment from 'moment'

import {UploadOutlined} from '@ant-design/icons'
import {Upload} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import {Editor} from 'react-draft-wysiwyg'
import {IndustryList} from '../../../../_metronic/partials/content/selectionlists'

export const Create = () => {
  const {Option} = Select
  const {TextArea} = Input
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  const [isOtherSelected, setIsOtherSelected] = useState(false)
  const onChange = (value) => {
    console.log(`selected ${value}`)
  }
  const handleCheckBox = (e) => {
    let temp = e.find((element) => element == 6)
    if (temp == 6) {
      setIsOtherSelected(true)
    } else {
      setIsOtherSelected(false)
    }
  }
  const onSearch = (value) => {
    console.log('search:', value)
  }
  const options = [
    {label: 'Equity/Equity Financing', value: 1},
    {label: 'Debt Financing', value: 2},
    {label: 'Contract', value: 3},
    {label: 'Strategic partnership', value: 4},
    {label: 'Consulting', value: 5},
    {label: 'Other', value: 6},
  ]

  return (
    <Card
      style={{
        margin: 'auto',
        padding: '5rem',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}
    >
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
        <Col xs={12} sm={12} md={5} lg={5}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <h5>
              <b className='required fw-bold fs-6 mb-2'>Select Category</b>
            </h5>
            <Select
              style={{borderRadius: '10px !important'}}
              showSearch
              placeholder='Select Category'
              optionFilterProp='children'
            >
              {/* <IndustryList /> */}
              <>
                <option value='Accounting'>Accounting</option>
                <option value='Airlines/Aviation'>Airlines/Aviation</option>
                <option value='Alternative Dispute Resolution'>
                  Alternative Dispute Resolution
                </option>
                <option value='Alternative Medicine'>Alternative Medicine</option>
                <option value='Animation'>Animation</option>
                <option value='Apparel/Fashion'>Apparel/Fashion</option>
                <option value='Architecture/Planning'>Architecture/Planning</option>
                <option value='Arts/Crafts'>Arts/Crafts</option>
                <option value='Automotive'>Automotive</option>
                <option value='Aviation/Aerospace'>Aviation/Aerospace</option>
                <option value='Banking/Mortgage'>Banking/Mortgage</option>
                <option value='Biotechnology/Greentech'>Biotechnology/Greentech</option>
                <option value='Broadcast Media'>Broadcast Media</option>
                <option value='Building Materials'>Building Materials</option>
                <option value='Business Supplies/Equipment'>Business Supplies/Equipment</option>
                <option value='Capital Markets/Hedge Fund/Private Equity'>
                  Capital Markets/Hedge Fund/Private Equity
                </option>
              </>
            </Select>
          </div>
        </Col>

        <Col xs={12} sm={12} md={5} lg={5}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <h5>
              <b className='required fw-bold fs-6 mb-2'>Due Date</b>
            </h5>
            <DatePicker
              style={{borderRadius: '10px'}}
              defaultValue={moment('01/01/2015', dateFormatList[0])}
              format={dateFormatList}
            />
          </div>
        </Col>

        <Col xs={12} sm={12} md={9} lg={9}>
          {/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
          <div className='row-xs-4'>
            <div className='col d-flex flex-row'>
              <span className='required fw-bold fs-6 mb-2 me-6 '>Deal Types</span>
            </div>
            <div className='col d-flex flex-row'>
              <span className='text-gray-800 fw-bolder'>
                (Please select the deal types you are willing to consider)
              </span>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Checkbox.Group options={options} onChange={handleCheckBox} />
          </div>
          {/* </div> */}
          {isOtherSelected && (
            <span>
              <Input style={{borderRadius: '10px', marginTop: '10px'}} placeholder='Enter Value' />
            </span>
          )}
        </Col>

        <Col xs={12} sm={12} md={20} lg={20} style={{marginTop: '50px', marginBottom: '10px'}}>
          <h5>
            <b className='required fw-bold fs-6 mb-2'>Opportunity Title </b>
          </h5>
          <Input style={{borderRadius: '10px'}} size='large' placeholder='Title' />
        </Col>

        <Col xs={12} sm={12} md={20} lg={20} style={{marginTop: '10px'}}>
          <h5>
            <b className='required fw-bold fs-6 mb-2'>Opportunity Summary</b>
          </h5>
          <TextArea
            showCount
            maxLength={3000}
            style={{height: 120, borderRadius: '10px'}}
            onChange={onChange}
            placeholder={'Please enter the summary of your Opportunity (max of 500 characters'}
          />
        </Col>
        <Col xs={12} sm={12} md={20} lg={20} style={{marginTop: '10px'}}>
          <h5>
            <b className='required fw-bold fs-6 mb-2'>Opportunity Details</b>
          </h5>
          <p>
            Please describe the opportunity in details as best as you can and ensure to address the
            following without disclosing any proprietary information. Proprietary materials can be
            included as a file attachments.
            <ul>
              <li>Market need</li>
              <li>Your solution</li>

              <li>Market size</li>
              <li>Company</li>

              <li>The team</li>
              <li>Developmental impact</li>
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
            //   editorState={editorState}
            toolbarClassName='toolbarClassName'
            wrapperClassName='wrapperClassName'
            editorClassName='editorClassName'
            onEditorStateChange={(val) => {
              console.log(val)
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} style={{marginTop: '10px', display: 'flex'}}>
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
        </Col>
        <Col>
          <div className='d-flex flex-column fv-row py-10'>
            <div className='form-check form-check d-flex justify-content-start align-items-center'>
              <input className='form-check-input' type='checkbox' id='request_diasprex_financing' />
              <label
                className='form-check-label fw-bold ps-2 fs-6'
                htmlFor='request_diasprex_financing'
              >
                Requesting Diasprex's Financing
              </label>
            </div>
            <div className='text-muted'>
              Checking this box does not guarantee Diasprex's financing. Only outstading
              opportunities that meet Diasprex's fiancing criteria are selected
            </div>
          </div>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={21}
          lg={21}
          style={{
            marginTop: '5px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            style={{
              borderRadius: '20px',
              width: '145px',
              height: '40px',
              borderColor: '#009EF7',
              color: '#009EF7',
              fontWeight: 500,
              marginRight: '5px',
            }}
          >
            Save For Later
          </Button>

          <Button
            style={{
              borderRadius: '20px',
              width: '145px',
              height: '40px',
              borderColor: '#009EF7',
              color: '#009EF7',
              fontWeight: 500,
            }}
          >
            Submit
          </Button>

          <Button
            style={{
              borderRadius: '20px',
              width: '145px',
              height: '40px',
              borderColor: '#009EF7',
              color: '#009EF7',
              fontWeight: 500,
              marginLeft: '5px',
            }}
          >
            Discard
          </Button>
        </Col>
        <Col xs={12} sm={12} md={8} lg={8}>
          <lable style={{fontSize: '9px', fontWeight: '700', color: '#b6b6b6'}}>
            Disclaimer: Opportunity submittted will only be published if it passes all review
            criteria. Publication on Diasprex does not guarantee positive outcome.
          </lable>
        </Col>
      </div>
    </Card>
  )
}
