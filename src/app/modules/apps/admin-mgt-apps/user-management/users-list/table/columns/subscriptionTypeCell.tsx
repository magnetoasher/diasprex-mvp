import {FC} from 'react'

type Props = {
  subscriptiontier: string
}

const SubscriptionTierCell: FC<Props> = ({subscriptiontier}) => (
  <>
    {' '}
    {subscriptiontier && (
      <div className='badge badge-light text-capitalize fw-bolder'>{subscriptiontier}</div>
    )}
  </>
)

export {SubscriptionTierCell}
