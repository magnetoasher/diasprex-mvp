// @ts-nocheck
import {Column} from 'react-table'
import {OppsYesNoCell} from './OppsYesNoCell'
import {OppsDateCell} from './OppsDateCell'
import {OppsStatusCell} from './OppsStatusCell'
import {OppsActionsCell} from './OppsActionsCell'
import {OppsSelectionCell} from './OppsSelectionCell'
import {OppsCustomHeader} from './OppsCustomHeader'
import {OppsSelectionHeader} from './OppsSelectionHeader'
import {OppsSponsorCell} from './OppsSponsorCell'
import {OppsInfoCell} from './OppsInfoCell'
import {OppAttachmentCell} from './PropAttachmentCell'
import {Opps} from '../../core/_models'

const OppsColumns: ReadonlyArray<Column<Opps>> = [
  // Begin ID:: Column
  {
    Header: (props) => <OppsSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <OppsSelectionCell id={props.data[props.row.index].id} />,
  },

  // Begin Thumbnai-Country :: Column
  {
    Header: (props) => <OppsCustomHeader tableProps={props} title='Info' className='min-w-125px' />,
    id: 'info',
    Cell: ({...props}) => <OppsInfoCell opp={props.data[props.row.index]} />,
  },

  // Begin Title:: Column
  {
    Header: (props) => (
      <OppsCustomHeader tableProps={props} title='Title' className='min-w-125px' />
    ),
    accessor: 'title',
  },

  {
    Header: (props) => (
      <OppsCustomHeader tableProps={props} title='Category' className='min-w-125px' />
    ),
    accessor: 'category',
  },

  // Begine Open:: Column
  {
    Header: (props) => <OppsCustomHeader tableProps={props} title='Open' className='min-w-125px' />,
    id: 'open',
    Cell: ({...props}) => <OppsYesNoCell yes={props.data[props.row.index].open} />,
  },

  // Begine Sponsor:: Column
  {
    Header: (props) => (
      <OppsCustomHeader tableProps={props} title='Sponsor' className='min-w-125px' />
    ),
    id: 'sponsor',
    Cell: ({...props}) => <OppsSponsorCell opp={props.data[props.row.index]} />,
  },

  // Begine Date Submitted:: Column
  {
    Header: (props) => (
      <OppsCustomHeader tableProps={props} title='Date Submitted' className='min-w-125px' />
    ),
    id: 'datesubmitted',
    Cell: ({...props}) => <OppsDateCell value={props.data[props.row.index].datesubmitted} />,
  },

  // Begine Due Date:: Column
  {
    Header: (props) => (
      <OppsCustomHeader tableProps={props} title='Due Date' className='min-w-125px' />
    ),
    id: 'duedate',
    Cell: ({...props}) => <OppsDateCell value={props.data[props.row.index].duedate} />,
  },

  // Begine Status:: Column
  {
    Header: (props) => (
      <OppsCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    id: 'status',
    Cell: ({...props}) => <OppsStatusCell status={props.data[props.row.index].status} />,
  },

  // Begine Featured:: Column
  {
    Header: (props) => (
      <OppsCustomHeader tableProps={props} title='Featured' className='min-w-125px' />
    ),
    id: 'featuredopp',
    Cell: ({...props}) => <OppsYesNoCell yes={props.data[props.row.index].featuredopp} />,
  },
  // Begine Attachment:: Column
  {
    Header: (props) => (
      <OppsCustomHeader tableProps={props} title='Attachment' className='min-w-125px' />
    ),
    id: 'attachment',
    Cell: ({...props}) => <OppAttachmentCell attachment={props.data[props.row.index].attachment} />,
  },

  // Begine Actions:: Column
  {
    Header: (props) => (
      <OppsCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <OppsActionsCell id={props.data[props.row.index].id} />,
  },
]

export {OppsColumns}
