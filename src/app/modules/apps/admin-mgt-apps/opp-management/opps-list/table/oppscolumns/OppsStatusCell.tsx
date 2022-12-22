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
      : status === 'not accepted'
      ? 'danger'
      : status === 'accepted'
      ? 'primary'
      : 'warning'
  return (
    <div className={`badge badge-light-${badgeColor} text-capitalize fw-bolder`}> {status}</div>
  )
}
export {OppsStatusCell}
