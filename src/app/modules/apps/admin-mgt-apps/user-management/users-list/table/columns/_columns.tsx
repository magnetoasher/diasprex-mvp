// @ts-nocheck
import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserBillingCell} from './UserBillingCell'
import {UserBooleanCell} from './UserBooleanCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {UserVerificationCell} from './UserVerificationCell'
import {UserStatusCell} from './UsersStatusCell'
import {User} from '../../core/_models'
import {SubscriptionTierCell} from './subscriptionTypeCell'
import {UserTypeCell} from './UserTypeCell'

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
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='User Type' className='min-w-125px' />
    ),
    id: 'usertype',
    Cell: ({...props}) => <UserTypeCell usertype={props.data[props.row.index].usertype} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Sub.Tier' className='min-w-125px' />
    ),
    id: 'subscriptiontier',
    Cell: ({...props}) => (
      <SubscriptionTierCell subscriptiontier={props.data[props.row.index].subscriptionTier} />
    ),
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
    id: 'verified',
    Cell: ({...props}) => (
      <UserVerificationCell verification={props.data[props.row.index].verified} />
    ),
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Billing' className='min-w-125px' />
    ),
    id: 'billing',
    Cell: ({...props}) => <UserBillingCell billing={props.data[props.row.index].billing} />,
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Two-Steps' className='min-w-125px' />
    ),
    id: 'twostepauth',
    Cell: ({...props}) => <UserBooleanCell condition={props.data[props.row.index].twostepauth} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Remit-Retainer' className='min-w-125px' />
    ),
    id: 'remittanceretainer',
    Cell: ({...props}) => (
      <UserBooleanCell condition={props.data[props.row.index].remittanceretainer} />
    ),
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'datejoined',
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
