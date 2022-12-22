import {FC} from 'react'
import Moment from 'moment'
type Props = {
  value: string
}

const OppsDateCell: FC<Props> = ({value}) => (
  <div className='badge badge-light fw-bolder'>
    {' '}
    {Moment(value).format('MMMM Do YYYY, h:mm:ss a')}
  </div>
)

export {OppsDateCell}
