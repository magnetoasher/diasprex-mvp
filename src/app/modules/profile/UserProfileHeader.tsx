/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'

export const UserProfileHeader: React.FC = () => {
  const location = useLocation()
  let user = localStorage.getItem('userType')
  const fullUserType = localStorage.getItem('userTypeFull')
  const [userTypeFull, setUserTypeFull] = useState<any>(
    fullUserType && fullUserType.replace('_', ' ')
  )
  useEffect(() => {
    user === 'admin'
      ? setUserTypeFull('Admin') //Temporary placeholder for admin user type
      : setUserTypeFull(fullUserType && fullUserType.replace('_', ' '))
  }, [fullUserType])

  // const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  // const userAvatarImg = toAbsoluteUrl('/media/avatars/300-1.jpg')

  return (
    <div className='container card  px-0'>
      <div className='row-g-1 shadow-sm d-flex flex-row'>
        <div className='card-body pt-0 px-0 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
            <div className='col-2 d-flex align-items-center justify-content-center'>
              <div className='me-7 mb-4 d-flex text-center'>
                <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                  <img
                    src={toAbsoluteUrl('/media/avatars/diasprex/dxp-6.jpg')}
                    className='mw-100'
                    alt='Diasrex'
                  />
                  {/* <div
              className='image-input image-input-outline'
              data-kt-image-input='true'
              style={{backgroundImage: `url('${blankImg}')`}}
            >
            
              <div
                className='image-input-wrapper w-175px h-175px'
                style={{backgroundImage: `url('${userAvatarImg}')`}}
                            ></div>
                                </div> */}
                  <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
                </div>
              </div>
            </div>

            <div className='col py-5'>
              <div className='flex-grow-1 mw-100'>
                <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center mb-2'>
                      <span className='me-2'>
                        <a
                          href='#'
                          className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'
                        >
                          Max Smith
                        </a>
                        {user !== 'basic' && (
                          <a
                            href='#'
                            data-toggle='tooltip'
                            data-placement='top'
                            title='Verified account'
                          >
                            <KTSVG
                              path='/media/icons/duotune/general/gen026.svg'
                              className='svg-icon-1 svg-icon-success'
                            />
                          </a>
                        )}
                      </span>

                      <span className='symbol symbol-30px w-30px bg-light me-2'>
                        <img
                          src={toAbsoluteUrl('/media/flags/ghana.svg')}
                          className='fs-6 fw-bold'
                          alt='oppscard'
                          data-toggle='tooltips'
                          title='Ghana'
                          data-bs-placement='bottom'
                        />
                      </span>

                      {user !== 'sponsor' && (
                        <span className='symbol symbol-30px w-30px bg-light me-2'>
                          <img
                            src={toAbsoluteUrl('/media/flags/united-states.svg')}
                            className='fs-6 fw-bold'
                            alt='oppscard'
                            data-toggle='tooltips'
                            title='United States'
                            data-bs-placement='bottom'
                          />
                        </span>
                      )}
                    </div>

                    <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                      <a
                        href='#'
                        className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                      >
                        <KTSVG
                          path='/media/icons/duotune/communication/com006.svg'
                          className='svg-icon-4 me-1'
                        />
                        <span style={{textTransform: 'capitalize'}}>
                          {userTypeFull || 'Generic'}
                        </span>
                      </a>
                      <a
                        href='#'
                        className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                      >
                        <KTSVG
                          path='/media/icons/duotune/general/gen018.svg'
                          className='svg-icon-4 me-1'
                        />
                        Seattle, WA
                      </a>
                      <a
                        href='#'
                        className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                      >
                        <KTSVG
                          path='/media/icons/duotune/communication/com011.svg'
                          className='svg-icon-4 me-1'
                        />
                        m.smith@diasprex.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className='d-flex flex-wrap flex-stack'>
                  <div className='d-flex flex-column flex-grow-1 pe-8'>
                    <div className='d-flex flex-wrap'>
                      <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                        <div className='d-flex align-items-center'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr066.svg'
                            className='svg-icon-3 svg-icon-success me-2'
                          />
                          <div className='fs-2 fw-bolder'>$10,500</div>
                        </div>

                        <div className='fw-bold fs-6 text-gray-400'>Total Transfer</div>
                      </div>

                      <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                        <div className='d-flex align-items-center'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr065.svg'
                            className='svg-icon-3 svg-icon-danger me-2'
                          />
                          <div className='fs-2 fw-bolder'>5%</div>
                        </div>

                        <div className='fw-bold fs-6 text-gray-400'>Annual Change</div>
                      </div>

                      <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                        <div className='d-flex align-items-center'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr066.svg'
                            className='svg-icon-3 svg-icon-success me-2'
                          />
                          <div className='fs-2 fw-bolder'>$60,500</div>
                        </div>

                        <div className='fw-bold fs-6 text-gray-400'>Total Retainer</div>
                      </div>

                      <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                        <div className='d-flex align-items-center'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr066.svg'
                            className='svg-icon-3 svg-icon-success me-2'
                          />
                          <div className='fs-2 fw-bolder'>60%</div>
                        </div>

                        <div className='fw-bold fs-6 text-gray-400'>Retainer Change</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 px-10 py-5 d-flex align-items-center justify-content-center'>
              <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
                <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                  <span className='fw-bold fs-6 text-gray-400'>Profile Compleation</span>
                  <span className='fw-bolder fs-6'>50%</span>
                </div>
                <div className='h-5px mx-3 w-100 bg-light mb-3'>
                  <div
                    className='bg-success rounded h-5px'
                    role='progressbar'
                    style={{width: '50%'}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row-g-1 px-10 bg-light'>
        {location.pathname.includes('remittance') && (
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/remittance/summary' && 'active')
                  }
                  to='/remittance/summary'
                >
                  Summary
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/remittance/preferences' && 'active')
                  }
                  to='/remittance/preferences'
                >
                  Preferences
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/remittance/sendmoney' && 'active')
                  }
                  to='/remittance/sendmoney'
                >
                  Send Money
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/remittance/retainer' && 'active')
                  }
                  to='/remittance/retainer'
                >
                  Remittance Retainer
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/remittance/loans' && 'active')
                  }
                  to='/remittance/loans'
                >
                  Loans
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/remittance/statements' && 'active')
                  }
                  to='/remittance/statements'
                >
                  Statements
                </Link>
              </li>
            </ul>
          </div>
        )}

        {location.pathname.includes('profile') && (
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/profile/overview' && 'active')
                  }
                  to={`/profile/overview?userType=${user}`}
                >
                  Overview
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/profile/settings' && 'active')
                  }
                  to={`/profile/settings?userType=${user}`}
                >
                  Setting
                </Link>
              </li>

              {user !== 'basic' && (
                <li className='nav-item'>
                  <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname === '/profile/billing' && 'active')
                    }
                    to={`/profile/billing?userType=${user}`}
                  >
                    Billing
                  </Link>
                </li>
              )}

              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/profile/account' && 'active')
                  }
                  to={`/profile/account?userType=${user}`}
                >
                  Account
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
