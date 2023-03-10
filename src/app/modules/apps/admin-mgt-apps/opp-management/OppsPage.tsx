import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {OppsListWrapper} from './opps-list/OppsList'
// import {UsersListWrapper} from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Admin Opportunity Management',
    path: '/table/opps_management/opportunities',
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

export const OppsMgtPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='opportunities'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Opportunities list</PageTitle>
              <OppsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/table/opps_management/opportunities' />} />
    </Routes>
  )
}

// export default OppsMgtPage
