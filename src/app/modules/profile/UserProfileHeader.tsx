/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router'

export const UserProfileHeader: React.FC = () => {
  const location = useLocation()
   let user = localStorage.getItem('userType')
  const fullUserType = localStorage.getItem('userTypeFull')
  const [userTypeFull, setUserTypeFull] = useState<any>(fullUserType && fullUserType.replace("_", " "))
  useEffect(() => {
    (user === 'admin')?
      setUserTypeFull('Admin'): //Temporary placeholder for admin user type
    setUserTypeFull(fullUserType && fullUserType.replace("_", " "))
  }, [fullUserType])

  return (
    <div className='card mb-5 shadow-2 mb-xl-10'>
      <div className='row-g-4 d-flex flex-row'>
        <div className='col-lg-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metronic' />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    Max Smith
                  </a>
                      {user !== "basic" && <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Verified account"
                    >
                        <KTSVG
                          path='/media/icons/duotune/general/gen026.svg'
                          className='svg-icon-1 svg-icon-success'
                        />
                      </a>}
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
                    <span style={{ textTransform: 'capitalize' }}>{userTypeFull || 'Generic'}</span>
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
        </div>
          {location.pathname.includes("remittance") &&
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
            </div>}
          
          {location.pathname.includes("profile") &&
            <div className="d-flex overflow-auto h-55px">
              <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
                <li className="nav-item">
                  <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname === "/profile/overview" &&
                        "active")
                    }
                    to={`/profile/overview?userType=${user}`}
                  >
                    Overview
                  </Link>
                </li>
            
                <li className="nav-item">
                  <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname === "/profile/settings" &&
                        "active")
                    }
                    to={`/profile/settings?userType=${user}`}
                  >
                    Setting
                  </Link>
                </li>

                {user !== "basic" && (
                  <li className="nav-item">
                    <Link
                      className={
                        `nav-link text-active-primary me-6 ` +
                        (location.pathname === "/profile/billing" &&
                          "active")
                      }
                      to={`/profile/billing?userType=${user}`}
                    >
                      Billing
                    </Link>
                  </li>
                )}
            
                <li className="nav-item">
                  <Link
                    className={
                      `nav-link text-active-primary me-6 ` +
                      (location.pathname === "/profile/account" && "active")
                    }
                    to={`/profile/account?userType=${user}`}
                  >
                    Account
                  </Link>
                </li>
              </ul>
            </div>}
          

        </div>
              

        <div className='col-lg-2 align-middle'>
          <div className = ' flex-row  '>
                 <div className = 'border border-grey-300 rounded min-w-125px shadow-sm me-6 mb-3'>

                <Link to="/remittance/sendmoney" className="btn btn-flex btn-primary px-6">
                  <span className="svg-icon svg-icon-2x">
                                   <KTSVG
                        path='/media/icons/duotune/general/gen016.svg'
                        className=' svg-icon-success me-2'
                      />
                </span>
  <span className="d-flex flex-column align-items-start ms-2">
      <span className="fs-3 fw-bolder">Send Money</span>
      <span className="fs-7">Build Legacy</span>
  </span>
                  </Link>
                  </div>
                


              <div className = 'border border-grey-300 rounded min-w-125px shadow-sm me-6 mb-3'>

                <Link to="#" className="btn btn-flex btn-normal px-6">
                  <span className="svg-icon svg-icon-2x">
                                   <KTSVG
                        path='/media/icons/duotune/general/gen017.svg'
                        className=' svg-icon-success me-2'
                      />
                </span>
  <span className="d-flex flex-column align-items-start ms-2">
      <span className="fs-3 fw-bolder">Add Fund</span>
      <span className="fs-7">Build Futures</span>
  </span>
                  </Link>
            </div>
            </div>
              </div>
      </div>
    </div>
  )
}
