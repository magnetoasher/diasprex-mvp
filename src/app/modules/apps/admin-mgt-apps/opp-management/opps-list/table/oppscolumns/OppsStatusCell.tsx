import clsx from 'clsx'
import {FC} from 'react'

type Props = {
  status?: string
}

const OppsStatusCell: FC<Props> = ({status}) => {
  const badgeColor =
    status === 'new'
      ? 'info'
      : status === 'published'
      ? 'success'
      : status === 'accepted'
      ? 'primary'
      : status === 'draft'
      ? 'warning'
      : status === 'not accepted'
      ? 'danger'
      : status === 'pending'
      ? 'gray-600'
      : status === 'completed'
      ? 'gray-800'
      : status === 'active'
      ? 'primary'
      : 'warning'
  return (
    <div className={`badge badge-light-${badgeColor} text-capitalize fw-bolder`}> {status}</div>
  )
}
export {OppsStatusCell}
