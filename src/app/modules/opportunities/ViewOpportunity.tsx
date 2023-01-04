// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect, useState} from 'react'
import {Row, Col, Button, Card} from 'antd'
import {StarOutlined, ShareAltOutlined} from '@ant-design/icons'
import { useDispatch, connect, ConnectedProps } from 'react-redux'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {notification, Tooltip} from 'antd'
import {OppsDA} from './component/oda'
import {SubscriptionRequired} from './component/subscription-error-modal'
import * as opps from './redux/OpportunityRedux'
import {RootState} from '../../../setup'

const mapState = (state: RootState) => ({opps: state.opps})
const connector = connect(mapState, opps.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const ViewOpportunity: React.FC<PropsFromRedux> = (props) => {
  const { id: id } = useParams()
  const dispatch = useDispatch()
  const location = useLocation()
  console.log('location', location)
  const navigate = useNavigate()
  const [historyObject, setHistoryObject] = useState(location.state)
  const [api, contextHolder] = notification.useNotification()
  const [isShowDetail, setIsShowDetail] = useState(false)

  const userType = localStorage.getItem('userType')
  const userTypeFull = localStorage.getItem('userTypeFull')

  useEffect(() => {
    dispatch(props.getOppByIdRequest(id))
  }, [])

  const openNotification = (placement, message) => {
    api.info({
      message: `${message} !`,
      description: <Context.Consumer>{({}) => `Project: ${historyObject.title}`}</Context.Consumer>,
      placement,
    })
  }
  const openNotificationWarning = (placement, message) => {
    api.warning({
      message: `${message} !`,
      description: <Context.Consumer>{({}) => `Project: ${historyObject.title}`}</Context.Consumer>,
      placement,
    })
  }
  const Context = React.createContext({
    name: 'Default',
  })

  const handleDetails = () => {
    if (userTypeFull === 'basic_enabler') {
      openNotificationWarning('bottomRight', 'It requires paid subscription and ODA agreement')
    } else {
      setIsShowDetail(!isShowDetail)
    }
  }

  const closeModalHandler = () => {
    setModalOpen(false)
    setIsShowDetail(!isShowDetail)
  }

  return (
    <>
      <Row gutter={[8, 16]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div style={{position: 'relative'}}>
            <img
              style={{height: '350px', width: '1255px', objectFit: 'cover'}}
              src={''}
              alt='sample'
            />

            <label
              style={{
                position: 'absolute',
                display: 'block',
                fontSize: '40px',
                fontWeight: '600',
                bottom: '50px',
                left: '30px',
                color: 'white',
              }}
            >
              {historyObject.title}
            </label>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {isShowDetail && (
              <div className='actions'>
                <button type='button' className='btn btn-primary' onClick={handleDetails}>
                  Hide Opportunity Details
                </button>
              </div>
            )}

            {!isShowDetail && (
              <div className='actions'>
                <button
                  type='button'
                  className='btn btn-primary'
                  data-bs-toggle='modal'
                  data-bs-target={
                    userTypeFull == 'basic_enabler' ? '#kt_subs_modal' : '#kt_oda_modal'
                  }
                  data-bs-tooltips='Requires Enbaler subscription'
                >
                  View Opportunity Details
                </button>
              </div>
            )}
            {userTypeFull === 'basic_enabler' && <SubscriptionRequired />}
            {userTypeFull !== 'basic_enabler' && <OppsDA OnDetails={handleDetails} />}

            <div
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  padding: '1px',
                }}
              >
                <Button
                  style={{
                    background: '#4eacff',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '15px',
                    color: 'white',
                  }}
                >
                  Crowdfund
                  <Tooltip title='Crowdfund'>
                    <ShareAltOutlined />
                  </Tooltip>
                </Button>
              </div>
              <div
                style={{
                  padding: '1px',
                }}
              >
                <Button
                  style={{
                    background: '#4eacff',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '15px',
                    color: 'white',
                  }}
                >
                  Crowdlend
                  <Tooltip title='Crowdlend'>
                    <StarOutlined />
                  </Tooltip>
                </Button>
              </div>
              <div
                style={{
                  padding: '1px',
                }}
              >
                <Button
                  onClick={() => openNotification('topRight', 'Added to Favourite')}
                  style={{
                    background: '#7fe772',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '6px',
                  }}
                >
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Card style={{marginTop: '10px'}}>
        <div className='fv-row d-flex align-items-center bg-light p-10'>
          <span className='fw-bolder fs-4 text-dark text-uppercase me-3'>Deal Type:</span>
          <span className='text-muted'>
            Equity/Equity Financing, Debt Financing, Consulting, Contract
          </span>
        </div>
        <Row style={{display: 'flex', marginTop: '5px'}} gutter={[8, 16]}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            style={{
              backgroundColor: '#f1f1f1',
              padding: '30px 40px',
              paddingTop: '30px',
              paddingBottom: '30px',
              borderRadius: '8px',
            }}
          >
            <div>
              <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>Summary</label>
            </div>

            <div>
              <label
                style={{
                  textAlign: 'justify',
                  fontSize: '14px',
                }}
              >
                {historyObject.summary}
              </label>
            </div>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            style={{
              backgroundColor: '#f1f1f1',
              borderRadius: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '5px',
                padding: '30px',
              }}
            >
              <label
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  backgroundColor: '#7fe772',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '7px',
                  textAlign: 'center',
                  width: '120px',
                }}
              >
                Following <br /> {historyObject.following}{' '}
              </label>
              <label
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
                  fontSize: '14px',
                  color: 'white',
                  fontWeight: '600',
                  backgroundColor: '#4eacff',
                  padding: '10px',
                  borderRadius: '7px',
                  textAlign: 'center',
                  width: '120px',
                }}
              >
                Interest <br />
                {historyObject.interest}{' '}
              </label>
              <label
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
                  fontSize: '14px',
                  color: 'white',
                  fontWeight: '600',
                  backgroundColor: '#fd5757',
                  padding: '10px',
                  borderRadius: '7px',
                  textAlign: 'center',
                  width: '120px',
                }}
              >
                Due Date <br /> {historyObject.due_date}
              </label>
            </div>
          </Col>

          {isShowDetail && (
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              style={{
                padding: '30px 40px',
                paddingTop: '30px',
                paddingBottom: '30px',
                borderRadius: '8px',
              }}
            >
              <div className='row'>
                <div className='col-xl-6'>
                  <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>
                    Opportunity Details
                  </label>
                </div>

                <div className='border m-3'>
                  <label
                    style={{
                      textAlign: 'justify',
                      fontSize: '14px',
                    }}
                  >
                    {historyObject.summary}
                  </label>
                </div>
              </div>

              <div className='row'>
                <div className='col-xl-6 mt-10'>
                  <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>
                    Sponsor's Details
                  </label>
                </div>

                <div className='border m-3'>
                  <label
                    style={{
                      textAlign: 'justify',
                      fontSize: '14px',
                    }}
                  >
                    {historyObject.summary}
                  </label>
                </div>
              </div>

              <div className='col text-center'>
                <Button
                  onClick={() => {
                    userTypeFull === 'basic_enabler'
                      ? openNotificationWarning(
                          'bottomRight',
                          'It requires paid subscription and ODA agreement'
                        )
                      : navigate('/send_proposals')
                  }}
                  style={{
                    background: '#4eacff',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '6px',
                    marginTop: '6rem',
                  }}
                >
                  Submit Proposal
                </Button>
              </div>
            </Col>
          )}
        </Row>
      </Card>

      <Context.Provider>{contextHolder}</Context.Provider>
    </>
  )
}

export default connector(ViewOpportunity)
