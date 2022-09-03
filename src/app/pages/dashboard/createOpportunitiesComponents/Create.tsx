
//eslint-disable jsx-a11y/anchor-is-valid 
// @ts-nocheck comment
import { Tabs, Col, Row, Select, DatePicker, Button, Input, Card } from 'antd';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { TextArea } = Input;
export const Create = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };
  const buttonHash = [
    { title: "Equality", id: 1 },
    { title: "Contract", id: 2 },
    { title: "Stock", id: 3 },
    { title: "Cash", id: 4 },
    { title: "Other", id: 5 },
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
            <h5><b>Select Category</b></h5>
            <DatePicker
              style={{ borderRadius: "10px" }} defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
          </div>
        </Col>

        <Col xs={12} sm={12} md={9} lg={9}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <h4><b>Compensation</b></h4>
              <label style={{ color: "red" }}>*Select All That Applies</label>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>

              {buttonHash.map((value, index) => {
                return (
                  <Button style={{ borderRadius: "80px", color: "rgb(88 88 88 / 85%);", fontWeight: 600 }}>
                    {value.title}
                  </Button>
                )
              })}

            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={20} lg={20} style={{ marginTop: "50px", marginBottom: "10px" }}>
          <Input style={{ borderRadius: "10px" }} size="large" placeholder="Subject" />
        </Col>


        <Col xs={12} sm={12} md={20} lg={20} style={{ marginTop: "10px" }}>

          <TextArea
            showCount maxLength={100} style={{ height: 120, borderRadius: "10px" }} onChange={onChange} placeholder={"Message"} />
        </Col>



        <Col xs={12} sm={12} md={5} lg={5} style={{ marginTop: "10px", display: "flex" }}>
          <div style={{ marginRight: "10px" }}>

            <Upload >
              <Button
                className='d-flex justify-content-center align-items-center'
                icon={<UploadOutlined />}>Upload Image</Button>
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


        <Col xs={12} sm={12} md={20} lg={20} style={{
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

