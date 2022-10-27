/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {
  ChartsWidget1New,
  TablesWidget1,
  ListsWidget5,
  ChartsWidget3,
} from '../../../../_metronic/partials/widgets'

export function Summary() {
  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Remittance Summary</h3>
          </div>

          <Link to='/remittance/preferences' className='btn btn-primary align-self-center'>
            Change Preference
          </Link>
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>Full Name</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>Max Smith</span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>
              Primary Phone
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Phone number must be active'
              ></i>
            </label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>+1 276 454 935</span>

              <span className='badge badge-success'>Verified</span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>Country</label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bold fs-6'>United States</span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>Primary Recipient</label>

            <div className='col-lg-8'>
              <a href='#' className='fw-bold fs-6 me-2 text-dark text-hover-primary'>
                Adebolu Olaniyi
              </a>
              <span className='badge badge-success'>Verified</span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>
              Recipient's country
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Country of origination'
              ></i>
            </label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>Nigeria</span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>
              Currency
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Country of origination'
              ></i>
            </label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>USD - US Dollar</span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>Communication</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>Email, Phone</span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>Auto Retainer</label>

            <div className='col-lg-8'>
              <span className='badge badge-success fw-bold fs-6'>Enabled</span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>Preferred MTO</label>

            <div className='col-lg-8'>
              <div className='border border-2 border-gray-300 border-hover mw-125px'>
                <div className='input-group align-items-center'>
                  <span className='input-group-text'>
                    {' '}
                    <img
                      src={toAbsoluteUrl('/media/logos/moneygram-logo.png')}
                      alt='mto2_logo'
                      className='mw-100'
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ChartsWidget1New
            className='card-xxl-stretch mb-5 mb-xl-10'
            title='Recent Transactions'
            subtitle='Monthly remittance savings in the last six months'
            data={{
              netprofit: [100, 55, 57, 56, 61, 58],
              revenue: [76, 85, 101, 98, 87, 105],
            }}
          />
        </div>

        <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div>

      <div className='row g-5 g-xl-8'>
        <div className='col-xl-6'>
          <ChartsWidget3 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className='col-xl-6'>
          <ListsWidget5 className='card-xl-stretch mb-xl-8' />
        </div>
      </div>
    </>
  )
}
