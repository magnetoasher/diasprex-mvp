import React, {FC} from 'react'
import {KTSVG} from '../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'

const Step5: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark'>You Are Done!</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please
          <Link to='/faqs' className='link-primary fw-bolder'>
            {' '}
            click here
          </Link>
          .
        </div>
      </div>

      <div className='mb-0'>
        <div className='fs-6 text-gray-600 mb-5'>
          All details and information have been collected. Welcome to Diasprex.com
        </div>

        <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
          <KTSVG
            path='/media/icons/duotune/general/gen044.svg'
            className='svg-icon-2tx svg-icon-warning me-4'
          />
          <div className='d-flex flex-stack flex-grow-1'>
            <div className='fw-bold'>
              <h4 className='text-gray-800 fw-bolder'>Attention!</h4>
              <div className='fs-6 text-gray-600'>
                Clicking submit will save your create an account and save your account info
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step5}
