import {FC} from 'react'

type Props = {
  status?: string
}

const PropStatusCell: FC<Props> = ({status}) => {
  const badgeColor =
    status === 'new'
      ? 'info'
      : status === 'selected'
      ? 'success'
      : status === 'declined'
      ? 'danger'
      : status === 'pending'
      ? 'primary'
      : status === 'completed'
      ? 'success'
      : status === 'active'
      ? 'primary'
      : 'warning'
  return (
    <div className={`badge badge-light-${badgeColor} text-capitalize fw-bolder`}> {status}</div>
  )
}
export {PropStatusCell}
