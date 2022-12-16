import {FC} from 'react'
import Moment from 'moment'

type Props = {
  value: string
}

const DiasporaDateCell: FC<Props> = ({value}) => {
  Moment.locale('en')
  // const date = value?.slice(0, 10)
  // const dt = new Date(value)

  return (
    <div className='badge badge-light fw-bolder'>
      {Moment(value).format('MMMM Do YYYY, h:mm:ss a')}
    </div>
  )
}

export {DiasporaDateCell}
