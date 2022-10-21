import { FC } from 'react'

type Props = {
    title?: string
    name: string
    proftitle: string
    afdinsight: string
    rcountry: string
}

export const SideCard:FC<Props> = (props:Props) => {
    return (
        <>
<div className="card" style={{width: '18rem'}}>
  <div className="card-body">
                    <h2 className="card-title font-weight-bold">{props.title } {props.name}</h2>
                    <h4 className="card-subtitle mb-2">{props.proftitle}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{props.rcountry}</h6>
                    <p className="card-text font-italic"><span className='font-weight-bold'>Insigt: </span>
                    <span>{props.afdinsight}</span></p>
    <a href="#" className="card-link">Contact</a>
  </div>
</div>
        </>
    )
}