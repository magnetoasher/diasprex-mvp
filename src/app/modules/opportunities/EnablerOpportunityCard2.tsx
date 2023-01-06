//@ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {Opps} from '../../../app/modules/apps/admin-mgt-apps/opp-management/opps-list/core/_models'
type Props = {
  opp: Opps
  followed?: boolean | undefined
  dashboard?: boolean | undefined
}
const EnablerOpportunityCard2: FC<Props> = ({followed, dashboard, opp}) => {
  const badgeColor =
    opp?.status === 'new' ? 'info' : opp?.status === 'published' ? 'success' : 'danger'
  const history = useNavigate()
  return (
    <div className='KTCard mb-5'>
      <div className='card shadow-sm mb-6 mb-xl-9'>
        <div className={`card-header ribbon bg-gray-400 ribbon-end ribbon-clip`}>
          <div className='d-flex align-items-center mb-1'>
            <Link to={`/opportunities_center/${opp?.uuid}`} className='text-gray-800 text-hover-primary fs-2 fw-bold me-3'>
              {opp?.sponsor}
            </Link>
            <span className='symbol symbol-30px w-30px bg-light me-2'>
              <img
                src={toAbsoluteUrl(`/media/flags/${opp?.country?.toLowerCase()}.svg`)}
                className='fs-6 fw-bold'
                alt={opp?.country}
                data-toggle='tooltips'
                title={opp?.country}
                data-bs-placement='bottom'
              />
            </span>
            <span
              className={`badge ${
                opp?.open ? 'badge-light-success' : 'badge-light-danger'
              } fw-bolder me-auto py-3`}
            >
              {opp?.open ? 'Open' : 'Closed'}
            </span>
          </div>
          <div className='ribbon-label text-capitalize'>
            new
            <span className={`ribbon-inner bg-info`}></span>
          </div>
        </div>
        <a
          onClick={() => {
            history(`/opportunities_center/${opp.uuid}`)
          }}
        >
          <div className='card-body pt-9 pb-0'>
            <div className='d-flex flex-wrap flex-sm-nowrap mb-6'>
              <div
                className={`d-flex flex-center flex-shrink-0 bg-light-${badgeColor} rounded w-50px h-50px w-lg-100px h-lg-100px me-7 mb-4`}
              >
                {opp?.thumbnail === '' ? (
                  <div
                    className={clsx(
                      'd-flex symbol-label mw-100 align-items-center justify-content-center fs-1 rounded',
                      `bg-light-${badgeColor}`,
                      ` text-capitalize text-${badgeColor}`
                    )}
                  >
                    {opp?.country}
                  </div>
                ) : (
                  <img className='d-block mw-100 rounded' src={opp?.thumbnail} alt='oppsthumb' />
                )}
              </div>
              <div className='flex-grow-1'>
                <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex flex-wrap fw-semibold mb-4 fs-5 text-dark'>
                      TITLE: {opp?.title}
                    </div>
                  </div>
                  <div className={`col-lg-3 d-flex align-items-start justify-content-end`}>
                    {opp?.status !== 'new' && opp?.status !== 'completed' && !dashboard && (
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
                            <a href='#' className='menu-link px-3'>
                              View
                            </a>
                          </div>
                          {followed ? (
                            <div className='dropdown-item px-3'>
                              <a href='#' className='menu-link px-3'>
                                {followed ? 'Unfollow ' : 'Follow'}
                              </a>
                            </div>
                          ) : (
                            <div className='dropdown-item px-3'>
                              <a href='#' className='menu-link px-3'>
                                Delete
                              </a>
                            </div>
                          )}
                        </div>
                      </>
                    )}

                    {/* <a
              href='#'
              className=' btn btn-sm btn-light btn-active-light-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
            >
              Actions
              <span className='svg-icon svg-icon-5 m-0'>
                <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
              </span>
            </a>

            <div
              className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4'
              data-kt-menu='true'
            >
              <div className='menu-item px-3'>
                <a href='#' className='menu-link px-3'>
                  View
                </a>
              </div>

              <div className='menu-item px-3'>
                <a href='#' className='menu-link px-3' data-kt-customer-table-filter='delete_row'>
                  Delete
                </a>
              </div>
            </div> */}
                  </div>
                </div>
                <div className='d-flex flex-wrap justify-content-start'>
                  <div className='d-flex flex-wrap'>SUMMARY: {opp?.summary?.slice(0, 100)}...</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
export default EnablerOpportunityCard2