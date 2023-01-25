import {FC} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
type Props = {
  id: string
  headertext: string
  title: string
  labeltext: string
  placeholder: string
}
export const VerificationModal: FC<Props> = ({headertext, id, title, labeltext, placeholder}) => {
  return (
    <div className='modal fade' id={id} tabIndex={-1} aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered mw-650px'>
        <div className='modal-content'>
          <div className='modal-header flex-stack'>
            <h2>{headertext}</h2>

            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG
                path='/media/icons/duotune/arrows/arr061.svg'
                className='svg-icon svg-icon-2x'
              />
            </div>
          </div>

          <div className='modal-body scroll-y pt-10 pb-15 px-lg-17'>
            <div className='py-5'>
              <h3 className='text-dark fw-bold fs-3 mb-5'>{title}</h3>

              <div className='text-muted fw-semibold mb-10'>{labeltext}</div>

              <form className='form'>
                <div className='mb-10 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder={placeholder}
                    name='mobile'
                  />
                </div>

                <div className='d-flex flex-center'>
                  <button type='reset' className='btn btn-light me-3' data-bs-dismiss='modal'>
                    Cancel
                  </button>
                  <button type='submit' className='btn btn-primary'>
                    <span className='indicator-label'>Submit</span>
                    <span className='indicator-progress'>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
