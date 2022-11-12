import React from 'react'
import {OctagonModel} from '../../../../../_metronic/partials/content/utilities/octagonmodel'

export const DiasporasStats = () => {
  return (
    <div className='mt-sm-n10'>
      <div className='landing-curve landing-dark-color'>
        <svg viewBox='15 -1 1470 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z'
            fill='currentColor'
          ></path>
        </svg>
      </div>

      <div className='pb-15 pt-18 landing-dark-bg'>
        <div className='container'>
          <div className='text-center mt-15 mb-18' id='diasporas_stats'>
            <h3 className='fs-2hx text-white fw-bold mb-5'>
              African diasporas are highly educated professionals in multiple fields
            </h3>

            <div className='fs-5 text-white text-muted fw-bold'>
              African diasporas presents enoumous intelllectual capacities that can drive African
              development
              <br />
              We celebrate African diasporas making contributions in various fields
            </div>
          </div>

          <div className='d-flex flex-center'>
            <div className='d-flex flex-wrap flex-center justify-content-lg-between mb-15 mx-auto w-xl-900px'>
              <OctagonModel
                imgscr='/media/icons/duotune/graphs/gra010.svg'
                imgcolor='info'
                title1='190,000'
                label='Total in Healthcare'
                width='250px'
                height='250px'
                bgcolor='light'
              />

              <OctagonModel
                imgscr='/media/icons/duotune/graphs/gra007.svg'
                imgcolor='info'
                title1='23,000'
                label='Physicians'
                width='250px'
                height='250px'
                bgcolor='light'
              />

              <OctagonModel
                imgscr='/media/icons/duotune/graphs/gra008.svg'
                imgcolor='info'
                title1='57,000'
                label='In STEM'
                width='250px'
                height='250px'
                bgcolor='light'
              />
            </div>
          </div>

          <div className='fs-2 fw-semibold text-muted text-center mb-3'>
            <span className='fs-1 lh-1 text-gray-700'>“</span>Diasprex promotes African diaspora's
            achievements and gives them visibility to leaders
            <br />
            in our monthly <span className='text-white me-1'>Unfound African Diasporas</span>,
            emotionally expressive way
            <span className='fs-1 lh-1 text-gray-700'>“</span>
          </div>

          <div className='fs-2 fw-semibold text-muted text-center'>
            <span className='fs-4 fw-bold text-gray-600 me-2'>
              Submit Your Profile or Invite Friends to
            </span>
            <a href='/diasporas' className='link-primary fs-4 fw-bold'>
              Diasprex Unfound African Diasporas
            </a>
          </div>
        </div>
      </div>

      <div className='landing-curve landing-dark-color'>
        <svg viewBox='15 12 1470 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z'
            fill='currentColor'
          ></path>
        </svg>
      </div>
    </div>
  )
}
