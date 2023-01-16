import clsx from 'clsx'
import {FC} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Proposal} from '../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'
import {IQuery} from '../redux/ProposalAPI'

type Props = {
  prop?: Proposal
  dashboard?: boolean
  changePropStatus: (statQuery: IQuery) => void
}

export const EnablerProposalCard2: FC<Props> = ({dashboard, prop, changePropStatus}) => {
  const navigate = useNavigate()
  const withdrawQuery = {
    enablerUserId: prop?.enablerUserId,
    opportunityUuid: prop?.opportunityUuid,
    status: 'withdrawn',
  }
  const deleteQuery = {
    enablerUserId: prop?.enablerUserId,
    opportunityUuid: prop?.opportunityUuid,
    status: 'deleted',
  }
  const handleDeleteProp = () => {
    changePropStatus(deleteQuery)
  }
  const handleWithdrawProp = () => {
    changePropStatus(withdrawQuery)
  }
  const badgeColor =
    prop?.status === 'new'
      ? 'info'
      : prop?.status === 'selected'
      ? 'success'
      : prop?.status === 'draft'
      ? 'gray-800'
      : prop?.status === 'declined'
      ? 'danger'
      : prop?.status === 'pending'
      ? 'gray-600'
      : prop?.status === 'completed'
      ? 'gray-800'
      : prop?.status === 'active'
      ? 'primary'
      : 'warning'
  return (
    <div className='KTCard mb-5'>
      <div className='card border mb-6 mb-xl-9'>
        <div className='card-header ribbon ribbon-end ribbon-clip'>
          <div className='d-flex align-items-center mb-1'>
            <Link
              to={`/opportunities_center/${prop?.opportunityObject?.uuid}`}
              className='text-gray-800 text-hover-primary fs-2 fw-bold me-3'
            >
              {prop?.opportunityObject?.sponsorName}
            </Link>
            <span className='symbol symbol-30px w-30px bg-light me-2'>
              <img
                src={toAbsoluteUrl(
                  `/media/flags/${prop?.opportunityObject?.country?.toLowerCase()}.svg`
                )}
                className='fs-6 fw-bold'
                alt={prop?.opportunityObject?.country}
                data-toggle='tooltips'
                title={prop?.opportunityObject?.country}
                data-bs-placement='bottom'
              />
            </span>
            <span
              className={`badge ${
                prop?.opportunityObject?.open ? 'badge-light-success' : 'badge-light-danger'
              } fw-bolder me-auto py-3`}
            >
              {prop?.opportunityObject?.open ? 'Open' : 'Closed'}
            </span>
          </div>
          <div className='ribbon-label text-capitalize'>
            {prop?.status}
            <span className={`ribbon-inner bg-${badgeColor}`}></span>
          </div>
        </div>

        <div className='card-body pt-9 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-6'>
            <div
              className={`d-flex flex-center flex-shrink-0 bg-light-${badgeColor} rounded w-50px h-50px w-lg-100px h-lg-100px me-7 mb-4`}
            >
              {!prop?.thumbnail ? (
                <div
                  className={clsx(
                    'd-flex symbol-label mw-100 align-items-center justify-content-center fs-1 rounded',
                    `bg-light-${badgeColor}`,
                    ` text-capitalize text-${badgeColor}`
                  )}
                >
                  {prop?.country?.slice(0, 1)}
                </div>
              ) : (
                <img className='d-block mw-100 rounded' src={prop?.thumbnail} alt='propsthumb' />
              )}
            </div>

            <div className='flex-grow-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <div className='d-flex flex-wrap fw-semibold mb-4 fs-5 text-dark'>
                  TITLE: {prop?.title}
                </div>

                {prop?.status !== 'active' && prop?.status !== 'completed' && (
                  <div>
                    <button
                      className='btn btn-sm btn-light btn-active-light-primary dropdown-toggle'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Actions
                    </button>
                    <div
                      className='dropdown-menu menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-6 w-125px py-4'
                      data-kt-menu='true'
                    >
                      <div
                        className='dropdown-item px-3 cursor-pointer'
                        onClick={() => {
                          prop?.status === 'draft'
                            ? navigate(
                                `/opportunities_center/${prop?.opportunityUuid}/${prop?.enablerUserId}/send_proposals`
                              )
                            : navigate(`/proposals/${prop?.opportunityUuid}/${prop?.enablerUserId}`)
                        }}
                      >
                        <a className='menu-link px-3'>View</a>
                      </div>

                      {prop?.status === 'draft' && (
                        <div
                          className='dropdown-item px-3 cursor-pointer'
                          onClick={() => {
                            handleDeleteProp()
                          }}
                        >
                          <a className='menu-link px-3' data-kt-customer-table-filter='delete_row'>
                            Delete
                          </a>
                        </div>
                      )}
                      {(prop?.status === 'new' || prop?.status === 'pending') && (
                        <div
                          className='dropdown-item px-3 cursor-pointer'
                          onClick={() => {
                            handleWithdrawProp()
                          }}
                        >
                          <a className='menu-link px-3'>Withdraw</a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className='d-flex align-items-center mb-2'>
                <a href='#' className='text-gray-800   me-1'>
                  SUMMARY: {prop?.summary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
