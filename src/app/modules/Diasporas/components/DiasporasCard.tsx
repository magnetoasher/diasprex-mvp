import { FC } from "react"

import { Diasp } from './core/_model'

export const DiasporasCard: FC<Diasp> = (props:Diasp) => {
     return (
<>
<div className="card">
  <div className="card-body">
                     <h2 className="card-title font-weight-bold">{props.title} {props.name}</h2>
                     <h6 className="card-subtitle mb-2 text-muted">{props.rcountry}</h6>
                     <h6 className="card-subtitle mb-2 text-muted">{props.afcountry}</h6>
                     <h6 className="card-subtitle mb-2 text-muted">{props.rcountry}</h6>
                     <h4 className="card-subtitle mb-2">{props.grad?.institution}</h4>
                     <h6 className="card-subtitle mb-2 text-muted">{props.grad?.degree}</h6>
                     <h4 className="card-subtitle mb-2 text-muted">{props.undergrad?.institution}</h4>
                     <h6 className="card-subtitle mb-2 text-muted">{props.undergrad?.degree}</h6>
                     <h6 className="card-subtitle mb-2 text-muted">{props.summary}</h6>
                     <h6 className="card-subtitle mb-2 text-muted">{props.interest}</h6>
                    <p className="card-text font-italic"><span className='font-weight-bold'>INSIGHT: </span>
                         <span>{props.afdinsight}</span></p>
  </div>
</div>
        </>
    )
}