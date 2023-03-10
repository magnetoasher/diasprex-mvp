import {useContext, useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {AsideDefault} from './components/aside/AsideDefault'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {Toolbar} from './components/toolbar/Toolbar'
// import {RightToolbar} from '../partials/layout/RightToolbar'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {PageDataProvider} from './core'
import {useLocation} from 'react-router-dom'
import {
  DrawerMessenger,
  ActivityDrawer,
  Main,
  InviteUsers,
  UpgradePlan,
  ThemeModeProvider,
} from '../partials'
import {MenuComponent} from '../assets/ts/components'
import {SendMoneyModal} from '../partials/modals/send-money/SendMoneyModal'
import {RightToolbar} from '../partials/layout/RightToolbar'
import {ConfirmModal} from '../partials/modals/confirm-action/ConfirmAction'
import {AddFund} from '../partials/modals/add-fund/addfund'
import {UpgradePlanHorizontal} from '../partials/modals/upgrade-plan/UpgradePlanHorizontal'

const MasterLayout = () => {
  const sendMoney = () => {
    console.log('ConfirmRemitValues')
  }
  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      <ThemeModeProvider>
        <div className='d-flex flex-column flex-root app-root' id='kt_app_root'>
          <div className='page d-flex flex-row flex-column-fluid' id='kt_app_root'>
            <AsideDefault />
            <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
              <HeaderWrapper />

              <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
                <Toolbar />
                <div className='post d-flex flex-column-fluid' id='kt_post'>
                  <Content>
                    <Outlet />
                  </Content>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>

        {/* begin:: Drawers */}
        <ActivityDrawer />
        {/* <RightToolbar /> */}
        <DrawerMessenger />
        {/* end:: Drawers */}

        {/* begin:: Modals */}
        <SendMoneyModal />
        <ConfirmModal
          id='kt_proceed_modal'
          title1='Money Transfer'
          title2='Are you sure you want to send money'
          confirm='Send'
          classname='btn btn-primary'
          ConfirmHandler={async () => await sendMoney()}
        />

        {/* <Main /> */}
        <AddFund />
        <InviteUsers />
        <UpgradePlanHorizontal />

        {/* end:: Modals */}
        <ScrollTop />
      </ThemeModeProvider>
    </PageDataProvider>
  )
}

export {MasterLayout}
