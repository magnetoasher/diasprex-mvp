/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {User} from '../../core/_models'
import {ICreateAccount} from '../../../../../../auth/registration/components/CreateAccountWizardHelper'

type Props = {
  user: ICreateAccount
}

const UserInfoCell: FC<Props> = ({user}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {user.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${user.avatar}`)} alt={user.fName} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${
                user.status === 'new'
                  ? 'info'
                  : user.status === 'active'
                  ? 'success'
                  : user.status === 'pending'
                  ? 'primary'
                  : user.status === 'suspended'
                  ? 'warning'
                  : 'danger'
              }`,
              `text-${
                user.status === 'new'
                  ? 'info'
                  : user.status === 'active'
                  ? 'success'
                  : user.status === 'pending'
                  ? 'primary'
                  : user.status === 'suspended'
                  ? 'warning'
                  : 'danger'
              }`
            )}
          >
            {`${user.fName?.slice(0, 1)}${user.lName?.slice(0, 1)}`}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {`${user?.fName} ${user?.mInitial}${user?.mInitial && '.'} ${user.lName}`}
      </a>
      <span>{user.email}</span>
    </div>
  </div>
)

export {UserInfoCell}
