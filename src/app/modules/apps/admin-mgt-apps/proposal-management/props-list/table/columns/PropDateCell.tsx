import {FC} from 'react'
import moment from 'moment'
type Props = {
  date_prop?: string
}

const PropsDateCell: FC<Props> = ({date_prop}) => (
  <div className='badge badge-light fw-bolder'>{moment(date_prop).format('DD MMM YYYY')}</div>
)

export {PropsDateCell}
