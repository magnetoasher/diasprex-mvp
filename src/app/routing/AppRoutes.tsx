/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC, Suspense} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {Faqs} from '../modules/resources/components/Faqs'
import {Dif} from '../modules/resources/components/Dif'
import {About} from '../modules/resources/components/About'
import {Remittance} from '../modules/resources/components/Remittance'
import {SigninPage} from '../modules/signin/components/SigninPage'
import {Logout, AuthPage} from '../modules/auth'
import {RootState} from '../../setup'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import TopBarProgress from 'react-topbar-progress-indicator'
import {App} from '../App'

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
  const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          <Route
            path='faqs'
            element={
              <SuspensedView>
                <Faqs />
              </SuspensedView>
            }
          />
          <Route
            path='dif-resources'
            element={
              <SuspensedView>
                <Dif />
              </SuspensedView>
            }
          />
          <Route
            path='about'
            element={
              <SuspensedView>
                <About />
              </SuspensedView>
            }
          />
          <Route
            path='remittance'
            element={
              <SuspensedView>
                <Remittance />
              </SuspensedView>
            }
          />

          {isAuthorized ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />
            </>
          ) : (
            <>
              <Route path='login' element={<SigninPage />} />
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

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

export {AppRoutes}
