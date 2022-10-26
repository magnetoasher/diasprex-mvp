import {FC} from 'react'
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
import {MonthCollapsible} from '../../../_metronic/partials/content/collapsibles/MonthCollapsible'
import {DiasporasCard} from './components/DiasporasCard'
import {Diasp} from './components/core/_model'
import {InviteUADFriends} from '../../../_metronic/partials'
import {UadForm} from './components/uadform'

export const DiasporasPage: FC<Diasp> = (diasp: Diasp) => {
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
                className='btn btn-light text-dark'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_submit_profile'
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
                className='btn btn-light text-dark'
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

            <div className='m-0'>
              <YearCollapsible currentYear='2022' target='#kt_month_collapse' />
              <div className='mx-10'>
                <MonthCollapsible currentMonth='Jan' target='#kt_job_collapse' />
              </div>
            </div>

            <div className='separator separator-dashed'></div>

            <div id='kt_job_collapse' className='collapse show fs-6 ms-1 mw-100'>
              <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                <DiasporasCard
                  title={diasp.title}
                  name={diasp.name}
                  profession={diasp.profession}
                  rcountry={diasp.rcountry}
                  afdinsight={diasp.afdinsight}
                  afcountry={diasp.afcountry}
                  flag={toAbsoluteUrl(diasp.flag)}
                  interest={diasp.interest}
                  undergrad={diasp.undergrad}
                  grad={diasp.grad}
                  summary={diasp.summary}
                />
              </div>
            </div>
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
