/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

export const InviteUADFriends: FC = () => {
  return (
    <div className='modal fade' id='kt_modal_invite_uad_friends' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>

          <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
            <div className='text-center mb-13'>
              <h1 className='mb-3'>Invite a Friend</h1>

              <div className='text-muted fw-bold fs-5'>
                Invite friends to submit their profile for monthly UAD Featuring
                {/* <a href='#' className='link-primary fw-bolder'>
                  {' '}
                  FAQ Page
                </a> */}
                .
              </div>
            </div>

            <div className='btn btn-light-primary fw-bolder w-100 mb-8'>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
                className='h-20px me-3'
              />
              Invite Gmail Contacts
            </div>

            <div className='separator d-flex flex-center mb-8'>
              <span className='text-uppercase bg-body fs-7 fw-bold text-muted px-3'>or</span>
            </div>

            <textarea
              className='form-control form-control-solid mb-8'
              rows={3}
              placeholder='Type or paste emails here'
            ></textarea>

            <div className='text-center'>
              <button type='submit' className='btn btn-light-primary '>
                Send Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
