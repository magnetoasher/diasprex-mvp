// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react'
import { Row, Col, Button, Card } from "antd"
import { StarOutlined, ShareAltOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom"
import { notification, Tooltip } from 'antd';


function ViewOpportunity() {
  const location = useLocation();
  const navigate = useNavigate();
  const [historyObject, setHistoryObject] = useState(location.state)
  const [api, contextHolder] = notification.useNotification();
  const [isShowDetail, setIsShowDetail] = useState(false)
  const userType = localStorage.getItem('userType')
  const openNotification = (placement, message) => {
    api.info({
      message: `${message} !`,
      description: <Context.Consumer>{({ }) => `Project: ${historyObject.title}`}</Context.Consumer>,
      placement,
    });
  };
  const openNotificationWarning = (placement, message) => {
    api.warning({
      message: `${message} !`,
      description: <Context.Consumer>{({ }) => `Project: ${historyObject.title}`}</Context.Consumer>,
      placement,
    });
  };
  const Context = React.createContext({
    name: 'Default',
  });
  console.log(userType)
  const handleDetails = () => {
    if (userType === "basic") {
      openNotificationWarning('bottomRight', "It requires paid subscription and ODA agreement")
    }
    else {
      setIsShowDetail(!isShowDetail)
    }
  }
  return (
    <>
      <Row gutter={[8, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} >
          <div style={{ position: "relative" }}>
            <img style={{ height: "350px", width: "1255px", objectFit: "cover" }} src={historyObject.imgSource} alt="sample" />

            <label style={{
              position: "absolute",
              display: "block",
              fontSize: "40px",
              fontWeight: "600",
              bottom: "50px",
              left: "30px",
              color: "white"

            }}>
              {historyObject.title}
            </label>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}  >
          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }}>

            <div >
              <Button
                onClick={
                  () => {
                    userType === "basic" ? openNotificationWarning('bottomRight', "It requires paid subscription and ODA agreement") : navigate('/send_proposals')
                  }
                }
                style={{
                  "background": "#4eacff",
                  "color": "white",
                  "fontWeight": "600",
                  "borderRadius": "6px"
                }}>
                Send Proposal
              </Button>
            </div>
            <div style={{
              display: "flex",
            }}>
              <div style={
                {

                  padding: "1px",
                }
              }>
                <Button style={{
                  "background": "#4eacff",
                  "borderRadius": "8px",
                  "display": "flex",
                  "justifyContent": "center",
                  "alignItems": "center",
                  "fontSize": "15px",
                  "color": "white",
                }}>
                  <Tooltip title="Share">

                    <ShareAltOutlined />
                  </Tooltip>
                </Button>
              </div>
              <div style={{
                padding: "1px"
              }}>
                <Button style={{
                  "background": "#4eacff",
                  "borderRadius": "8px",
                  "display": "flex",
                  "justifyContent": "center",
                  "alignItems": "center",
                  "fontSize": "15px",
                  "color": "white",
                }}>

                  <Tooltip title="Bookmark">

                    <StarOutlined />
                  </Tooltip>
                </Button>
              </div>
              <div style={{
                padding: "1px"
              }}>
                <Button onClick={() => openNotification('topRight', "Added to Favourite")} style={{
                  "background": "#7fe772",
                  "color": "white",
                  "fontWeight": "600",
                  "borderRadius": "6px"

                }} >Add to Favourtite</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Card style={{ marginTop: "10px" }}>
        <Row style={{ display: "flex", marginTop: "5px" }} gutter={[8, 16]}>

          <Col xs={24} sm={24} md={24} lg={24} style={{
            backgroundColor: "#f1f1f1",
            padding: "30px 40px",
            paddingTop: '30px',
            paddingBottom: '30px',
            borderRadius: "8px"
          }}>
            <div>
              <label style={{
                "fontWeight": "600",
                "fontSize": "20px"
              }}>
                Summary
              </label>
            </div>

            <div>
              <label style={{
                textAlign: "justify",
                fontSize: "14px"
              }}>
                {historyObject.summary}
              </label>
            </div>


          </Col>
          <div >
            <Button
              onClick={
                () =>
                  handleDetails()

              }
              style={{
                "background": "#4eacff",
                "color": "white",
                "fontWeight": "600",
                "borderRadius": "6px"
              }}>
              {isShowDetail ? "Hide Opportunity Details" : "View Opportunity Details"}
            </Button>
          </div>
          {isShowDetail && <Col xs={24} sm={24} md={24} lg={24} style={{
            "backgroundColor": "#f1f1f1",
            "borderRadius": "8px"
          }}>

            <div style={{
              display: "flex", justifyContent: "space-around", marginTop: "5px",
              padding: "30px"
            }}>
              <label style={
                {
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "backgroundColor": "#7fe772",
                  color: "white",
                  "padding": "10px",
                  "borderRadius": "7px"
                  , textAlign: "center",
                  width: "120px"
                }
              }>Following <br /> {historyObject.following} </label>
              <label style={
                {
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  "fontSize": "14px",
                  color: "white",
                  "fontWeight": "600",
                  "backgroundColor": "#4eacff",
                  "padding": "10px",
                  "borderRadius": "7px"
                  , textAlign: "center",
                  width: "120px"
                }
              }>interest <br />{historyObject.interest} </label>
              <label style={
                {
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  "fontSize": "14px",
                  color: "white",
                  "fontWeight": "600",
                  "backgroundColor": "#fd5757",
                  "padding": "10px",
                  "borderRadius": "7px"
                  , textAlign: "center",
                  width: "120px"
                }
              } >Due Date <br /> {historyObject.due_date}</label>
            </div>
          </Col>}
        </Row>
      </Card>
      <Context.Provider
      >
        {contextHolder}
      </Context.Provider>
    </>
  )
}

export default ViewOpportunity;