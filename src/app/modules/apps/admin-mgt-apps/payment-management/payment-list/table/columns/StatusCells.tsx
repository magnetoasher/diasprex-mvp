import {FC} from 'react'

type Props = {
  status?: boolean
}

const StatusCells: FC<Props> = ({status}) =>
  status ? (
    <div className='badge badge-light fw-bolder'> Enabled </div>
  ) : (
    <div className='badge badge-light fw-bolder'> Enabled </div>
  )

export {StatusCells}
