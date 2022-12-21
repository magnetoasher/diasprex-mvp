/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../../_metronic/helpers'
import {Dropdown1} from '../../../../_metronic/partials/content/dropdown/Dropdown1'

type Props = {
  title: string
  className: string
  trans: {
    tDate: string[]
    tType: string[]
    tAmount: number[]
  }
}

const ListsWidget5: React.FC<Props> = (props: Props) => {
  return (
    <div className={`card ${props.className}`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bolder mb-2 text-dark'>{props.title}</span>
          <span className='text-muted fw-bold fs-7'>The last eight (8) transactions</span>
        </h3>
        {/* <div className='card-toolbar'> */}
        {/* begin::Menu */}
        {/* <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button> */}

        {/* end::Menu */}
        {/* </div> */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body d-flex bg-light pt-5 '>
        {/* begin::Timeline */}
        <div className='timeline-label'>
          {/* begin::Item */}

          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>
              {props.trans.tDate[1]}
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-success fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Content */}
            <div className='timeline-content d-flex'>
              <Link to='#' className='me-3'>
                ${props.trans.tAmount[1]}
              </Link>
              {props.trans.tType[1]}.
            </div>
            {/* end::Content */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>
              {props.trans.tDate[2]}
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bolder text-gray-800 ps-3'>
              <Link to='#' className='me-3'>
                ${props.trans.tAmount[2]}
              </Link>
              {props.trans.tType[2]}.
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>
              {props.trans.tDate[3]}
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal text-muted ps-3'>
              <Link to='#' className='me-3'>
                ${props.trans.tAmount[3]}
              </Link>
              {props.trans.tType[3]}.
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>
              {props.trans.tDate[4]}
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bold text-gray-800 ps-3'>
              <Link to='#' className='me-3'>
                ${props.trans.tAmount[4]}
              </Link>
              {props.trans.tType[4]}.
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>
              {props.trans.tDate[5]}
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal text-muted ps-3'>
              <Link to='#' className='me-3'>
                ${props.trans.tAmount[5]}
              </Link>
              {props.trans.tType[5]}.
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>
              {props.trans.tDate[6]}
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bold text-gray-800 ps-3'>
              <Link to='#' className='me-3'>
                ${props.trans.tAmount[6]}
              </Link>
              {props.trans.tType[6]}.
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>
              {props.trans.tDate[7]}
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-success fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal text-gray ps-3'>
              <Link to='#' className='me-3'>
                ${props.trans.tAmount[7]}
              </Link>
              {props.trans.tType[7]}.
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
        </div>
        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export {ListsWidget5}
