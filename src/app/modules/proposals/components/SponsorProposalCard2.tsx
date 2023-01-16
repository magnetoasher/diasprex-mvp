//@ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {Proposal} from '../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

type Props = {
  proposal?: Proposal
  dashboard?: boolean
}
const SponsorProposalCard2: FC<Props> = ({dashboard, proposal}) => {
  const badgeColor =
    proposal?.status === 'new'
      ? 'info'
      : proposal?.status === 'selected'
      ? 'success'
      : proposal?.status === 'draft'
      ? 'gray-800'
      : proposal?.status === 'declined'
      ? 'danger'
      : proposal?.status === 'pending'
      ? 'gray-600'
      : proposal?.status === 'completed'
      ? 'gray-800'
      : proposal?.status === 'active'
      ? 'primary'
      : 'warning'
  const navigate = useNavigate()

  return (
    <div className='KTCard mb-5'>
      <div className='card shadow-sm mb-6 mb-xl-9'>
        <div className={`card-header ribbon bg-gray-400 ribbon-end ribbon-clip`}>
          <div className='d-flex align-items-center mb-1'>
            <Link to={`#`} className='text-gray-800 text-hover-primary fs-2 fw-bold me-3'>
              {proposal?.enablerName}
            </Link>
            <span className='symbol symbol-30px w-30px bg-light me-2'>
              <img
                src={toAbsoluteUrl(`/media/flags/${proposal?.country?.toLowerCase()}.svg`)}
                className='fs-6 fw-bold'
                alt={proposal?.country}
                data-toggle='tooltips'
                title={proposal?.country}
                data-bs-placement='bottom'
              />
            </span>
            {/* <span
              className={`badge ${
                proposal?.status ? 'badge-light-success' : 'badge-light-danger'
              } fw-bolder me-auto py-3`}
            >
              {proposal?.status}
            </span> */}
          </div>
          <div className='ribbon-label text-capitalize'>
            {proposal?.status}
            <span className={`ribbon-inner bg-${badgeColor}`}></span>
          </div>
        </div>

        <div className='card-body pt-9 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-6'>
            <div
              className={`d-flex flex-center flex-shrink-0 bg-light-${badgeColor} rounded w-50px h-50px w-lg-100px h-lg-100px me-7 mb-4`}
            >
              {proposal?.thumbnail === '' ? (
                <div
                  className={clsx(
                    'd-flex symbol-label mw-100 align-items-center justify-content-center fs-1 rounded',
                    `bg-light-${badgeColor}`,
                    ` text-capitalize text-${badgeColor}`
                  )}
                >
                  {proposal?.country}
                </div>
              ) : (
                <img className='d-block mw-100 rounded' src={proposal?.thumbnail} alt='oppsthumb' />
              )}
            </div>
            <div className='flex-grow-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <div className='d-flex flex-column'>
                  <Link
                    to={`/proposals/${proposal?.opportunityObject?.uuid}/${proposal?.enablerUserId}`}
                    className='d-flex flex-wrap fw-semibold mb-4 fs-5 text-dark'
                  >
                    TITLE: {proposal?.title}
                  </Link>
                </div>
                <div className={`col-lg-3 d-flex align-items-start justify-content-end`}>
                  {proposal?.status !== 'active' && proposal?.status !== 'completed' && dashboard && (
                    <>
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
                            navigate(
                              `/proposals/${proposal?.opportunityObject?.uuid}/${proposal?.enablerUserId}`
                            )
                          }}
                        >
                          <a className='menu-link px-3'>View</a>
                        </div>

                        {/* {(opp?.status === 'new' || opp?.status === 'pending') && (
                          <div className='dropdown-item px-3'>
                            <a
                              className='menu-link px-3'
                              onClick={() => {
                                handleWithdrawOpp(opp?.uuid, 'withdrawn')
                              }}
                            >
                              Withdraw
                            </a>
                          </div>
                        )} */}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className='d-flex flex-wrap justify-content-start'>
                <div className='d-flex flex-wrap'>
                  SUMMARY: {proposal?.summary?.slice(0, 100)}...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SponsorProposalCard2
