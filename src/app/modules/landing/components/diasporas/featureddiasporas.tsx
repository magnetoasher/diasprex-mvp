import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'

export const FeaturedDiasporas = () => {
  return (
    <div className='py-10 py-lg-20'>
      <div className='container'>
        <div className='text-center mb-12'>
          <h3 className='fs-2hx text-dark mb-5' id='featured_diasporas'>
            Featured Diasporas
          </h3>

          <div className='fs-5 text-muted fw-bold'>
            It’s no doubt that when a development takes longer to complete, additional costs to
            <br />
            integrate and test each extra feature creeps up and haunts most of us.
          </div>
        </div>

        {/* <div className='tns tns-default' style={{direction: 'ltr'}}>
          <div
            data-tns='true'
            data-tns-loop='true'
            data-tns-swipe-angle='false'
            data-tns-speed='2000'
            data-tns-autoplay='true'
            data-tns-autoplay-timeout='18000'
            data-tns-controls='true'
            data-tns-nav='false'
            data-tns-items='1'
            data-tns-center='false'
            data-tns-dots='false'
            data-tns-prev-button='#kt_team_slider_prev'
            data-tns-next-button='#kt_team_slider_next'
            data-tns-responsive='{1200: {items: 3}, 992: {items: 2}}'
          > */}
        <Carousel>
          <Carousel.Item>
            <div className='d-flex flex-center justify-content-between'>
              <div className='text-center'>
                <div
                  className='rounded-circle mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl('/media/avatars/diasprex/dxp-1.jpg')})`,
                  }}
                ></div>

                <div className='mb-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Paul Miles
                  </a>

                  <div className='text-muted fs-6 fw-semibold mt-1'>Development Lead</div>
                </div>
              </div>

              <div className='text-center'>
                <div
                  className='rounded-circle mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl('/media/avatars/diasprex/dxp-2.jpg')})`,
                  }}
                ></div>

                <div className='mb-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Paul Miles
                  </a>

                  <div className='text-muted fs-6 fw-semibold mt-1'>Development Lead</div>
                </div>
              </div>

              <div className='text-center'>
                <div
                  className='rounded-circle mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl('/media/avatars/diasprex/dxp-3.jpg')})`,
                  }}
                ></div>

                <div className='mb-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Paul Miles
                  </a>

                  <div className='text-muted fs-6 fw-semibold mt-1'>Development Lead</div>
                </div>
              </div>

              <div className='text-center'>
                <div
                  className='rounded-circle mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl('/media/avatars/diasprex/dxp-4.jpg')})`,
                  }}
                ></div>

                <div className='mb-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Melisa Marcus
                  </a>

                  <div className='text-muted fs-6 fw-semibold mt-1'>Creative Director</div>
                </div>
              </div>

              <div className='text-center'>
                <div
                  className='rounded-circle mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl('/media/avatars/diasprex/dxp-5.jpg')})`,
                  }}
                ></div>

                <div className='mb-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    David Nilson
                  </a>

                  <div className='text-muted fs-6 fw-semibold mt-1'>Python Expert</div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className='d-flex flex-center justify-content-between'>
              <div className='text-center'>
                <div
                  className='rounded-circle mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl('/media/avatars/diasprex/dxp-6.jpg')})`,
                  }}
                ></div>

                <div className='mb-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Anne Clarc
                  </a>

                  <div className='text-muted fs-6 fw-semibold mt-1'>Project Manager</div>
                </div>
              </div>

              <div className='text-center'>
                <div
                  className='rounded-circle mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl('/media/avatars/diasprex/dxp-2.jpg')})`,
                  }}
                ></div>

                <div className='mb-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Alice Wayde
                  </a>

                  <div className='text-muted fs-6 fw-semibold mt-1'>Marketing Manager</div>
                </div>
              </div>

              <div className='text-center'>
                <div
                  className='rounded-circle mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl('/media/avatars/diasprex/dxp-7.jpg')})`,
                  }}
                ></div>

                <div className='mb-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Alice Wayde
                  </a>

                  <div className='text-muted fs-6 fw-semibold mt-1'>Marketing Manager</div>
                </div>
              </div>

              <div className='text-center'>
                <div
                  className='rounded-circle mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl('/media/avatars/diasprex/dxp-8.jpg')})`,
                  }}
                ></div>

                <div className='mb-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Ricky Hunt
                  </a>

                  <div className='text-muted fs-6 fw-semibold mt-1'>Art Director</div>
                </div>
              </div>

              <div className='text-center'>
                <div
                  className='rounded-circle mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl('/media/avatars/diasprex/dxp-9.jpg')})`,
                  }}
                ></div>

                <div className='mb-0'>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-3'>
                    Alice Wayde
                  </a>

                  <div className='text-muted fs-6 fw-semibold mt-1'>Marketing Manager</div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* </div> */}

          {/* <button className='btn btn-icon btn-active-color-primary' id='kt_team_slider_prev'>
            <span className='svg-icon svg-icon-3x'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z'
                  fill='currentColor'
                />
              </svg>
            </span>
          </button> */}

          {/* <button className='btn btn-icon btn-active-color-primary' id='kt_team_slider_next'>
            <span className='svg-icon svg-icon-3x'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z'
                  fill='currentColor'
                />
              </svg>
            </span>
          </button> */}
        </Carousel>
      </div>
      <div className='text-center mb-9 mt-9 ms-1'>
        <Link to='/diasporas' className='btn btn-light-primary rounded-pill  me-3'>
          Join our diasporas featuring
        </Link>
      </div>
    </div>
  )
}
