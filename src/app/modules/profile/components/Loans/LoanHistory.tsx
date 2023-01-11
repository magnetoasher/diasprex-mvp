/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { ConfirmModal } from '../../../../../_metronic/partials/modals/confirm-action/ConfirmAction'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'

type Props = {
  className: string
}

export const LoanHistory: React.FC<Props> = ({ className }) => {
  const makeLoanPayment = () => {
    return (1+2)
}
  return (
    
    <div className={`card ${className}`}>
      {/* begin::Header */}
                 {/* Begin Payment Button */}
      <div className='d-flex flex-row-reverse'>
        <button type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_4"
>
         Make Payment
        </button>
            
      <ConfirmModal
        id="kt_modal_4"
        title1='Loan Payment'
        title2='You are leaving Diasprex to a third party site'
        confirm='Proceed'
        classname = "btn btn-primary"
                    ConfirmHandler={async () => await makeLoanPayment()} />
        </div>
       
      
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Loan History</span>
          <span className='text-muted mt-1 fw-bold fs-7'>Over 500 entries</span>
        </h3>
      </div>
                

      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted bg-light'>
                <th className='ps-4 min-w-300px rounded-start'>Date</th>
                <th className='min-w-125px'>Principal</th>
                <th className='min-w-125px'>Interest</th>
                <th className='min-w-200px'>Balance</th>
                <th className='min-w-150px'>Download</th>
                
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        01 Oct 2022
                      </a>
                    </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $8,000,000
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $5,400
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $5,000,210
                  </a>
                </td>
                <td className='text-center'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        01 Nov 2022
                      </a>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $8,750,000
                  </a>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $7,400
                  </a>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $6,000,125
                  </a>
                  
                </td>
               
                <td className='text-center'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        01 Dec 2022
                      </a>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $8,000,000
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $2,500
                  </a>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $7,200,132
                  </a>
                  <span className='text-muted fw-bold text-muted d-block fs-7'>Paid</span>
                </td>
                
                <td className='text-center'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                   
                    
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        01 Jan 2023
                      </a>
                     
                    </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $700,000
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $7,760
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    The Hill
                  </a>
                 
                </td>
                
                <td className='text-center'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                   PDF
                  </a>
                 
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        01 Feb 2023
                      </a>
                    </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $1,320,000
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $6,250
                  </a>
                
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $ 800,568
                  </a>
                
                </td>
                <td className='text-center'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    PDF
                  </a>
                </td>
              </tr>

               <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        01 Mar 2023
                      </a>
                    </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $3,320,000
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $5,250
                  </a>
                
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $ 1, 800,568
                  </a>
                
                </td>
                <td className='text-center'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    PDF
                  </a>
                </td>
              </tr>

               <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        01 Apr 2023
                      </a>
                    </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $7,320,000
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $10,250
                  </a>
                
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $ 5, 800,568
                  </a>
                
                </td>
                <td className='text-center'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    PDF
                  </a>
                </td>
              </tr>

               <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        01 May 2023
                      </a>
                    </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $2,320,000
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $6,250
                  </a>
                
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $ 1, 800,568
                  </a>
                
                </td>
                <td className='text-center'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    PDF
                  </a>
                </td>
              </tr>

               <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    
                      <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                        01 Jun 2023
                      </a>
                    </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $6,320,000
                  </a>
                 
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $9,250
                  </a>
                
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                    $ 4,800,568
                  </a>
                
                </td>
                <td className='text-center'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    PDF
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}
