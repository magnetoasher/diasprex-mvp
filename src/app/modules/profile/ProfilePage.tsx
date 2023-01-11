import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Loans} from './components/Loans/Loans'
import {Statements} from './components/Statements'
import {Overview} from './components/Overview'
import {Settings} from './components/settings/Settings'
import {ProfileHeader} from './ProfileHeader'

import Subscription from './Subscription'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/profile/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ProfilePage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <ProfileHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
              <Overview />
            </>
          }
        />
        {/* <Route
          path='campaigns'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
              <Campaigns />
            </>
          }
        /> */}
        <Route
          path='subscription'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Subscription</PageTitle>
              <Subscription />
            </>
          }
        />
        <Route
          path='settings'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Settings</PageTitle>
              <Settings />
            </>
          }
        />
        <Route
          path='loans'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Loans</PageTitle>
              <Loans />
            </>
          }
        />
        <Route
          path='statements'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Statements</PageTitle>
              <Statements />
            </>
          }
        />
        {/* <Route
          path='account'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Account</PageTitle>
              <Account />
            </>
          }
        /> */}

        <Route index element={<Navigate to='/profile/overview' />} />
      </Route>
    </Routes>
  )
}

export default ProfilePage
