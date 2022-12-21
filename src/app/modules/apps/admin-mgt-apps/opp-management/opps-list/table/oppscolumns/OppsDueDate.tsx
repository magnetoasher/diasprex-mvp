import {FC} from 'react'

type Props = {
  duedate?: string
}

const OppsDateCell: FC<Props> = ({duedate}) => (
  <div className='badge badge-light fw-bolder'>{duedate}</div>
)

export {OppsDateCell}
