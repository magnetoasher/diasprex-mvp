import React from 'react'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

export const TrustedBy = () => {
  return (
    <div>
      <div className='d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9 mt-10'>
        <div className='text-center mb-1 mb-lg-2'>
          <h1 className='text-dark lh-base fw-bold fs-2x fs-lg-3x mb-15'>
            Trusted By Global Leading Institutions
          </h1>
        </div>

        <div className='d-flex flex-center flex-wrap position-relative px-5'>
          <div className='d-flex flex-center m-3 m-md-6' data-bs-toggle='tooltip' title='Fujifilm'>
            <img
              src={toAbsoluteUrl('/media/svg/brand-logos/fujifilm.svg')}
              className='mh-30px mh-lg-40px'
              alt=''
            />
          </div>

          <div className='d-flex flex-center m-3 m-md-6' data-bs-toggle='tooltip' title='Vodafone'>
            <img
              src={toAbsoluteUrl('/media/svg/brand-logos/vodafone.svg')}
              className='mh-30px mh-lg-40px'
              alt=''
            />
          </div>

          <div
            className='d-flex flex-center m-3 m-md-6'
            data-bs-toggle='tooltip'
            title='KPMG International'
          >
            <img
              src={toAbsoluteUrl('/media/svg/brand-logos/kpmg.svg')}
              className='mh-30px mh-lg-40px'
              alt=''
            />
          </div>

          <div className='d-flex flex-center m-3 m-md-6' data-bs-toggle='tooltip' title='Nasa'>
            <img
              src={toAbsoluteUrl('/media/svg/brand-logos/nasa.svg')}
              className='mh-30px mh-lg-40px'
              alt=''
            />
          </div>

          <div
            className='d-flex flex-center m-3 m-md-6'
            data-bs-toggle='tooltip'
            title='Aspnetzero'
          >
            <img
              src={toAbsoluteUrl('/media/svg/brand-logos/aspnetzero.svg')}
              className='mh-30px mh-lg-40px'
              alt=''
            />
          </div>

          <div
            className='d-flex flex-center m-3 m-md-6'
            data-bs-toggle='tooltip'
            title='AON - Empower Results'
          >
            <img
              src={toAbsoluteUrl('/media/svg/brand-logos/aon.svg')}
              className='mh-30px mh-lg-40px'
              alt=''
            />
          </div>

          <div
            className='d-flex flex-center m-3 m-md-6'
            data-bs-toggle='tooltip'
            title='Hewlett-Packard'
          >
            <img
              src={toAbsoluteUrl('/media/svg/brand-logos/hp-3.svg')}
              className='mh-30px mh-lg-40px'
              alt=''
            />
          </div>

          <div className='d-flex flex-center m-3 m-md-6' data-bs-toggle='tooltip' title='Truman'>
            <img
              src={toAbsoluteUrl('/media/svg/brand-logos/truman.svg')}
              className='mh-30px mh-lg-40px'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}
