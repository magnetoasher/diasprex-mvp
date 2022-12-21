import {FC} from 'react'

type Props = {
  tier: string
}

const UserTierCell: FC<Props> = ({tier}) => (
  <> {tier && <div className='badge badge-light-success fw-bolder'>{tier}</div>}</>
)

export {UserTierCell}