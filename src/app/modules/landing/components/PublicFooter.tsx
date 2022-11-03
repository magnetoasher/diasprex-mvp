import React from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

export const PublicFooter = () => {
  return (
    <div className='landing-dark-bg pt-5'>
      <div className='container'>
        <div className='d-flex flex-column flex-md-row flex-stack py-7 py-lg-10'>
          <div className='d-flex align-items-center order-2 order-md-1'>
            <span className='mx-5 fs-6 fw-semibold text-gray-600 pt-1'>
              <a href='/'>
                <img
                  alt='Logo'
                  src={toAbsoluteUrl('/media/logos/diasprexlogo-light.svg')}
                  className='h-25px h-md-30px'
                />
              </a>
            </span>

            <span className='text-muted fw-bold me-2'>{new Date().getFullYear()} &copy;</span>
            <span>
              <a href='#' className='text-gray-600 text-hover-primary'>
                Diasprex Inc.
              </a>
            </span>
          </div>

          <ul className='menu menu-gray-600 menu-hover-primary fw-semibold fs-6 fs-md-5 order-1 mb-5 mb-md-0'>
            <li className='menu-item'>
              <Link to='about' className='menu-link px-2'>
                About
              </Link>
            </li>
            <li className='menu-item mx-5'>
              <Link to='' className='menu-link px-2'>
                Team
              </Link>
            </li>
            <li className='menu-item'>
              <Link to='' className='menu-link px-2'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
