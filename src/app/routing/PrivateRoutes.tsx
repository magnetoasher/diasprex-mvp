import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useOktaAuth } from "@okta/okta-react"
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { SigninPage } from '../modules/signin/components/SigninPage'
import { RegistrationStepsPage } from '../modules/auth/registration/RegistrationStepsPage'
import { AuthPage } from '../modules/auth'
import CreateOpportunities from '../pages/dashboard/CreateOpportunities'
import Proposals from '../pages/dashboard/Proposals'
import MyOpportunity from '../pages/dashboard/MyOpportunity'
import GeneralOpportunityCard from '../pages/dashboard/GeneralOpportunityCard'

const PrivateRoutes = () => {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  // const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  // const RegistrationStepsPage = lazy(() => import('../modules/registration/RegistrationStepsPage'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const { authState } = useOktaAuth()

  if (authState !== null) {
    if (authState.isAuthenticated) {
      return (
        <Routes>
          <Route path='account/*' element={<RegistrationStepsPage />} />
          <Route element={<MasterLayout />}>
            {/* Redirect to Dashboard after success login/registartion */}
            <Route path='auth/*' element={<Navigate to='/account/create' />} />
            {/* Pages */}
            <Route path='dashboard' element={<DashboardWrapper />} />
            <Route path='builder' element={<BuilderPageWrapper />} />
            <Route path='menu-test' element={<MenuTestPage />} />
            <Route path='createopportunities' element={<CreateOpportunities />} />
            <Route path='proposals' element={<Proposals />} />
            <Route path='my_opportunities' element={<MyOpportunity />} />
            <Route path='opportunities' element={<GeneralOpportunityCard />} />

            {/* Lazy Modules */}
            {/* <Route
              path='crafted/pages/profile/*'
              element={
                <SuspensedView>
                  <ProfilePage />
                </SuspensedView>
              }
            /> */}
            {/* <Route
              path='account/*'
              element={
                <SuspensedView>
                  <RegistrationStepsPage />
                </SuspensedView>
              }
            /> */}
            <Route
              path='crafted/widgets/*'
              element={
                <SuspensedView>
                  <WidgetsPage />
                </SuspensedView>
              }
            />
            <Route
              path='crafted/profile/*'
              element={
                <SuspensedView>
                  <ProfilePage />
                </SuspensedView>
              }
            />
            <Route
              path='apps/chat/*'
              element={
                <SuspensedView>
                  <ChatPage />
                </SuspensedView>
              }
            />
            <Route

              path='apps/user-management/*'
              element={
                <SuspensedView>
                  <UsersPage />
                </SuspensedView>
              }
            />
            {/* Page Not Found */}
            <Route path='*' element={<Navigate to='/error/404' />} />
          </Route>
          <Route index element={<Navigate to='/account/create' />} />
        </Routes>
      )
    } else {
      return (
        <Routes>
          <Route path='login' element={<SigninPage />} />
          <Route path='auth/*' element={<AuthPage />} />
          <Route path='*' element={<Navigate to='/auth' />} />
        </Routes>
      )
    }
  } else {
    return null
  }
}

const SuspensedView: FC = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
