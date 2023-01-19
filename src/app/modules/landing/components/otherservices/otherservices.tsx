import React from 'react'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {ComingSoon} from '../../../../../_metronic/partials/content/utilities/comingsoon'

export const OtherServices = () => {
  return (
    <div className='mb-lg-n15 position-relative z-index-2'>
      <div className='container'>
        <div className='card shadow-sm'>
          <div className='card-body p-lg-20'>
            <div className='text-center mb-5 mb-lg-10'>
              <h3 className='fs-2hx text-dark mb-5' id='other_services'>
                Other Services
              </h3>
            </div>

            <div className='d-flex flex-center mb-5 mb-lg-15'>
              <ul className='nav border-transparent flex-center fs-5 fw-bold'>
                <li className='nav-item'>
                  <a
                    className='nav-link text-gray-500 text-active-primary px-3 px-lg-6 active'
                    href='#'
                    data-bs-toggle='tab'
                    data-bs-target='#kt_services_afbd'
                  >
                    Africa Business Development
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link text-gray-500 text-active-primary px-3 px-lg-6'
                    href='#'
                    data-bs-toggle='tab'
                    data-bs-target='#kt_services_dbd'
                  >
                    Diaspora Business Development
                  </a>
                </li>
                {/* <li className='nav-item'>
                  <a
                    className='nav-link text-gray-500 text-active-primary px-3 px-lg-6'
                    href='#'
                    data-bs-toggle='tab'
                    data-bs-target='#kt_services_investments'
                  >
                    Investments
                  </a>
                </li> */}
                <li className='nav-item'>
                  <a
                    className='nav-link text-gray-500 text-active-primary px-3 px-lg-6'
                    href='#'
                    data-bs-toggle='tab'
                    data-bs-target='#kt_consulting'
                  >
                    Consulting
                  </a>
                </li>
                {/* <li className='nav-item'>
                  <a
                    className='nav-link text-gray-500 text-active-primary px-3 px-lg-6'
                    href='#'
                    data-bs-toggle='tab'
                    data-bs-target='#kt_dif'
                  >
                    Diaspora Investment Fund (DIF)
                  </a>
                </li> */}
              </ul>
            </div>

            <div className='tab-content'>
              <div className='tab-pane fade show active' id='kt_services_afbd'>
                <div className='row g-10'>
                  <div className='col-lg-6'>
                    <a
                      className='d-block card-rounded overlay h-lg-100'
                      data-fslightbox='lightbox-projects'
                      href={toAbsoluteUrl('assets/media/stock/600x600/img-23.jpg')}
                    >
                      <div
                        className='overlay-wrapper border border-1 bgi-no-repeat bgi-position-center bgi-size-contain card-rounded h-lg-100 min-h-250px'
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl(
                            '/media/stock/600x600/img-23.jpg'
                          )})`,
                        }}
                      ></div>

                      <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                    </a>
                  </div>

                  <div className='col-lg-6'>
                    <div className='row g-10 mb-10'>
                      <a
                        className='d-block card-rounded overlay'
                        data-fslightbox='lightbox-projects'
                        href='assets/media/stock/600x400/img-20.jpg'
                      >
                        <div
                          className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                          style={{
                            backgroundImage: `url(${toAbsoluteUrl(
                              '/media/stock/600x600/img-20.jpg'
                            )})`,
                          }}
                        ></div>

                        <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                          <i className='bi bi-eye-fill fs-3x text-white'></i>
                        </div>
                      </a>
                    </div>
                    <div className='row g-10 mb-10'>
                      <div className='col-lg-6'>
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-22.jpg'
                        >
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: `url(${toAbsoluteUrl(
                                '/media/stock/600x600/img-22.jpg'
                              )})`,
                            }}
                          ></div>

                          <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                        </a>
                      </div>

                      <div className='col-lg-6'>
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-21.jpg'
                        >
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: `url(${toAbsoluteUrl(
                                '/media/stock/600x600/img-21.jpg'
                              )})`,
                            }}
                          ></div>

                          <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='tab-pane fade' id='kt_services_dbd'>
                <div className='row g-10'>
                  <div className='col-lg-6'>
                    <a
                      className='d-block card-rounded overlay h-lg-100'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x600/img-11.jpg'
                    >
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px'
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl(
                            '/media/stock/600x600/img-11.jpg'
                          )})`,
                        }}
                      ></div>

                      <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                    </a>
                  </div>

                  <div className='col-lg-6'>
                    <div className='row g-10 mb-10'>
                      <div className='col-lg-6'>
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-12.jpg'
                        >
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: `url(${toAbsoluteUrl(
                                '/media/stock/600x600/img-12.jpg'
                              )})`,
                            }}
                          ></div>

                          <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                        </a>
                      </div>

                      <div className='col-lg-6'>
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-21.jpg'
                        >
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: `url(${toAbsoluteUrl(
                                '/media/stock/600x600/img-21.jpg'
                              )})`,
                            }}
                          ></div>

                          <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                        </a>
                      </div>
                    </div>

                    <a
                      className='d-block card-rounded overlay'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x400/img-20.jpg'
                    >
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl(
                            '/media/stock/600x600/img-20.jpg'
                          )})`,
                        }}
                      ></div>

                      <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className='tab-pane fade' id='kt_services_investments'>
                <div className='row g-10'>
                  <div className='col-lg-6'>
                    <div className='row g-10 mb-10'>
                      <div className='col-lg-6'>
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-16.jpg'
                        >
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: `url(${toAbsoluteUrl(
                                '/media/stock/600x600/img-16.jpg'
                              )})`,
                            }}
                          ></div>

                          <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                        </a>
                      </div>

                      <div className='col-lg-6'>
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-12.jpg'
                        >
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: `url(${toAbsoluteUrl(
                                '/media/stock/600x600/img-12.jpg'
                              )})`,
                            }}
                          ></div>

                          <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                        </a>
                      </div>
                    </div>

                    <a
                      className='d-block card-rounded overlay'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x400/img-15.jpg'
                    >
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl(
                            '/media/stock/600x600/img-15.jpg'
                          )})`,
                        }}
                      ></div>

                      <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                    </a>
                  </div>

                  <div className='col-lg-6'>
                    <a
                      className='d-block card-rounded overlay h-lg-100'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x600/img-23.jpg'
                    >
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px'
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl(
                            '/media/stock/600x600/img-23.jpg'
                          )})`,
                        }}
                      ></div>

                      <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div> */}

              <div className='tab-pane fade' id='kt_consulting'>
                <div className='row g-10'>
                  <div className='col-lg-6'>
                    <a
                      className='d-block card-rounded overlay h-lg-100'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x600/img-15.jpg'
                    >
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px'
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl(
                            '/media/stock/600x600/img-15.jpg'
                          )})`,
                        }}
                      ></div>

                      <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                    </a>
                  </div>

                  <div className='col-lg-6'>
                    <div className='row g-10 mb-10'>
                      <div className='col-lg-6'>
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-22.jpg'
                        >
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: `url(${toAbsoluteUrl(
                                '/media/stock/600x600/img-22.jpg'
                              )})`,
                            }}
                          ></div>

                          <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                        </a>
                      </div>

                      <div className='col-lg-6'>
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-21.jpg'
                        >
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: `url(${toAbsoluteUrl(
                                '/media/stock/600x600/img-21.jpg'
                              )})`,
                            }}
                          ></div>

                          <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                        </a>
                      </div>
                    </div>

                    <a
                      className='d-block card-rounded overlay'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x400/img-14.jpg'
                    >
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                        style={{
                          backgroundImage: `url(${toAbsoluteUrl(
                            '/media/stock/600x600/img-14.jpg'
                          )})`,
                        }}
                      ></div>

                      <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className='tab-pane fade' id='kt_dif'>
                <div className='row g-10'>
                  <ComingSoon />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
