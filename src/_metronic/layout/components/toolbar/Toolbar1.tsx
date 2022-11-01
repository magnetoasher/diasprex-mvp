/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {KTSVG} from '../../../helpers'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'
import {Dropdown1} from '../../../partials'
import {SendMoneyModal} from '../../../partials/modals/send-money/SendMoneyModal'

const Toolbar1: FC = () => {
  const {classes} = useLayout()
  const userType = localStorage.getItem('userType')

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
                data-bs-target='#'
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
              {/* begin::Button */}

              <a
                href='#'
                className='btn fw-bold btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#'
                id='kt_toolbar_addfund_button'
              >
                <span className='svg-icon svg-icon-2x'>
                  <KTSVG
                    path='/media/icons/duotune/finance/fin001.svg'
                    className='svg-icon-muted svg-icon-2hx'
                  />
                </span>
                Add Fund
              </a>
            </div>
            {/* end::Button */}
          </div>
        )}
        {/* end::Actions */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Toolbar1}
