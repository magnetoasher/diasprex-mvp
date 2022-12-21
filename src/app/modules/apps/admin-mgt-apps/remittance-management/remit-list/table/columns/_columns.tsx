// @ts-nocheck
import {Column} from 'react-table'

import {StatusCells} from './StatusCells'

import {RemitActionsCell} from './RemitActionsCell'
import {RemitSelectionCell} from './RemitSelectionCell'
import {RemitCustomHeader} from './RemitCustomHeader'
import {RemitSelectionHeader} from './RemitSelectionHeader'
import {Remit} from '../../core/_models'

const RemitColumns: ReadonlyArray<Column<Remit>> = [
  {
    Header: (props) => <RemitSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <RemitSelectionCell id={props.data[props.row.index].id} />,
  },

  {
    Header: (props) => <RemitCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    accessor: 'id',
  },
  // Begine Country:: Column
  {
    Header: (props) => (
      <RemitCustomHeader tableProps={props} title='Enabler ID' className='min-w-125px' />
    ),
    accessor: 'enablerid',
  },
  // Begine Date Submitted:: Column
  {
    Header: (props) => (
      <RemitCustomHeader tableProps={props} title='Remit Retainer' className='min-w-125px' />
    ),
    id: 'rretainer',
    Cell: ({...props}) => <StatusCells status={props.data[props.row.index].rretainer} />,
  },

  // Begine Status:: Column
  {
    Header: (props) => (
      <RemitCustomHeader tableProps={props} title='Auto Retainer' className='min-w-125px' />
    ),
    id: 'autoretainer',
    Cell: ({...props}) => <StatusCells status={props.data[props.row.index].autoretainer} />,
  },
  {
    Header: (props) => (
      <RemitCustomHeader tableProps={props} title='Last Retainer' className='min-w-125px' />
    ),
    accessor: 'lastretainer',
  },
  {
    Header: (props) => (
      <RemitCustomHeader tableProps={props} title='RR Balance' className='min-w-125px' />
    ),
    accessor: 'retainerbalance',
  },
  {
    Header: (props) => (
      <RemitCustomHeader tableProps={props} title='Loan Balance' className='min-w-125px' />
    ),
    accessor: 'loanbalance',
  },

  {
    Header: (props) => (
      <RemitCustomHeader tableProps={props} title='Preferred MTO' className='min-w-125px' />
    ),
    accessor: 'preferredmto',
  },

  // Begine Action:: Column
  {
    Header: (props) => (
      <RemitCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <RemitActionsCell id={props.data[props.row.index].id} />,
  },
]

export {RemitColumns}
