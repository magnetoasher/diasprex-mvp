import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {PropsListWrapper} from './props-list/PropsList'

const proposalsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Proposal Management',
    path: '/apps/proposal-management/proposals',
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

const ProposalPage = () => {
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
      <Route index element={<Navigate to='/apps/proposal-management/proposals' />} />
    </Routes>
  )
}

export default ProposalPage
