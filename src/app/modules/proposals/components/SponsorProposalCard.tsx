import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'

export const SponsorProposalCard = ({
  propenabler,
  propcountry,
  proptitle,
  propsummary,
  badgeColor,
  status,
  dashboard,
  picSrc,
}: any) => {
  return (
    <div className='KTCard mb-5'>
      <div className=' mb-2 box-shadow-style'>
        <div className='card-header ribbon ribbon-end ribbon-clip'>
          <div className='ribbon-label text-capitalize'>
            {status}
            <span className={`ribbon-inner bg-${badgeColor}`}></span>
          </div>
        </div>
        <div className=' p-1 row'>
          <div className={`col-lg-3`}>
            <div
              className='d-flex justify-content-start align-items-center'
              style={{borderRight: '1px solid black'}}
            >
              {/* {status === 'Proposal in Draft' && (
                <div className='form-check form-check-custom form-check-solid me-3'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    data-kt-check={isSelected}
                    data-kt-check-target='#kt_table_users .form-check-input'
                    checked={isSelected}
                    onChange={() => onSelect(id)}
                  />
                </div>
              )} */}
              <div className='symbol symbol-50px symbol-lg-60px symbol-fixed position-relative me-3'>
                <img src={picSrc} alt='Metornic' />
                <div className='position-absolute translate-middle bottom-0 start-100 mb-6 border-white h-20px w-30px'></div>
              </div>

              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-capitalize fs-3 fw-bolder '>
                    {propenabler}
                  </a>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className=' text-primary text-capitalize me-1'>
                    {propcountry}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='d-flex flex-column'>
              <div className='d-flex align-items-center mb-2'>
                <a href='#' className='text-gray-800  text-capitalize fs-2 fw-bolder me-1'>
                  {proptitle}
                </a>
              </div>
              <div className='d-flex align-items-center mb-2'>
                <a href='#' className='text-gray-800   me-1'>
                  {propsummary}
                </a>
              </div>
            </div>
          </div>

          <div className={`col-lg-3 d-flex align-items-start justify-content-end`}>
            {status !== 'active' && status !== 'completed' && !dashboard && (
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

                  {status === 'proposal in draft' && (
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
                  {status === 'submission status' && (
                    <div className='dropdown-item px-3'>
                      <a
                        href='#'
                        className='menu-link px-3'
                        data-kt-customer-table-filter='delete_row'
                      >
                        Withdraw
                      </a>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
