import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {PropsListWrapper} from './props-list/PropsList'

const proposalsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Admin Proposal Management',
    path: '/table/props_management/proposals',
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

export const ProposalMgtPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='proposals'
          element={
            <>
              <PageTitle breadcrumbs={proposalsBreadcrumbs}>Proposals list</PageTitle>
              <PropsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/table/props_management/proposals' />} />
    </Routes>
  )
}

// export default ProposalMgtPage
