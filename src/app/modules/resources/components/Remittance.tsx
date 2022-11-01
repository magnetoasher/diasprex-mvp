import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
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
                          <div className='text-center'>
                            <span className='svg-icon svg-icon-2tx svg-icon-primary'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <rect x='2' y='2' width='9' height='9' rx='2' fill='black' />
                                <rect
                                  opacity='0.3'
                                  x='13'
                                  y='2'
                                  width='9'
                                  height='9'
                                  rx='2'
                                  fill='black'
                                />
                                <rect
                                  opacity='0.3'
                                  x='13'
                                  y='13'
                                  width='9'
                                  height='9'
                                  rx='2'
                                  fill='black'
                                />
                                <rect
                                  opacity='0.3'
                                  x='2'
                                  y='13'
                                  width='9'
                                  height='9'
                                  rx='2'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            <div className='mt-1'>
                              <div className='fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center'>
                                <div
                                  className='min-w-70px'
                                  data-kt-countup='true'
                                  data-kt-countup-value='700'
                                >
                                  $52
                                </div>
                                B
                              </div>
                              <span className='text-gray-600 fw-bold fs-5 lh-0'>
                                Average Remitances
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className='octagon d-flex flex-center h-200px w-200px bg-body mx-2'>
                          <div className='text-center'>
                            <span className='svg-icon svg-icon-2tx svg-icon-success'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  d='M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z'
                                  fill='black'
                                />
                                <path
                                  opacity='0.3'
                                  d='M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z'
                                  fill='black'
                                />
                                <path
                                  opacity='0.3'
                                  d='M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            <div className='mt-1'>
                              <div className='fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center'>
                                <div
                                  className='min-w-50px'
                                  data-kt-countup='true'
                                  data-kt-countup-value='80'
                                >
                                  $2.5B
                                </div>
                                (5%)
                              </div>
                              <span className='text-gray-600 fw-bold fs-5 lh-0'>Fees</span>
                            </div>
                          </div>
                        </div>
                        <div className='octagon d-flex flex-center h-200px w-200px bg-body mx-2'>
                          <div className='text-center'>
                            <span className='svg-icon svg-icon-2tx svg-icon-info'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  d='M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z'
                                  fill='black'
                                />
                                <path
                                  opacity='0.3'
                                  d='M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z'
                                  fill='black'
                                />
                                <path
                                  opacity='0.3'
                                  d='M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            <div className='mt-1'>
                              <div className='fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center'>
                                <div
                                  className='min-w-50px'
                                  data-kt-countup='true'
                                  data-kt-countup-value='35'
                                >
                                  $32
                                </div>
                                B
                              </div>
                              <span className='text-gray-600 fw-bold fs-5 lh-0'>Average FDI</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='card shadow-sm mt-10 mb-10'>
                  <div className='card-body  d-flex flex-row py-15'>
                    <div className='row d-flex flex-column'>
                      <div className='col'>
                        <img
                          src={toAbsoluteUrl('media/stock/diasprex/remittance-image1.svg')}
                          className='mw-100 me-5'
                        />
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
                          <a
                            href='#'
                            className='btn btn-primary'
                            data-bs-toggle='modal'
                            data-bs-target='#kt_send_money_modal'
                          >
                            Send Money Now
                          </a>
                        </div>
                        <SendMoneyModal />
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
