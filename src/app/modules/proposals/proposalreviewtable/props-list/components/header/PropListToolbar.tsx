import {KTSVG} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {PropsListFilter} from './PropsListFilter'

const PropsListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <PropsListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr091.svg' className='svg-icon-2' />
        Download
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      {/* <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Proosal
      </button> */}
      {/* end::Add user */}
    </div>
  )
}

export {PropsListToolbar}
