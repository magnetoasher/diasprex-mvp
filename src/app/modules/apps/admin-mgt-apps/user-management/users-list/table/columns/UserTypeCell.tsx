import {FC} from 'react'

type Props = {
  usertype?: 'enabler' | 'sponsor' | 'admin'
}

const UserTypeCell: FC<Props> = ({usertype}) => {
  const badgeColor =
    usertype === 'enabler'
      ? 'success'
      : usertype === 'sponsor'
      ? 'primary'
      : usertype === 'admin'
      ? 'info'
      : ''
  return (
    <>
      {' '}
      {usertype && (
        <div
          className={`bg-light-${badgeColor} text-capitalize text-center text-${badgeColor} fw-bolder`}
        >
          {usertype}
        </div>
      )}
    </>
  )
}

export {UserTypeCell}
