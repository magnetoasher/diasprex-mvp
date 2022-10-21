import {useEffect} from 'react'
import {OppEditModalHeader} from './OppEditModalHeader'
import {OppEditModalFormWrapper} from './OppEditModalFormWrapper'

const OppEditModal = () => {
  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [])

  return (
    <>
      <div
        className='modal draggable fade show d-block'
        id='kt_modal_add_user'
        role='dialog'
        tabIndex={-1}
        aria-modal='true'
      >
        {/* begin::Modal dialog */}
        <div className='modal-dialog-centered mw-75' style = {{margin: 'auto'}}>
          {/* begin::Modal content */}
          <div className='modal-content'>
            <OppEditModalHeader />
            {/* begin::Modal body */}
            <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
              <OppEditModalFormWrapper />
            </div>
            {/* end::Modal body */}
          </div>
          {/* end::Modal content */}
        </div>
        {/* end::Modal dialog */}
      </div>
      {/* begin::Modal Backdrop */}
      <div className='modal-backdrop fade show'></div>
      {/* end::Modal Backdrop */}
    </>
  )
}

export {OppEditModal}
