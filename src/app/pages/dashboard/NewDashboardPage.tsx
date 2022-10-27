import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import Opportunity from './Opportunity'
import Oppurtunity from './Opportunity'
import {Card, Row} from 'antd'
import BillingHistory from './BillingHistory'
import {EditText, EditTextarea} from 'react-edit-text'
import 'react-edit-text/dist/index.css'
const NewDashboardPage = () => {
  var user = localStorage.getItem('userType')
  const fullUserType = localStorage.getItem('userTypeFull')
  const [userTypeFull, setUserTypeFull] = useState<any>(
    fullUserType && fullUserType.replace('_', ' ')
  )

  useEffect(() => {
    user === 'admin'
      ? setUserTypeFull('Admin') //Temporary placeholder for admin user type
      : setUserTypeFull(fullUserType && fullUserType.replace('_', ' '))
  }, [fullUserType])

  const [dataObj] = useState([
    {
      name: 'Demo1',
      userTypeFull: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/240/things',
    },
    {
      name: 'Demo2',
      userTypeFull: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/241/things',
    },
    {
      name: 'Demo3',
      userTypeFull: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/242/things',
    },
  ])
  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  const userAvatarImg = toAbsoluteUrl('/media/avatars/300-1.jpg')

  return (
    <div className='row d-flex flex-column-fluid g-0'>
      <div className='col-3 d-flex flex-column flex-column-fluid'>
        <div className='card card-flush shadow me-2 mb-2 px-5 py-5'>
          <div className=' row d-flex flex-column flex-wrap'>
            <div className='col-xs-1 d-flex align-items-center justify-content-center g-3 px-5'>
              <div className='d-flex mw-75 image-input-wrapper image-input-outline'>
                <img
                  src={toAbsoluteUrl('/media/avatars/diasprex/dxp-6.jpg')}
                  className='rounded mw-100'
                  alt='Diaspreex'
                />
              </div>
            </div>

            {/* <div
              className='image-input image-input-outline'
              data-kt-image-input='true'
              style={{backgroundImage: `url('${blankImg}')`}}
            >
            
              <div
                className='image-input-wrapper w-175px h-175px'
                style={{backgroundImage: `url('${userAvatarImg}')`}}
                            ></div>
                                </div> */}

            <div className='col-xs-1 d-flex align-items-center justify-content-center'>
              <div className='justify-content-center'>
                <div className='d-flex mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-4 fw-bolder me-1'>
                    Max Smith
                  </a>
                  {user !== 'basic' && (
                    <a href='#' data-toggle='tooltip' data-placement='top' title='Verified'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen026.svg'
                        className='svg-icon-1 svg-icon-success'
                      />
                    </a>
                  )}
                </div>

                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary  me-1 text-capitalize'>
                    <span className='badge badge-light-success'>
                      {userTypeFull?.replace('_', ' ')}{' '}
                    </span>
                  </a>
                </div>
                <span className='symbol symbol-30px w-30px bg-light me-2'>
                  <img
                    src={toAbsoluteUrl('/media/flags/ghana.svg')}
                    className='fs-6 fw-bold'
                    alt='oppscard'
                    data-toggle='tooltips'
                    title='Ghana'
                    data-bs-placement='bottom'
                  />
                </span>

                {user !== 'sponsor' && (
                  <span className='symbol symbol-30px w-30px bg-light me-2'>
                    <img
                      src={toAbsoluteUrl('/media/flags/united-states.svg')}
                      className='fs-6 fw-bold'
                      alt='oppscard'
                      data-toggle='tooltips'
                      title='United States'
                      data-bs-placement='bottom'
                    />
                  </span>
                )}
              </div>
            </div>
          </div>

          {user !== 'sponsor' && (
            <>
              {' '}
              <div className=' row d-flex g-5'>
                <div className='separator me-0 mb-3'></div>
                <div className='d-flex flex-wrap flex-stack'>
                  <div className='col-sm-6'>
                    <div className='border border-gray-300 border-dashed rounded min-w-100px p-2 me-3 mb-3'>
                      <div className='d-flex align-items-center'>
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr066.svg'
                          className='svg-icon-3 svg-icon-success me-2'
                        />
                        <div className='fs-4 fw-bolder'>$10,500</div>
                      </div>

                      <div className='fw-bold fs-6 text-gray-400'>Total Transfer</div>
                    </div>

                    <div className='border border-gray-300 border-dashed rounded min-w-100px p-2 me-3 mb-3'>
                      <div className='d-flex align-items-center'>
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr065.svg'
                          className='svg-icon-3 svg-icon-danger me-2'
                        />
                        <div className='fs-4 fw-bolder'>5%</div>
                      </div>

                      <div className='fw-bold fs-6 text-gray-400'>Annual Change</div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='border border-gray-300 border-dashed rounded min-w-100px p-2 me-3 mb-3'>
                      <div className='d-flex align-items-center'>
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr066.svg'
                          className='svg-icon-3 svg-icon-success me-2'
                        />
                        <div className='fs-4 fw-bolder'>$60,500</div>
                      </div>

                      <div className='fw-bold fs-6 text-gray-400'>Total Retainer</div>
                    </div>

                    <div className='border border-gray-300 border-dashed rounded min-w-100px p-2 me-3 mb-3'>
                      <div className='d-flex align-items-center'>
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr066.svg'
                          className='svg-icon-3 svg-icon-success me-2'
                        />
                        <div className='fs-4 fw-bolder'>60%</div>
                      </div>

                      <div className='fw-bold fs-6 text-gray-400'>Retainer Change</div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </>
          )}

          <div className='row'>
            <div className='d-flex align-items-center mb-2'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder me-1'>
                Overview
              </a>
            </div>
            <div className='separator me-0 mb-3'></div>
            <div className='mb-0' id='kt_profile_details_view'>
              <div>
                <div className='row mb-2 d-flex align-items-center'>
                  <label className='col-lg-5 fw-bolder '>
                    Industry
                    <i
                      className='fas fa-exclamation-circle ms-1 fs-7'
                      data-bs-toggle='tooltip'
                      title='Phone number must be active'
                    ></i>
                  </label>

                  <div className='col-lg-7'>
                    <EditText defaultValue='Computer Software' />
                  </div>
                </div>
                <div className='row mb-2 d-flex align-items-center'>
                  <label className='col-lg-5 fw-bolder '>Interests</label>

                  <div className='col-lg-7'>
                    <EditText defaultValue='Web Development' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row gy-3 py-3'>
            <label className='col-lg-12 fw-bolder  '>About</label>
            <EditTextarea
              rows={5}
              defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            />
          </div>

          <div className='row gy-3 py-3'>
            <div className='d-flex align-items-center mb-0'>
              <label className='text-gray-800 text-hover-primary fs-6 fw-bolder'>Contact</label>
            </div>
            <div className='separator me-0 mb-3'></div>
            <div className=' mb-5 mb-xl-10' id='kt_profile_details_view'>
              <div>
                <div className='row mb-2'>
                  <label className='col-lg-5 fw-bolder '>
                    Phone
                    <i
                      className='fas fa-exclamation-circle ms-1 fs-7'
                      data-bs-toggle='tooltip'
                      title='Phone number must be active'
                    ></i>
                  </label>

                  <div className='col-lg-7 d-flex align-items-center'>
                    <span className='fs-6 me-2 text-muted'>044 3276 454 935</span>
                  </div>
                </div>
                <div className='row mb-2'>
                  <label className='col-lg-5 fw-bolder '>Address</label>

                  <div className='col-lg-7'>
                    <a href='#' className='fs-6 text-muted'>
                      2777 Vera Cruz Ln N
                    </a>
                  </div>
                </div>
                <div className='row mb-2'>
                  <label className='col-lg-5 fw-bolder '>
                    Email
                    <i
                      className='fas fa-exclamation-circle ms-1 fs-7'
                      data-bs-toggle='tooltip'
                      title='Email address must be current'
                    ></i>
                  </label>

                  <div className='col-lg-7'>
                    <a href='#' className='fs-6 text-muted'>
                      admin@dasprex.com
                    </a>
                  </div>
                </div>
                <div className='row mb-2'>
                  <label className='col-lg-5 fw-bolder '>Diasprex</label>

                  <div className='col-lg-7'>
                    <a href='#' className='fs-6 text-muted'>
                      diasprex.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='card col-9  d-flex flex-column-fluid'>
        {user !== 'sponsor' ? (
          <>
            <Card className='shadow-sm mb-3'>
              <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
                <div className='card-header cursor-pointer'>
                  <div className='card-title m-0'>
                    <h3 className='fw-bolder m-0'>Recent Opportunities</h3>
                  </div>
                </div>

                <div className='card-body p-2 overflow-auto' style={{height: '350px'}}>
                  {dataObj.map((e) => (
                    <Opportunity
                      name={e.name}
                      userTypeFull={e.userTypeFull}
                      title={e.title}
                      detail={e.details}
                      column={4}
                      badgeColor='blue'
                      badgeText='New Opportunity'
                      picSrc={e.src}
                    />
                  ))}
                </div>
              </div>
            </Card>

            <Card className='shadow-sm mb-3'>
              <div className='d-flex align-items-center mb-2 justify-content-end'>
                <a
                  role='button'
                  href='/my_opportunities'
                  className='btn btn-primary text-hover-white fw-bolder'
                >
                  Followed Opportunities
                </a>
              </div>
            </Card>
            <Card className='shadow-sm mb-3'>
              <div className=' overflow-auto mt-5' style={{height: '345px'}}>
                <BillingHistory />
              </div>
            </Card>
          </>
        ) : (
          <>
            <Card className='shadow-sm mb-3'>
              <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
                <div className='card-header cursor-pointer'>
                  <div className='card-title m-0'>
                    <h3 className='fw-bolder m-0'>Your Recent Opportunit Posts</h3>
                  </div>
                </div>

                <div className='card-body p-2 overflow-auto' style={{height: '350px'}}>
                  {dataObj.map((e) => (
                    <Opportunity
                      name={e.name}
                      userTypeFull={e.userTypeFull}
                      title={e.title}
                      detail={e.details}
                      column={4}
                      badgeColor='blue'
                      badgeText='New Opportunity'
                      picSrc={e.src}
                    />
                  ))}
                </div>
              </div>
            </Card>

            <Card className='shadow-sm mb-3'>
              <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
                <div className='card-header cursor-pointer'>
                  <div className='card-title m-0'>
                    <h3 className='fw-bolder m-0'>New Show of Interest</h3>
                  </div>
                </div>

                <div className='card-body p-2 overflow-auto' style={{height: '350px'}}>
                  {dataObj.map((e) => (
                    <Opportunity
                      name={e.name}
                      userTypeFull={e.userTypeFull}
                      title={e.title}
                      detail={e.details}
                      column={4}
                      badgeColor='green'
                      badgeText='New proposal'
                      picSrc={e.src}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </>
        )}

        {/* <div className="d-flex align-items-center mb-2">
                    <a
                        href="my_opportunity"
                        className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                    >

                        Followed Opportunities,
                    </a>

                </div> */}

        {/* <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
                    <div className='card-header cursor-pointer'>
                        <div className='card-title m-0'>
                            <h3 className='fw-bolder m-0'>Recent Remittance Activities</h3>
                        </div>


                    </div>

                    <div className=' overflow-auto' style={{ height: '245px' }}>
                        <BillingHistory />

                    </div>
                </div> */}
      </div>
    </div>
  )
}

export default NewDashboardPage
