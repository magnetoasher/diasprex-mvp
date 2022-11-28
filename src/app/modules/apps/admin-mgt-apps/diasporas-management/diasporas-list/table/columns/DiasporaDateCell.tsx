import {FC} from 'react'
import Moment from 'moment'

type Props = {
  value: string
}

const DiasporaDateCell: FC<Props> = ({value}) => {
  Moment.locale('en')
  // const date = value?.slice(0, 10)
  const dt = new Date(value)

  return <div className='badge badge-light fw-bolder'>{Moment(dt).format('d MMM YYYY')}</div>
}

export {DiasporaDateCell}
