// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {useEffect, useState} from 'react'
import clsx from 'clsx'
import moment from 'moment'
import axios from 'axios'
import {Row, Col, Button, Card, notification, Tooltip} from 'antd'
import {StarOutlined, ShareAltOutlined} from '@ant-design/icons'
import {useDispatch, connect, ConnectedProps} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useOktaAuth} from '@okta/okta-react'

import * as opps from './redux/OpportunityRedux'
import {RootState} from '../../../setup'
import {Feedback, Opps} from '../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

import {ListLoading} from '../apps/admin-mgt-apps/core/loading/ListLoading'

const mapState = (state: RootState) => ({opps: state.opps})
const connector = connect(mapState, opps.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const SponsorViewOpportunity: React.FC<PropsFromRedux> = (props) => {
  const {authState} = useOktaAuth()
  const {id: id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [oppData, setOppData] = useState<Opps>({})
  const [feedbacks, setFeedbacks] = useState<Feedback>([])
  const [api, contextHolder] = notification.useNotification()

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
      status: 'approved',
    }
    dispatch(props.getFeedbacksRequest(params))
  }, [])

  useEffect(() => {
    setFeedbacks(props.opps.feedbacks)
  }, [props.opps.feedbacks])

  const Context = React.createContext({
    name: 'Default',
  })

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
                              {moment(oppData?.duedate).format('MMM Do, YYYY')}
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

              <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                <div className='col-xl-6'>
                  <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>Details</label>
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
                        <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.marketneed}</div>
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
                        <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.marketsize}</div>
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
                        <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.businessmodel}</div>
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
                        <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.gotomarket}</div>
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
                        <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.competitor}</div>
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
                        <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.complandscape}</div>
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
                        <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.companyteam}</div>
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
                        <div className='text-dark me-2 fs-7'>{oppData?.oppdesc?.nextmilestone}</div>
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

              <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                <div className='col-xl-6 mt-10'>
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
                <div className='col-xl-6 mt-10'>
                  <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>Feedbacks</label>
                </div>

                {feedbacks?.map((feedback) => (
                  <div>
                    <label
                      style={{
                        textAlign: 'justify',
                        fontSize: '14px',
                      }}
                    >
                      {feedback.message}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <Context.Provider>{contextHolder}</Context.Provider>
    </>
  )
}

export default connector(SponsorViewOpportunity)
