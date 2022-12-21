import {FC} from 'react'

type Props = {
  verification?: boolean
}

const UserVerificationCell: FC<Props> = ({ verification }) => (
  <> {verification && <div className='badge badge-light-success fw-bolder'>Verified</div>}</>

)

export {UserVerificationCell}
