import {SendMoneyForm} from './SendMoneyForm'
import {SendMoneyModal} from '../../../../_metronic/partials/modals/send-money/SendMoneyModal'
import {KTSVG} from '../../../../_metronic/helpers'
import {ListsWidget5} from '../../../../_metronic/partials/widgets'

export const SendMoneyFormWrapper = () => {
  return (
    <div className='card-container shadow-sm px-10 py-5 mt-6 mw-600px' style={{margin: 'auto'}}>
      <div className='card-header'>
        <h3 className='card-title'>Money Transfer</h3>
        <div className='text-muted fw-bold fs-5'>
          You are sending money through a third party MTO partner
        </div>
      </div>

      <div className='card-body'>
        <div className='d-flex mw-100'>
          <ListsWidget5 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className='me-1 d-flex justify-content-center'>
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
        <SendMoneyModal />
      </div>
      <div className='d-flex flex-row'>
        <div className='card-footer'>
          Money transfer transactions are processed by Diasprex third party partners
        </div>
      </div>
    </div>
  )
}
