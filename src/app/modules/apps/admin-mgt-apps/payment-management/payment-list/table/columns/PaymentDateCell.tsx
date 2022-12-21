import {FC} from 'react'

type Props = {
  dt?: string
}

const PayMethodDateCell: FC<Props> = ({dt}) => (
  <div className='badge badge-light fw-bolder'>{dt}</div>
)

export {PayMethodDateCell}
