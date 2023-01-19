import clsx from 'clsx'
import {FC, useEffect, useState} from 'react'
import {useDispatch, connect, ConnectedProps} from 'react-redux'
import moment from 'moment'
import {Row, Col, Button, Card, notification, Tooltip} from 'antd'
import {StarOutlined, ShareAltOutlined} from '@ant-design/icons'
import {toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {Proposal} from '../core/_models'
import * as proposal from '../../../../../proposals/redux/ProposalRedux'
import {RootState} from '../../../../../../../setup'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {ListLoading} from '../../../core/loading/ListLoading'

const mapState = (state: RootState) => ({proposal: state.proposals})
const connector = connect(mapState, proposal.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const AdminViewProposal: FC<PropsFromRedux> = (props) => {
  const {oppid: oppId, enablerid: enablerId} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [propData, setPropData] = useState<Proposal>({})

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
  const badgeColor =
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
          <div className='card shadow-sm mb-6 mb-xl-9'>
            <div className='card-body pt-9 pb-0'>
              <div className='d-flex flex-wrap flex-sm-nowrap mb-6'>
                <div
                  className={`d-flex flex-center flex-shrink-0 bg-light-${badgeColor} rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4`}
                >
                  {propData?.thumbnail === '' ? (
                    <div
                      className={clsx(
                        'd-flex symbol-label mw-100 h-100px h-lg-150px align-items-center justify-content-center fs-1 rounded',
                        `bg-light-${badgeColor}`,
                        ` text-capitalize text-${badgeColor}`
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
                        <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bold me-3'>
                          {propData?.enablerName}
                        </a>
                        <span className='symbol symbol-30px w-30px bg-light me-2'>
                          <img
                            src={toAbsoluteUrl(
                              `/media/flags/${propData?.country?.toLowerCase()}.svg`
                            )}
                            className='fs-6 fw-bold'
                            alt={propData?.country}
                            data-toggle='tooltips'
                            title={propData?.country}
                            data-bs-placement='bottom'
                          />
                        </span>
                        <span>
                          <Link
                            to={`/proposals/${propData?.opportunityObject?.uuid}/${propData?.enablerUserId}`}
                            className='text-muted text-hover-primary fs-4 '
                          >
                            {propData?.dpxid}
                          </Link>
                        </span>
                      </div>

                      <div className='d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400'>
                        Title: {propData?.title}
                      </div>
                    </div>

                    <div className='d-flex mb-4'>
                      <span
                        className={`badge badge-${badgeColor} fs-4 text-uppercase me-3 py-3 px-3`}
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

                        <div className='fw-semibold fs-6 text-gray-400'>Admin Review Requested</div>
                      </div>
                    </div>
                    <div className='d-flex flex-wrap'>
                      <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                        <div className='d-flex justify-content-end align-items-center '>
                          <div className='bg-light text-uppercase py-3 px-3'>
                            <span className='fs-2 fw-bold me-3'>Opportunity:</span>
                            <Link
                              to={`/table/opps_management/viewopportunity/${propData?.opportunityObject?.uuid}`}
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

          <div className='d-flex justify-content-end'>
            <Link
              to='/table/props_management/proposals'
              className='btn btn-light btn-active-light-primary'
            >
              Back To Proposal Table
            </Link>
          </div>

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

export default connector(AdminViewProposal)
