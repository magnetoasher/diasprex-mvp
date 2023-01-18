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
import {Opps, Feedback} from '../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import Swal from 'sweetalert2'
import {FeedbackModal} from '../../../_metronic/partials/modals/confirm-action/feedbackform'
import {ListLoading} from '../apps/admin-mgt-apps/core/loading/ListLoading'
import {provideFeedbackAPI} from './redux/OpportunityAPI'

const mapState = (state: RootState) => ({opps: state.opps})
const connector = connect(mapState, opps.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const SponsorViewOpportunity: React.FC<PropsFromRedux> = (props) => {
  const {authState} = useOktaAuth()
  const {id: id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [oppData, setOppData] = useState<Opps>({})
  const [api, contextHolder] = notification.useNotification()

  useEffect(() => {
    dispatch(props.getOppByIdRequest(id))
  }, [])

  useEffect(() => {
    setOppData(props.opps.opp[0])
  }, [props.opps])

  const Context = React.createContext({
    name: 'Default',
  })

  const badgeColor = oppData?.open ? 'success' : 'danger'
  const dealTypeLength = oppData?.dealtype?.length! - 1
  const handleFeedbackSubmit = () => {}
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
                        <span
                          className={`badge badge-${badgeColor} fs-4 text-uppercase me-3 py-3 px-3`}
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

              <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                <div className='col-xl-6'>
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

                <div>
                  <label
                    style={{
                      textAlign: 'justify',
                      fontSize: '14px',
                    }}
                  >
                    ALL APPROVED FEEDBACKS FOR THIS OPP GOES HERE
                  </label>
                </div>
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
