// @ts-nocheck
import {Column} from 'react-table'

import {StatusCells} from './StatusCells'

import {TransActionsCell} from './TransActionsCell'
import {TransSelectionCell} from './TransSelectionCell'
import {TransCustomHeader} from './TransCustomHeader'
import {TransSelectionHeader} from './TransSelectionHeader'
import {TransDateCell} from './TransDateCell'
import {Trans} from '../../core/_models'

const TransColumns: ReadonlyArray<Column<Trans>> = [
  {
    Header: (props) => <TransSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <TransSelectionCell id={props.data[props.row.index].id} />,
  },

  {
    Header: (props) => <TransCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  // Begine Country:: Column
  {
    Header: (props) => (
      <TransCustomHeader tableProps={props} title='User ID' className='min-w-125px' />
    ),
    accessor: 'userid',
  },

  {
    Header: (props) => (
      <TransCustomHeader tableProps={props} title='Trans Party' className='min-w-125px' />
    ),
    accessor: 'party',
  },
  {
    Header: (props) => (
      <TransCustomHeader tableProps={props} title='Date' className='min-w-125px' />
    ),
    id: 'transdate',
    Cell: ({...props}) => <TransDateCell dt={props.data[props.row.index].date} />,
  },
  {
    Header: (props) => (
      <TransCustomHeader tableProps={props} title='Time' className='min-w-125px' />
    ),
    id: 'transtime',
    Cell: ({...props}) => <TransDateCell dt={props.data[props.row.index].date} />,
  },
  {
    Header: (props) => (
      <TransCustomHeader tableProps={props} title='Type' className='min-w-125px' />
    ),
    accessor: 'type',
  },

  {
    Header: (props) => (
      <TransCustomHeader tableProps={props} title='Amount' className='min-w-125px' />
    ),
    accessor: 'amount',
  },
  {
    Header: (props) => (
      <TransCustomHeader tableProps={props} title='Currency' className='min-w-125px' />
    ),
    accessor: 'currency',
  },

  {
    Header: (props) => (
      <TransCustomHeader tableProps={props} title='Country' className='min-w-125px' />
    ),
    accessor: 'country',
  },

  {
    Header: (props) => (
      <TransCustomHeader tableProps={props} title='State' className='min-w-125px' />
    ),
    accessor: 'state',
  },

  {
    Header: (props) => (
      <TransCustomHeader tableProps={props} title='DPX Terms' className='min-w-125px' />
    ),
    accessor: 'terms',
  },

  // Begine Action:: Column
  {
    Header: (props) => (
      <TransCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <TransActionsCell id={props.data[props.row.index].id} />,
  },
]

export {TransColumns}
