/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck comment

import 'react-best-tabs/dist/index.css'

const Subscription = (props: any) => {
  const userType = localStorage.getItem('userType')
  const userTypeFull = localStorage.getItem('userTypeFull')
  const packagePrice = localStorage.getItem('packagePrice')
  const packageDuration = localStorage.getItem('packageDuration')
  const userBadgeColor =
    userType === 'sponsor' ? 'primary' : userType === 'admin' ? 'info' : 'success'

  return (
    <div className='d-flex  flex-column'>
      <div className='me-3 mb-3 fs-2 px-10 text-dark text-uppercase'>
        Subscription:
        <br />
        {userTypeFull === 'basic_enabler' && (
          <span className={`badge badge-light-${userBadgeColor} text-capitalized fs-4 p-3`}>
            {`${userTypeFull.replace('_', ' ')}: Free`}
          </span>
        )}
        {userTypeFull !== 'basic_enabler' && (
          <span className={`badge badge-light-${userBadgeColor} text-capitalized fs-4 p-3`}>
            {`${userTypeFull.replace('_', ' ')}: ${packagePrice}/${packageDuration}`}
          </span>
        )}
      </div>
      <button
        data-bs-toggle='modal'
        data-bs-target='#upgrade_plan'
        type='button'
        className='btn btn-primary mb-5'
        style={{
          width: 'fit-content',
          alignSelf: 'end',
        }}
      >
        Change Plan
      </button>
      <div className='separator mb-15'></div>
    </div>
  )
}

export default Subscription
