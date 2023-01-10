import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {useOktaAuth} from '@okta/okta-react'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {AdminDashboardWrapper} from '../modules/apps/admin-mgt-apps/dashboard/AdminDashboardWrapper'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {SigninPage} from '../modules/signin/components/SigninPage'
import {RegistrationStepsPage} from '../modules/auth/registration/RegistrationStepsPage'
import {AuthPage} from '../modules/auth'
import {ReferralsForm} from '../modules/profile/components/ReferralsForm'
import CreateOpportunities from '../modules/opportunities/CreateOpportunities'
import Proposals from '../modules/proposals/components/Proposals'
import MyOpportunity from '../modules/opportunities/MyOpportunity'
import GeneralOpportunityCard from '../modules/opportunities/GeneralOpportunityCard'
import SponsorProposals from '../modules/proposals/components/SponsorProposals'
import SendProposals from '../modules/proposals/components/SendProposals'
import ViewOpportunity from '../modules/opportunities/ViewOpportunity'
import AdminSettings from '../modules/apps/admin-mgt-apps/settings/AdminSettingsPage'
// import DiasporasMgtPage from '../modules/apps/admin-mgt-apps/diasporas-management/DiasporasPage'
// import RemitMgtPage from '../modules/apps/admin-mgt-apps/remittance-management/RemitPage'
// import TransMgtPage from '../modules/apps/admin-mgt-apps/transactions-management/TransPage'
import {
  PayMethodMgtPage,
  TransMgtPage,
  RemitMgtPage,
  DiasporasMgtPage,
  OppsMgtPage,
  ProposalMgtPage,
  UsersMgtPage,
} from '../modules/apps/admin-mgt-apps/admin-tables'
import {SponsorPropsRevPage} from '../modules/proposals/proposalreviewtable/ProposalReviewPage'

const PrivateRoutes = () => {
  const RemittancePage = lazy(() => import('./../modules/Remittance/RemittancePage'))
  // const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  // const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  // const RegistrationStepsPage = lazy(() => import('../modules/registration/RegistrationStepsPage'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  // const UsersPage = lazy(() => import('../modules/apps/admin-mgt-apps/user-management/UsersPage'))
  // const OppsPage = lazy(() => import('../modules/apps/admin-mgt-apps/opp-management/OppsPage'))
  // const ProposalPage = lazy(
  //   () => import('../modules/apps/admin-mgt-apps/proposal-management/ProposalPage')
  // )

  // const RemitPage = lazy(() => import('../modules/apps/admin-mgt-apps/remittance-management/RemitPage'))
  const {authState} = useOktaAuth()

  if (authState !== null) {
    if (authState.isAuthenticated) {
      console.log('****AUTH STATE OBJECT****:', authState)
      return (
        <Routes>
          <Route path='account/*' element={<RegistrationStepsPage />} />
          <Route element={<MasterLayout />}>
            {/* Redirect to Dashboard after success login/registartion */}
            <Route path='auth/*' element={<Navigate to='/account/create' />} />
            {/* Pages */}
            <Route path='dashboard' element={<DashboardWrapper />} />
            <Route path='admindashboard' element={<AdminDashboardWrapper />} />
            {/* <Route path='builder' element={<BuilderPageWrapper />} /> */}
            <Route path='createopportunities' element={<CreateOpportunities />} />
            <Route path='proposals' element={<Proposals />} />
            {/* <Route path='sponsor_proposals' element={<SponsorProposals />} /> */}
            <Route path='sponsor/props_review/*' element={<SponsorPropsRevPage />} />
            <Route path='my_opportunities' element={<MyOpportunity />} />
            <Route path='opportunities_center' element={<GeneralOpportunityCard />} />
            <Route path='opportunities_center/:id/send_proposals' element={<SendProposals />} />
            <Route path='referrals' element={<ReferralsForm />} />
            <Route path='opportunities_center/:id' element={<ViewOpportunity />} />
            <Route path='table/users_management/*' element={<UsersMgtPage />} />
            <Route path='table/opps_management/*' element={<OppsMgtPage />} />
            <Route path='table/props_management/*' element={<ProposalMgtPage />} />
            <Route path='table/diaspora_management/*' element={<DiasporasMgtPage />} />
            <Route path='admin/*' element={<AdminSettings />} />
            <Route path='table/rr_management/*' element={<RemitMgtPage />} />
            <Route path='table/trans_management/*' element={<TransMgtPage />} />
            <Route path='table/paymethod_management/*' element={<PayMethodMgtPage />} />

            {/* <Route path='chat' element={<ChatPage />}/> */}

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
              path='profile/*'
              element={
                <SuspensedView>
                  <ProfilePage />
                </SuspensedView>
              }
            />

            <Route
              path='remittance/*'
              element={
                <SuspensedView>
                  <RemittancePage />
                </SuspensedView>
              }
            />
            <Route
              path='chat/*'
              element={
                <SuspensedView>
                  <ChatPage />
                </SuspensedView>
              }
            />
            {/* <Route

              path='/user-management/*'
              element={
                <SuspensedView>
                  <UsersPage />
                </SuspensedView>
              }
            /> */}
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

const SuspensedView: FC = ({children}) => {
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

export {PrivateRoutes}
