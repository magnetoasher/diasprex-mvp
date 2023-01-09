import {FC} from 'react'
import moment from 'moment'
type Props = {
  date_submmitted?: string
}

const PropDateSubmittedCell: FC<Props> = ({date_submmitted}) => (
  <div className='badge badge-light fw-bolder'>
    {moment(date_submmitted).format('MMMM Do YYYY, h:mm:ss a')}
  </div>
)

export {PropDateSubmittedCell}
