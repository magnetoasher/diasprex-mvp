// @ts-nocheck
import {Column} from 'react-table'
import {DiasporaInfoCell} from './DiasporaInfoCell'
import {DiasporaEducCell} from './DiasporaEducCell'
import {DiasporaActionsCell} from './DiasporaActionsCell'
import {DiasporaSelectionCell} from './DiasporaSelectionCell'
import {DiasporaCustomHeader} from './DiasporaCustomHeader'
import {DiasporaSelectionHeader} from './DiasporaSelectionHeader'
import {DiasporaStatusCell} from './DiasporaStatusCell'
import {DiasporaDateCell} from './DiasporaDateCell'
import {uadFormModel} from '../../../../../../Diasporas/components/core/_model'

const diasporasColumns: ReadonlyArray<Column<uadFormModel>> = [
  {
    Header: (props) => <DiasporaSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <DiasporaSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => (
      <DiasporaCustomHeader tableProps={props} title='Info' className='min-w-125px' />
    ),
    id: 'info',
    Cell: ({...props}) => <DiasporaInfoCell diaspora={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <DiasporaCustomHeader tableProps={props} title='Residence' className='min-w-125px' />
    ),
    accessor: 'countryRes',
  },
  {
    Header: (props) => (
      <DiasporaCustomHeader tableProps={props} title='Origin' className='min-w-125px' />
    ),
    accessor: 'countryOrig',
  },
  {
    Header: (props) => (
      <DiasporaCustomHeader tableProps={props} title='Profession' className='min-w-125px' />
    ),
    accessor: 'profession',
  },
  {
    Header: (props) => (
      <DiasporaCustomHeader tableProps={props} title='Undergrad' className='min-w-125px' />
    ),
    id: 'undergrad',
    Cell: ({...props}) => <DiasporaEducCell educ={props.data[props.row.index].undergrad} />,
  },
  {
    Header: (props) => (
      <DiasporaCustomHeader tableProps={props} title='Graduate' className='min-w-125px' />
    ),
    id: 'grad',
    Cell: ({...props}) => <DiasporaEducCell educ={props.data[props.row.index].grad} />,
  },
  {
    Header: (props) => (
      <DiasporaCustomHeader tableProps={props} title='Submitted' className='min-w-125px' />
    ),
    id: 'dateSubmitted',
    Cell: ({...props}) => <DiasporaDateCell value={props.data[props.row.index].dateSubmitted} />,
  },

  {
    Header: (props) => (
      <DiasporaCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    id: 'status',
    Cell: ({...props}) => <DiasporaStatusCell status={props.data[props.row.index].status} />,
  },

  {
    Header: (props) => (
      <DiasporaCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <DiasporaActionsCell id={props.data[props.row.index].id} />,
  },
]

export {diasporasColumns}
