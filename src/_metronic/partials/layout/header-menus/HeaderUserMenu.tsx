/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {useOktaAuth} from '@okta/okta-react'
import {toAbsoluteUrl} from '../../../helpers'
import { profileContext } from '../../../../app/context/profile'

const HeaderUserMenu: FC = () => {
  var userTypeFull = localStorage.getItem('userTypeFull')
  var userType = localStorage.getItem('userType')
  const [userLabel, setUserLabel] = useState<any>(userTypeFull)
  const { profile } = useContext(profileContext);

  const {oktaAuth} = useOktaAuth()

  const logout = () => {
    oktaAuth.signOut()
  }

  const userBadgeColor =
    userType === 'sponsor' ? 'primary' : userType === 'admin' ? 'info' : 'success'

  useEffect(() => {
    setUserLabel(profile?.subscriptiontier)
  }, [profile])

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img
              alt='Logo'
              src={
                profile?.accountType !== 'sponsor'
                  ? toAbsoluteUrl('/media/avatars/diasprex/dxp-6.jpg')
                  : toAbsoluteUrl('/media/logos/megold-logo.png')
              }
            />
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              {profile?.fName} {profile?.lName}
              <span
                className={`badge badge-light-${userBadgeColor} fw-bolder fs-8 px-2 py-1 ms-2 text-capitalize`}
              >
                {userLabel?.replace('_', ' ')}{' '}
              </span>
            </div>
            <a href='#' className='fw-bold text-muted text-hover-primary fs-7'>
              {profile?.email}
            </a>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>
      <div className='menu-item px-5'>
        <a
          href={userType === 'admin' ? '/admindashboard' : '/dashboard'}
          className='menu-link px-5'
        >
          Dashboard
        </a>
      </div>
      <div className='separator my-2'></div>
      <div
        className='menu-item px-5'
        data-kt-menu-trigger='hover'
        data-kt-menu-placement='left-start'
        data-kt-menu-flip='bottom'
      >
        <a href='#' className='menu-link px-5'>
          <span className='menu-title'>My Account</span>
          <span className='menu-arrow'></span>
        </a>
        <div className='menu-sub menu-sub-dropdown py-4'>
          <div className='menu-item px-5'>
            <Link to={'/profile/overview'} className='menu-link px-5'>
              Profile Overview
            </Link>
          </div>

          <div className='menu-item px-5 my-1'>
            <Link to='/profile/settings' className='menu-link px-5'>
              Settings
            </Link>
          </div>
          <div className='menu-item px-5 my-1'>
            <Link to='/profile/subscription' className='menu-link px-5'>
              Subscription
            </Link>
          </div>
          {userType !== 'sponsor' && (
            <>
              {/* <div className='menu-item px-5'>
                <Link to={'my_investments'} className='menu-link px-5'>
                  Investment
                </Link>
              </div> */}

              <div className='menu-item px-5 my-1'>
                <Link to='/profile/loans' className='menu-link px-5'>
                  Loans
                </Link>
              </div>
              <div className='menu-item px-5 my-1'>
                <Link to='/profile/statements' className='menu-link px-5'>
                  Statements
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <div className='separator my-2'></div>

      {userType !== 'sponsor' && (
        <>
          <div
            className='menu-item px-5'
            data-kt-menu-trigger='hover'
            data-kt-menu-placement='left-start'
            data-kt-menu-flip='bottom'
          >
            <a href='#' className='menu-link px-5'>
              <span className='menu-title'>Opportunity</span>
              <span className='menu-arrow'></span>
            </a>
            <div className='menu-sub menu-sub-dropdown py-4'>
              <div className='menu-item px-5'>
                <Link to={'/my_opportunities'} className='menu-link px-5'>
                  My Opportunities
                </Link>
              </div>
              <div className='menu-item px-5'>
                <Link to={'/my_proposals'} className='menu-link px-5'>
                  My Proposals
                </Link>
              </div>
            </div>
          </div>

          {/* {userTypeFull === 'basic_enabler' && (
            <div
              className='menu-item px-5'
              data-kt-menu-trigger='hover'
              data-kt-menu-placement='left-start'
              data-kt-menu-flip='bottom'
            >
              <a href='#' className='menu-link px-5'>
                <span className='menu-title'>Opportunity</span>
                <span className='menu-arrow'></span>
              </a>
              <div className='menu-sub menu-sub-dropdown py-4'>
                <div className='menu-item px-5'>
                  <Link to={'my_opportunities'} className='menu-link px-5'>
                    My Opportunities
                  </Link>
                </div>
              </div>
            </div>
          )} */}

          {userTypeFull !== 'business_enabler' && (
            <>
              <div className='separator my-2'></div>
              <div
                className='menu-item px-5'
                data-kt-menu-trigger='hover'
                data-kt-menu-placement='left-start'
                data-kt-menu-flip='bottom'
              >
                <a href='#' className='menu-link px-5'>
                  <span className='menu-title'>Remittance</span>
                  <span className='menu-arrow'></span>
                </a>
                <div className='menu-sub menu-sub-dropdown py-4'>
                  <div className='menu-item px-5'>
                    <Link to={'/remittance/summary'} className='menu-link px-5'>
                      My Remittances
                    </Link>
                    <div className='menu-item px-5 my-1'>
                      <Link to='/remittance/sendmoney' className='menu-link px-5'>
                        Send Money
                      </Link>
                    </div>
                    <div className='menu-item px-5 my-1'>
                      <Link to='/remittance/retainer' className='menu-link px-5'>
                        Remitt Fund Escrow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className='separator my-2'></div>

          <div className='menu-item px-5 my-1'>
            <Link to='/referrals' className='menu-link px-5'>
              Referrals
            </Link>
          </div>
        </>
      )}
      {userType === 'sponsor' && (
        <div
          className='menu-item px-5'
          data-kt-menu-trigger='hover'
          data-kt-menu-placement='left-start'
          data-kt-menu-flip='bottom'
        >
          <a href='#' className='menu-link px-5'>
            <span className='menu-title'>Opportunity</span>
            <span className='menu-arrow'></span>
          </a>
          <div className='menu-sub menu-sub-dropdown py-4'>
            <div className='menu-item px-5'>
              <Link to={'/createopportunities'} className='menu-link px-5'>
                Create Opportunity
              </Link>
            </div>
            <div className='menu-item px-5'>
              <Link to={'/sponsor/my_opportunities'} className='menu-link px-5'>
                My Opportunities
              </Link>
            </div>
            <div className='menu-item px-5'>
              <Link to={'/sponsor/props_review/proposals'} className='menu-link px-5'>
                Proposals
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className='menu-item px-5 my-1'>
        <Link to='/chat/private-chat' className='menu-link px-5'>
          Messages
        </Link>
      </div>

      <div className='menu-item px-5'>
        <a onClick={logout} className='menu-link px-5'>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export {HeaderUserMenu}

{
  /* <div className='menu-item px-5'>
<a href='#' className='menu-link px-5'>
  <span className='menu-text'>My Projects</span>
  <span className='menu-badge'>
    <span className='badge badge-light-danger badge-circle fw-bolder fs-7'>3</span>
  </span>
</a>
</div>
<div
className='menu-item px-5'
data-kt-menu-trigger='hover'
data-kt-menu-placement='left-start'
data-kt-menu-flip='bottom'
>
<a href='#' className='menu-link px-5'>
  <span className='menu-title'>My Subscription</span>
  <span className='menu-arrow'></span>
</a>
<div className='menu-sub menu-sub-dropdown w-175px py-4'>
  <div className='menu-item px-3'>
    <a href='#' className='menu-link px-5'>
      Referrals
    </a>
  </div>
  <div className='menu-item px-3'>
    <a href='#' className='menu-link px-5'>
      Billing
    </a>
  </div>
  <div className='menu-item px-3'>
    <a href='#' className='menu-link px-5'>
      Payments
    </a>
  </div>
  <div className='menu-item px-3'>
    <a href='#' className='menu-link d-flex flex-stack px-5'>
      Statements
      <i
        className='fas fa-exclamation-circle ms-2 fs-7'
        data-bs-toggle='tooltip'
        title='View your statements'
      ></i>
    </a>
  </div>
  <div className='separator my-2'></div>
  <div className='menu-item px-3'>
    <div className='menu-content px-3'>
      <label className='form-check form-switch form-check-custom form-check-solid'>
        <input
          className='form-check-input w-30px h-20px'
          type='checkbox'
          value='1'
          defaultChecked={true}
          name='notifications'
        />
        <span className='form-check-label text-muted fs-7'>Notifications</span>
      </label>
    </div>
  </div>
</div>
</div>
<div className='menu-item px-5'>
<a href='#' className='menu-link px-5'>
  My Statements
</a>
</div>
<div className='separator my-2'></div>
<Languages /> */
}