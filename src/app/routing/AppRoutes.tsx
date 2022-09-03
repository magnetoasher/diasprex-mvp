/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC, Suspense } from 'react'
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import { Security, LoginCallback } from "@okta/okta-react"
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js"
import { PrivateRoutes } from './PrivateRoutes'
import { ErrorsPage } from '../modules/errors/ErrorsPage'
import { Faqs } from '../modules/resources/components/Faqs'
import { Dif } from '../modules/resources/components/Dif'
import { About } from '../modules/resources/components/About'
import { Remittance } from '../modules/resources/components/Remittance'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import TopBarProgress from 'react-topbar-progress-indicator'
import { App } from '../App'
import config from "../../authConfig"

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env

const HasAccessToRouter = () => {
  const history = useNavigate();

  const customAuthHandler = () => {
    history("/auth");
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history(toRelativeUrl(originalUri || "/account/create", window.location.origin));
  };

  const oktaAuth = new OktaAuth({ ...config });

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
      <Routes>
        <Route path="authorization-code/callback" element={<LoginCallback />} />
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
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
          <Route
            path='create-opportunities'
            element={
              <SuspensedView>
                test
              </SuspensedView>
            }
          />

          <Route path='/*' element={<PrivateRoutes />} />
        </Route>
      </Routes>
    </Security>
  );
};

const OktaAppRoutes: FC = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <HasAccessToRouter />
  </BrowserRouter>
);

const SuspensedView: FC = ({ children }) => {
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

export { OktaAppRoutes as AppRoutes }
