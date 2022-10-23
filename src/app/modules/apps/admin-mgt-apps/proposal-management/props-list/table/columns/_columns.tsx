// @ts-nocheck
import {Column} from 'react-table'
import { PropInfoCell } from './PropInfoCell'
import {PropStatusCell} from './PropStatusCell'
import {PropDateSubmittedCell} from './PropDateSubmittedCell'
import {PropAdminScreenCell} from './PropAdminScreenCell'
import {PropActionsCell} from './PropActionsCell'
import {PropSelectionCell} from './PropSelectionCell'
import {PropCustomHeader} from './PropCustomHeader'
import {PropSelectionHeader} from './PropSelectionHeader'
import {Proposal} from '../../core/_models'

const proposalsColumns: ReadonlyArray<Column<Proposal>> = [
  {
    Header: (props) => <PropSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <PropSelectionCell id={props.data[props.row.index].id} />,
  },
     // Begine Info:: Column
  {
    Header: (props) => <PropCustomHeader tableProps={props} title='Info' className='min-w-125px' />,
    id: 'info',
    Cell: ({...props}) => <PropInfoCell proposal={props.data[props.row.index]} />,
  },
     // Begine Title:: Column
  {
    Header: (props) => <PropCustomHeader tableProps={props} title='Title' className='min-w-125px' />,
    accessor: 'title',
  },
     // Begine Country:: Column
    {
    Header: (props) => <PropCustomHeader tableProps={props} title='Country' className='min-w-125px' />,
    accessor: 'country',
  },
     // Begine Date Submitted:: Column
  {
    Header: (props) => (
      <PropCustomHeader tableProps={props} title='Date_Sumitted' className='min-w-125px' />
    ),
    id: 'date_submitted',
    Cell: ({...props}) => <PropDateSubmittedCell date_submitted={props.data[props.row.index].last_login} />,
  },
     // Begine Admin Screening:: Column
  {
    Header: (props) => (
      <PropCustomHeader tableProps={props} title='Admin Screening' className='min-w-125px' />
    ),
    id: 'admin_screening',
    Cell: ({...props}) => <PropAdminScreenCell admin_screening={props.data[props.row.index].admin_screening} />,
  },

   // Begine Status:: Column
  {
    Header: (props) => (
      <PropCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    id: 'status',
    Cell: ({...props}) => <PropStatusCell status={props.data[props.row.index].status} />,
  },

     // Begine Action:: Column
  {
    Header: (props) => (
      <PropCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <PropActionsCell id={props.data[props.row.index].id} />,
  },
]

export {proposalsColumns}
