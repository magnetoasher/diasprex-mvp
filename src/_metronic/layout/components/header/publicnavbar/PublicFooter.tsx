import React from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../helpers'

export const PublicFooter = () => {
  return (
    <div className='footer' id='kt_public_footer'>
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
                <a href='/' className='text-gray-600 text-hover-primary'>
                  Diasprex Inc.
                </a>
              </span>
            </div>

            <ul className='menu menu-gray-600 menu-hover-primary fw-semibold fs-6 fs-md-5 order-1 mb-5 mb-md-0'>
              <li className='menu-item'>
                <Link to='/about' className='menu-link px-2'>
                  About
                </Link>
              </li>
              <li className='menu-item mx-5'>
                <Link to='/ourteam' className='menu-link px-2'>
                  Team
                </Link>
              </li>
              <li className='menu-item'>
                <Link to='/contactus' className='menu-link px-2'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id='kt_scrolltop' className='scrolltop' data-kt-scrolltop='true'>
        <span className='svg-icon'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              opacity='0.5'
              x='13'
              y='6'
              width='13'
              height='2'
              rx='1'
              transform='rotate(90 13 6)'
              fill='currentColor'
            />
            <path
              d='M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z'
              fill='currentColor'
            />
          </svg>
        </span>
      </div>
    </div>
  )
}
