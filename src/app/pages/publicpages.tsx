import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PublicNavbarProvider} from '../../_metronic/layout/components/header/publicnavbarprovider'
import {Landing} from '../modules/landing/landing'
import {DiasporasPageWrapper} from '../modules/Diasporas/DiasporasPageWrapper'
import {Remittance} from '../modules/resources'

const PublicPages: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <PublicNavbarProvider />
            <Outlet />
          </>
        }
      >
        <Route path='/home' element={<Landing />} />

        <Route path='/remittance' element={<Remittance />} />
        <Route path='/diasporas' element={<DiasporasPageWrapper />} />

        <Route index element={<Navigate to='/home' />} />
      </Route>
    </Routes>
  )
}

export default PublicPages
