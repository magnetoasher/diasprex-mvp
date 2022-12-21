import {FC} from 'react'

type Props = {
  condition?: boolean
}

const UserBooleanCell: FC<Props> = ({condition}) => (
  <> {condition && <div className='badge badge-light-success fw-bolder'>Enabled</div>}</>
)

export {UserBooleanCell}
