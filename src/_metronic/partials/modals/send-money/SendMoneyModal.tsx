import { FC } from "react";
import { ConfirmModal } from "../confirm-action/ConfirmAction";
import { toAbsoluteUrl } from "../../../helpers";
import { KTSVG } from "../../../helpers";
import {Modal} from 'react-bootstrap'



export const SendMoneyModal:FC = () => {
  const sendMoney = () => { }
     return (
       <div className='modal fade' id='kt_send_money_modal' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>

          <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
            <div className='text-center mb-13'>
              <h1 className='mb-3'>Send Money</h1>

              <div className='text-muted fw-bold fs-5'>
                You are sending money through a third party MTO partner
                {/* <a href='#' className='link-primary fw-bolder'>
                  {' '}
                  FAQ Page
                </a> */}
                .
              </div>
            </div>

               <>
                 <form  className='form'>
    
<div className="mw-900px">
    {/* <!--begin::Input group--> */}
  
<div className="mb-10">
  <label className="form-label">Enter the recipient's firstname</label>
  <input
    type="text"
    className="form-control"
    placeholder="Recipient's Firstname"
  />
            </div>
            
            <div className="mb-10">
  <label className="form-label">Enter the recipient's lastname</label>
  <input
    type="text"
    className="form-control"
    placeholder="Recipient's Lastname"
  />
            </div>
            
             <div className="mb-10">
  <label className="form-label">Enter the recipient's Diasprex ID</label>
  <input
    type="text"
    className="form-control"
    placeholder="Recipient's Lastname"
  />
                </div>
                
            <div className=" mb-10">
                <label className="form-label">Select recipient's country</label>
<select className="form-select form-select-white" aria-label="country">
  <option>Recipient's Country</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>
            
<div className="mb-10">
                <label className="form-label">Enter the amount to send</label>
                <div className = 'input-group'>
    <span className="input-group-text"><i className="bi bi-graph-down fs-2"></i></span>
    <input type="text" className="form-control" placeholder="Amount in US dollar"/>
                    <span className="input-group-text">.00</span>
                    </div>
            </div>
            
            <div className="mb-10">
                <label className="form-label">Percent to retain in Diasprex</label>
                <div className = 'input-group'>
    <span className="input-group-text"><i className="bi bi-graph-down fs-2"></i></span>
    <input type="text" className="form-control" placeholder="Percent to retain"/>
                    <span className="input-group-text">%</span>
                    </div>
                     </div>
              
                     <div className='separator d-flex flex-center mb-8'>
              <label className="form-label">Comments</label>
            </div>

            <textarea
              className='form-control form-control-solid mb-8'
              rows={3}
              placeholder='Type your comment here'
            ></textarea>
{/* <!--end::Input group--> */}
                </div>
                <div className='form-footer'>
                     <div className='text-center pt-15'>
          <button className = 'btn btn-light me-2'>
            Discard
          </button>
        <button type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_3"
>
         Proceed
        </button>
            
      <ConfirmModal
        id="kt_modal_3"
        title1='Money Transfer'
        title2='Are you sure you want to send money'
        confirm='Send'
        classname = "btn btn-primary"
                    ConfirmHandler={async () => await sendMoney()} />
                </div>
                   </div>
      </form>
               </>

          </div>
        </div>
         </div>
    </div>
  )

               
}