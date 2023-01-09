import clsx from 'clsx'
import {FC} from 'react'
import moment from 'moment'
import {Row, Col, Button, Card, notification, Tooltip} from 'antd'
import {StarOutlined, ShareAltOutlined} from '@ant-design/icons'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Proposal} from '../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'
type Props = {
  proposal?: Proposal
}
export const ViewProposal: FC<Props> = ({proposal}) => {
  const badgeColor = proposal?.opportunityObject?.open ? 'success' : 'danger'
  const dealTypeLength = proposal?.opportunityObject?.dealtype?.length! - 1
  return (
    <>
      <div className='card shadow-sm mb-6 mb-xl-9'>
        <div className='card-body pt-9 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-6'>
            <div
              className={`d-flex flex-center flex-shrink-0 bg-light-${badgeColor} rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4`}
            >
              {proposal?.opportunityObject?.thumbnail === '' ? (
                <div
                  className={clsx(
                    'd-flex symbol-label mw-100 h-100px h-lg-150px align-items-center justify-content-center fs-1 rounded',
                    `bg-light-${badgeColor}`,
                    ` text-capitalize text-${badgeColor}`
                  )}
                >
                  {proposal?.opportunityObject?.country}
                </div>
              ) : (
                <img
                  className='d-block mw-100 rounded'
                  src={proposal?.opportunityObject?.thumbnail}
                  alt='oppsthumb'
                />
              )}
            </div>
            <div className='flex-grow-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <div className='d-flex flex-column'>
                  <div className='d-flex align-items-center mb-1'>
                    <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bold me-3'>
                      {proposal?.opportunityObject?.sponsor}
                    </a>
                    <span className='symbol symbol-30px w-30px bg-light me-2'>
                      <img
                        src={toAbsoluteUrl(
                          `/media/flags/${proposal?.opportunityObject?.country?.toLowerCase()}.svg`
                        )}
                        className='fs-6 fw-bold'
                        alt={proposal?.opportunityObject?.country}
                        data-toggle='tooltips'
                        title={proposal?.opportunityObject?.country}
                        data-bs-placement='bottom'
                      />
                    </span>
                    <span className={`badge badge-light-${badgeColor} me-auto`}>
                      {proposal?.opportunityObject?.open ? 'Open' : 'Closed'}
                    </span>
                  </div>

                  <div className='d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400'>
                    Title: {proposal?.opportunityObject?.title}
                  </div>
                </div>
                <div className='d-flex mb-4'>
                  {/* Click Support increases support parameter by +1  */}
                  <button type='button' className='btn btn-sm btn-primary me-3'>
                    Support
                    <Tooltip title='Support Opportunity'>
                      <StarOutlined />
                    </Tooltip>
                  </button>

                  {/* Click Follow increases following parameter by +1 text changed to unfollow if Enabler is already following */}
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
                        {moment(proposal?.opportunityObject?.duedate).format('MMM Do, YYYY')}
                      </div>
                    </div>

                    <div className='fw-semibold fs-6 text-gray-400'>Due Date</div>
                  </div>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <div className='fs-4 fw-bold'>
                        {proposal?.opportunityObject?.dealtype?.map((deal, index) =>
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
                        {proposal?.opportunityObject?.showedinterest}
                      </div>
                    </div>

                    <div className='fw-semibold fs-6 text-gray-400'>Show of Interest</div>
                  </div>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <div className='fs-4 fw-bold'>{proposal?.opportunityObject?.following}</div>
                    </div>

                    <div className='fw-semibold fs-6 text-gray-400'>Following</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='card mb-5 mb-xl-10'>
        <div
          className='card-header border-0 cursor-pointer'
          role='button'
          data-bs-toggle='collapse'
          data-bs-target='#kt_opp_summary'
          aria-expanded='true'
          aria-controls='kt_opp_summary'
        >
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>{proposal?.summary}</h3>
          </div>
        </div>
        <div id='kt_opp_summary' className='collapse show'>
          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
            <div className='text-muted me-2 fs-7'>{proposal?.opportunityObject?.summary}</div>
          </div>
        </div>
        <div
          className='card-header border-0 cursor-pointer'
          role='button'
          data-bs-toggle='collapse'
          data-bs-target='#kt_opp_oppdesc'
          aria-expanded='true'
          aria-controls='kt_opp_oppdesc'
        >
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>{proposal?.opportunityObject?.oppdesc}</h3>
          </div>
        </div>
        <div id='kt_opp_oppdesc' className='collapse show'>
          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
            <div className='text-muted me-2 fs-7'>{proposal?.opportunityObject?.oppdesc}</div>
          </div>
        </div>

        <div
          className='card-header border-0 cursor-pointer'
          role='button'
          data-bs-toggle='collapse'
          data-bs-target='#kt_prop_title'
          aria-expanded='true'
          aria-controls='kt_prop_title'
        >
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>{proposal?.title}</h3>
          </div>
        </div>
        <div id='kt_prop_title' className='collapse'>
          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
            <div className='text-muted me-2 fs-7'>{proposal?.title}</div>
          </div>
        </div>

        <div
          className='card-header border-0 cursor-pointer'
          role='button'
          data-bs-toggle='collapse'
          data-bs-target='#kt_prop_summary'
          aria-expanded='true'
          aria-controls='kt_prop_summary'
        >
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>{proposal?.summary}</h3>
          </div>
        </div>
        <div id='kt_prop_summary' className='collapse'>
          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
            <div className='text-muted me-2 fs-7'>{proposal?.summary}</div>
          </div>
        </div>
        <div
          className='card-header border-0 cursor-pointer'
          role='button'
          data-bs-toggle='collapse'
          data-bs-target='#kt_prop_propdesc'
          aria-expanded='true'
          aria-controls='kt_prop_propdesc'
        >
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>{proposal?.propdesc}</h3>
          </div>
        </div>
        <div id='kt_prop_propdesc' className='collapse'>
          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5'>
            <div className='text-muted me-2 fs-7'>{proposal?.propdesc}</div>
          </div>
        </div>
      </div>
    </>
  )
}
