import {FC} from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  id?: string
  label?: string
  target?: string
  parent?: string
  expand?: string
  control?: string
}

export const KTCollapsible = (props: Props) => {
  return (
    <div className='m-0 mw-100' id={props.id}>
      <div
        className='d-flex align-items-center collapsible py-3 toggle mb-0'
        data-bs-toggle='collapse'
        data-bs-target={props.target}
        data-bs-parent={props.parent}
      >
        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
          <span className='me-3'>
            <KTSVG
              path='/media/icons/duotune/general/gen035.svg'
              className='svg-icon toggle-off svg-icon-primary svg-icon-1'
            />
            <KTSVG
              path='/media/icons/duotune/general/gen036.svg'
              className='svg-icon toggle-on svg-icon-primary svg-icon-1'
            />
          </span>
          <span>
            <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'>
              <a
                role='button'
                data-bs-toggle='collapse'
                href={props.target}
                aria-expanded='false'
                aria-controls={props.control}
              >
                {props.label}
              </a>
            </h4>
          </span>
        </div>
        {/* <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'></h4> */}
      </div>
    </div>
  )
}
