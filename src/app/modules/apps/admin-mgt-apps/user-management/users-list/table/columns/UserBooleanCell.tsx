import {FC} from 'react'

type Props = {
  condition?: boolean
}

const UserBooleanCell: FC<Props> = ({condition}) => (
  <>
    {' '}
    {condition ? (
      <div className='badge badge-light-info fw-bolder'>Enabled</div>
    ) : (
      <div className='badge badge-light fw-bolder'>Disabled</div>
    )}
  </>
)

export {UserBooleanCell}
