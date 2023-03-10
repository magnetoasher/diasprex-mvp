/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {useLayout} from '../core'

const Footer: FC = () => {
  const {classes} = useLayout()
  return (
    <div className='footer py-4 d-flex flex-lg-column' id='kt_footer'>
      {/* begin::Container */}
      <div
        className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        {/* begin::Copyright */}
        <div className='text-gray-600 order-2 order-md-1'>
          <span className='text-muted fw-bold me-2'>{new Date().getFullYear()} &copy;</span>
          <Link to='/' className='text-gray-800 text-hover-primary'>
            Diasprex Inc.
          </Link>
        </div>
        {/* end::Copyright */}

        {/* begin::Nav */}
        <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1'>
          <li className='menu-item'>
            <Link to='/about' className='menu-link ps-0 pe-2'>
              About
            </Link>
          </li>
          <li className='menu-item'>
            <Link to='/ourteam' className='menu-link pe-0 pe-2'>
              Team
            </Link>
          </li>
          <li className='menu-item'>
            <Link to='/contactus' className='menu-link pe-0'>
              Contact Us
            </Link>
          </li>
        </ul>
        {/* end::Nav */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Footer}
