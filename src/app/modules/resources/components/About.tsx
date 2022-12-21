// @ts-nocheck
import {Component} from 'react'
import TinySlider from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {OctagonModel} from '../../../../_metronic/partials/content/utilities/octagonmodel'

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 3,
  controls: false,
}

class About extends Component {
  onGoTo = (dir, e) => {
    this.ts.slider.goTo(dir)
  }

  render() {
    return (
      <div className='post d-flex flex-column-fluid' id='kt_post'>
        <div id='kt_content_container' className='container-xxl'>
          <div className='card'>
            <div className='card-body p-lg-17'>
              <div className='mb-18'>
                <div className='mb-10'>
                  <div className='text-center mb-15'>
                    <h3 className='fs-2hx text-dark mb-5'>About Us</h3>
                  </div>
                  <div className='overlay'>
                    <img
                      className='w-100 card-rounded'
                      src={toAbsoluteUrl('media/stock/diasprex/aboutus.jpg')}
                      alt=''
                    />
                    {/* <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                      <a
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
                      </a>
                    </div> */}
                  </div>
                </div>
                <div className='fs-5 fw-bold text-gray-600'>
                  <h4>Who We Are</h4>
                  <p className='mb-8'>
                    Diasprex Inc. is a private business development services company based in
                    Seattle WA United States.
                  </p>

                  <h4> Our Vision</h4>
                  <p className='mb-8'>
                    Diasprex aims to make Africans an integral part of the decision-making process
                    regarding African wealth structures.
                  </p>

                  <h4> What we do</h4>
                  <p className='mb-8'>
                    Connecting opportunities on the continent of Africa to African diasporas and
                    friends of Africa
                  </p>

                  <h4>Why Diasprex?</h4>
                  <p>
                    Wealth creation and freedom are primarily driven by economic power, which
                    determines where and how resources are spent. Diasprex is an opportunity for
                    African Diaspora members, friends of Africa, and others to participate in
                    economic and development initiatives that benefit all of Africa. Diasprex
                    participants can fund life-changing projects, support nascent industries, and
                    build generational wealth.
                  </p>

                  <h4>Confidence</h4>
                  <p>
                    Diasprex is managed by a team of professional members of the diaspora hailing
                    from diverse African countries with years of experience in the business.
                    Diasprex is a fully incorporated Delaware Corporation with all legal structures
                    in place, including legal representation and risk mitigation provisions.
                    Transparency is Diasprex’s management motto.
                  </p>
                </div>
              </div>
              <div className='card bg-light bg-opacity-50 mb-18'>
                <div className='card-body py-15'>
                  <div className='fs-2 fw-bold text-muted text-center mb-3'>
                    <span className='text-gray-700 me-1'>Our Wins</span>
                  </div>
                  <div className='d-flex flex-center'>
                    <div className='d-flex justify-content-between mb-10 mx-auto w-xl-900px'>
                      <div className='octagon d-flex flex-center h-200px w-200px bg-primary bg-opacity-10 mx-2'>
                        <OctagonModel
                          imgscr='/media/icons/duotune/maps/map010.svg'
                          imgcolor='primary'
                          title1='$50M'
                          label='JDG, Ghana'
                          width='200px'
                          height='200px'
                        />
                        {/* <div className='text-center'>
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
                                $50M
                              </div>
                            </div>
                            <span className='text-gray-600 fw-bold fs-5 lh-0'>JDG, Ghana</span>
                          </div>
                        </div> */}
                      </div>
                      <div className='octagon d-flex flex-center h-200px w-200px bg-success bg-opacity-10 mx-2'>
                        <OctagonModel
                          imgscr='/media/icons/duotune/medicine/med008.svg'
                          imgcolor='success'
                          title1='$100M'
                          label='BioFin, Nigeria'
                          width='200px'
                          height='200px'
                        />
                        {/* <div className='text-center'>
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
                                $100M
                              </div>
                            </div>
                            <span className='text-gray-600 fw-bold fs-5 lh-0'>BioFin, Nigeria</span>
                          </div>
                        </div> */}
                      </div>
                      <div className='octagon d-flex flex-center h-200px w-200px bg-info bg-opacity-10 mx-2'>
                        <OctagonModel
                          imgscr='/media/icons/duotune/finance/fin006.svg'
                          imgcolor='info'
                          title1='$25M'
                          label='AgroChem, Kenya'
                          width='200px'
                          height='200px'
                        />
                        {/* <div className='text-center'>
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
                                $25M
                              </div>
                            </div>
                            <span className='text-gray-600 fw-bold fs-5 lh-0'>AgroChem, Kenya</span>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-16'>
                <div className='text-center mb-12'>
                  <h3 className='fs-2hx text-dark mb-5'>LATEST NEWS</h3>
                  <div className='fs-5 text-muted fw-bold'>
                    Our goal is to provide a complete and robust business solutions
                    <br />
                    to client's economic growth in africa and OECD countries
                  </div>
                </div>
                <div className='row g-10'>
                  <div className='col-md-4'>
                    <div className='card-xl-stretch me-md-6'>
                      <a
                        className='d-block overlay mb-4'
                        data-fslightbox='lightbox-hot-sales'
                        href='media/stock/600x400/img-73.jpg'
                      >
                        <div
                          className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px'
                          style={{backgroundImage: "url('media/stock/diasprex/img-7.jpg')"}}
                        ></div>
                        <div className='overlay-layer bg-dark card-rounded bg-opacity-25'>
                          <i className='bi bi-eye-fill fs-2x text-white'></i>
                        </div>
                      </a>
                      <div className='m-0'>
                        <a
                          href='../../demo1/dist/pages/user-profile/overview.html'
                          className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'
                        >
                          Diaspora Financing for Economic Prosperity in Africa
                        </a>
                        <div className='fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5'>
                          We’ve been focused on making a the from also not been afraid to and step
                          away been focused create eye
                        </div>
                        <div className='fs-6 fw-bolder'>
                          <a
                            href='../../demo1/dist/apps/projects/users.html'
                            className='text-gray-700 text-hover-primary'
                          >
                            Jane Miller
                          </a>
                          <span className='text-muted'>on Mar 21 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card-xl-stretch mx-md-3'>
                      <a
                        className='d-block overlay mb-4'
                        data-fslightbox='lightbox-hot-sales'
                        href='media/stock/600x400/img-74.jpg'
                      >
                        <div
                          className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px'
                          style={{backgroundImage: "url('media/stock/diasprex/img-6.jpg')"}}
                        ></div>
                        <div className='overlay-layer bg-dark card-rounded bg-opacity-25'>
                          <i className='bi bi-eye-fill fs-2x text-white'></i>
                        </div>
                      </a>
                      <div className='m-0'>
                        <a
                          href='../../demo1/dist/pages/user-profile/overview.html'
                          className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'
                        >
                          Exponential Trade Growth in West Africa Catalysed by Diaspora's Investment
                        </a>
                        <div className='fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5'>
                          We’ve been focused on making the from v4 to v5 but we have also not been
                          afraid to step away been focused
                        </div>
                        <div className='fs-6 fw-bolder'>
                          <a
                            href='../../demo1/dist/apps/projects/users.html'
                            className='text-gray-700 text-hover-primary'
                          >
                            Cris Morgan
                          </a>
                          <span className='text-muted'>on Apr 14 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card-xl-stretch ms-md-6'>
                      <a
                        className='d-block overlay mb-4'
                        data-fslightbox='lightbox-hot-sales'
                        href='media/stock/600x400/img-47.jpg'
                      >
                        <div
                          className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px'
                          style={{backgroundImage: "url('media/stock/diasprex/img-5.jpg')"}}
                        ></div>
                        <div className='overlay-layer bg-dark card-rounded bg-opacity-25'>
                          <i className='bi bi-eye-fill fs-2x text-white'></i>
                        </div>
                      </a>
                      <div className='m-0'>
                        <a
                          href='../../demo1/dist/pages/user-profile/overview.html'
                          className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'
                        >
                          The much needed infrastrcture for African development
                        </a>
                        <div className='fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5'>
                          We’ve been focused on making the from v4 to v5 but we’ve also not been
                          afraid to step away been focused
                        </div>
                        <div className='fs-6 fw-bolder'>
                          <a
                            href='../../demo1/dist/apps/projects/users.html'
                            className='text-gray-700 text-hover-primary'
                          >
                            Carles Nilson
                          </a>
                          <span className='text-muted'>on May 14 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-18'>
                <div className='text-center mb-12'>
                  <h3 className='fs-2hx text-dark mb-5'>MEET THE TEAM</h3>
                  <div className='fs-5 text-muted fw-bold'>
                    Diasprex is managed by a team of professional members of the diaspora hailing
                    <br />
                    from diverse African countries with years of experience in the business.
                  </div>
                </div>
                <div className='tns tns-default mb-10'>
                  <TinySlider settings={settings} ref={(ts) => (this.ts = ts)}>
                    <div className='text-center'>
                      <div
                        className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                        style={{backgroundImage: "url('media/avatars/diasprex/dxp-1.jpg')"}}
                      ></div>
                      <div className='mb-0'>
                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-3'>
                          Tosin Dada, Ph.D.
                        </a>
                        <div className='text-muted fs-6 fw-bold mt-1'>President</div>
                      </div>
                    </div>
                    <div className='text-center'>
                      <div
                        className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                        style={{backgroundImage: "url('media/avatars/diasprex/dxp-3.jpg')"}}
                      ></div>
                      <div className='mb-0'>
                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-3'>
                          Angella kianga, M.S.
                        </a>
                        <div className='text-muted fs-6 fw-bold mt-1'>Creative Director</div>
                      </div>
                    </div>
                    <div className='text-center'>
                      <div
                        className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                        style={{backgroundImage: "url('media/avatars/diasprex/dxp-9.jpg')"}}
                      ></div>
                      <div className='mb-0'>
                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-3'>
                          Peter Sarpong, M.S., M.B.A
                        </a>
                        <div className='text-muted fs-6 fw-bold mt-1'>V.P. Marketing </div>
                      </div>
                    </div>
                    <div className='text-center'>
                      <div
                        className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                        style={{backgroundImage: "url('media/avatars/diasprex/dxp-7.jpg')"}}
                      ></div>
                      <div className='mb-0'>
                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-3'>
                          Tosin Lara Dada, Ph.D.
                        </a>
                        <div className='text-muted fs-6 fw-bold mt-1'>V.P. Prrograms</div>
                      </div>
                    </div>
                    <div className='text-center'>
                      <div
                        className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                        style={{backgroundImage: "url('media/avatars/diasprex/dxp-8.jpg')"}}
                      ></div>
                      <div className='mb-0'>
                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-3'>
                          Seth Abelson, Ph.D.
                        </a>
                        <div className='text-muted fs-6 fw-bold mt-1'>V.P. Operation</div>
                      </div>
                    </div>
                    <div className='text-center'>
                      <div
                        className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                        style={{backgroundImage: "url('media/avatars/300-12.jpg')"}}
                      ></div>
                      <div className='mb-0'>
                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-3'>
                          Alice Wayde
                        </a>
                        <div className='text-muted fs-6 fw-bold mt-1'>Marketing Manager</div>
                      </div>
                    </div>
                    <div className='text-center'>
                      <div
                        className='octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center'
                        style={{backgroundImage: "url('media/avatars/300-9.jpg')"}}
                      ></div>
                      <div className='mb-0'>
                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-3'>
                          Carles Puyol
                        </a>
                        <div className='text-muted fs-6 fw-bold mt-1'>QA Managers</div>
                      </div>
                    </div>
                  </TinySlider>
                  <button
                    onClick={(e) => this.onGoTo('prev', e)}
                    className='btn btn-icon btn-active-color-primary'
                    id='kt_team_slider_prev'
                  >
                    <span className='svg-icon svg-icon-3x'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <path
                          d='M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z'
                          fill='black'
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    onClick={(e) => this.onGoTo('next', e)}
                    className='btn btn-icon btn-active-color-primary'
                    id='kt_team_slider_next'
                  >
                    <span className='svg-icon svg-icon-3x'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <path
                          d='M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z'
                          fill='black'
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className='text-center mb-12'>
                <h3 className='fs-2hx text-dark mb-5'>STRATEGIC PARTNERSHIPS</h3>
              </div>
              <div className='card mb-4 bg-light text-center'>
                <div className='card-body py-12'>
                  <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/linkedin-2.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a>
                  <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a>

                  <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a>

                  {/* <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/github.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a> */}

                  {/* <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/behance.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a> */}

                  <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/pinterest-p.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a>

                  <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/twitter.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {About}
