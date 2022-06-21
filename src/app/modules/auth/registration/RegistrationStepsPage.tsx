import {Route, Routes, Outlet} from 'react-router-dom'
// import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {CreateAccount} from './components/CreateAccount'
// import {Horizontal} from './components/Horizontal'

// const wizardsBreadCrumbs: Array<PageLink> = [
//   {
//     title: 'Wizards',
//     path: '/crafted/pages/wizards/horizontal',
//     isSeparator: false,
//     isActive: false,
//   },
//   {
//     title: '',
//     path: '',
//     isSeparator: true,
//     isActive: false,
//   },
// ]

const RegistrationStepsPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      {/* <Route
        path='horizontal'
        element={
          <>
            <PageTitle breadcrumbs={wizardsBreadCrumbs}>Horizontal</PageTitle>
            <Horizontal />
          </>
        }
      /> */}
      <Route
        path='create'
        element={
          <>
            {/* <PageTitle breadcrumbs={wizardsBreadCrumbs}>Vertical</PageTitle> */}
            <CreateAccount />
          </>
        }
      />
      {/* <Route index element={<Navigate to='/crafted/pages/wizards/horizontal' />} /> */}
    </Route>
  </Routes>
)

export {RegistrationStepsPage}
