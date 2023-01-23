import {FC} from 'react'

type Props = {
  subscriptionTier: string
}

const SubscriptionTierCell: FC<Props> = ({subscriptionTier}) => (
  <>
    {' '}
    {subscriptionTier && (
      <div className='badge badge-light text-capitalize fw-bolder'>{subscriptionTier}</div>
    )}
  </>
)

export {SubscriptionTierCell}
