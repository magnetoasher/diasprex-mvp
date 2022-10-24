import { FC } from "react"
import { Diasp } from "./core/_model"

export const diaspSideCard:FC<Diasp> = (props:Diasp) => {
  return (
      <div>
          <div className="card card-flush shadow-sm">
    <div className="card-header">
        <h3 className="card-title">props.name</h3>
<div className='row gx-3 d-flex flex-column'>
                            <div className='menu-content pt-8 pb-2'>
                              <span className="menu-section text-dark text-uppercase fw-bolder fs-1 ls-1">{props.title} {props.name}</span>
                              </div>
                                   <h6>
                                   <span className="fs-6 mb-2 text-dark me-3">Resident Country:</span >
                                   <span className="fs-6 mb-2 text-muted">{props.rcountry} </span>
                              </h6>
                              <h6>
                                                       <span className=" fs-6 mb-2 text-dark me-3">Country of Origin:</span >
                                                       <span className=" fs-6 mb-2 text-muted me-3">{props.afcountry} </span>
                                                       <span className='symbol symbol-30px w-30px bg-light me-2'>
                        <img src={props.flag}
                            className = 'fs-6 fw-bold'
                            alt='oppscard'
                            data-toggle='tooltips'
                            title={props.afcountry}
                            data-bs-placement="bottom" />
                    </span>

                                                  </h6>
                     </div>
    </div>
    <div className="card-body py-5">
        Lorem Ipsum is simply dummy text...
    </div>
    <div className="card-footer">
       props.insight
    </div>
</div>
    </div>
  )
}
