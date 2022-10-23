import {useListView} from '../../core/ListViewProvider'
import {PropsListToolbar} from './PropListToolbar'
import {PropsListGrouping} from './PropsListGrouping'
import {PropsListSearchComponent} from './PropsListSearchComponent'

const PropsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <PropsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <PropsListGrouping /> : <PropsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {PropsListHeader}
