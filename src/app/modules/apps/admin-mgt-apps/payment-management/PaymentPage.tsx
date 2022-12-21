import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {PaymentListWrapper} from './payment-list/PaymentList'

const PaymentBreadcrumbs: Array<PageLink> = [
  {
    title: 'Admin Payment Methods Management',
    path: '/table/paymethod_management/paymethods',
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
export const PayMethodMgtPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='paymethods'
          element={
            <>
              <PageTitle breadcrumbs={PaymentBreadcrumbs}>Transactions list</PageTitle>
              <PaymentListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/table/paymethod_management/paymethods' />} />
    </Routes>
  )
}

// export default PayMethodMgtPage
