import React, {useEffect, useState} from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {connect, ConnectedProps, useDispatch} from 'react-redux'
import {useOktaAuth} from '@okta/okta-react'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Loans} from './components/Loans/Loans'
import {Statements} from './components/Statements'
import Overview from './components/Overview'
import {Settings} from './components/settings/Settings'
import {ProfileHeader} from './ProfileHeader'

import Subscription from './Subscription'
import {ICreateAccount} from '../auth/registration/components/CreateAccountWizardHelper'
import {RootState} from '../../../setup'
import * as profile from './redux/ProfileRedux'

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

const mapState = (state: RootState) => ({profile: state.profile})
const connector = connect(mapState, profile.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const ProfilePage: React.FC<PropsFromRedux> = (props) => {
  const [profile, setProfile] = useState<ICreateAccount>()
  const {authState} = useOktaAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    if (authState !== null) {
      dispatch(props.getProfileRequest({id: authState.accessToken?.claims.uid}))
    }
  }, [])

  useEffect(() => {
    setProfile(props.profile.userProfile[0])
  }, [props.profile.userProfile])

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
              <Overview profile={profile} isLoading={props.profile.isLoading} />
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

export default connector(ProfilePage)
