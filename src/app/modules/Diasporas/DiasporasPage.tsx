import {FC, useEffect, useState} from 'react'
import axios, {AxiosResponse} from 'axios'
import {KTSVG} from '../../../_metronic/helpers'
import {Carousel2} from './components/Carousel2'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {
  FeedsWidget2,
  FeedsWidget3,
  FeedsWidget4,
  FeedsWidget5,
  FeedsWidget6,
} from '../../../_metronic/partials/widgets'
import {YearCollapsible} from '../../../_metronic/partials/content/collapsibles/YearCollapsible'
import {KTCollapsible} from '../../../_metronic/partials/content/collapsibles/ktcollapsible'
import {DiasporasCard} from './components/DiasporasCard'
import {Diasp, uadFormModel} from './components/core/_model'
import {InviteUADFriends} from '../../../_metronic/partials'
import {UadForm} from './components/uadform'
import {useNavigate} from 'react-router-dom'
import diasporaList from './components/core/diasporas.json'

// 'http://localhost:3000/diasporas'

// const UAD_LIST_URL = 'http://localhost:3000/diasporas'
export const DiasporasPage: FC = () => {
  const profileList = diasporaList.diasporas.data
  const [showProfile, setShowProfile] = useState('show')
  const navigate = useNavigate()

  // const [profileList, setProfileList] = useState<uadFormModel[]>([])
  // useEffect(() => {
  //   axios.get(UAD_LIST_URL).then((res) => {
  //     setProfileList(res.data.data)
  //     // console.log('Diaspora', res)
  //   })
  // }, [])

  const img1 = toAbsoluteUrl('./media/stock/diasprex/img-2.jpg')
  const img2 = toAbsoluteUrl('./media/stock/diasprex/img-1.jpg')
  const img3 = toAbsoluteUrl('./media/stock/diasprex/img-3.jpg')
  return (
    <div className='post d-flex flex-column-fluid' id='kt_diasporas'>
      <div className=' container-xxl' style={{margin: 'auto'}}>
        <div className='mb-9'>
          <h1>
            <p className='fs-2hx text-dark text-center  mb-5'>African Diasporas</p>
          </h1>
        </div>

        <div className='mb-9' style={{margin: 'auto'}}>
          <Carousel2 img1url={img1} img2url={img2} img3url={img3} />
        </div>

        <div className='row g-5 d-flex'>
          <div className='d-flex flex-column align-items-center'>
            <div className='menu-section text-gray-600 text-capitalize fw-bolder fs-1 ls-1 me-5'>
              <label>Submit your profile for monthly UAD Featuring</label>
            </div>
            <div className='btn-menu me-5'>
              <button
                className='btn btn-light-primary rounded-pill'
                onClick={() => {
                  navigate({pathname: '/uadform'})
                }}
                // data-bs-toggle='modal'
                // data-bs-target='#kt_modal_submit_profile'
              >
                <span className='svg-icon svg-icon-2x'>
                  <KTSVG
                    path='/media/icons/duotune/communication/com005.svg'
                    className='svg-icon-5 svg-icon-gray-600 me-1'
                  />
                </span>
                Submit Profile
              </button>
              <UadForm />
            </div>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <div className='menu-section text-gray-600 text-capitalize fw-bolder fs-1 ls-1 me-5'>
              <label>Invite a friend to submit profiles for monthly UAD Featuring</label>
            </div>
            <div className='btn-menu me-5'>
              <button
                className='btn btn-light-success rounded-pill'
                data-bs-target='#kt_modal_invite_uad_friends'
                data-bs-toggle='modal'
              >
                <span className='svg-icon svg-icon-2x'>
                  <KTSVG
                    path='/media/icons/duotune/communication/com014.svg'
                    className='svg-icon-5 svg-icon-gray-600 me-1'
                  />
                </span>
                Invite Friends
              </button>
              <InviteUADFriends />
            </div>
          </div>
        </div>

        <div className='separator, m-10'></div>

        <div className='row g-5'>
          <div className='col-lg-8'>
            <h2 className='text-gray-800 fw-bolder mb-4'>UNFOUND AFRICAN DIASPORAS</h2>
            <div className='card'>
              <div className='m-0'>
                <div
                  id='accordion'
                  className='card-header cursor-pointer'
                  role='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#kt_jan_collapse'
                  aria-expanded='true'
                  aria-controls='kt_jan_collapse'
                >
                  <div className='card-title m-0'>
                    <h3 className='fw-bolder m-0'>2022</h3>
                  </div>
                </div>
                {/* <YearCollapsible currentYear='2022' target='#kt_month_collapse' /> */}
                <div className='mx-10'>
                  <KTCollapsible
                    label='Jan'
                    parent='accordion'
                    id='kt_jan_collapse'
                    target='#kt_job_accordion'
                    control=''
                  />
                </div>
              </div>

              {/* <div className='separator separator-dashed'></div> */}

              {profileList.length > 0 &&
                profileList.map((profile, index) => (
                  <div className='accordion' id='kt_job_accordion'>
                    <div className='card-header' id={`${profile.fName}${profile.lName}`}>
                      <h2
                        className='accordion-header'
                        id={`${profile.fName}${profile.lName}-header`}
                      >
                        <button
                          className='btn btn-link text-muted fs-4 fw-semibold'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target={`#${profile.fName}${profile.lName}-body`}
                          aria-expanded='false'
                          aria-controls={`${profile.fName}${profile.lName}-body`}
                        >
                          {`${profile.fName} ${profile.lName}, ${profile.grad?.degree}`}
                        </button>
                      </h2>
                      <div
                        id={`${profile.fName}${profile.lName}-body`}
                        className={'collapse' + (index === 0 && 'show') + 'fs-6 ms-1 mw-100'}
                        data-bs-parent='#kt_job_accordion'
                        aria-labelledby={`${profile.fName}${profile.lName}-header`}
                      >
                        <article key={profile.id} className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          <DiasporasCard
                            fName={profile.fName}
                            lName={profile.lName}
                            email={profile.email}
                            phone={profile.phone}
                            profession={profile.profession}
                            countryRes={profile.countryRes}
                            insightAfrica={profile.insightAfrica}
                            countryOrig={profile.countryOrig}
                            avatar={toAbsoluteUrl(`/media/${profile.avatar}`)}
                            interest={profile.interest}
                            undergrad={profile.undergrad}
                            grad={profile.grad}
                            summary={profile.summary}
                          />
                        </article>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* <div id='accordion'>
              <div className='card'>
                <div className='card-header' id='heading-1'>
                  <h5 className='mb-0'>
                    <a
                      role='button'
                      data-bs-toggle='collapse'
                      href='#collapse-1'
                      aria-expanded='true'
                      aria-controls='collapse-1'
                    >
                      Item 1
                    </a>
                  </h5>
                </div>
                <div
                  id='collapse-1'
                  className='collapse show'
                  data-bs-parent='#accordion'
                  aria-labelledby='heading-1'
                >
                  <div className='card-body'>
                    <div id='accordion-1'>
                      <div className='card'>
                        <div className='card-header' id='heading-1-1'>
                          <h5 className='mb-0'>
                            <a
                              className='collapsed'
                              role='button'
                              data-bs-toggle='collapse'
                              href='#collapse-1-1'
                              aria-expanded='false'
                              aria-controls='collapse-1-1'
                            >
                              Item 1 of 1
                            </a>
                          </h5>
                        </div>
                        <div
                          id='collapse-1-1'
                          className='collapse'
                          data-bs-parent='#accordion-1'
                          aria-labelledby='heading-1-1'
                        >
                          <div className='card-body'>
                            <div id='accordion-1-1'>
                              <div className='card'>
                                <div className='card-header' id='heading-1-1-1'>
                                  <h5 className='mb-0'>
                                    <a
                                      className='collapsed'
                                      role='button'
                                      data-bs-toggle='collapse'
                                      href='#collapse-1-1-1'
                                      aria-expanded='false'
                                      aria-controls='collapse-1-1-1'
                                    >
                                      Item 1 of 1 of 1
                                    </a>
                                  </h5>
                                </div>
                                <div
                                  id='collapse-1-1-1'
                                  className='collapse'
                                  data-bs-parent='#accordion-1-1'
                                  aria-labelledby='heading-1-1-1'
                                >
                                  <div className='card-body'>Text 1 of 1 of 1</div>
                                </div>
                              </div>
                              <div className='card'>
                                <div className='card-header' id='heading-1-1-2'>
                                  <h5 className='mb-0'>
                                    <a
                                      className='collapsed'
                                      role='button'
                                      data-bs-toggle='collapse'
                                      href='#collapse-1-1-2'
                                      aria-expanded='false'
                                      aria-controls='collapse-1-1-2'
                                    >
                                      Item 1 of 1 of 2
                                    </a>
                                  </h5>
                                </div>
                                <div
                                  id='collapse-1-1-2'
                                  className='collapse'
                                  data-bs-parent='#accordion-1-1'
                                  aria-labelledby='heading-1-1-2'
                                >
                                  <div className='card-body'>Text 1 of 1of 2</div>
                                </div>
                              </div>
                              <div className='card'>
                                <div className='card-header' id='heading-1-1-3'>
                                  <h5 className='mb-0'>
                                    <a
                                      className='collapsed'
                                      role='button'
                                      data-bs-toggle='collapse'
                                      href='#collapse-1-1-3'
                                      aria-expanded='false'
                                      aria-controls='collapse-1-1-3'
                                    >
                                      Item 1 of 1 of 3
                                    </a>
                                  </h5>
                                </div>
                                <div
                                  id='collapse-1-1-3'
                                  className='collapse'
                                  data-bs-parent='#accordion-1-1'
                                  aria-labelledby='heading-1-1-3'
                                >
                                  <div className='card-body'>Text 1 of 1 of 3</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='card'>
                        <div className='card-header' id='heading-1-2'>
                          <h5 className='mb-0'>
                            <a
                              className='collapsed'
                              role='button'
                              data-bs-toggle='collapse'
                              href='#collapse-1-2'
                              aria-expanded='false'
                              aria-controls='collapse-1-2'
                            >
                              Item 1 of 2
                            </a>
                          </h5>
                        </div>
                        <div
                          id='collapse-1-2'
                          className='collapse'
                          data-bs-parent='#accordion-1'
                          aria-labelledby='heading-1-2'
                        >
                          <div className='card-body'>Text 1 of 2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card-header' id='heading-2'>
                  <h5 className='mb-0'>
                    <a
                      className='collapsed'
                      role='button'
                      data-bs-toggle='collapse'
                      href='#collapse-2'
                      aria-expanded='true'
                      aria-controls='collapse-2'
                    >
                      Item 2
                    </a>
                  </h5>
                </div>
                <div
                  id='collapse-2'
                  className='collapse'
                  data-bs-parent='#accordion'
                  aria-labelledby='heading-2'
                >
                  <div className='card-body'>Text 2</div>
                </div>
              </div>
              <div className='card'>
                <div className='card-header' id='heading-3'>
                  <h5 className='mb-0'>
                    <a
                      className='collapsed'
                      role='button'
                      data-bs-toggle='collapse'
                      href='#collapse-3'
                      aria-expanded='false'
                      aria-controls='collapse-3'
                    >
                      Item 3
                    </a>
                  </h5>
                </div>
                <div
                  id='collapse-3'
                  className='collapse'
                  data-bs-parent='#accordion'
                  aria-labelledby='heading-3'
                >
                  <div className='card-body'>Text 3</div>
                </div>
              </div>
            </div> */}
          </div>

          <div className='col-lg-4'>
            <h2 className='text-gray-800 fw-bolder mb-4'>BLOGS/NEWS</h2>
            <FeedsWidget2 className='mb-5 mb-xl-8' />

            <FeedsWidget3 className='mb-5 mb-xl-8' />
            <FeedsWidget4 className='mb-5 mb-xl-8' />
          </div>

          <div className='row bg-light gy-5 gx-xl-8'>
            <div className='col-xxl-4'>
              <FeedsWidget6 className='mb-5 mb-xl-8' />
            </div>
            <div className='col-xxl-4'>
              <FeedsWidget6 className='mb-5 mb-xl-8' />
            </div>
            <div className='col-xxl-4'>
              <FeedsWidget6 className='mb-5 mb-xl-8' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
