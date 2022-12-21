import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {OctagonModel} from '../../../../_metronic/partials/content/utilities/octagonmodel'
import {SendMoneyModal} from '../../../../_metronic/partials/modals/send-money/SendMoneyModal'
import {RemittanceChart} from './core/remiitancechart'

const Remittance: FC = () => {
  return (
    <div className='mw-960px'>
      <div className='post d-flex flex-column-fluid' id='kt_remittance'>
        <div id='kt_remittance_container' className='container-xxl'>
          <div className='card'>
            <div className='card-body p-lg-15'>
              <div className='mb-13'>
                <div className='mb-15'>
                  <h4 className='display-4 text-gray-800 w-bolder mb-6'>Remittance</h4>
                </div>
                <div className='overlay'>
                  <img
                    className='w-100 img-fluid card-rounded'
                    src='media/stock/diasprex/img-4.jpg'
                    alt='remittance'
                  />

                  <div className='position-absolute top-50 start-50 translate-middle mh-100 card-rounded bg-dark bg-opacity-25'>
                    <h2 className='display-1 text-white mb-0'>
                      Translating African Remittances to Economic Development
                    </h2>
                  </div>
                  {/* <a
                      href='../../demo1/dist/pages/pricing/pricing-2.html'
                      className='btn btn-primary'
                    >
                      Pricing
                    </a>
                    <a
                      href='../../demo1/dist/pages/careers/apply.html'
                      className='btn btn-light-primary ms-3'
                    >
                      Join Us
                    </a> */}
                </div>

                <div className='card  mt-10 mb-10'>
                  <div className='card-body d-flex flex-row py-15'>
                    <img
                      src={toAbsoluteUrl('media/stock/diasprex/moneyspread.svg')}
                      className='w-150px me-6'
                    />
                    <div>
                      <span className='fs-1 text-dark fst-italic fw-bolder'>
                        Every year African diasporas remits tens of billions of dollars to Africa. A
                        fraction of this remittance can finance critically needed infrastructures in
                        Africa. Diasprex remittance services provide diasporas with a credible
                        channel to build legacy by directing a fraction of the remittances towards
                        African economic development{' '}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='card  mb-10'>
                  <div className='card-body py-18'>
                    <div className='fs-2 fw-bold text-muted text-center mb-3'>
                      <span className='text-gray-800 display-6 me-1'>
                        Annual Personal Remittances to Africa{' '}
                      </span>
                    </div>
                    <div>
                      <RemittanceChart
                        className='card-xl-stretch mb-xl-8'
                        chartColor='primary'
                        chartHeight='300px'
                        datavalue1={[51.1, 47.0, 51, 58.3, 58.1, 52.0]}
                        datavalue2={[51.1, 47.0, 51, 58.3, 58.1, 52.0]}
                        datacategory={['2015', '2016', '2017', '2018', '2019', '2020']}
                      />
                    </div>
                    <div className='d-flex flex-center'>
                      <div className='d-flex justify-content-between mb-10 mx-auto w-xl-900px'>
                        <div className='octagon d-flex flex-center h-200px w-200px bg-body mx-2'>
                          <OctagonModel
                            imgscr='/media/icons/duotune/general/gen008.svg'
                            imgcolor='primary'
                            title1='$52B'
                            label='Annual Remittances'
                            width='200px'
                            height='200px'
                          />
                        </div>
                        <div className='octagon d-flex flex-center h-200px w-200px bg-body mx-2'>
                          <OctagonModel
                            imgscr='/media/icons/duotune/graphs/gra008.svg'
                            imgcolor='danger'
                            title1='5%'
                            label='% of GDP '
                            width='200px'
                            height='200px'
                          />
                        </div>
                        <div className='octagon d-flex flex-center h-200px w-200px bg-body mx-2'>
                          <OctagonModel
                            imgscr='/media/icons/duotune/ecommerce/ecm002.svg'
                            imgcolor='info'
                            title1='$2.5B+'
                            label='In Fees'
                            width='200px'
                            height='200px'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='card shadow-sm mt-10 mb-10'>
                  <div className='card-body  d-flex flex-row py-15'>
                    <div className='row d-flex flex-column'>
                      <div className='col'>
                        <div className='overlay'>
                          <img
                            src={toAbsoluteUrl('media/stock/diasprex/remittance-image1.svg')}
                            className='mw-100 img-fluid card-rounded me-5'
                          />
                          <div className='position-absolute top-75 start-25 translate-middle mh-100 card-rounded'>
                            <OctagonModel
                              imgscr='/media/icons/duotune/graphs/gra004.svg'
                              imgcolor='primary'
                              title1='$20000000'
                              label='Retainer Growth'
                              width='200px'
                              height='200px'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col'>
                        <div>
                          <span className='fs-1 text-gray-600 fst-italic fw-bolder'>
                            Join the league of diasporas transforming Africa by transmitting
                            remittances through Diasprex and participating in our Remittance
                            Retainer's program. As a member of the Diasprex community, you can start
                            processing your remittances through Diasprex today
                          </span>
                        </div>
                        <div className='d-flex align-items-end justify-content-end'>
                          <Link to='/auth' className='btn btn-primary'>
                            Join Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mb-15'>
                  <h2>Why Diasprex's Remittance Retainer?</h2>
                  <p className='fs-4 text-dark'>
                    Diasprex's remittance retainers program are not only secure but also
                    complementary to members. Participation is free and does not require paid
                    subscriptions. Your participation also comes with additional benefits such as
                    retaining a portion of your transmission for future participation in Sponsored
                    projects through Diasprex's DIF fund. With paid subscription, you can qualify
                    for zero-fee remittance transmission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export {Remittance}
