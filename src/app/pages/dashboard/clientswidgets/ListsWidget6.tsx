/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import {ListWidgetTimeLine} from './core/ListWidgetTimeLine'
import {IRemittanceTransModel} from '../../../modules/Remittance/Components/Preferences/PreferencesModel'
import {KTSVG} from '../../../../_metronic/helpers'
import {Dropdown1} from '../../../../_metronic/partials/content/dropdown/Dropdown1'
import {transactionExists} from '@okta/okta-auth-js'

type Props = {
  title: string
  className: string
  trans: IRemittanceTransModel[]
}

const ListsWidget6: React.FC<Props> = (props: Props) => {
  return (
    <div className={` card bg-light ${props.className} mx-0`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bolder mb-2 text-dark'>{props.title}</span>
          <span className='text-muted fw-bold fs-7'>The last eight (8) transactions</span>
        </h3>
      </div>
      <div className='card-body d-flex pt-5 '>
        {/* begin::Timeline */}
        <div className='timeline-label'>
          {props.trans.map((t) => (
            <ListWidgetTimeLine
              tDate={t.transDate}
              tType={t.transdescr}
              tAmount={t.transAmount}
              markercolor={
                t.transType === 'withdraw'
                  ? 'warning'
                  : t.transType === 'addfund'
                  ? 'success'
                  : t.transType === 'retainer'
                  ? 'primary'
                  : 'gray-600'
              }
            />
          ))}
          {/* end::Item */}
        </div>
        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export {ListsWidget6}
