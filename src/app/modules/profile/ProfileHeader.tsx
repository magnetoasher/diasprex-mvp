/* eslint-disable jsx-a11y/anchor-is-valid */
import {useContext, useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import { profileContext } from '../../context/profile'

const ProfileHeader: React.FC = () => {
  const location = useLocation()
  const userType = localStorage.getItem('userType')
  const userTypeFull = localStorage.getItem('userTypeFull')
  const [userLabel, setUserLabel] = useState<any>(userTypeFull)
  const { profile } = useContext(profileContext);

  useEffect(() => {
    profile?.usertype === 'admin'
      ? setUserLabel('Admin') //Temporary placeholder for admin user type
      : setUserLabel(profile?.accountType)
  }, [profile])

  const userBadgeColor =
    profile?.usertype === 'sponsor' ? 'primary' : profile?.usertype === 'admin' ? 'info' : 'success'

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img
                src={
                  profile?.usertype !== 'sponsor'
                    ? toAbsoluteUrl('/media/avatars/diasprex/dxp-6.jpg')
                    : toAbsoluteUrl('/media/logos/megold-logo.png')
                }
                alt='Diasprex'
              />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    {profile?.fName} {profile?.lName}
                  </a>
                  {profile?.subscriptiontier!== 'basic_enabler' && (
                    <a href='#' data-toggle='tooltip' data-placement='top' title='Verified account'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen026.svg'
                        className='svg-icon-1 svg-icon-success'
                      />
                    </a>
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
                    <span className={`badge badge-light-${userBadgeColor} text-capitalize`}>
                      {userLabel?.replace('_', ' ') || ' '}
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
                    {profile?.countryres}
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com011.svg'
                      className='svg-icon-4 me-1'
                    />
                    {profile?.email}
                  </a>
                </div>
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              {userType === 'sponsor' ? (
                <>
                  <div className='d-flex flex-column flex-grow-1 pe-8'>
                    <div className='d-flex flex-wrap'>
                      <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                        <div className='d-flex align-items-center'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr066.svg'
                            className='svg-icon-3 svg-icon-success me-2'
                          />
                          <div className='fs-2 fw-bolder'>$50M</div>
                        </div>

                        <div className='fw-bold fs-6 text-gray-400'>Last Deal</div>
                      </div>

                      <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                        <div className='d-flex align-items-center'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr065.svg'
                            className='svg-icon-3 svg-icon-danger me-2'
                          />
                          <div className='fs-2 fw-bolder'>$15M</div>
                        </div>

                        <div className='fw-bold fs-6 text-gray-400'>Pending Deal</div>
                      </div>

                      <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                        <div className='d-flex align-items-center'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr066.svg'
                            className='svg-icon-3 svg-icon-success me-2'
                          />
                          <div className='fs-2 fw-bolder'>$65M</div>
                        </div>

                        <div className='fw-bold fs-6 text-gray-400'>Total Deal</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='d-flex flex-column flex-grow-1 pe-8'>
                    <div className='d-flex flex-wrap'>
                      <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                        <div className='d-flex align-items-center'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr065.svg'
                            className='svg-icon-3 svg-icon-danger me-2'
                          />
                          <div className='fs-2 fw-bolder'>$125</div>
                        </div>

                        <div className='fw-bold fs-6 text-gray-400'>Last Retainer</div>
                      </div>

                      <div className='border border-gray-300 border-dashed rounded min-w-100px p-2 me-3 mb-3'>
                        <div className='d-flex align-items-center'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr065.svg'
                            className='svg-icon-3 svg-icon-danger me-2'
                          />
                          <div className='fs-4 fw-bolder'>5%</div>
                        </div>

                        <div className='fw-bold fs-6 text-gray-400'>Annual Change</div>
                      </div>

                      <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                        <div className='d-flex align-items-center'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr066.svg'
                            className='svg-icon-3 svg-icon-success me-2'
                          />
                          <div className='fs-2 fw-bolder'>$15,000</div>
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
                </>
              )}

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

        {location.pathname.includes('remittance') && (
          <div className='d-flex overflow-auto bg-light h-55px px-10'>
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
            </ul>
          </div>
        )}

        {location.pathname.includes('profile') && (
          <div className='d-flex overflow-auto bg-light h-55px px-10'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/profile/overview' && 'active')
                  }
                  to={`/profile/overview?userType=${userType}`}
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
                  to={`/profile/settings?userType=${userType}`}
                >
                  Setting
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/profile/subscription' && 'active')
                  }
                  to={`/profile/subscription?userType=${userType}`}
                >
                  Subscription
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/profile/loans' && 'active')
                  }
                  to='/profile/loans'
                >
                  Loans
                </Link>
              </li> */}
              {/* <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/profile/statements' && 'active')
                  }
                  to='/profile/statements'
                >
                  Statements
                </Link>
              </li> */}

              {/* <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/profile/account' && 'active')
                  }
                  to={`/profile/account?userType=${user}`}
                >
                  Account
                </Link>
              </li> */}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export {ProfileHeader}