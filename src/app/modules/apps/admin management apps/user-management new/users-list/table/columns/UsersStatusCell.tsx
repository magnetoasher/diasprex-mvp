import {FC} from 'react'

type Props = {
  active: 'Active'| 'Suspended' | 'Pending'
}

const UserStatusCell: FC<Props> = ({active}) => (
  <> {active && <div className='badge badge-light-success fw-bolder'>Active</div>}</>
)

export {UserStatusCell}