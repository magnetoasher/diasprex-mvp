import {FC} from 'react'

type Props = {
  status?: string
}

const PropStatusCell: FC<Props> = ({status}) => (
  <div className='badge badge-light fw-bolder'>{status}</div>
)

export {PropStatusCell}
