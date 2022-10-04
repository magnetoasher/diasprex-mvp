import { PageTitle } from "../../../../_metronic/layout/core"
import { Row, Col, Card, Divider, Input, Form, Button } from "antd"


export const ReferralsForm = () => {
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
            <PageTitle breadcrumbs={[]}>Referrels</PageTitle>
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
                        >Referred Company</label>
                        <Divider />

                        <Form
                            form={form}
                            colon={false}
                            layout="horizontal"
                            onFinish={onSubmit}

                        >
                            <Row justify="center">
                                <Col xs={24} md={24} xl={4} lg={4}>
                                    <label
                                        style={styleslabel}
                                    >
                                        First Name
                                    </label>
                                </Col>
                                <Col xs={24} md={24} xl={19} lg={19}>

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
                                </Col>
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
                                        Company Name
                                    </label>
                                </Col>
                                <Col xs={24} md={24} xl={19} lg={19}>

                                    <Form.Item
                                        name="Company_name"
                                        label={true}
                                        rules={[{ required: true, message: 'Please Enter Your Company Name' }]}
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


                                <Col xs={24} md={24} xl={24} lg={24} style={{
                                    display: "flex"
                                }}>
                                    <label

                                        style={{
                                            fontSize: "17px",
                                            fontWeight: 600,
                                            marginTop: "20px",
                                            display: "block"
                                        }}
                                    >Referring Contact</label>
                                </Col>
                                <Divider />
                                <Col xs={24} md={24} xl={4} lg={4}>
                                    <label style={styleslabel}>
                                        Referrel Email
                                    </label>
                                </Col>
                                <Col xs={24} md={24} xl={19} lg={19}>

                                    <Form.Item
                                        name="referring_email"
                                        label={true}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please Enter Email",
                                            },
                                        ]}
                                    >
                                        <Input
                                            type="email"
                                        />
                                    </Form.Item>
                                </Col>

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
                                        Submit Referral
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

