import {useListView} from '../../core/ListViewProvider'
import {PayMethodListToolbar} from './PaymentListToolbar'
import {PayMethodListGrouping} from './PaymentListGrouping'
import {PayMethodListSearchComponent} from './PaymentListSearchComponent'

const PayMethodListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <PayMethodListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <PayMethodListGrouping /> : <PayMethodListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {PayMethodListHeader}
