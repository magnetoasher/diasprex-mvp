import {FC} from 'react'

type Props = {
  date_prop?: string
}

const OppsDateCell: FC<Props> = ({date_prop}) => (
  <div className='badge badge-light fw-bolder'>{date_prop}</div>
)

export {OppsDateCell}
