import React from 'react'

export const ViewProposal = () => {
  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_prop_title'
        aria-expanded='true'
        aria-controls='kt_prop_title'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Proposal Title</h3>
        </div>
      </div>
      <div id='kt_prop_title' className='collapse show'></div>

      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_prop_summary'
        aria-expanded='true'
        aria-controls='kt_prop_summary'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Proposal Summary</h3>
        </div>
      </div>
      <div id='kt_prop_summary' className='collapse'></div>
    </div>
  )
}
