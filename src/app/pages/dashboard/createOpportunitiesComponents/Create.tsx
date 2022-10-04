// @ts-nocheck comment
import React, { useState } from 'react'
import { Tabs, Col, Row, Select, DatePicker, Button, Input, Card, Checkbox } from 'antd';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Editor } from "react-draft-wysiwyg";

export const Create = () => {
  const { Option } = Select;
  const { TextArea } = Input;
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  const [isOtherSelected, setIsOtherSelected] = useState(false)
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleCheckBox = (e) => {
    let temp = e.find(element => element == 5);
    if (temp == 5) {
      setIsOtherSelected(true)
    }
    else {
      setIsOtherSelected(false)
    }
  }
  const onSearch = (value) => {
    console.log('search:', value);
  };
  const options = [
    { label: "Equality", value: 1 },
    { label: "Contract", value: 2 },
    { label: "Stock", value: 3 },
    { label: "Cash", value: 4 },
    { label: "Other", value: 5 },
  ]
  return (
    <Card style={{
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    }}>
      <Row gutter={16}>
        <Col xs={12} sm={12} md={5} lg={5}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5><b>Select Category</b></h5>
            <Select
              style={{ borderRadius: "10px !important" }}
              showSearch
              placeholder="Select Category"
              optionFilterProp="children"
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </div>
        </Col>

        <Col xs={12} sm={12} md={5} lg={5}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5><b>Due Date</b></h5>
            <DatePicker
              style={{ borderRadius: "10px" }} defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
          </div>
        </Col>

        <Col xs={12} sm={12} md={9} lg={9}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", marginBottom: '10px' }}>
              <span><b>Compensation</b></span>
              <label style={{ color: "red", marginLeft: '20px' }}>*Select All That Applies</label>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Checkbox.Group options={options} onChange={handleCheckBox} />
            </div>

          </div>
          {isOtherSelected &&
            <span >
              <Input style={{ borderRadius: "10px", marginTop: "10px" }} placeholder="Enter Value" />
            </span>
          }
        </Col>
        <Col xs={12} sm={12} md={20} lg={20} style={{ marginTop: "50px", marginBottom: "10px" }}>
          <Input style={{ borderRadius: "10px" }} size="large" placeholder="Subject" />
        </Col>


        <Col xs={12} sm={12} md={20} lg={20} style={{ marginTop: "10px" }}>

          <TextArea
            showCount maxLength={100} style={{ height: 120, borderRadius: "10px" }} onChange={onChange} placeholder={"Message"} />
        </Col>
        <Col xs={12} sm={12} md={20} lg={20} style={{ marginTop: "10px" }}>
          <h5><b>Details</b></h5>
          <Editor
            editorStyle={{
              border: "1px solid", resize: "vertical",
              overflow: "auto",
              height: "300px", // whatever height you want
              width: "100%",
              borderRadius: '5px'
            }}
            //   editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={(val) => {
              console.log(val)
            }}
          />
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} style={{ marginTop: "10px", display: "flex" }}>
          <div style={{ marginRight: "10px" }}>

            <Upload >
              <Button
                className='d-flex justify-content-center align-items-center'
                icon={<UploadOutlined />}>Upload File</Button>
            </Upload>
          </div>
          <div>

            <Upload>
              <Button
                className='d-flex justify-content-center align-items-center'
                icon={<UploadOutlined />}>Upload Thumbnail</Button>
            </Upload>
          </div>

        </Col>


        <Col xs={12} sm={12} md={21} lg={21} style={{
          marginTop: "5px", display: "flex", justifyContent: "flex-end"

        }}>



          <Button

            style={{
              borderRadius: "20px", width: "145px",
              height: "40px", borderColor: "#009EF7",
              color: "#009EF7", fontWeight: 500, marginRight: "5px"
            }}>
            Save For Later
          </Button>


          <Button style={{
            borderRadius: "20px", width: "145px",
            height: "40px", borderColor: "#009EF7",
            color: "#009EF7", fontWeight: 500
          }}>
            Submit
          </Button>

          <Button style={{
            borderRadius: "20px", width: "145px",
            height: "40px", borderColor: "#009EF7",
            color: "#009EF7", fontWeight: 500, marginLeft: "5px"
          }}>
            Discard
          </Button>

        </Col>
        <Col xs={12} sm={12} md={8} lg={8}>
          <lable style={{ fontSize: "9px", fontWeight: "700", color: "#b6b6b6" }}>Disclaimer it is a long established fact that
            a reader will be

            distracted by the readable content of page when looking at this

          </lable>
        </Col>
      </Row>
    </Card >
  )
}

