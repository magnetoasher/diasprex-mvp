import clsx from 'clsx'
import {FC, useEffect, useState} from 'react'
import {useDispatch, connect, ConnectedProps} from 'react-redux'
import moment from 'moment'
import {Row, Col, Button, Card, notification, Tooltip} from 'antd'
import {StarOutlined, ShareAltOutlined} from '@ant-design/icons'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Proposal} from '../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'
import * as proposal from '../redux/ProposalRedux'
import {RootState} from '../../../../setup'
import {Link, useParams} from 'react-router-dom'
import {ListLoading} from '../../apps/admin-mgt-apps/core/loading/ListLoading'

const mapState = (state: RootState) => ({proposal: state.proposals})
const connector = connect(mapState, proposal.actions)
type PropsFromRedux = ConnectedProps<typeof connector>
const userType = localStorage.getItem('userType')
console.log('UserType', userType)
const ViewProposal: FC<PropsFromRedux> = (props) => {
  const {oppid: oppId, enablerid: enablerId} = useParams()
  const dispatch = useDispatch()
  const [propData, setPropData] = useState<Proposal>({})
  const openBadgeColor = propData?.opportunityObject?.open ? 'success' : 'danger'
  const dealTypeLength = propData?.opportunityObject?.dealtype?.length! - 1
  const query = {
    enablerUserId: enablerId,
    opportunityUuid: oppId,
  }

  useEffect(() => {
    dispatch(props.getProposalRequest(query))
  }, [])

  useEffect(() => {
    setPropData(props.proposal?.proposal[0])
  }, [props.proposal.proposal])

  const propBadgeColor =
    propData?.status === 'new'
      ? 'info'
      : propData?.status === 'selected'
      ? 'success'
      : propData?.status === 'draft'
      ? 'gray-800'
      : propData?.status === 'declined'
      ? 'danger'
      : propData?.status === 'pending'
      ? 'gray-600'
      : propData?.status === 'completed'
      ? 'gray-800'
      : propData?.status === 'active'
      ? 'primary'
      : 'warning'

  return (
    <>
      {props.proposal.isLoading ? (
        <ListLoading />
      ) : (
        <>
          {userType === 'enabler' && (
            <div className='card shadow-sm mb-6 mb-xl-9'>
              <div className='card-body pt-9 pb-0'>
                <div className='d-flex flex-wrap flex-sm-nowrap mb-6'>
                  <div
                    className={`d-flex flex-center flex-shrink-0 bg-light-${openBadgeColor} rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4`}
                  >
                    {propData?.opportunityObject?.thumbnail === '' ? (
                      <div
                        className={clsx(
                          'd-flex symbol-label mw-100 h-100px h-lg-150px align-items-center justify-content-center fs-1 rounded',
                          `bg-light-${openBadgeColor}`,
                          ` text-capitalize text-${openBadgeColor}`
                        )}
                      >
                        {propData?.opportunityObject?.country}
                      </div>
                    ) : (
                      <img
                        className='d-block mw-100 rounded'
                        src={propData?.opportunityObject?.thumbnail}
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
                            {propData?.opportunityObject?.sponsorName}
                          </a>
                          <span className='symbol symbol-30px w-30px bg-light me-2'>
                            <img
                              src={toAbsoluteUrl(
                                `/media/flags/${propData?.opportunityObject?.country?.toLowerCase()}.svg`
                              )}
                              className='fs-6 fw-bold'
                              alt={propData?.opportunityObject?.country}
                              data-toggle='tooltips'
                              title={propData?.opportunityObject?.country}
                              data-bs-placement='bottom'
                            />
                          </span>
                          <span className={`badge badge-light-${openBadgeColor} me-auto`}>
                            {propData?.opportunityObject?.open ? 'Open' : 'Closed'}
                          </span>
                        </div>

                        <div className='d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400'>
                          Title: {propData?.opportunityObject?.title}
                        </div>
                      </div>
                      <div className='d-flex mb-4'>
                        {/* Click Follow increases following parameter by +1 text changed to unfollow if Enabler is already following */}
                        <button
                          type='button'
                          className='btn btn-sm btn-success me-3'
                          disabled={true}
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                    <div className='d-flex flex-wrap justify-content-start'>
                      <div className='d-flex flex-wrap'>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex align-items-center'>
                            <div className='fs-4 fw-bold'>
                              {moment(propData?.opportunityObject?.duedate).format('MMM Do, YYYY')}
                            </div>
                          </div>

                          <div className='fw-semibold fs-6 text-gray-400'>Due Date</div>
                        </div>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex align-items-center'>
                            <div className='fs-4 fw-bold'>
                              {propData?.opportunityObject?.dealtype?.map(
                                (deal: string, index: number) =>
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
                            <div className='fs-4 fw-bold'>
                              {propData?.opportunityObject?.showedinterest?.length}
                            </div>
                          </div>

                          <div className='fw-semibold fs-6 text-gray-400'>Show of Interest</div>
                        </div>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex align-items-center'>
                            <div className='fs-4 fw-bold'>
                              {propData?.opportunityObject?.following?.length}
                            </div>
                          </div>

                          <div className='fw-semibold fs-6 text-gray-400'>Following</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {userType === 'sponsor' && (
            <div className='card shadow-sm mb-6 mb-xl-9'>
              <div className='card-body pt-9 pb-0'>
                <div className='d-flex flex-wrap flex-sm-nowrap mb-6'>
                  <div
                    className={`d-flex flex-center flex-shrink-0 bg-light-${propBadgeColor} rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4`}
                  >
                    {propData?.thumbnail === '' ? (
                      <div
                        className={clsx(
                          'd-flex symbol-label mw-100 h-100px h-lg-150px align-items-center justify-content-center fs-1 rounded',
                          `bg-light-${propBadgeColor}`,
                          ` text-capitalize text-${propBadgeColor}`
                        )}
                      >
                        {propData?.country}
                      </div>
                    ) : (
                      <img
                        className='d-block mw-100 rounded'
                        src={propData?.thumbnail}
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
                            {propData?.enablerName}
                          </a>
                          <span className='symbol symbol-30px w-30px bg-light me-2'>
                            <img
                              src={toAbsoluteUrl(
                                `/media/flags/${propData?.country?.toLowerCase()}.svg`
                              )}
                              className='fs-6 fw-bold'
                              alt={propData?.opportunityObject?.country}
                              data-toggle='tooltips'
                              title={propData?.opportunityObject?.country}
                              data-bs-placement='bottom'
                            />
                          </span>
                        </div>

                        <div className='d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400'>
                          Title: {propData?.title}
                        </div>
                      </div>
                      <div className='d-flex mb-4'>
                        <span
                          className={`badge badge-${propBadgeColor} fs-4 text-uppercase me-3 py-3 px-3`}
                        >
                          {propData?.status}
                        </span>
                      </div>
                    </div>
                    <div className='d-flex flex-wrap justify-content-start'>
                      <div className='d-flex flex-wrap'>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex align-items-center'>
                            <div className='fs-4 fw-bold'>
                              {moment(propData?.date_submitted).format('MMM Do, YYYY')}
                            </div>
                          </div>

                          <div className='fw-semibold fs-6 text-gray-400'>Date Submitted</div>
                        </div>
                      </div>

                      <div className='d-flex flex-wrap'>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex align-items-center'>
                            <div className='fs-4 fw-bold'>
                              {propData?.admin_screening ? 'YES' : 'NO'}
                            </div>
                          </div>

                          <div className='fw-semibold fs-6 text-gray-400'>
                            Admin Review Requested
                          </div>
                        </div>
                      </div>
                      <div className='d-flex flex-wrap'>
                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                          <div className='d-flex justify-content-end align-items-center '>
                            <div className='bg-light text-uppercase py-3 px-3'>
                              <span className='fs-2 fw-bold me-3'>Opportunity:</span>
                              <Link
                                to={`/opportunities/${propData?.opportunityObject?.dpxid}`}
                                className='text-muted text-hover-primary fs-2 '
                              >
                                {propData?.opportunityObject?.uuid}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {userType === 'sponsor' && (
            <>
              {/* <div className='actions d-flex justify-content-end'>
            <button
              type='button'
              className='btn btn-light btn-active-light-primary'
              onClick={() => {
                navigate('/table/props_management/proposals')
              }}
            >
              Back To Table
            </button>
          </div> */}
              <div className='d-flex justify-content-end mb-5'>
                <Link
                  to='/sponsor/props_review/proposals'
                  className='btn btn-sm btn-secondary me-3'
                >
                  Back To Proposal Table
                </Link>
              </div>
            </>
          )}

          <div className='card mb-5 mb-xl-10'>
            <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
              <div>
                <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>Title</label>
              </div>

              <div>
                <ul style={{listStyle: 'none'}}>
                  <li>{propData?.title}</li>
                </ul>
              </div>
            </div>

            <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
              <div>
                <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>Summary</label>
              </div>

              <div>
                <ul style={{listStyle: 'none'}}>
                  <li>{propData?.summary}</li>
                </ul>
              </div>
            </div>

            <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
              <div>
                <label className='fw-bolder fs-4 text-dark text-uppercase me-3'>Details</label>
              </div>

              <div>
                <ul style={{listStyle: 'none'}}>
                  <li>{propData?.propdesc}</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default connector(ViewProposal)
