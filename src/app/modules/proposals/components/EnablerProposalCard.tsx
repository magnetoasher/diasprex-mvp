import {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Proposal} from '../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'
type Props = {
  prop?: Proposal
  dashboard?: boolean
}

export const EnablerProposalCard: FC<Props> = ({dashboard, prop}) => {
  const navigate = useNavigate()
  const badgeColor =
    prop?.status === 'new' ? 'info' : prop?.status === 'published' ? 'success' : 'danger'
  return (
    <div className='KTCard mb-5'>
      <div className=' mb-2 box-shadow-style'>
        <div className='card-header ribbon ribbon-end ribbon-clip'>
          <div className='ribbon-label text-capitalize'>
            {prop?.status}
            <span className={`ribbon-inner bg-${badgeColor}`}></span>
          </div>
        </div>
        <div className=' p-1 row'>
          <div className={`col-lg-3`}>
            <div
              className='d-flex justify-content-start align-items-center'
              style={{borderRight: '1px solid black'}}
            >
              <div className='symbol symbol-50px symbol-lg-60px symbol-fixed position-relative me-3'>
                <img src={prop?.opportunityObject?.thumbnail} alt='Metornic' />
                <div className='position-absolute translate-middle bottom-0 start-100 mb-6 border-white h-20px w-30px'></div>
              </div>

              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-capitalize fs-3 fw-bolder '>
                    {prop?.opportunityObject?.thumbnail}
                  </a>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className=' text-primary text-capitalize me-1'>
                    {prop?.opportunityObject?.country}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='d-flex flex-column'>
              <div className='d-flex align-items-center mb-2'>
                <a href='#' className='text-gray-800  text-capitalize fs-2 fw-bolder me-1'>
                  {prop?.title}
                </a>
              </div>
              <div className='d-flex align-items-center mb-2'>
                <a href='#' className='text-gray-800   me-1'>
                  {prop?.summary}
                </a>
              </div>
            </div>
          </div>

          <div className={`col-lg-3 d-flex align-items-start justify-content-end`}>
            {prop?.status !== 'active' && prop?.status !== 'completed' && (
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
                  <div className='dropdown-item px-3'>
                    <a
                      className='menu-link px-3'
                      onClick={() => {
                        prop?.status === 'draft'
                          ? navigate(`/opportunities_center/${prop?.opportunityUuid}/${prop?.enablerUserId}/send_proposals`)
                          : navigate(`/proposals/${prop?.opportunityUuid}/${prop?.enablerUserId}`)
                      }}
                    >
                      View
                    </a>
                  </div>

                  {prop?.status === 'draft' && (
                    <div className='dropdown-item px-3'>
                      <a
                        href='#'
                        className='menu-link px-3'
                        data-kt-customer-table-filter='delete_row'
                      >
                        Delete
                      </a>
                    </div>
                  )}
                  {prop?.status === 'new' ||
                    (prop?.status === 'pending' && (
                      <div className='dropdown-item px-3'>
                        <a
                          href='#'
                          className='menu-link px-3'
                          data-kt-customer-table-filter='delete_row'
                        >
                          Withdraw
                        </a>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
