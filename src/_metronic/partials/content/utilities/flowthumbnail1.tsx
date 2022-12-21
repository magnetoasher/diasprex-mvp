import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  classname: string
  label: string
  icon: string
  tagnumber: number
}
export const FlowThumbnail1: FC<Props> = ({classname, label, icon, tagnumber}) => {
  return (
    <>
      <div className={classname}>
        <div className='text-center  position-relative'>
          <img src={toAbsoluteUrl(icon)} className='w-80px mb-3' alt='' />

          <div className='position-absolute top-0 start-0 d-flex flex-center mb-5'>
            <span className='badge badge-circle badge-light fw-bold p-3 me-1 fs-3'>
              {tagnumber}
            </span>
          </div>
          <div className='fs-5 fs-lg-3 fw-bold text-dark'>{label}</div>
        </div>
      </div>
    </>
  )
}
