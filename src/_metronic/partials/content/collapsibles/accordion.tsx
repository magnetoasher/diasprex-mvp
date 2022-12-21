import React from 'react'
type Props = {
  id?: string
  subid: string
  label?: string
  target?: string
  parent?: string
  expand?: boolean
  control?: string
  content?: any
}
export const Accordion = (props: Props) => {
  return (
    <div className='accordion' id={props.id}>
      <div className='accordion-item'>
        <h2 className='accordion-header' id={props.subid}>
          <button
            className='accordion-button fs-4 fw-semibold'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={props.target}
            aria-expanded={props.expand}
            aria-controls={props.control}
          >
            {props.label}
          </button>
        </h2>
        <div
          id='kt_accordion_1_body_1'
          className='accordion-collapse collapse show'
          aria-labelledby={props.subid}
          data-bs-parent={`#${props.id}`}
        >
          <div className='accordion-body'>{props.content}</div>
        </div>
      </div>
    </div>
  )
}
