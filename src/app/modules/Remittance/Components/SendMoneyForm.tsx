import { ConfirmModal } from "../../../../_metronic/partials/modals/confirm-action/ConfirmAction";
export const SendMoneyForm = () => {
    const sendMoney = () => {
    return (1+2)
}
  return (
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
    )
}