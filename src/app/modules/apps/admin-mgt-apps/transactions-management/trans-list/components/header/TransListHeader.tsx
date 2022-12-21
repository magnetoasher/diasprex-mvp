import {useListView} from '../../core/ListViewProvider'
import {TransListToolbar} from './TransListToolbar'
import {TransListGrouping} from './TransListGrouping'
import {RemitsListSearchComponent} from './TransListSearchComponent'

const RemitListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <RemitsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <TransListGrouping /> : <TransListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {RemitListHeader}
