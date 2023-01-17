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
import {CountryCards} from './components/countriescard'

// 'http://localhost:3000/diasporas'

const UAD_LIST_URL = process.env.REACT_APP_DIASPREX_API_URL
export const DiasporasPage: FC = () => {
  // const profileList = diasporaList.diasporas
  const [showProfile, setShowProfile] = useState('show')
  const navigate = useNavigate()
  const [profileList, setProfileList] = useState<uadFormModel[]>([])

  useEffect(() => {
    axios.get(`${UAD_LIST_URL}/diaspora?status=Published`).then((response: AxiosResponse) => {
      // console.log('Published Diaspora', response.data)
      setProfileList(response.data.data)
    })
  }, [])

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
            <CountryCards />
            <div id='year-accordion'>
              {/* <div className='card '> */}
              <div className='accordion-item  ' id='year-heading'>
                <h5 className='accordion-header'>
                  <button
                    type='button'
                    className='accordion-button fs-2 fw-semibold collapsed'
                    data-bs-toggle='collapse'
                    data-bs-target='#month-collapse'
                    aria-expanded='true'
                    aria-controls='month-collapse'
                  >
                    2022
                  </button>
                </h5>
              </div>
              <div
                id='month-collapse'
                className='collapse show'
                data-bs-parent='#year-accordion'
                aria-labelledby='year-heading'
              >
                <div className=' '>
                  <div id='month-accordion'>
                    <div className='card'>
                      <div className='' id='month-heading'>
                        <h5 className='mb-0'>
                          <a
                            className='collapsed   fs-2'
                            role='button'
                            data-bs-toggle='collapse'
                            href='#kt_job_accordion'
                            aria-expanded='true'
                            aria-controls='kt_job_accordion'
                          >
                            January
                          </a>
                        </h5>
                      </div>
                      {profileList.length > 0 &&
                        profileList.map((profile, index) => (
                          <div
                            id='kt_job_accordion'
                            className='collapse show'
                            data-bs-parent='#month-accordion'
                            aria-labelledby='month-heading'
                          >
                            <div className=''>
                              <div id={`${profile.fName}${profile.lName}-accordion`}>
                                {/* <div className='card'> */}
                                <div className='' id={`${profile.fName}${profile.lName}-heading`}>
                                  <h5 className='mb-0'>
                                    <a
                                      className='collapsed'
                                      role='button'
                                      data-bs-toggle='collapse'
                                      href={`#${profile.fName}${profile.lName}-body`}
                                      aria-expanded={index === 0 ? 'true' : 'false'}
                                      aria-controls={`${profile.fName}${profile.lName}-body`}
                                    >
                                      {`${profile.fName} ${profile.lName}, ${profile.grad?.degree}`}
                                    </a>
                                  </h5>
                                </div>
                                <div
                                  id={`${profile.fName}${profile.lName}-body`}
                                  className='collapse'
                                  data-bs-parent='#kt_job_accordion'
                                  aria-labelledby={`${profile.fName}${profile.lName}-header`}
                                >
                                  <div className='card-body'>
                                    <article
                                      key={profile.id}
                                      className='mb-4 text-gray-600 fw-bold fs-6 ps-10'
                                    >
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
                                {/* </div> */}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
            {/* ))} */}
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
