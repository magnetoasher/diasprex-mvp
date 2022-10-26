/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {PageTitle} from '../../../../../_metronic/layout/core'
import {ProfileHeader} from '../../../profile/ProfileHeader'
import {
  ListsWidget3,
  TablesWidget5,
  TablesWidget12,
  MixedWidget2,
  MixedWidget9,
} from './components/widgets'

const AdminDashboardPage: FC = () => (
  <>
    <div className='row g-5 g-xl-12 mb-5 mb-xl-10'>
      <ProfileHeader />
    </div>
    {/* begin::Row */}
    <div className='row g-5 g-xl-12 mb-5 mb-xl-10'>
      {/* begin::Col */}
      <div className='col-xl-4'>
        <MixedWidget9
          className='card-xl-stretch mb-xl-6'
          chartColor='primary'
          chartHeight='200px'
        />
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xl-4'>
        <MixedWidget2
          className='card-xl-stretch mb-xl-6'
          chartColor='danger'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      {/* <div className='col-xxl-6'>
        <TablesWidget13 className='mb-5 mb-xl-0' />
      </div> */}
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gx-5 gx-xl-10'>
      {/* begin::Col */}
      <div className='col-xxl-6 mb-5 mb-xl-10'>
        <TablesWidget5
          className='card-xxl-stretch mb-5 mb-xxl-8'
          title='New Oppotunities'
          subtitle='More than 50 in the last month'
        />
      </div>
      {/* end::Col */}
      <div className='col-xxl-6 mb-5 mb-xl-10'>
        <TablesWidget5
          className='card-xxl-stretch mb-5 mb-xxl-8'
          title='New Show of Interests'
          subtitle='More than 100 in the last month'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12'>
        <TablesWidget12 className='mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const AdminDashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.ADMIN.DASHBOARD'})}</PageTitle>
      <AdminDashboardPage />
    </>
  )
}

export {AdminDashboardWrapper}
