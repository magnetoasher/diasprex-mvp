import {FC} from 'react'

type Props = {
  billing: {
    packagePrice: string
    packageDuration: string
  }
}

const UserBillingCell: FC<Props> = ({billing}) => {
  return (
    <>
      {billing ? (
        <div className='badge badge-light text-capitalize fw-bolder'>
          {`$${billing.packagePrice}/${billing.packageDuration === 'annual' ? 'Year' : 'Month'}`}
        </div>
      ) : (
        <div className='badge badge-light text-capitalize fw-bolder'>NA</div>
      )}
    </>
  )
}

export {UserBillingCell}
