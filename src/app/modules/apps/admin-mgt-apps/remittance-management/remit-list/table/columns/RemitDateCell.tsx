import {FC} from 'react'

type Props = {
  date_prop?: string
}

const RemitDateCell: FC<Props> = ({date_prop}) => (
  <div className='badge badge-light fw-bolder'>{date_prop}</div>
)

export {RemitDateCell}
