import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {ProfileHeader} from '../profile/ProfileHeader'
import {SendMoneyFormWrapper} from './Components/SendMoneyFormWrapper'
import {Summary} from './Components/Summary'
import {RemittanceRetainer} from './Components/remittanceretainer'
import {Preferences} from './Components/Preferences/Preferences'

const remittanceBreadCrumbs: Array<PageLink> = [
  {
    title: 'Remittance',
    path: 'remittance/summary',
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

const RemittancePage = () => (
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
        path='summary'
        element={
          <>
            <PageTitle breadcrumbs={remittanceBreadCrumbs}>Overview</PageTitle>
            <Summary />
          </>
        }
      />
      <Route
        path='sendmoney'
        element={
          <>
            <PageTitle breadcrumbs={remittanceBreadCrumbs}>Send Money</PageTitle>
            <SendMoneyFormWrapper />
          </>
        }
      />
      <Route
        path='preferences'
        element={
          <>
            <PageTitle breadcrumbs={remittanceBreadCrumbs}>Preferences</PageTitle>
            <Preferences />
          </>
        }
      />
      <Route
        path='retainer'
        element={
          <>
            <PageTitle breadcrumbs={remittanceBreadCrumbs}>Remittance Retainer</PageTitle>
            <RemittanceRetainer />
          </>
        }
      />

      {/* <Route
        path='projects'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Projects</PageTitle>
            <Projects />
          </>
        }
      />
      <Route
        path='campaigns'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
            <Campaigns />
          </>
        }
      />
      <Route
        path='documents'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle>
            <Documents />
          </>
        }
      />
      <Route
        path='connections'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
            <Connections />
          </>
        }
      /> */}
      <Route index element={<Navigate to='remittance/summary' />} />
    </Route>
  </Routes>
)
export default RemittancePage
