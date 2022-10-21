import { PageTitle } from "../../../../_metronic/layout/core"
import { Row, Col, Card, Divider, Input, Form, Button } from "antd"
import moment from 'moment';
import { EditorComp } from "../../../../_metronic/partials/content/editor/editor";


export const UadForm = () => {
    const { TextArea } = Input;
     const onChange = (value: any) => {
    console.log(`selected ${value}`);
  };

    const styleslabel = {
        display: "flex",
        justifyContent: "flex-end",
        fontWeight: 600,
    }
    const [form] = Form.useForm();
    const onSubmit = () => {
        form.validateFields().then(() => {

            console.log("submitted")
        });
    };
    return (
        <div>
            <PageTitle breadcrumbs={[]}>Diaspora Feature Form</PageTitle>
            <Row justify="center">
                <Col xs={24} sm={24} md={18} lg={18}>
                    <Card style={{
                        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    }}>
                        <label
                            style={{
                                fontSize: "17px",
                                fontWeight: 600
                            }}
                        >Unfound Diaspora Registration Form</label>
                        <Divider />

                        <Form
                            form={form}
                            colon={false}
                            layout="horizontal"
                            onFinish={onSubmit}

                        >
                            <Row justify="center">
                                <div className = 'row d-flex flex-row'>
                                <div className = 'col-xl-6'>
                                    <label className = 'text-left'> First Name </label>
                                    </div>
                                    <div className = 'col-xl-6'>
                                <Form.Item
                                        label={true}
                                        rules={[{ required: true, message: 'Please Enter Your First Name' }]}
                                        name="first_name"
                                    >
                                        <Input

                                            size={"middle"}
                                            type="text"
                                        />
                                        </Form.Item>
                                        </div>
                                </div>
                                <Col xs={24} md={24} xl={4} lg={4}>
                                    <label style={styleslabel}>
                                        Last Name
                                    </label>
                                </Col>
                                <Col xs={24} md={24} xl={19} lg={19}>

                                    <Form.Item
                                        name="last_name"
                                        label={true}
                                        rules={[{ required: true, message: 'Please Enter Your Last Name' }]}
                                    >
                                        <Input

                                            type="text"
                                        />
                                    </Form.Item>
                                </Col>
                                
                                <Col xs={24} md={24} xl={4} lg={4}>
                                    <label style={styleslabel}>
                                        Email Address
                                    </label>
                                </Col>
                                <Col xs={24} md={24} xl={19} lg={19}>

                                    <Form.Item
                                        name="Email_name"
                                        label={true}
                                        rules={[{ required: true, message: 'Please Enter Your Email' }]}
                                    >
                                        <Input

                                            type="text"
                                        />
                                    </Form.Item>
                                </Col>
                                <h4> Undergraduate Education</h4>
                                <Col xs={24} md={24} xl={4} lg={4}>
                                    <label style={styleslabel}>
                                        Undergraduate Institution
                                    </label>
                                </Col>
                                <Col xs={24} md={24} xl={19} lg={19}>

                                    <Form.Item
                                        name="Company_name"
                                        label={true}
                                        rules={[{ required: false, message: 'Please Enter Your Company Name' }]}
                                    >
                                        <Input

                                            type="text"
                                        />
                                    </Form.Item>
                                </Col>

                            <Col xs={12} sm={12} md={20} lg={20} style={{ marginTop: "10px" }}>
                                <label style={styleslabel}>
                                        Professional Summary
                                    </label>
                                <TextArea
                                        showCount maxLength={500} style={{ height: 120, borderRadius: "10px" }} onChange={onChange} placeholder={"Please enter your professional summary"} />
                                </Col>
                               

                                <Divider />

                                <Col xs={24} md={24} xl={17} lg={17} style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }} >
                                    <Button
                                        htmlType="submit"
                                        block
                                        style={{
                                            backgroundColor: "#7197c1",
                                            color: "white",
                                            fontWeight: "900",
                                            borderRadius: 10,
                                            borderWidth: 1,
                                            borderStyle: "solid",
                                            width: "170px"
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>




                    </Card>

                </Col>
            </Row>
        </div >

    )
}

