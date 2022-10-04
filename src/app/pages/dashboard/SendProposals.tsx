import React from 'react'
import { PageTitle, PageLink } from "../../../_metronic/layout/core"
import { Row, Col, Button, Input, Card, Form } from "antd"
import { UploadOutlined, CameraOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./opportunity.css"
const SendProposals = () => {
    return (
        <>
            <PageTitle breadcrumbs={[]}>Send Proposal</PageTitle>
            <Card style={{
                "boxShadow": "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            }}>

                <Row justify="space-between">
                    <Col xs={24} sm={24} md={17} lg={17} >
                        <div style={{ display: "flex" }}>
                            <Upload>
                                <Button
                                    className="buttonOne"
                                    style={{
                                        backgroundColor: "#008ef8", color: "white", fontWeight: 600
                                        , display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px 0px 0px 8px"
                                    }} icon={<CameraOutlined />}>Banner Image</Button>
                            </Upload>
                            <Upload>

                                <Button
                                    className="buttonTwo"
                                    style={{
                                        backgroundColor: "#008ef8", color: "white", fontWeight: 600
                                        , display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "0px 8px 8px 0px"
                                    }} icon={<CameraOutlined />}>Card Image</Button>
                            </Upload>

                        </div>
                        <div style={{
                            display: 'block'
                        }}>

                            <label><i style={{
                                color: "black", fontSize: "15px",
                            }}>Add images to your content to make it more engaging</i></label>
                        </div>
                        <div style={{ marginTop: "40px" }}>

                            <Form colon={false}
                                layout={"vertical"}
                            >

                                <Form.Item
                                    label={<label style={{
                                        fontWeight: 600,
                                        fontSize: "17px"
                                    }}>Solution Name</label>}
                                    name="solution"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input solution',
                                        },
                                    ]}
                                >

                                    <Input
                                        style={{ borderRadius: "5px" }}
                                        placeholder='Enter a title of maximum length of 100 characters '
                                        maxLength={100} />
                                </Form.Item>
                            </Form>

                        </div>
                        <div style={{ marginTop: "40px" }}>
                            <Form colon={false}
                                layout={"vertical"}
                            >

                                <Form.Item
                                    label={<label style={{
                                        fontWeight: 600,
                                        fontSize: "17px"
                                    }}>Solution Abstract</label>}
                                    name="solution"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input solution abstract',
                                        },
                                    ]}
                                >

                                    <Editor

                                        editorStyle={{
                                            border: "1px solid", resize: "vertical",
                                            overflow: "auto",
                                            height: "300px", // whatever height you want
                                            width: "100%",
                                        }}
                                        //   editorState={editorState}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onEditorStateChange={(val) => {
                                            console.log(val)
                                        }}
                                    />

                                </Form.Item>

                                <Col xs={12} sm={12} md={24} lg={24} style={{
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
                            </Form>
                        </div>

                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} >
                        <Card style={{
                            "display": "flex",
                            "justifyContent": "center",
                            "boxShadow": "rgba(0, 0, 0, 0.1) 0px 4px 12px"

                        }}>

                            <div className="card">
                                <img src="https://i.pinimg.com/originals/4d/4f/32/4d4f328ea4fdc2e19ed979b1ff28d576.jpg" className="card-img-top" />
                                <div style={{
                                    // "backgroundColor": "#f1f1f1",
                                    "height": "150px",
                                    "overflow": "auto",
                                    "margin": "3px",
                                    "textAlign": "justify",
                                    "padding": "6px",

                                }} className="card-body">
                                    <label style={{
                                        padding: "2px",
                                        fontSize: "18px",
                                        fontWeight: 600
                                    }}>Abstract</label>
                                    <p style={{ fontSize: "15px" }} className="card-text">

                                        Some quick example text to build on the card title
                                        and make up the bulk of the card's content.
                                        Some quick example text to build on the card title
                                        and make up the bulk of the card's content.
                                        Some quick example text to build on the card title
                                        and make up the bulk of the card's content.
                                        Some quick example text to build on the card title
                                        and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24}>

                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default SendProposals