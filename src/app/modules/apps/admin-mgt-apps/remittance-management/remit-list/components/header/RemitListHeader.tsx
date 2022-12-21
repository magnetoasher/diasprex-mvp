import {useListView} from '../../core/ListViewProvider'
import {RemitsListToolbar} from './RemitListToolbar'
import {RemitsListGrouping} from './RemitListGrouping'
import {RemitsListSearchComponent} from './RemitListSearchComponent'

const RemitListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <RemitsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <RemitsListGrouping /> : <RemitsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {RemitListHeader}
