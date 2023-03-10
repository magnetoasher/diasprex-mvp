import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {uadFormModel} from './core/_model'

export const DiasporasCard: FC<uadFormModel> = (props: uadFormModel) => {
  return (
    <div className='card border border-2 m-5 mw-100'>
      <div className='row'>
        <div className='card-header g-5 align-middle'>
          <div className='row d-flex flex-row align-middle'>
            <div className='col-4 g-6 text-center'>
              <img src={props?.avatar} className='mw-100 rounded-circle' alt='profile image' />
            </div>
            <div className='col-8 gx-6 '>
              <div className='row gx-3 d-flex flex-column'>
                <div className='menu-content pt-8 pb-2'>
                  <span className='menu-section text-dark text-uppercase fw-bolder fs-1 ls-1'>
                    {`${props?.fName} ${props?.lName}, ${props.grad?.degree}`}
                  </span>
                </div>
                <h6>
                  <span className='fs-6 mb-2 text-dark me-3'>Country of Residence:</span>
                  <span className='fs-6 mb-2 text-muted'>{props?.countryRes} </span>
                  <span className='symbol symbol-30px w-30px bg-light me-2'>
                    <img
                      src={toAbsoluteUrl(`/media/flags/${props.countryRes?.toLowerCase()}.svg`)}
                      className='fs-6 fw-bold'
                      alt={`${props.countryRes?.toLowerCase()}`}
                      data-toggle='tooltips'
                      title={props.countryRes?.toLowerCase().replace('-', ' ')}
                      data-bs-placement='bottom'
                    />
                  </span>
                </h6>
                <h6>
                  <span className=' fs-6 mb-2 text-dark me-3'>Country of Origin:</span>
                  <span className=' fs-6 mb-2 text-muted me-3'>
                    {props.countryOrig?.replace('-', ' ')}
                  </span>
                  <span className='symbol symbol-30px w-30px bg-light me-2'>
                    <img
                      src={toAbsoluteUrl(`/media/flags/${props.countryOrig?.toLowerCase()}.svg`)}
                      className='fs-6 fw-bold'
                      alt={`${props.countryOrig?.toLowerCase()}`}
                      data-toggle='tooltips'
                      title={props.countryOrig?.toLowerCase().replace('-', ' ')}
                      data-bs-placement='bottom'
                    />
                  </span>
                </h6>
              </div>

              <div className='row d-flex flex column '>
                <div className='menu-content pt-8 pb-2'>
                  <span className='menu-section text-dark text-uppercase fw-bolder fs-2 ls-1'>
                    EDUCATION
                  </span>
                </div>
                <div className='separator mb-3'></div>

                <div className='mb-6'>
                  <p className='fs-6 mb-2 text-dark'>{props.grad?.inst}</p>
                  <p className='fs-6 mb-2 text-muted'>
                    {props.grad?.degree} {props.grad?.field}
                  </p>
                </div>
                <div className='py-1'>
                  <p className='fs-6 mb-2 text-dark'>{props.undergrad?.inst}</p>
                  <p className='fs-6 mb-2 text-muted'>
                    {props.undergrad?.degree} {props.undergrad?.field}
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'></div>
      <div className='card-body'>
        <div className='row'>
          <div className='menu-content pt-4 pb-2'>
            <span className='menu-section text-dark text-uppercase fw-bolder fs-2 ls-1'>
              Professional Summary
            </span>
          </div>
          <div className='separator mb-3'></div>

          <div
            className='scroll pe-5'
            data-kt-scroll='true'
            data-kt-scroll-height='15rem'
            data-kt-scroll-wrappers='#kt_oda_modal'
            data-kt-scroll-dependencies='#kt_js_header, #kt_oda_modal, #kt_header'
            data-kt-scroll-offset='100px'
          >
            <div>
              <p className='mb-2 fw-light'>{props.summary}</p>
            </div>
            {/* <div id="kt_oda_modal_content">
        ODA content goes here...
    </div> */}
          </div>
        </div>
        <div className='row'>
          <div className='menu-content pt-4 pb-2'>
            <span className='menu-section text-dark text-uppercase fw-bolder fs-2 ls-1'>
              Professional Interest
            </span>
          </div>
          <div className='separator mb-3'></div>
          <div>
            <ul className='px-10'>
              {props.interest?.map((string) => (
                <li className='mb-2 fw-light'> {string} </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='menu-content pt-4 pb-2'>
            <span className='menu-section text-dark text-uppercase fw-bolder fs-2 ls-1'>
              Insights
            </span>
          </div>
          <div className='separator mb-3'></div>
          <div>
            <span className='mb-2 fw-light'>{props.insightAfrica}</span>
          </div>
        </div>

        <div className='row'>
          <div className='menu-content pt-4 pb-2'>
            <span className='menu-section text-dark text-uppercase fw-bolder fs-2 ls-1'>
              Contact
            </span>
          </div>
          <div className='separator mb-3'></div>
          <div>
            <span className='mb-2 fw-light me-3'>Email: {props.email}</span>
            <span className='mb-2 fw-light me-3'>Phone: {props.phone}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
