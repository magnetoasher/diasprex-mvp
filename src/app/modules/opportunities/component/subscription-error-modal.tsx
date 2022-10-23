import {useState } from 'react'
import { KTSVG, } from './../../../../_metronic/helpers'




export const SubscriptionRequired = () => {
   
    return (
<div className="modal fade" tabIndex={-1} id='kt_subs_modal'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Subscription Alert</h2>
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
                     <div id="kt_subs_modal_content">
        <p className = 'fs-4 p-6'>It requires paid subscription and ODA agreement. PLease upgrade to an Enabler account. Thank you </p>
    </div>
                    
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
                            data-bs-dismiss="modal"
                        >
                            Upgrade Account
                        </button>
                    </div>
                </div>
            </div>
            </div>
  )
}
