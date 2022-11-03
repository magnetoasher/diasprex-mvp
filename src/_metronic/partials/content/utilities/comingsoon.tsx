import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'

const ComingSoon: FC = () => {
  return (
    <div className='d-flex flex-column flex-root' id='kt_app_root'>
      <style>
        body {{backgroundImage: `url(${toAbsoluteUrl('/media/auth/bg9.jpg')})`}} [data-theme="dark"]
        body {{backgroundImage: `url(${toAbsoluteUrl('/media/auth/bg9.jpg')})`}}
      </style>

      <div className='d-flex flex-column flex-center flex-column-fluid'>
        <div className='d-flex flex-column flex-center text-center p-10'>
          <div className='card card-flush w-lg-650px py-5'>
            <div className='card-body py-15 py-lg-20'>
              <div className='mb-13'>
                <a href='../../demo1/dist/index.html' className=''>
                  <img alt='Logo' src='assets/media/logos/custom-2.svg' className='h-40px' />
                </a>
              </div>
              <h1 className='fw-bolder text-gray-900 mb-7'>We're Launching Soon</h1>
              (uncomment to display coming soon counter)
              <div className='d-flex flex-center pb-10 pt-lg-5 pb-lg-12'>
                <div className='w-65px rounded-3 bg-body shadow-sm py-4 px-5 mx-3'>
                  <div
                    className='fs-2 fw-bold text-gray-800'
                    id='kt_coming_soon_counter_days'
                  ></div>
                  <div className='fs-7 fw-semibold text-muted'>days</div>
                </div>

                <div className='w-65px rounded-3 bg-body shadow-sm py-4 px-5 mx-3'>
                  <div
                    className='fs-2 fw-bold text-gray-800'
                    id='kt_coming_soon_counter_hours'
                  ></div>
                  <div className='fs-7 text-muted'>hrs</div>
                </div>

                <div className='w-65px rounded-3 bg-body shadow-sm py-4 px-5 mx-3'>
                  <div
                    className='fs-2 fw-bold text-gray-800'
                    id='kt_coming_soon_counter_minutes'
                  ></div>
                  <div className='fs-7 text-muted'>min</div>
                </div>

                <div className='w-65px rounded-3 bg-body shadow-sm py-4 px-5 mx-3'>
                  <div
                    className='fs-2 fw-bold text-gray-800'
                    id='kt_coming_soon_counter_seconds'
                  ></div>
                  <div className='fs-7 text-muted'>sec</div>
                </div>
              </div>
              <div className='fw-semibold fs-6 text-gray-500 mb-7'>
                This is your opportunity to get creative amazing opportunaties
                <br />
                that gives readers an idea
              </div>
              <form className='w-md-350px mb-2 mx-auto' action='#' id='kt_coming_soon_form'>
                <div className='fv-row text-start'>
                  <div className='d-flex flex-column flex-md-row justify-content-center gap-3'>
                    <input
                      type='text'
                      placeholder='Email'
                      name='email'
                      autoComplete='off'
                      className='form-control'
                    />

                    <button className='btn btn-primary text-nowrap' id='kt_coming_soon_submit'>
                      <span className='indicator-label'>Notify Me</span>

                      <span className='indicator-progress'>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              <div className='mb-n5'>
                <img
                  src='assets/media/auth/chart-graph.png'
                  className='mw-100 mh-300px theme-light-show'
                  alt=''
                />
                <img
                  src='assets/media/auth/chart-graph-dark.png'
                  className='mw-100 mh-300px theme-dark-show'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export {ComingSoon}
