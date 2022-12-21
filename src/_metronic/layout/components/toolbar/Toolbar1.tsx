/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC, useState} from 'react'
import {KTSVG} from '../../../helpers'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'

const Toolbar1: FC = () => {
  const {classes} = useLayout()
  const userType = localStorage.getItem('userType')
  const [showAddFundModal, setAddFundAppModal] = useState<boolean>(false)

  return (
    <div className='toolbar' id='kt_toolbar'>
      {/* begin::Container */}
      <div
        id='kt_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
      >
        <DefaultTitle />

        {/* begin::Actions */}
        {userType !== 'sponsor' && (
          <div className='d-flex align-items-center py-1'>
            {/* begin::Wrapper */}
            <div className='me-1'>
              {/* begin::Button */}
              <a
                href='#'
                className='btn fw-bold btn-light'
                data-bs-toggle='modal'
                data-bs-target='#kt_send_money_modal'
                id='kt_toolbar_sendmoney_button'
              >
                <span className='svg-icon svg-icon-2x'>
                  <KTSVG
                    path='/media/icons/duotune/general/gen016.svg'
                    className='svg-icon-5 svg-icon-gray-500 me-1'
                  />
                </span>
                Send Money
              </a>
              {/* end::Button */}
            </div>
            {/* end::Wrapper */}

            <div className='me-1'>
              <a
                href='#'
                className='btn fw-bold btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_add_fund'
                id='kt_toolbar_addfund_button'
              >
                <span className='svg-icon svg-icon-2x'>
                  <KTSVG
                    path='/media/icons/duotune/finance/fin001.svg'
                    className='svg-icon-muted svg-icon-5'
                  />
                </span>
                Add Fund
              </a>
            </div>
          </div>
        )}
        {/* end::Actions */}
      </div>
      {/* <SendMoneyModal /> */}
      {/* end::Container */}
    </div>
  )
}

export {Toolbar1}
