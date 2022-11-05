/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {SigninPage} from '../../modules/signin/components/SigninPage'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PublicNavbarProvider} from '../../../_metronic/layout/components/header/publicnavbarprovider'

const AuthLayout = () => {
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])

  return (
    <div
      className='d-flex flex-column flex-column-fluid bgi-position-y-center position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
      style={{
        backgroundImage: `url(${toAbsoluteUrl(
          '/media/illustrations/sketchy-1/signup-banner.jpg'
        )})`,
      }}
    >
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
        {/* begin::Logo */}
        <a href='#' className='mb-12'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/logos/diasprex-logo.png')}
            className='h-45px'
          />
        </a>
        {/* end::Logo */}
        {/* begin::Wrapper */}

        <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
          <Outlet />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* <img
        src={toAbsoluteUrl('/media/illustrations/sketchy-1/signup-banner.jpg')}
        className='mw-100'
      /> */}

      {/* end::Content */}
      {/* begin::Footer */}

      {/* end::Footer */}
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route
      index
      element={
        <PublicNavbarProvider>
          <SigninPage />
        </PublicNavbarProvider>
      }
    />
    <Route
      element={
        <PublicNavbarProvider>
          <AuthLayout />
        </PublicNavbarProvider>
      }
    >
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      {/* <Route path='login' element={<Login />} /> */}

      {/* <Route index element={<Login />} /> */}
    </Route>
  </Routes>
)

export {AuthPage}
