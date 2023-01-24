import {Route, Routes, Outlet} from 'react-router-dom'
import {PublicNavBar} from '../../../../_metronic/layout/components/header/publicnavbar/PublicNavBar'
import {PublicNavbarProvider} from '../../../../_metronic/layout/components/header/publicnavbar/publicnavbarprovider'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'

// import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {CreateAccount} from './components/CreateAccount'
// import {Horizontal} from './components/Horizontal'

const wizardsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Create Account',
    path: '/create/',
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

const RegistrationStepsPage = () => (
  <Routes>
    <Route
      element={
        // <PublicNavbarProvider>
        <Outlet />
        // </PublicNavbarProvider>
      }
    >
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
