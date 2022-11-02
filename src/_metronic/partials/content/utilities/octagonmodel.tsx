import React from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  imgscr: string
  imgcolor: string
  title1: string
  title2?: string
  label: string
  width: string
  height: string
  bgcolor?: string
}

export const OctagonModel: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={`octagon d-flex flex-center h-${props.height} w-${props.width} bg-${props.bgcolor} mx-2`}
    >
      <div className='text-center'>
        <KTSVG
          path={props.imgscr}
          className={`svg-icon-1 svg-icon svg-icon-4tx svg-icon-${props.imgcolor} rotate-180`}
        />
        <div className='mt-1 justify-content-center'>
          <div className='fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center justify-content-center'>
            <div className='min-w-50px' data-kt-countup='true' data-kt-countup-value='35'>
              {props.title1}
            </div>
            {props.title2}
          </div>
          <span className='text-gray-600 fw-bold fs-5 lh-0'>{props.label}</span>
        </div>
      </div>
    </div>
  )
}
