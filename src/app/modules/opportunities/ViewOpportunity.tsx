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
import {Opps, statusBadgeColor} from '../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
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
    }
    dispatch(props.getFeedbacksRequest(params))
  }, [])

  useEffect(() => {
    setFeedbacks(props.opps?.feedbacks?.feedback)
  }, [props.opps?.feedbacks])

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

  const openBadgeColor = oppData?.open ? 'success' : 'danger'
  const statusBadgeColor =
    oppData?.status === 'new'
      ? 'info'
      : oppData?.status === 'published'
      ? 'success'
      : oppData?.status === 'accepted'
      ? 'primary'
      : oppData?.status === 'draft'
      ? 'gray-800'
      : oppData?.status === 'not accepted'
      ? 'danger'
      : oppData?.status === 'pending'
      ? 'gray-600'
      : oppData?.status === 'completed'
      ? 'gray-800'
      : oppData?.status === 'active'
      ? 'primary'
      : 'warning'
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
                    className={`d-flex flex-center flex-shrink-0 bg-light-${statusBadgeColor} rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4`}
                  >
                    {oppData?.thumbnail === '' ? (
                      <div
                        className={clsx(
                          'd-flex symbol-label mw-100 h-100px h-lg-150px align-items-center justify-content-center fs-1 rounded',
                          `bg-light-${statusBadgeColor}`,
                          ` text-capitalize text-${statusBadgeColor}`
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
                          {oppData?.status === 'published' ? (
                            <span className={`badge badge-light-${openBadgeColor} me-auto`}>
                              {oppData?.open ? 'Open' : 'Closed'}
                            </span>
                          ) : (
                            <span className='badge badge-secondary me-auto'>Pending</span>
                          )}
                        </div>

                        <div className='d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400'>
                          Title: {oppData?.title}
                        </div>
                      </div>
                      <div className='d-flex mb-4'>
                        <span
                          className={`badge badge-${statusBadgeColor} fs-4 text-uppercase me-3 py-3 px-3`}
                        >
                          {oppData?.status}
                        </span>
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
                        <div className='d-flex mb-4'>
                          {!oppData?.following?.includes(authState?.accessToken?.claims.uid) ? (
                            <button
                              type='button'
                              className='btn btn-sm btn-primary me-3'
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
                              className='btn btn-sm btn-secondary me-3'
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
                  <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>Title</label>
                </div>

                <div>
                  <ul style={{listStyle: 'none'}}>
                    <li>{oppData?.title}</li>
                  </ul>
                </div>
              </div>

              <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                <div>
                  <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>Summary</label>
                </div>

                <div>
                  <ul style={{listStyle: 'none'}}>
                    <li>{oppData?.summary}</li>
                  </ul>
                </div>
              </div>
              {isShowDetail && (
                <>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className=''>
                      <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>
                        Details
                      </label>
                    </div>

                    <div className=''>
                      <ol>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_marketneed'
                            aria-expanded='true'
                            aria-controls='oppdesc_marketneed'
                          >
                            Market Need / Problem
                          </label>
                        </li>
                        <div id='oppdesc_marketneed' className='collapse show'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>
                              {oppData?.oppdesc?.marketneed}
                            </div>
                          </div>
                        </div>

                        <li className='text-primary fw-bold fs-6 mt-2 '>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_marketsize'
                            aria-expanded='true'
                            aria-controls='oppdesc_marketsize'
                          >
                            Market Size
                          </label>
                        </li>
                        <div id='oppdesc_marketsize' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>
                              {oppData?.oppdesc?.marketsize}
                            </div>
                          </div>
                        </div>

                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_productservices'
                            aria-expanded='true'
                            aria-controls='oppdesc_productservices'
                          >
                            Product / Services
                          </label>
                        </li>
                        <div id='oppdesc_productservices' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>
                              {oppData?.oppdesc?.productservices}
                            </div>
                          </div>
                        </div>

                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_productservices'
                            aria-expanded='true'
                            aria-controls='oppdesc_productservices'
                          >
                            Developmental Impact
                          </label>
                        </li>
                        <div id='oppdesc_productservices' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.devimpact}</div>
                          </div>
                        </div>

                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_busmodel'
                            aria-expanded='true'
                            aria-controls='oppdesc_busmodel'
                          >
                            Business Model
                          </label>
                        </li>
                        <div id='oppdesc_busmodel' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>
                              {oppData?.oppdesc?.businessmodel}
                            </div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_valueprop'
                            aria-expanded='true'
                            aria-controls='oppdesc_valueprop'
                          >
                            Value Proposition
                          </label>
                        </li>
                        <div id='oppdesc_valueprop' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.valueprop}</div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_gotomarket'
                            aria-expanded='true'
                            aria-controls='oppdesc_gotomarket'
                          >
                            Go-To-Market Strategy
                          </label>
                        </li>
                        <div id='oppdesc_gotomarket' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>
                              {oppData?.oppdesc?.gotomarket}
                            </div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_competitor'
                            aria-expanded='true'
                            aria-controls='oppdesc_competitor'
                          >
                            Competitor
                          </label>
                        </li>
                        <div id='oppdesc_competitor' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>
                              {oppData?.oppdesc?.competitor}
                            </div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_complandscape'
                            aria-expanded='true'
                            aria-controls='oppdesc_complandscape'
                          >
                            Competitive Landscape
                          </label>
                        </li>
                        <div id='oppdesc_complandscape' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>
                              {oppData?.oppdesc?.complandscape}
                            </div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_companyteam'
                            aria-expanded='true'
                            aria-controls='oppdesc_companyteam'
                          >
                            Team and Expertise
                          </label>
                        </li>
                        <div id='oppdesc_companyteam' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>
                              {oppData?.oppdesc?.companyteam}
                            </div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_company'
                            aria-expanded='true'
                            aria-controls='oppdesc_company'
                          >
                            Developmental Impact
                          </label>
                        </li>
                        <div id='oppdesc_company' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.company}</div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_diaspengagement'
                            aria-expanded='true'
                            aria-controls='oppdesc_diaspengagement'
                          >
                            Diaspora Engagement
                          </label>
                        </li>
                        <div id='oppdesc_diaspengagement' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>
                              {oppData?.oppdesc?.diaspengagement}
                            </div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_traction'
                            aria-expanded='true'
                            aria-controls='oppdesc_traction'
                          >
                            Traction
                          </label>
                        </li>
                        <div id='oppdesc_traction' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.traction}</div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_nextmilestone'
                            aria-expanded='true'
                            aria-controls='oppdesc_nextmilestone'
                          >
                            Next Milestone
                          </label>
                        </li>
                        <div id='oppdesc_nextmilestone' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>
                              {oppData?.oppdesc?.nextmilestone}
                            </div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_asks'
                            aria-expanded='true'
                            aria-controls='oppdesc_asks'
                          >
                            Asks
                          </label>
                        </li>
                        <div id='oppdesc_asks' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.asks}</div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_exit'
                            aria-expanded='true'
                            aria-controls='oppdesc_exit'
                          >
                            Exit Strategy
                          </label>
                        </li>
                        <div id='oppdesc_exit' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.exit}</div>
                          </div>
                        </div>
                        <li className='text-primary fw-bold fs-6 mt-2'>
                          <label
                            className='cursor-pointer'
                            data-bs-toggle='collapse'
                            data-bs-target='#oppdesc_videourl'
                            aria-expanded='true'
                            aria-controls='oppdesc_videourl'
                          >
                            Video Url
                          </label>
                        </li>
                        <div id='oppdesc_videourl' className='collapse'>
                          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
                            <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.videourl}</div>
                          </div>
                        </div>
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
                            <ol>
                              <li>
                                <label
                                  style={{
                                    textAlign: 'justify',
                                    fontSize: '14px',
                                  }}
                                >
                                  {feedback.message}
                                </label>
                              </li>
                            </ol>
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
                        title1={`Provide a feedback for opportunity ${oppData?.dpxid}`}
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
