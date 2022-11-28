import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {TransListWrapper} from './trans-list/TransList'

const TransBreadcrumbs: Array<PageLink> = [
  {
    title: 'Admin Transactions Management',
    path: '/table/trans_management/transactions',
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

export const TransMgtPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='transactions'
          element={
            <>
              <PageTitle breadcrumbs={TransBreadcrumbs}>Transactions list</PageTitle>
              <TransListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/table/trans_management/transactions' />} />
    </Routes>
  )
}

// export default TransMgtPage
