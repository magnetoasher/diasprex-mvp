import {KTSVG} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {OppsListFilter} from './OppsListFilter'

const OppsListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddOppModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <OppsListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
       Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      <button type='button' className='btn btn-primary' onClick={openAddOppModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Opportunity
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {OppsListToolbar}
