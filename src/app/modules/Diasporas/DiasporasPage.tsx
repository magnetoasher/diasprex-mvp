import { FC } from "react"
import {Carousel2} from "./components/Carousel2"
import { toAbsoluteUrl } from "../../../_metronic/helpers"
import { FeedsWidget2, FeedsWidget3, FeedsWidget4, FeedsWidget5, FeedsWidget6 } from "../../../_metronic/partials/widgets"
import { DiasporasCard } from "./components/DiasporasCard"
import { Diasp } from "./components/core/_model"
import { UadForm } from "./components/uadform"


export const DiasporasPage: FC<Diasp> = (diasp:Diasp) => {

    const img1 = toAbsoluteUrl('./media/stock/1600x800/img-1.jpg')
    const img2 = toAbsoluteUrl('./media/stock/1600x800/img-3.jpg')
    const img3 = toAbsoluteUrl('./media/stock/1600x800/img-4.jpg')
    return (
    <div className='post d-flex flex-column-fluid' id='kt_diasporas'>
    <div className = 'container-xxl' style={{ margin: 'auto' }}>
        <div className='d-flex  mb-9'>
        <h1 >
            <p className = 'fs-2hx text-dark text-center  mb-5'>African Diasporas</p>
        </h1>
            </div>

            <div className = 'mb-9' style={{ margin: 'auto' }}>
                <Carousel2 img1url={img1} img2url={img2} img3url={img3}/>
        </div>

                <div className='row g-5 g-xl-8 mw-90'>
                    <h2 className='text-gray-800 fw-bolder mb-4'>UNFOUND AFRICAN DIASPORAS</h2>
                    <div className="col-xl-8">
                            <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_4_1'
                      >
                        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
                          <span className='svg-icon toggle-on svg-icon-primary svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='6.0104'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          <span className='svg-icon toggle-off svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='10.8891'
                                y='17.8033'
                                width='12'
                                height='2'
                                rx='1'
                                transform='rotate(-90 10.8891 17.8033)'
                                fill='black'
                              />
                              <rect
                                x='6.01041'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                        </div>
                        <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'>
                          2022
                        </h4>
                      </div>
                      <div id='kt_job_4_1' className='collapse show fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                                    <DiasporasCard
                                        name={diasp.name}
                                        profession={diasp.profession}
                                        rcountry={diasp.rcountry}
                                        afdinsight={diasp.afdinsight}
                                        afcountry={diasp.afcountry }
                                        interest={ diasp.interest}
                                        undergrad={ diasp.undergrad}
                                        grad={ diasp.grad}
                                        summary={ diasp.summary} />
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                        </div>
        <UadForm />
    </div>


                    <div className='col-xl-4'>
                        <h2 className='text-gray-800 fw-bolder mb-4'>NEWS FEED</h2>
        <FeedsWidget2 className='mb-5 mb-xl-8' />

        <FeedsWidget3 className='mb-5 mb-xl-8' />

        <FeedsWidget4 className='mb-5 mb-xl-8' />
        <FeedsWidget5 className='mb-5 mb-xl-8' />

        <FeedsWidget6 className='mb-5 mb-xl-8' />
      </div>
            </div>
            </div>
            </div>

        
)
}