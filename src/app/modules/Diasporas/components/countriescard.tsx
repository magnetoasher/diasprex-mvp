import {Tooltip} from 'antd'
import React from 'react'
import {AfricanCountryCodes} from '../../../../_metronic/partials/content/selectionlists'

export const CountryCards = () => {
  return (
    <div>
      <div className='card-body'>
        <ul className='nav nav-pills nav-pills-custom mb-3'>
          {AfricanCountryCodes.map((country) => (
            <li className='nav-item mb-3 me-3 me-lg-6'>
              <a
                className='nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4'
                data-bs-toggle='pill'
                href='#kt_country_uad'
              >
                <div className='nav-icon'>
                  <Tooltip title={`${country.label} (200 Diasporas)`}>
                    <img alt={``} src={`/media/flags/${country.label}.svg`} className='' />
                  </Tooltip>
                </div>

                <span className='nav-text text-gray-700 fw-bold fs-8 lh-1'>{country.code}</span>

                <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
