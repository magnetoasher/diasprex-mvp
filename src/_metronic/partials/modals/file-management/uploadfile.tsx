import React from 'react'

export const UploadFile = () => {
  return (
    <div className='modal fade' id='kt_modal_upload' tabIndex={-1} aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered mw-650px'>
        <div className='modal-content'>
          <form className='form' action='none' id='kt_modal_upload_form'>
            <div className='modal-header'>
              <h2 className='fw-bold'>Upload files</h2>

              <div className='btn btn-icon btn-sm btn-active-icon-primary' data-bs-dismiss='modal'>
                <span className='svg-icon svg-icon-1'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      opacity='0.5'
                      x='6'
                      y='17.3137'
                      width='16'
                      height='2'
                      rx='1'
                      transform='rotate(-45 6 17.3137)'
                      fill='currentColor'
                    />
                    <rect
                      x='7.41422'
                      y='6'
                      width='16'
                      height='2'
                      rx='1'
                      transform='rotate(45 7.41422 6)'
                      fill='currentColor'
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className='modal-body pt-10 pb-15 px-lg-17'>
              <div className='form-group'>
                <div className='dropzone dropzone-queue mb-2' id='kt_modal_upload_dropzone'>
                  <div className='dropzone-panel mb-4'>
                    <a className='dropzone-select btn btn-sm btn-primary me-2'>Attach files</a>
                    <a className='dropzone-upload btn btn-sm btn-light-primary me-2'>Upload All</a>
                    <a className='dropzone-remove-all btn btn-sm btn-light-primary'>Remove All</a>
                  </div>

                  <div className='dropzone-items wm-200px'>
                    <div className='dropzone-item p-5' style={{display: 'none'}}>
                      <div className='dropzone-file'>
                        <div
                          className='dropzone-filename text-dark'
                          title='some_image_file_name.jpg'
                        >
                          <span data-dz-name=''>some_image_file_name.jpg</span>
                          <strong>
                            (<span data-dz-size=''>340kb</span>)
                          </strong>
                        </div>
                        <div className='dropzone-error mt-0' data-dz-errormessage=''></div>
                      </div>

                      <div className='dropzone-progress'>
                        <div className='progress bg-light-primary'>
                          <div
                            className='progress-bar bg-primary'
                            role='progressbar'
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={0}
                            data-dz-uploadprogress=''
                          ></div>
                        </div>
                      </div>

                      <div className='dropzone-toolbar'>
                        <span className='dropzone-start'>
                          <i className='bi bi-play-fill fs-3'></i>
                        </span>
                        <span
                          className='dropzone-cancel'
                          data-dz-remove=''
                          style={{display: 'none'}}
                        >
                          <i className='bi bi-x fs-3'></i>
                        </span>
                        <span className='dropzone-delete' data-dz-remove=''>
                          <i className='bi bi-x fs-1'></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <span className='form-text fs-6 text-muted'>Max file size is 1MB per file.</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
