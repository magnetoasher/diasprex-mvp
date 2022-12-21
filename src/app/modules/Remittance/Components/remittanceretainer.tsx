import {ChartsWidget3, ListsWidget6} from '../../../pages/dashboard/clientswidgets'
import {ITransArrayModel} from './Preferences/PreferencesModel'
export const RemittanceRetainer = () => {
  return (
    <>
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
