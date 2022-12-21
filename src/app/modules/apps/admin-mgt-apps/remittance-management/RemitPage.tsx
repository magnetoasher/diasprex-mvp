import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {RemitListWrapper} from './remit-list/RemitList'

const RemitBreadcrumbs: Array<PageLink> = [
  {
    title: 'Admin Remittance Management',
    path: '/table/rr_management/remittances',
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

export const RemitMgtPage = () => {
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
      <Route index element={<Navigate to='/table/rr_management/remittances' />} />
    </Routes>
  )
}

// export default RemitMgtPage
