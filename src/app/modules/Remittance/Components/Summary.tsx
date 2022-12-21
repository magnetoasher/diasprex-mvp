/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {remittanceDetailsInitValues} from './Preferences/PreferencesModel'
import {
  ChartsWidget1,
  TablesWidget1,
  // ListsWidget5,
  ListsWidget6,
  ChartsWidget3,
} from '../../../pages/dashboard/clientswidgets'

import {ITransArrayModel} from './Preferences/PreferencesModel'

export function Summary() {
  const SummaryData = remittanceDetailsInitValues

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
              <span className='fw-bolder fs-6 text-dark'>
                {SummaryData.fName} {SummaryData.mInitial}. {SummaryData.lName}
              </span>
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
              <span className='fw-bolder fs-6 me-2'>{SummaryData.contactPhone}</span>

              <span className='badge badge-success'>Verified</span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>Country</label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bold fs-6'>{SummaryData.country}</span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>Primary Recipient</label>

            <div className='col-lg-8'>
              <a href='#' className='fw-bold fs-6 me-2 text-dark text-hover-primary'>
                {SummaryData.fNamerecpt} {SummaryData.lNamerecpt}
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
              <span className='fw-bolder fs-6 text-dark'>{SummaryData.recipientctr}</span>
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
              <span className='fw-bolder fs-6 text-dark'>{SummaryData.currency}</span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>Communication</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>
                {SummaryData.communications.email && 'Email'}
                {SummaryData.communications.phone && 'Phone'}
              </span>
            </div>
          </div>

          <div className='row mb-7 d-flex align-items-center'>
            <label className='col-lg-4 fw-bold text-muted'>Auto Retainer</label>

            <div className='col-lg-8'>
              <span className='badge badge-success fw-bold fs-6'>
                {SummaryData.autoretain ? 'Enabled' : 'Disabled'}
              </span>
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
          <ChartsWidget1
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
          <ChartsWidget3
            className='card-xl-stretch mb-xl-8'
            title='Remittance Savings Trend'
            subtitle='Average $100 per month'
            freq='Month'
            savings={[30, 40, 40, 90, 90, 70, 70]}
            chartheight={350}
            chartcategories={['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
          />
        </div>
        <div className='col-xl-6'>
          <ListsWidget6
            className='card-xl-stretch mb-xl-8'
            title='Recent Remittance Transactions'
            trans={ITransArrayModel}
          />
        </div>
      </div>
    </>
  )
}
