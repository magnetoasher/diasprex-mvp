import React from 'react'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {OctagonModel} from '../../../../../_metronic/partials/content/utilities/octagonmodel'
import {RemittanceChart} from '../../../resources/components/core/remiitancechart'

export const RemittanceCard = () => {
  return (
    <div className='mb-lg-n15 position-relative z-index-2'>
      <div className='container'>
        <div className='card shadow-sm'>
          <div className='card-body p-lg-20'>
            <div className='text-center mb-5 mb-lg-10'>
              <h3 className='fs-2hx text-dark mb-5' id='remittance_card'>
                Our RemitFund Program
              </h3>
              <div className='fs-4 fw-bold' style={{color: 'rgba(0, 50, 156, 1.0'}}>
                Mobilizing Remittance Funds for Productive Economic Opportunities in Africa
              </div>
              <div className='fs-4 fw-bold' style={{color: 'rgba(0, 0, 56, 0.8'}}>
                Creating opportunities for the diaspora and African businesses
              </div>
            </div>

            <div className='row g-10'>
              <div className='col-lg-6'>
                <div className='row g-10 mb-10'>
                  <a
                    className='d-block card-rounded overlay'
                    data-fslightbox='lightbox-projects'
                    href='assets/media/stock/600x400/img-20.jpg'
                  >
                    <div
                      className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-350px'
                      // style={{
                      //   backgroundImage: `url(${toAbsoluteUrl('/media/stock/600x600/img-20.jpg')})`,
                      // }}
                    >
                      <RemittanceChart
                        className='card-xl-stretch mb-xl-8'
                        chartColor='primary'
                        chartHeight='350px'
                        datavalue1={[51.1, 47.0, 51, 58.3, 58.1, 52.0]}
                        datavalue2={[51.1, 47.0, 51, 58.3, 58.1, 52.0]}
                        datacategory={['2015', '2016', '2017', '2018', '2019', '2020']}
                      />
                    </div>

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
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px d-flex align-items-center justify-content-center'
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
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px d-flex align-items-center justify-content-center'
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
                        '/media/stock/diasprex/remittance-image1.svg'
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
    </div>
  )
}
