/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC, Suspense} from 'react'
import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom'
import {Security, LoginCallback} from '@okta/okta-react'
import {OktaAuth, toRelativeUrl} from '@okta/okta-auth-js'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {Faqs} from '../modules/resources/components/Faqs'
import {Dif} from '../modules/resources/components/Dif'
import {About} from '../modules/resources/components/About'
import {Remittance} from '../modules/resources/components/Remittance'
import {DiasporasPageWrapper} from '../modules/Diasporas/DiasporasPageWrapper'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import TopBarProgress from 'react-topbar-progress-indicator'
import {App} from '../App'
import config from '../../authConfig'
import {Landing} from '../modules/landing/landing'
import {PublicNavbarProvider} from '../../_metronic/layout/components/header/publicnavbarprovider'
import GeneralOpportunityCard from '../modules/opportunities/GeneralOpportunityCard'
import {ContactUs} from '../modules/resources/components/contactus'
import {OurTeam} from '../modules/landing/components/team/our-team'
import {PageLink, PageTitle} from '../../_metronic/layout/core'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Home',
    path: '/',
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
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env

const HasAccessToRouter = () => {
  const history = useNavigate()

  const customAuthHandler = () => {
    history('/auth')
  }

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history(toRelativeUrl(originalUri || '/account/create', window.location.origin))
  }

  const oktaAuth = new OktaAuth({...config})

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={customAuthHandler}
    >
      <Routes>
        <Route path='authorization-code/callback' element={<LoginCallback />} />
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />

          <Route
            path='/'
            element={
              <PublicNavbarProvider>
                <SuspensedView>
                  <Landing />
                </SuspensedView>
              </PublicNavbarProvider>
            }
          />

          <Route
            path='/ourteam'
            element={
              <PublicNavbarProvider>
                <SuspensedView>
                  <OurTeam />
                </SuspensedView>
              </PublicNavbarProvider>
            }
          />
          <Route
            path='/faqs'
            element={
              <PublicNavbarProvider>
                <SuspensedView>
                  <Faqs />
                </SuspensedView>
              </PublicNavbarProvider>
            }
          />

          <Route
            path='/dif_resources'
            element={
              <PublicNavbarProvider>
                <SuspensedView>
                  <Dif />
                </SuspensedView>
              </PublicNavbarProvider>
            }
          />
          <Route
            path='/about'
            element={
              <PublicNavbarProvider>
                <SuspensedView>
                  {/* <PageTitle breadcrumbs={profileBreadCrumbs}>About Us</PageTitle> */}
                  <About />
                </SuspensedView>
              </PublicNavbarProvider>
            }
          />

          <Route
            path='/remittance_resources'
            element={
              <PublicNavbarProvider>
                <SuspensedView>
                  <Remittance />
                </SuspensedView>
              </PublicNavbarProvider>
            }
          />

          <Route
            path='/diasporas'
            element={
              <PublicNavbarProvider>
                <SuspensedView>
                  <DiasporasPageWrapper />
                </SuspensedView>
              </PublicNavbarProvider>
            }
          />

          <Route
            path='/contactus'
            element={
              <PublicNavbarProvider>
                <SuspensedView>
                  <ContactUs />
                </SuspensedView>
              </PublicNavbarProvider>
            }
          />

          <Route path='/*' element={<PrivateRoutes />} />
        </Route>
      </Routes>
    </Security>
  )
}

const OktaAppRoutes: FC = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <HasAccessToRouter />
  </BrowserRouter>
)

const SuspensedView: FC = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {OktaAppRoutes as AppRoutes}
