import {FC} from 'react'

type Props = {
  status: 'Published' | 'New' | 'Declined'
}

const DiasporaStatusCell: FC<Props> = ({status}) => {
  const badgeColor = status === 'New' ? 'info' : status === 'Published' ? 'success' : 'danger'
  return (
    <> {status && <div className={`badge badge-light-${badgeColor} fw-bolder`}>{status}</div>}</>
  )
}

export {DiasporaStatusCell}
