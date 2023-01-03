import {useState, FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import countries from './countries.json'

export const CustomSelect = () => {
  const [selected, setSelected] = useState('1')
  const [selectedCountry, setSelectedCountry] = useState('united states')

  return (
    <div className='me-1'>
      <button
        className='btn btn-outline btn-active-light-primary dropdown-toggle'
        type='button'
        data-bs-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        <span className='flagstrap-icon mw-100'>
          <img
            className='mw-15px m-0 me-2'
            src={toAbsoluteUrl(`/media/flags/${selectedCountry}.svg`)}
          />
          +{selected}
        </span>
      </button>

      <div
        className='dropdown-menu menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-6 h=300px py-4 overflow-scroll'
        data-kt-menu='true'
      >
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_selection_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_selection_header'
          data-kt-scroll-wrappers='#kt_modal_selection_scroll'
          data-kt-scroll-offset='125px'
        >
          <ul style={{listStyle: 'none'}}>
            {countries.map((option) => (
              <a
                className='dropdown-item mb-2 h = 125px'
                onClick={() => {
                  setSelected(option.phone)

                  setSelectedCountry(option.label)
                }}
              >
                <li value={option.code} data-name={option.label}>
                  <span className='flagstrap-icon'>
                    <img
                      className='mw-25px m-0 me-2'
                      src={toAbsoluteUrl(`/media/flags/${option.label}.svg`)}
                    />
                  </span>
                  {`${option.label} +${option.phone}`}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
