import {FC} from 'react'

type Props = {
  billing: 'Monthly'| 'Annual'
}

const UserBillingCell: FC<Props> = ({billing}) => (
  <> {billing && <div className='badge badge-light-success fw-bolder'>{billing}</div>}</>
)

export {UserBillingCell}