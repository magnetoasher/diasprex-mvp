// @ts-nocheck
import {Column} from 'react-table'

import {StatusCells} from './StatusCells'

import {PayMethodActionsCell} from './PaymentActionsCell'
import {PayMethodSelectionCell} from './PaymentSelectionCell'
import {PayMethodCustomHeader} from './PaymentCustomHeader'
import {PayMethodSelectionHeader} from './PaymentSelectionHeader'
import {PayMethodDateCell} from './PaymentDateCell'
import {PayMethod} from '../../core/_models'

const PayMethodColumns: ReadonlyArray<Column<Trans>> = [
  {
    Header: (props) => <PayMethodSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <PayMethodSelectionCell id={props.data[props.row.index].id} />,
  },

  {
    Header: (props) => (
      <PayMethodCustomHeader tableProps={props} title='ID' className='min-w-125px' />
    ),
    accessor: 'id',
  },
  // Begine Country:: Column
  {
    Header: (props) => (
      <PayMethodCustomHeader tableProps={props} title='User ID' className='min-w-125px' />
    ),
    accessor: 'userid',
  },

  {
    Header: (props) => (
      <PayMethodCustomHeader tableProps={props} title='Name on Card' className='min-w-125px' />
    ),
    accessor: 'nameoncard',
  },
  {
    Header: (props) => (
      <PayMethodCustomHeader tableProps={props} title='Exp Month' className='min-w-125px' />
    ),
    accessor: 'cardexpirymonth',
  },
  {
    Header: (props) => (
      <PayMethodCustomHeader tableProps={props} title='Exp Year' className='min-w-125px' />
    ),
    accessor: 'cardexpiryyear',
  },
  {
    Header: (props) => (
      <PayMethodCustomHeader tableProps={props} title='Card CVV' className='min-w-125px' />
    ),
    accessor: 'cardcvv',
  },
  {
    Header: (props) => (
      <PayMethodCustomHeader tableProps={props} title='Save Card' className='min-w-125px' />
    ),
    id: 'savecard',
    Cell: ({...props}) => <StatusCells status={props.data[props.row.index].savecard} />,
  },
  {
    Header: (props) => (
      <PayMethodCustomHeader tableProps={props} title='Checking Acc' className='min-w-125px' />
    ),
    accessor: 'accountnumber',
  },

  {
    Header: (props) => (
      <PayMethodCustomHeader tableProps={props} title='Routing' className='min-w-125px' />
    ),
    accessor: 'routingnumber',
  },
  {
    Header: (props) => (
      <PayMethodCustomHeader tableProps={props} title='Parimary' className='min-w-125px' />
    ),
    accessor: 'primarymethod',
  },

  // Begine Action:: Column
  {
    Header: (props) => (
      <PayMethodCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <PayMethodActionsCell id={props.data[props.row.index].id} />,
  },
]

export {PayMethodColumns}
