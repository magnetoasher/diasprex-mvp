import {useState } from 'react'
import {KTSVG} from './../../../../_metronic/helpers'

export const OppsDA = (props: any) => {
  return (
    <div className="modal fade" tabIndex={-1} id='kt_oda_modal'>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Opportunity Disclosure Agreement</h5>
            <div
              className="btn btn-icon btn-sm btn-active-light-primary ms-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <KTSVG
                path="/media/icons/duotune/arrows/arr061.svg"
                className="svg-icon svg-icon-2x"
              />
            </div>
          </div>
            {/* <!--begin::Scroll--> */}
          <div className="scroll pe-5"
            data-kt-scroll="true"
            data-kt-scroll-height="18rem"
            data-kt-scroll-wrappers="#kt_oda_modal"
            data-kt-scroll-dependencies="#kt_js_header, #kt_oda_modal, #kt_header"
            data-kt-scroll-offset="100px"
          >
            <div id="kt_oda_modal_content">
                ODA content goes here...
            </div>
          </div>
        {/* <!--end::Scroll--> */}
                  
          <div className="modal-footer">
            <button
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
            >
                Cancel
            </button>
            <button type="submit"
              className= "btn btn-primary"
              onClick = {props.OnDetails}
              data-bs-dismiss="modal"
            >
              Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
