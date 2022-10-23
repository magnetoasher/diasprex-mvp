import {FC} from 'react'

type Props = {
  status: 'Active'| 'Suspended' | 'Pending'
}

const UserStatusCell: FC<Props> = ({status}) => (
  <> {status && <div className='badge badge-light-success fw-bolder'>{status}</div>}</>
)

export {UserStatusCell}