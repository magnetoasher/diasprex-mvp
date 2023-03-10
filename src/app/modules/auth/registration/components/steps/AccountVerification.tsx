import React from 'react'

const AccountVerification = () => {
  var userType = localStorage.getItem('userType')
  var userTypeFull = localStorage.getItem('userTypeFull')
  var currentState = localStorage.getItem('packageDuration')
  var packagePrice = localStorage.getItem('packagePrice)')

  return (
    <>
      <div className='card card-flush pt-3 mb-5 mb-xl-10'>
        <div className='card-header'>
          <div className='card-title'>
            <h2 className='fw-bolder'>Verify Details</h2>
          </div>
        </div>

        <div className='card-body pt-3'>
          <div className='mb-10'>
            <h5 className='mb-4'>Billing Address:</h5>

            <div className='d-flex flex-wrap py-5'>
              <div className='flex-equal me-5'>
                <table className='table fs-6 fw-bold gs-0 gy-2 gx-2 m-0'>
                  <tr>
                    <td className='text-gray-400 min-w-175px w-175px'>Bill to:</td>
                    <td className='text-gray-800 min-w-200px'>
                      <a
                        href='../../demo1/dist/pages/apps/customers/view.html'
                        className='text-gray-800 text-hover-primary'
                      >
                        corp@support.com
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td className='text-gray-400'>Customer Name:</td>
                    <td className='text-gray-800'>Max Doe</td>
                  </tr>

                  <tr>
                    <td className='text-gray-400'>Address:</td>
                    <td className='text-gray-800'>
                      Floor 10, 101 Avenue of the Light Square, New York, NY, 10050.
                    </td>
                  </tr>

                  <tr>
                    <td className='text-gray-400'>Phone:</td>
                    <td className='text-gray-800'>(555) 555-1234</td>
                  </tr>
                </table>
              </div>

              <div className='flex-equal'>
                <table className='table fs-6 fw-bold gs-0 gy-2 gx-2 m-0'>
                  <tr>
                    <td className='text-gray-400 min-w-175px w-175px'>Subscribed Product:</td>
                    <td className='text-gray-800 min-w-200px'>
                      <a
                        href='#'
                        className='text-gray-800 text-hover-primary text-capitalize'
                      >{` ${userTypeFull?.replace('_', ' ')} bundle`}</a>
                    </td>
                  </tr>

                  <tr>
                    <td className='text-gray-400'>Subscription Fees:</td>
                    <td className='text-gray-800 text-capitalize'>{`$149.99 / ${currentState}`}</td>
                  </tr>

                  <tr>
                    <td className='text-gray-400'>Billing method:</td>
                    <td className='text-gray-800'>
                      {currentState == 'month' ? 'Monthly' : 'Annually'}
                    </td>
                  </tr>

                  <tr>
                    <td className='text-gray-400'>Currency:</td>
                    <td className='text-gray-800'>USD - US Dollar</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div className='mb-0'>
            <h5 className='mb-4'>Subscribed Products:</h5>

            <div className='table-responsive'>
              <table className='table align-middle table-row-dashed fs-6 gy-4 mb-0'>
                <thead>
                  <tr className='border-bottom border-gray-200 text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                    <th className='min-w-150px'>Product</th>
                    <th className='min-w-125px'>Subscription ID</th>
                    <th className='min-w-125px'>Total</th>
                  </tr>
                </thead>

                <tbody className='fw-bold text-gray-800'>
                  <tr>
                    <td>
                      <label className='w-150px text-capitalize'>{`${userType} Bundle`}</label>
                      <div className='fw-normal text-gray-600'>{` ${userTypeFull?.replace(
                        '_',
                        ' '
                      )} bundle`}</div>
                    </td>
                    <td>
                      <span className='badge badge-light-danger'>sub_4567_8765</span>
                    </td>
                    <td className='text-capitalize'>{`$149.99 / ${currentState}`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountVerification
