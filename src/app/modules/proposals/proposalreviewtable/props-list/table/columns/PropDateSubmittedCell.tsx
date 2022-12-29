import {FC} from 'react'

type Props = {
  date_submmitted?: string
}

const PropDateSubmittedCell: FC<Props> = ({date_submmitted}) => (
  <div className='badge badge-light fw-bolder'>{date_submmitted}</div>
)

export {PropDateSubmittedCell}
