import {useEffect, useState} from 'react'
import {useDispatch, connect, ConnectedProps} from 'react-redux'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {ListsWidget6, ChartsWidget3} from '../dashboard/clientswidgets'
import {Card, Row} from 'antd'
import {EditText, EditTextarea} from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import {ITransArrayModel} from '../../modules/Remittance/Components/Preferences/PreferencesModel'
import EnablerOpportunityCard from '../../modules/opportunities/EnablerOpportunityCard'
import SponsorOpportunityCard from '../../modules/opportunities/SponsorsOpportunityCard'
import {SponsorProposalCard} from '../../modules/proposals/components/SponsorProposalCard'
import * as opps from '../../modules/opportunities/redux/OpportunityRedux'
import {RootState} from '../../../setup'
import {Opps} from '../../modules/apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import {ListLoading} from '../../modules/apps/admin-mgt-apps/core/loading/ListLoading'
import EnablerOpportunityCard2 from '../../modules/opportunities/EnablerOpportunityCard2'

const mapState = (state: RootState) => ({opps: state.opps})
const connector = connect(mapState, opps.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const NewDashboardPage: React.FC<PropsFromRedux> = (props) => {
  const userType = localStorage.getItem('userType')
  const userTypeFull = localStorage.getItem('userTypeFull')
  const [userLabel, setUserLabel] = useState<any>(userTypeFull)
  const dispatch = useDispatch()
  const [recentOpps, setRecentOpps] = useState<Opps[]>([])
  const query = {
    items_per_page: 5,
    page: 1,
  }

  const userColor = {
    enabler: {
      basic: '#0274d1',
      standard: '#069e09',
      super: '#d19a02',
      business: '#7e02d1',
    },
    sponsor: {
      basic: '#0274d1',
      silver: '#069e09',
      gold: '#d19a02',
      diamond: '#7e02d1',
    },
  }
  const userBadgeColor =
    userType === 'sponsor' ? 'primary' : userType === 'admin' ? 'info' : 'success'

  useEffect(() => {
    userType === 'admin'
      ? setUserLabel('Admin') //Temporary placeholder for admin user type
      : setUserLabel(userTypeFull)
  }, [userTypeFull, userType])

  useEffect(() => {
    dispatch(props.getAllOppsRequest(query))
  }, [])

  useEffect(() => {
    setRecentOpps(props.opps.opps?.data)
  }, [props.opps])

  const [sponsoroppsdataObj] = useState([
    {
      category: 'Demo 1',
      dealtype: 'Equity Financing',
      title: 'This is title',
      summary: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/192/140',
    },
    {
      category: 'Demo 2',
      dealtype: 'Debt Financing',
      title: 'This is title',
      summary: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/193/140',
    },
    {
      category: 'Nigeria',
      dealtype: 'Crowfunding',
      title: 'This is title',
      summary: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/194/140',
    },
    {
      category: 'Demo 4',
      dealtype: 'Partnership',
      title: 'This is title',
      summary: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/195/140',
    },
  ])

  const [propsdataObj] = useState([
    {
      propcountry: 'United States',
      propenabler: 'Enabler 1',
      title: 'This is title',
      summary: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/192/140',
    },
    {
      propcountry: 'France',
      propenabler: 'Enabler 2',
      title: 'This is title',
      summary: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/193/140',
    },
    {
      propcountry: 'United Kingdom',
      propenabler: 'Enabler 3',
      title: 'This is title',
      summary: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/194/140',
    },
    {
      propcountry: 'Canada',
      propenabler: 'Enabler 4',
      title: 'This is title',
      summary: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/195/140',
    },
  ])

  return (
    <div className='row d-flex flex-column-fluid g-0'>
      <div className='col-sm-3'>
        <div className='card card-flush shadow me-2 mb-2 px-5 py-5'>
          <div className=' row d-flex flex-column flex-wrap'>
            <div className='col-xs-1 d-flex align-items-center justify-content-center g-3 px-5'>
              <div className='d-flex mw-75 image-input-wrapper image-input-outline'>
                <img
                  src={
                    userType !== 'sponsor'
                      ? toAbsoluteUrl('/media/avatars/diasprex/dxp-6.jpg')
                      : toAbsoluteUrl('/media/logos/megold-logo.png')
                  }
                  className='rounded mw-100'
                  alt='Diaspreex'
                />
              </div>
            </div>

            <div className='col-xs-1 d-flex justify-content-center'>
              <div className='justify-content-center'>
                <div className='d-flex mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-4 fw-bolder me-1'>
                    {userType !== 'sponsor' ? 'Max Smith' : 'MeGOLD Technology'}
                  </a>
                  {userTypeFull !== 'basic_enabler' && (
                    <a href='#' data-toggle='tooltip' data-placement='top' title='Verified'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen026.svg'
                        className='svg-icon-1 svg-icon-success'
                      />
                    </a>
                  )}
                </div>

                <div className='d-flex justify-content-center align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary  me-1 '>
                    <span className={`badge badge-light-${userBadgeColor} text-capitalize`}>
                      {userLabel?.replace('_', ' ') || ''}
                    </span>
                  </a>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <span className='symbol symbol-30px w-30px bg-light me-2'>
                    <img
                      src={toAbsoluteUrl('/media/flags/ghana.svg')}
                      className='fs-6 fw-bold'
                      alt='ghana'
                      data-toggle='tooltips'
                      title='Ghana'
                      data-bs-placement='bottom'
                    />
                  </span>
                  {userType !== 'sponsor' && (
                    <span className='symbol symbol-30px w-30px bg-light me-2'>
                      <img
                        src={toAbsoluteUrl('/media/flags/united states.svg')}
                        className='fs-6 fw-bold'
                        alt='united states'
                        data-toggle='tooltips'
                        title='United States'
                        data-bs-placement='bottom'
                      />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {userType === 'sponsor' ? (
            <>
              <div className=' row d-flex g-5'>
                <div className='separator me-0 mb-3'></div>
                <div className='d-flex flex-wrap flex-stack m-auto'>
                  <div className='col-sm-6'>
                    <div className='border border-gray-300 border-dashed rounded min-w-100px p-2 me-3 mb-3'>
                      <div className='d-flex align-items-center'>
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr066.svg'
                          className='svg-icon-3 svg-icon-success me-2'
                        />
                        <div className='fs-4 fw-bolder'>5</div>
                      </div>

                      <div className='fw-bold fs-6 text-gray-400'>Total Opps</div>
                    </div>

                    <div className='border border-gray-300 border-dashed rounded min-w-100px p-2 me-3 mb-3'>
                      <div className='d-flex align-items-center'>
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr066.svg'
                          className='svg-icon-3 svg-icon-success me-2'
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
                        <div className='fs-4 fw-bolder'>$65M</div>
                      </div>

                      <div className='fw-bold fs-6 text-gray-400'>Total Deals</div>
                    </div>

                    <div className='border border-gray-300 border-dashed rounded min-w-100px p-2 me-3 mb-3'>
                      <div className='d-flex align-items-center'>
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr066.svg'
                          className='svg-icon-3 svg-icon-success me-2'
                        />
                        <div className='fs-4 fw-bolder'>60%</div>
                      </div>

                      <div className='fw-bold fs-6 text-gray-400'>Annual Change</div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </>
          ) : (
            <>
              <>
                <div className=' row d-flex g-5'>
                  <div className='separator me-0 mb-3'></div>
                  <div className='d-flex flex-wrap flex-stack m-auto'>
                    <div className='col-sm-6'>
                      <div className='border border-gray-300 border-dashed rounded min-w-100px p-2 me-3 mb-3'>
                        <div className='d-flex align-items-center'>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr065.svg'
                            className='svg-icon-3 svg-icon-danger me-2'
                          />
                          <div className='fs-4 fw-bolder'>$125</div>
                        </div>

                        <div className='fw-bold fs-6 text-gray-400'>Last Retainer</div>
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
                          <div className='fs-4 fw-bolder'>$15,000</div>
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
        {userType !== 'sponsor' ? (
          <>
            <Card className='shadow-sm mb-3'>
              <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
                <div className='card-header cursor-pointer'>
                  <div className='card-title m-0'>
                    <h3 className='fw-bolder m-0 text-uppercase'>Recent Opportunities</h3>
                  </div>
                </div>

                <div className='card-body p-2 overflow-auto' style={{height: '500px'}}>
                  {props.opps.isLoading ? (
                    <ListLoading />
                  ) : (
                    recentOpps?.map((oppObject) => (
                      <EnablerOpportunityCard2 opp={oppObject} dashboard={true} />
                    ))
                  )}
                </div>
              </div>
            </Card>

            <Card className='shadow-sm mb-3'>
              <div className='d-flex align-items-center mb-2 justify-content-end'>
                <a
                  role='button'
                  href='/my_opportunities'
                  className='btn btn-primary text-uppercase text-hover-white fw-bolder'
                >
                  Followed Opportunities
                </a>
              </div>
            </Card>
            <div className=' card d-flex gb-gray-200 shadow-sm mb-3'>
              <div className='row d-flex mt-5 g-xl-5'>
                <div className='col-xl-6 d-flex justify-content-center '>
                  <ChartsWidget3
                    className='card-xl-stretch mb-xl-8'
                    title='Remittance Savings Trend'
                    subtitle='Average $100 per month'
                    freq='Month'
                    savings={[30, 40, 40, 90, 90, 70, 70]}
                    chartheight={350}
                    chartcategories={['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
                  />
                </div>
                <div className='col-xl-6 d-flex justify-content-center'>
                  <ListsWidget6
                    className='card-xl-stretch mb-xl-8'
                    title='Recent Remittance Transactions'
                    trans={ITransArrayModel}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Card className='shadow-sm mb-3'>
              <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
                <div className='card-header cursor-pointer'>
                  <div className='card-title m-0'>
                    <h3 className='fw-bolder m-0'>Your Recent Opportunity Posts</h3>
                  </div>
                </div>

                <div className='card-body p-2 overflow-auto' style={{height: '350px'}}>
                  {sponsoroppsdataObj.map((e) => (
                    <SponsorOpportunityCard
                      category={e.category}
                      dealtype={e.dealtype}
                      title={e.title}
                      summary={e.summary}
                      dashboard={true}
                      badgeColor='info'
                      status='Publication Status'
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
                    <h3 className='fw-bolder m-0'>New Proposals</h3>
                  </div>
                </div>

                <div className='card-body p-2 overflow-auto' style={{height: '350px'}}>
                  {propsdataObj.map((e) => (
                    <SponsorProposalCard
                      propenabler={e.propenabler}
                      propcountry={e.propcountry}
                      proptitle={e.title}
                      propsummary={e.summary}
                      badgeColor='info'
                      status='New'
                      dashboard={true}
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

export default connector(NewDashboardPage)
