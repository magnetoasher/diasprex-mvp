// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect, useState} from 'react'
import clsx from 'clsx'
import Moment from 'moment'
import {Row, Col, Button, Card, notification, Tooltip} from 'antd'
import {StarOutlined, ShareAltOutlined} from '@ant-design/icons'
import {useDispatch, connect, ConnectedProps} from 'react-redux'
import {useLocation, useNavigate, useParams} from 'react-router-dom'

import {OppsDA} from './component/oda'
import {SubscriptionRequired} from './component/subscription-error-modal'
import * as opps from './redux/OpportunityRedux'
import {RootState} from '../../../setup'
import {Opps} from '../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const mapState = (state: RootState) => ({opps: state.opps})
const connector = connect(mapState, opps.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const ViewOpportunity: React.FC<PropsFromRedux> = (props) => {
  const {id: id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [oppData, SetOppData] = useState<Opps>({})
  const [api, contextHolder] = notification.useNotification()
  const [isShowDetail, setIsShowDetail] = useState(false)

  const userType = localStorage.getItem('userType')
  const userTypeFull = localStorage.getItem('userTypeFull')

  useEffect(() => {
    dispatch(props.getOppByIdRequest(id))
  }, [])

  useEffect(() => {
    SetOppData(props.opps.opp[0])
  }, [props.opps])

  const openNotification = (placement, message) => {
    api.info({
      message: `${message} !`,
      description: <Context.Consumer>{({}) => `Project: ${oppData?.title}`}</Context.Consumer>,
      placement,
    })
  }
  const openNotificationWarning = (placement, message) => {
    api.warning({
      message: `${message} !`,
      description: <Context.Consumer>{({}) => `Project: ${oppData?.title}`}</Context.Consumer>,
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

  const badgeColor = oppData?.open ? 'success' : 'danger'
  const dealTypeLength = oppData?.dealtype?.length! - 1

  return (
    <>
      <div className='app-content'>
        <div className='card shadow-sm mb-6 mb-xl-9'>
          <div className='card-body pt-9 pb-0'>
            <div className='d-flex flex-wrap flex-sm-nowrap mb-6'>
              <div
                className={`d-flex flex-center flex-shrink-0 bg-light-${badgeColor} rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4`}
              >
                {oppData?.thumbnail === '' ? (
                  <div
                    className={clsx(
                      'd-flex symbol-label mw-100 h-100px h-lg-150px align-items-center justify-content-center fs-1 rounded',
                      `bg-light-${badgeColor}`,
                      ` text-capitalize text-${badgeColor}`
                    )}
                  >
                    {oppData?.country}
                  </div>
                ) : (
                  <img
                    className='d-block mw-100 rounded'
                    src={oppData?.thumbnail}
                    alt='oppsthumb'
                  />
                )}
              </div>
              <div className='flex-grow-1'>
                <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center mb-1'>
                      <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bold me-3'>
                        {oppData?.sponsor}
                      </a>
                      <span className='symbol symbol-30px w-30px bg-light me-2'>
                        <img
                          src={toAbsoluteUrl(`/media/flags/${oppData?.country?.toLowerCase()}.svg`)}
                          className='fs-6 fw-bold'
                          alt={oppData?.country}
                          data-toggle='tooltips'
                          title={oppData?.country}
                          data-bs-placement='bottom'
                        />
                      </span>
                      <span className={`badge badge-light-${badgeColor} me-auto`}>
                        {oppData?.open ? 'Open' : 'Closed'}
                      </span>
                    </div>

                    <div className='d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400'>
                      Title: {oppData?.title}
                    </div>
                  </div>
                  <div className='d-flex mb-4'>
                    <button type='button' className='btn btn-sm btn-primary me-3'>
                      Support
                      <Tooltip title='Support Opportunity'>
                        <StarOutlined />
                      </Tooltip>
                    </button>

                    <button type='button' className='btn btn-sm btn-success me-3'>
                      Follow
                    </button>
                  </div>
                </div>
                <div className='d-flex flex-wrap justify-content-start'>
                  <div className='d-flex flex-wrap'>
                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                      <div className='d-flex align-items-center'>
                        <div className='fs-4 fw-bold'>
                          {Moment(oppData?.duedate).format('MMM Do, YYYY')}
                        </div>
                      </div>

                      <div className='fw-semibold fs-6 text-gray-400'>Due Date</div>
                    </div>
                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                      <div className='d-flex align-items-center'>
                        <div className='fs-4 fw-bold'>
                          {oppData?.dealtype?.map((deal, index) =>
                            index !== dealTypeLength ? (
                              <span className='me-1'>{deal} |</span>
                            ) : (
                              <span className='me-1'>{deal}</span>
                            )
                          )}
                        </div>
                      </div>

                      <div className='fw-semibold fs-6 text-gray-400'>Deal Type</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
          </div>
        </Col>
      </div>

      <Card style={{marginTop: '10px'}}>
        <div className='fv-row d-flex align-items-center bg-light p-10'>
          <span className='fw-bolder fs-4 text-dark text-uppercase me-3'>Deal Type:</span>
          <span className='text-muted'>
            {oppData?.dealtype?.map((deal, index) =>
              index !== dealTypeLength ? (
                <span className='me-1'>{deal} |</span>
              ) : (
                <span className='me-1'>{deal}</span>
              )
            )}
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
                {oppData?.summary}
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
                Following <br /> {oppData?.following}{' '}
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
                {oppData?.interest}{' '}
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
                Due Date <br /> {oppData?.due_date}
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
                    {oppData?.summary}
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
                    {oppData?.summary}
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
