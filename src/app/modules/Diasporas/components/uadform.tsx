import {Input, Form} from 'antd'
import {KTSVG} from '../../../../_metronic/helpers'
import {CountryList} from '../../../../_metronic/partials/content/selectionlists'

export const UadForm = () => {
  const handleSubmit = () => {}

  const styleslabel = {
    display: 'flex',
    justifyContent: 'flex-end',
    fontWeight: 600,
  }
  const [form] = Form.useForm()
  const onSubmit = () => {
    form.validateFields().then(() => {
      console.log('submitted')
    })
  }
  return (
    <div className='modal fade' id='kt_modal_submit_profile' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end' id='kt_oda_header'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>
          <div className='text-center mb-13'>
            <h1 className='mb-3'>Submit Your Profile</h1>

            <div className='text-muted fw-bold fs-5'>
              You are submitting your profile for Diasprex's monthly Feature
              {/* <a href='#' className='link-primary fw-bolder'>
                  {' '}
                  FAQ Page
                </a> */}
              .
            </div>
          </div>
          <div
            className='scroll pe-5'
            data-kt-scroll='true'
            data-kt-scroll-height='60rem'
            data-kt-scroll-wrappers='#kt_modal_submit_profile'
            data-kt-scroll-dependencies='#kt_js_header, #kt_modal_submit_profile, #kt_oda_header'
            data-kt-scroll-offset='100px'
          >
            <div className='modal-body border border-3 scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
              <form className='form'>
                <div className='mw-900px'>
                  {/* <!--begin::Input group--> */}

                  <div className='mb-10'>
                    <label className='form-label required text-primary fw-bold fs-6 mb-2'>
                      Enter your firstname
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder="Recipient's Firstname"
                    />
                  </div>

                  <div className='mb-10'>
                    <label className='form-label required text-primary fw-bold fs-6 mb-2'>
                      Enter your lastname
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder="Recipient's Lastname"
                    />
                  </div>

                  <div className='mb-10'>
                    <label className='form-label text-primary fw-bold fs-6 mb-2'>
                      Enter Diasprex ID if you are a member
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder="Recipient's Lastname"
                    />
                  </div>

                  <div className=' mb-10'>
                    <label className='form-label text-primary required fw-bold fs-6 mb-2'>
                      Please select your country of residence
                    </label>
                    <select className='form-select form-select-white' aria-label='country'>
                      <CountryList />
                    </select>
                  </div>

                  <div className=' mb-10'>
                    <label className='form-label text-primary required fw-bold fs-6 mb-2'>
                      Please select your country of origin
                    </label>
                    <select className='form-select form-select-white' aria-label='country'>
                      <CountryList />
                    </select>
                  </div>

                  <div className='mb-10'>
                    <label className='form-label text-primary fw-bold fs-6 mb-2'>
                      Please enter your undergraduate information
                    </label>
                    <div className='input-group'>
                      <input type='text' className='form-control me-2' placeholder='Institution' />
                      <input
                        type='text'
                        className='form-control me-2'
                        placeholder='Field of study'
                      />
                      <select
                        className='form-select form-select-white me-2'
                        aria-label='country'
                        defaultValue='Degree'
                      >
                        <option> B.S</option>
                        <option> B.A</option>
                        <option> HND</option>
                        <option> OND</option>
                        <option> Associate</option>
                      </select>
                    </div>
                  </div>

                  <div className='mb-10'>
                    <label className='form-label text-primary fw-bold fs-6 mb-2'>
                      Please enetr your graduate school information if applicable
                    </label>
                    <div className='input-group'>
                      <input type='text' className='form-control me-2' placeholder='Institution' />
                      <input
                        type='text'
                        className='form-control me-2'
                        placeholder='Field of study'
                      />
                      <select
                        className='form-select form-select-white me-2'
                        aria-label='country'
                        defaultValue='Degree'
                      >
                        <option> Ph.D</option>
                        <option> MS</option>
                        <option> MD</option>
                        <option> J.D</option>
                        <option> MBA</option>
                      </select>
                    </div>
                  </div>
                  <div className='input-group d-flex flex-column mb-2'>
                    <label className='form-label required text-primary fw-bold fs-6 mb-2 text-primary'>
                      Please enter your professional summary (500 words max)
                    </label>
                  </div>

                  <textarea
                    className='form-control mb-8'
                    rows={5}
                    placeholder='Type your professional summary'
                  ></textarea>

                  <div className='mb-10'>
                    <label className='form-label required text-primary fw-bold fs-6 mb-2'>
                      Please list up to 4 professional interest
                    </label>
                    <div className='input-group'>
                      <input type='text' className='form-control me-2' placeholder='Interest 1' />
                      <input type='text' className='form-control me-2' placeholder='Interest 2' />
                      <input type='text' className='form-control me-2' placeholder='Interest 3' />
                      <input type='text' className='form-control me-2' placeholder='Interest 4' />
                    </div>
                  </div>

                  <div className='input-group d-flex mb-2'>
                    <label className='form-label text-primary'>
                      Your Insight on Africa's Furture
                    </label>
                  </div>

                  <textarea
                    className='form-control mb-8'
                    rows={3}
                    placeholder='Type your comment here'
                  ></textarea>

                  {/* <!--end::Input group--> */}
                </div>
                <div className='form-footer'>
                  <div className='text-center pt-15'>
                    <button className='btn btn-light me-2'>Cancel</button>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
