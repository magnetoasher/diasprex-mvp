/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../../_metronic/helpers'
import {
  ChartsWidget1,
  TablesWidget1,
  ListsWidget5,
  TablesWidget5,
} from '../../../../_metronic/partials/widgets'
import {useSearchParams} from 'react-router-dom'
import {profileDetailsInitValues} from './settings/SettingsModel'
import {connect, ConnectedProps, useDispatch} from 'react-redux'
import {User} from '../../apps/user-management-ignore/users-list/core/_models'
import {ListLoading} from '../../apps/admin-mgt-apps/core/loading/ListLoading'

function Overview({profile, isLoading}: any) {
  const [searchParams, setSearchParams] = useSearchParams()
  let userTypeFull = localStorage.getItem('userTypeFull')

  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profile Details</h3>
          </div>
          <div className='d-flex justify-content-end align-items-center'>
            <Link to='/profile/settings' className='btn btn-primary'>
              Edit Profile
            </Link>
          </div>
        </div>

        <div className='card-body p-9'>
          {isLoading ? (
            <ListLoading />
          ) : (
            <>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Full Name</label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>
                    {`${profile?.fName} ${profile?.mInitial}${profile?.mInitial && '.'} ${
                      profile?.lName
                    }`}
                  </span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Email
                  <i
                    className='fas fa-exclamation-circle ms-1 fs-7'
                    data-bs-toggle='tooltip'
                    title='Email must be active'
                  ></i>
                </label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>{profile?.email}</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Contact Phone
                  <i
                    className='fas fa-exclamation-circle ms-1 fs-7'
                    data-bs-toggle='tooltip'
                    title='Phone number must be active'
                  ></i>
                </label>

                <div className='col-lg-8 d-flex align-items-center'>
                  <span className='fw-bolder fs-6 me-2'>{profile?.mobilephone}</span>

                  <span className='badge badge-success'>Verified</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Company</label>

                <div className='col-lg-8 fv-row'>
                  <span className='fw-bold fs-6'>{profile?.orgName}</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Company Site</label>

                <div className='col-lg-8'>
                  <a href='#' className='fw-bolder fs-6 text-dark'>
                    {profile?.orgType}
                  </a>
                </div>
              </div>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Address</label>

                <div className='col-lg-8'>
                  <a href='#' className='fw-bolder fs-6 text-dark'>
                    {profile?.orgAddress}
                  </a>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Country
                  <i
                    className='fas fa-exclamation-circle ms-1 fs-7'
                    data-bs-toggle='tooltip'
                    title='Country of origination'
                  ></i>
                </label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>{profile?.countryRes}</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Communication</label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>
                    {profile?.email && 'Email'}
                    {profile?.phonenumber && 'Phone'}
                  </span>
                </div>
              </div>

              {/* <div className='row mb-10'>
                <label className='col-lg-4 fw-bold text-muted'>Address</label>

                <div className='col-lg-8'>
                  <span className='fw-bold fs-6'>Yes</span>
                </div>
              </div> */}

              {/* <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
                <KTSVG
                  path='icons/duotune/general/gen044.svg'
                  className='svg-icon-2tx svg-icon-warning me-4'
                />
                <div className='d-flex flex-stack flex-grow-1'>
                  <div className='fw-bold'>
                    <h4 className='text-gray-800 fw-bolder'>We need your attention!</h4>
                    <div className='fs-6 text-gray-600'>
                      Your payment was declined. To start using tools, please
                      <Link className='fw-bolder' to='/crafted/profile/settings'>
                        {' '}
                        Add Payment Method
                      </Link>
                      .
                    </div>
                  </div>
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>

      {/* <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ChartsWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div> */}
    </>
  )
}

export default Overview
