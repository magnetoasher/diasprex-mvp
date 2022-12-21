import React from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

export const Connect = () => {
  return (
    <>
      <div className='mb-18'>
        <div className='landing-curve landing-dark-color'>
          <svg viewBox='15 -1 1470 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z'
              fill='currentColor'
            ></path>
          </svg>
        </div>
        <div className='landing-dark-bg '>
          <div className='container'>
            <div className='row py-5 py-lg-10'>
              <div className='col-lg-6 pe-lg-16 mb-5 mb-lg-0'>
                <form action='' className='form mb-15' method='post' id='kt_contact_form'>
                  <h1 className='fw-bold text-white mb-9' id='mailinglist'>
                    Join Our Mailing List{' '}
                  </h1>

                  <div className='row mb-5'>
                    <div className='fv-row'>
                      <label className='fs-5 text-white fw-semibold mb-2'>First Name</label>

                      <input
                        type='text'
                        className='form-control form-control-solid'
                        placeholder=''
                        name='name'
                      />
                    </div>
                    <div className='fv-row'>
                      <label className='fs-5 text-white fw-semibold mb-2'>First Name</label>

                      <input
                        type='text'
                        className='form-control form-control-solid'
                        placeholder=''
                        name='name'
                      />
                    </div>

                    <div className='fv-row'>
                      <label className='fs-5 required text-white fw-semibold mb-2'>Email</label>

                      <input
                        type='text'
                        className='form-control form-control-solid'
                        placeholder=''
                        name='email'
                      />
                    </div>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button type='submit' className='btn btn-primary' id='kt_contact_submit_button'>
                      <span className='indicator-label'>Submit</span>

                      <span className='indicator-progress'>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              <div className='col-lg-6 ps-lg-16'>
                <div className='d-flex justify-content-center'>
                  <div className='d-flex fw-semibold flex-column me-20'>
                    <h4 className='fw-bold text-white mb-6'>More for Diasprex</h4>

                    <Link to='faqs' className='text-white opacity-50 text-hover-primary fs-5 mb-6'>
                      FAQ
                    </Link>

                    {/* <Link
                      href='#'
                      className='text-white opacity-50 text-hover-primary fs-5 mb-6'
                    >
                      Documentaions
                    </Link> */}

                    <Link to='#' className='text-white opacity-50 text-hover-primary fs-5 mb-6'>
                      Video Tutorials
                    </Link>

                    <Link to='#' className='text-white opacity-50 text-hover-primary fs-5 mb-6'>
                      Support
                    </Link>

                    <Link to='diasporas' className='text-white opacity-50 text-hover-primary fs-5'>
                      Diasporas
                    </Link>
                  </div>

                  <div className='d-flex fw-semibold flex-column ms-lg-20'>
                    <h4 className='fw-bold text-white mb-6'>Stay Connected</h4>

                    <Link to='#' className='mb-6'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/linkedin-2.svg')}
                        className='h-20px me-2'
                        alt=''
                      />
                      <span className='text-white opacity-50 text-hover-primary fs-5 mb-6'>
                        LinkedIn
                      </span>
                    </Link>

                    <Link to='#' className='mb-6'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
                        className='h-20px me-2'
                        alt=''
                      />
                      <span className='text-white opacity-50 text-hover-primary fs-5 mb-6'>
                        Facebook
                      </span>
                    </Link>

                    {/* <a href='https://github.com/KeenthemesHub' className='mb-6'>
                      <img
                        src='assets/media/svg/brand-logos/github.svg'
                        className='h-20px me-2'
                        alt=''
                      />
                      <span className='text-white opacity-50 text-hover-primary fs-5 mb-6'>
                        Github
                      </span>
                    </a> */}

                    <Link to='#' className='mb-6'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/twitter.svg')}
                        className='h-20px me-2'
                        alt=''
                      />
                      <span className='text-white opacity-50 text-hover-primary fs-5 mb-6'>
                        Twitter
                      </span>
                    </Link>

                    {/* <a href='https://dribbble.com/keenthemes' className='mb-6'>
                      <img
                        src='assets/media/svg/brand-logos/dribbble-icon-1.svg'
                        className='h-20px me-2'
                        alt=''
                      />
                      <span className='text-white opacity-50 text-hover-primary fs-5 mb-6'>
                        Dribbble
                      </span>
                    </a> */}

                    <Link to='#' className='mb-6'>
                      <img
                        src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                        className='h-20px me-2'
                        alt='Instagram'
                      />
                      <span className='text-white opacity-50 text-hover-primary fs-5 mb-6'>
                        Instagram
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='landing-dark-separator'></div>

        {/* <div className='engage-toolbar d-flex position-fixed px-5 fw-bold zindex-2 top-50 end-0 transform-90 mt-5 mt-lg-20 gap-2'>
        <button
          id='kt_engage_demos_toggle'
          className='engage-demos-toggle engage-btn btn shadow-sm fs-6 px-4 rounded-top-0'
          title='Check out 24 more demos'
          data-bs-toggle='tooltip'
          data-bs-placement='left'
          data-bs-dismiss='click'
          data-bs-trigger='hover'
        >
          <span id='kt_engage_demos_label'>FAQs</span>
        </button>

        <button
          id='kt_help_toggle'
          className='engage-help-toggle btn engage-btn shadow-sm px-5 rounded-top-0'
          title='Learn & Get Inspired'
          data-bs-toggle='tooltip'
          data-bs-placement='left'
          data-bs-dismiss='click'
          data-bs-trigger='hover'
        >
          Help
        </button>
      </div> */}

        {/* <div id='kt_scrolltop' className='scrolltop' data-kt-scrolltop='true'>
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
      </div> */}
      </div>
    </>
  )
}
