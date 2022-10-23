import {FC} from 'react'

type Props = {
  admin_screening?: boolean
}

const PropAdminScreenCell: FC<Props> = ({admin_screening}) => (
  <> {admin_screening && <div className='badge badge-light-success fw-bolder'>YES</div>}</>
)

export {PropAdminScreenCell}
