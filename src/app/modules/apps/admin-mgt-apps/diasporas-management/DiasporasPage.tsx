import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {DiasporasListWrapper} from './diasporas-list/DiasporasList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Admin Diasporas Management',
    path: '/table/diaspora_management/diasporas',
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

export const DiasporasMgtPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='diasporas'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Diasporas List</PageTitle>
              <DiasporasListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/table/diaspora_management/diasporas' />} />
    </Routes>
  )
}

// export default DiasporasMgtPage
