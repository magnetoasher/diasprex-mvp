import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {RemitListWrapper} from './props-list/RemitList'

const RemitBreadcrumbs: Array<PageLink> = [
  {
    title: 'Admin Remittance Management',
    path: '/rr_management/remittances',
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

const RemitPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='remittances'
          element={
            <>
              <PageTitle breadcrumbs={RemitBreadcrumbs}>Remittances list</PageTitle>
              <RemitListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/rr_management/remittances' />} />
    </Routes>
  )
}

export default RemitPage
