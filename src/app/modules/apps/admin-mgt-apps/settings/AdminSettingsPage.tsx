import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {AdminSettingsPage} from './components/Settings'

const settingsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Admin Settings',
    path: '/admin/settings',
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

const AdminSettings = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='settings'
          element={
            <>
              <PageTitle breadcrumbs={settingsBreadcrumbs}>Opportunities list</PageTitle>
              <AdminSettingsPage />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/admin/settings' />} />
    </Routes>
  )
}

export default AdminSettings
