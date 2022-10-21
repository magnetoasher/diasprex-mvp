import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import { OppsListWrapper } from './opps-list/OppsList'
// import {UsersListWrapper} from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Opportunity Management',
    path: '/apps/opp-management/opps',
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

const OppsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='opps'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Opportunities list</PageTitle>
              <OppsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/opp-management/opps' />} />
    </Routes>
  )
}

export default OppsPage
