// @ts-nocheck
import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import { UserSelectionHeader } from './UserSelectionHeader'
import { UserVerificationCell } from './UserVerificationCell'
import { UserStatusCell } from './UsersStatusCell'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='User Tier' className='min-w-125px' />
    ),
    id: 'tier',
    Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].tier} />,
  },
     {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    id: 'status',
    Cell: ({...props}) => <UserStatusCell status={props.data[props.row.index].status} />,
  },
       {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Verification' className='min-w-125px' />
    ),
    id: 'verification',
    Cell: ({...props}) => <UserVerificationCell status={props.data[props.row.index].verification} />,
  },
     {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='billing' className='min-w-125px' />
    ),
    id: 'billing',
    Cell: ({...props}) => <UserTwoStepsCell status={props.data[props.row.index].billing} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Two-Steps' className='min-w-125px' />
    ),
    id: 'two_steps',
    Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
