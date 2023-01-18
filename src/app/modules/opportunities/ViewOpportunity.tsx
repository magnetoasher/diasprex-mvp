// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect, useState} from 'react'
import clsx from 'clsx'
import Moment from 'moment'
import axios from 'axios'
import {Row, Col, Button, Card, notification, Tooltip} from 'antd'
import {StarOutlined, ShareAltOutlined} from '@ant-design/icons'
import {useDispatch, connect, ConnectedProps} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useOktaAuth} from '@okta/okta-react'
import {OppsDA} from './component/oda'
import {SubscriptionRequired} from './component/subscription-error-modal'
import * as opps from './redux/OpportunityRedux'
import {RootState} from '../../../setup'
import {Opps} from '../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import Swal from 'sweetalert2'
import {FeedbackModal} from '../../../_metronic/partials/modals/confirm-action/feedbackform'
import {ListLoading} from '../apps/admin-mgt-apps/core/loading/ListLoading'
import {acknowledgeOdaAPI, provideFeedbackAPI, supportOppAPI} from './redux/OpportunityAPI'

const mapState = (state: RootState) => ({opps: state.opps})
const connector = connect(mapState, opps.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const ViewOpportunity: React.FC<PropsFromRedux> = (props) => {
  const {authState} = useOktaAuth()
  const {id: id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [oppData, setOppData] = useState<Opps>({})
  const [feedbacks, setFeedbacks] = useState<Feedback>([])
  const [api, contextHolder] = notification.useNotification()
  const [isShowDetail, setIsShowDetail] = useState(false)
  const userTypeFull = localStorage.getItem('userTypeFull')
  const userType = localStorage.getItem('userType')

  useEffect(() => {
    dispatch(props.getOppByIdRequest(id))
  }, [])

  useEffect(() => {
    setOppData(props.opps.opp[0])
  }, [props.opps])

  useEffect(() => {
    const params = {
      opportunityUuid: id,
      enablerUserId: authState?.accessToken?.claims.uid,
      status: 'new',
    }
    dispatch(props.getFeedbacksRequest(params))
  }, [])

  useEffect(() => {
    setFeedbacks(props.opps.feedbacks)
  }, [props.opps.feedbacks])

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
      if (!isShowDetail) {
        acknowledgeOdaAPI({
          enablerUserId: authState?.accessToken?.claims.uid,
          opportunityUuid: id,
        }).then((res) => {
          if (res.status === 200) {
            dispatch(props.getOppByIdRequest(id))
          }
        })
      }
    }
  }

  const closeModalHandler = () => {
    setModalOpen(false)
    setIsShowDetail(!isShowDetail)
  }

  const handleFollowOpp = async () => {
    const data = {
      enablerUserId: authState?.accessToken?.claims.uid,
      sponsorUserId: oppData.sponsorUserId,
      enablerName: 'Art Beyond Sight',
      opportunityUuid: oppData.uuid,
      status: 'followed',
      opportunityObject: oppData,
    }
    try {
      await axios
        .post(`${process.env.REACT_APP_DIASPREX_API_URL}/proposals/create`, data)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Successfully done',
            })
            dispatch(props.getOppByIdRequest(id))
          }
        })
        .catch((error) => error)
    } catch (err) {
      console.log(err)
    }
  }

  const handleUnfollowOpp = async () => {
    const data = {
      enablerUserId: authState?.accessToken?.claims.uid,
      sponsorUserId: oppData.sponsorUserId,
      enablerName: 'Art Beyond Sight',
      opportunityUuid: oppData.uuid,
      status: 'unfollowed',
      opportunityObject: oppData,
    }
    try {
      await axios
        .post(`${process.env.REACT_APP_DIASPREX_API_URL}/proposals/create`, data)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Successfully done',
            })
            dispatch(props.getOppByIdRequest(id))
          }
        })
        .catch((error) => error)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSupportOpp = async () => {
    try {
      await supportOppAPI({
        enablerUserId: authState?.accessToken?.claims.uid,
        opportunityUuid: oppData.uuid,
      })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'You have supported this opportunity',
            })
            dispatch(props.getOppByIdRequest(id))
          }
        })
        .catch((error) => error)
    } catch (err) {
      console.log(err)
    }
  }

  const badgeColor = oppData?.open ? 'success' : 'danger'
  const dealTypeLength = oppData?.dealtype?.length! - 1
  const handleFeedbackSubmit = (data) => {
    provideFeedbackAPI(data)
  }

  return (
    <>
      {props.opps.isLoading ? (
        <ListLoading />
      ) : (
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
                          <a
                            href='#'
                            className='text-gray-800 text-hover-primary fs-2 fw-bold me-3'
                          >
                            {oppData?.sponsor}
                          </a>
                          <span className='symbol symbol-30px w-30px bg-light me-2'>
                            <img
                              src={toAbsoluteUrl(
                                `/media/flags/${oppData?.country?.toLowerCase()}.svg`
                              )}
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
                        {!oppData?.following?.includes(authState?.accessToken?.claims.uid) ? (
                          <button
                            type='button'
                            className='btn btn-sm btn-success me-3'
                            disabled={oppData?.showedinterest?.includes(
                              authState?.accessToken?.claims.uid
                            )}
                            onClick={() => {
                              handleFollowOpp()
                            }}
                          >
                            Follow
                          </button>
                        ) : (
                          <button
                            type='button'
                            className='btn btn-sm btn-primary me-3'
                            disabled={oppData?.showedinterest?.includes(
                              authState?.accessToken?.claims.uid
                            )}
                            onClick={() => {
                              handleUnfollowOpp()
                            }}
                          >
                            Unfollow
                          </button>
                        )}
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
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex align-items-center'>
                            <div className='fs-4 fw-bold'>{oppData?.showedinterest?.length}</div>
                          </div>

                          <div className='fw-semibold fs-6 text-gray-400'>Show of Interest</div>
                        </div>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex align-items-center'>
                            <div className='fs-4 fw-bold'>{oppData?.following?.length}</div>
                          </div>

                          <div className='fw-semibold fs-6 text-gray-400'>Following</div>
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
                      Hide Details
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
                        oppData?.acknowledgedODA?.includes(authState?.accessToken?.claims.uid)
                          ? ''
                          : userTypeFull == 'basic_enabler'
                          ? '#kt_subs_modal'
                          : '#kt_oda_modal'
                      }
                      data-bs-tooltips='Requires Enbaler subscription'
                      onClick={() => {
                        oppData?.acknowledgedODA?.includes(authState?.accessToken?.claims.uid) &&
                          setIsShowDetail(!isShowDetail)
                      }}
                    >
                      Show Details
                    </button>
                  </div>
                )}
                {userTypeFull === 'basic_enabler' && <SubscriptionRequired />}
                {userTypeFull !== 'basic_enabler' && <OppsDA OnDetails={handleDetails} />}
              </div>
            </Col>
          </div>

          <div class='card'>
            <div class='card-body'>
              <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
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

              <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
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
              </div>
              {isShowDetail && (
                <>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className=''>
                      <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>
                        Opportunity Details
                      </label>
                    </div>

                    <div className=''>
                      <ol>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Market Need / Problem</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.marketneed}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Market Size</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.marketsize}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Product and Services</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.productservices}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Developmental Impact</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.devimpact}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Business Model</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.businessmodel}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Value Proposition</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.valueprop}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Go-To-Market Strategy</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.gotomarket}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Market Size</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.competitor}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Competitive Landscape</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.complandscape}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Team and Expertise</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.companyteam}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Company</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.company}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Diaspora Engagement</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.diaspengagement}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Traction</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.traction}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Next Milestone</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.nextmilestone}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Asks</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.asks}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Exit Strategy</label>
                        </li>
                        <p className=''> {oppData?.oppdesc?.exit}</p>
                        <li className='text-primary fw-bold fs-6'>
                          <label className=''>Video Url</label>
                        </li>
                        <p className=''> {oppData?.videourl}</p>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                      <div className=''>
                        <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>
                          Sponsor's Details
                        </label>
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
                    </div>

                    <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                      <div className=''>
                        <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>
                          Your Feedback
                        </label>
                      </div>

                      {feedbacks?.map((feedback) => (
                        <div className=''>
                          <div
                            key={`${feedback.opportunityUuid + feedback.enablerUserId}`}
                            className='d-flex flex-column mb-2'
                          >
                            <label>{feedback.message}</label>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className='text-center pt-15'>
                      <button
                        type='button'
                        className='btn btn-light btn-active-primary me-3'
                        data-bs-toggle='modal'
                        data-bs-target='#kt_oppfeedback_modal'
                        data-bs-tooltips='Provide Feedback'
                      >
                        Provide Feedback
                      </button>
                      <FeedbackModal
                        id='kt_oppfeedback_modal'
                        title1={`Provide a feedback for opportunity ${oppData?.id}`}
                        title2='Type your feedback  (max of 700 characters) New feedback will replace any previous one for this opportunity'
                        confirm='Submit'
                        classname='btn btn-primary'
                        oppId={oppData?.id}
                        userId={authState?.accessToken?.claims.uid}
                        ConfirmHandler={handleFeedbackSubmit}
                      />
                      <button
                        type='button'
                        className='btn btn btn-light btn-active-primary me-3'
                        disabled={
                          !oppData?.open ||
                          oppData?.supporting?.includes(authState?.accessToken?.claims.uid)
                        }
                        onClick={() => {
                          handleSupportOpp()
                        }}
                      >
                        Support
                        <Tooltip title='Support Opportunity'>
                          <StarOutlined />
                        </Tooltip>
                      </button>

                      <button
                        type='button'
                        className='btn btn-primary'
                        disabled={
                          !oppData?.open ||
                          oppData?.showedinterest?.includes(authState?.accessToken?.claims.uid)
                        }
                        onClick={() => {
                          userTypeFull === 'basic_enabler'
                            ? openNotificationWarning(
                                'bottomRight',
                                'It requires paid subscription and ODA agreement'
                              )
                            : navigate(`/opportunities_center/${oppData.uuid}/send_proposals`)
                        }}
                      >
                        Submit Proposal
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
      <Context.Provider>{contextHolder}</Context.Provider>
    </>
  )
}

export default connector(ViewOpportunity)
