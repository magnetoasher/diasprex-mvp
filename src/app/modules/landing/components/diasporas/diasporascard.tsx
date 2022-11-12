import React from 'react'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {OctagonModel} from '../../../../../_metronic/partials/content/utilities/octagonmodel'
import {RemittanceChart} from '../../../resources/components/core/remiitancechart'

export const PublicDiasporasCard = () => {
  return (
    <div className='mb-lg-n15 position-relative z-index-2'>
      <div className='container'>
        <div className='card shadow-sm'>
          <div className='card-body p-lg-20'>
            <div className='text-center mb-5 mb-lg-10'>
              <h3 className='fs-2hx text-dark mb-5' id='diasporas_card'>
                African Diasporas
              </h3>
              <div className='fs-4 fw-bold' style={{color: 'rgba(156, 65, 186, 0.8'}}>
                Promoting diasporas economic and professional development
              </div>

              <div className='fs-4 fw-bold' style={{color: 'rgba(0, 0, 56, 0.8'}}>
                Diasprex Offers Diasporas a Platform to Participate in the Global Generational Weath
                Generation
              </div>
            </div>

            <div className='row g-10'>
              <div className='col-lg-6'>
                <div className='row g-10 mb-10'>
                  <div className='col-lg-6'>
                    <a
                      className='d-block card-rounded overlay'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x600/img-22.jpg'
                    >
                      <div
                        className='overlay-wrapper bg-opacity-10 bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px d-flex align-items-center justify-content-center'
                        // style={{
                        //   backgroundImage: `url(${toAbsoluteUrl(
                        //     '/media/stock/600x600/img-22.jpg'
                        //   )})`,
                        // }}
                      >
                        <OctagonModel
                          imgscr='/media/icons/duotune/finance/fin006.svg'
                          imgcolor='primary'
                          title1='2.4 Million'
                          label='United States'
                          width='250px'
                          height='250px'
                          bgcolor='info bg-opacity-10'
                        />
                      </div>

                      <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                    </a>
                  </div>

                  <div className='col-lg-6'>
                    <a
                      className='d-block card-rounded overlay'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x600/img-22.jpg'
                    >
                      <div
                        className='overlay-wrapper bg-opacity-10 bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px d-flex align-items-center justify-content-center'
                        // style={{
                        //   backgroundImage: `url(${toAbsoluteUrl(
                        //     '/media/stock/600x600/img-22.jpg'
                        //   )})`,
                        // }}
                      >
                        <OctagonModel
                          imgscr='/media/icons/duotune/finance/fin006.svg'
                          imgcolor='primary'
                          title1='1.5 Million'
                          label='United Kingdom'
                          width='250px'
                          height='250px'
                          bgcolor='primary bg-opacity-10'
                        />
                      </div>

                      <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='row g-10 mb-10'>
                  <div className='col-lg-6'>
                    <a
                      className='d-block card-rounded overlay'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x600/img-22.jpg'
                    >
                      <div
                        className='overlay-wrapper bg-opacity-10 bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px d-flex align-items-center justify-content-center'
                        // style={{
                        //   backgroundImage: `url(${toAbsoluteUrl(
                        //     '/media/stock/600x600/img-22.jpg'
                        //   )})`,
                        // }}
                      >
                        <OctagonModel
                          imgscr='/media/icons/duotune/finance/fin006.svg'
                          imgcolor='primary'
                          title1='52,000'
                          label='PhD Degree'
                          width='250px'
                          height='250px'
                          bgcolor='primary bg-opacity-10'
                        />
                      </div>

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
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px d-flex align-items-center justify-content-center'
                        // style={{
                        //   backgroundImage: `url(${toAbsoluteUrl(
                        //     '/media/stock/600x600/img-21.jpg'
                        //   )})`,
                        // }}
                      >
                        <OctagonModel
                          imgscr='/media/icons/duotune/finance/fin006.svg'
                          imgcolor='info'
                          title1='236,701'
                          label='MS Degree'
                          width='250px'
                          height='250px'
                          bgcolor='info bg-opacity-10'
                        />
                      </div>

                      <div className='overlay-layer card-rounded bg-dark bg-opacity-10'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <a
                  className='d-block card-rounded overlay h-lg-100'
                  data-fslightbox='lightbox-projects'
                  href={toAbsoluteUrl('assets/media/stock/600x600/img-23.jpg')}
                >
                  <div
                    className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-auto card-rounded h-lg-100 min-h-250px'
                    style={{
                      backgroundImage: `url(${toAbsoluteUrl('/media/stock/diasprex/img-11.jpg')})`,
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
    </div>
  )
}
