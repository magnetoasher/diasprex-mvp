import {FC} from 'react'

type Props = {
  status: 'active' | 'suspend' | 'pending' | 'new'
}

const UserStatusCell: FC<Props> = ({status}) => {
  const badgeColor =
    status === 'new'
      ? 'info'
      : status === 'pending'
      ? 'primary'
      : status === 'active'
      ? 'success'
      : status === 'suspend'
      ? 'warning'
      : 'danger'

  return (
    <>
      {' '}
      {status && (
        <div className={`badge badge-light-${badgeColor} text-capitalize fw-bolder`}>{status}</div>
      )}
    </>
  )
}

export {UserStatusCell}
