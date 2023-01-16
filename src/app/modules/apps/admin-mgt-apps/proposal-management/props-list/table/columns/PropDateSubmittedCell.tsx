import {FC} from 'react'
import moment from 'moment'
type Props = {
  date_submitted?: string
}

const PropDateSubmittedCell: FC<Props> = ({date_submitted}) => (
  <div className='badge badge-light fw-bolder'>
    {moment(date_submitted).format('MMMM Do YYYY, h:mm:ss a')}
  </div>
)

export {PropDateSubmittedCell}
