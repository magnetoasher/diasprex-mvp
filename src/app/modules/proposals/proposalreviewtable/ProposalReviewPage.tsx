import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {PropsListWrapper} from './props-list/PropsList'

const proposalsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Sponsor Proposal Review',
    path: '/sponsor/props_review/proposals',
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

export const SponsorPropsRevPage = () => {
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
      <Route index element={<Navigate to='/sponsor/props_review/proposals' />} />
    </Routes>
  )
}

// export default ProposalMgtPage
