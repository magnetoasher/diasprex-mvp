import {useListView} from '../../core/ListViewProvider'
import {OppsListToolbar} from './OppsListToolbar'
import {OppsListGrouping} from './OppsListGrouping'
import {OppsListSearchComponent} from './OppsListSearchComponent'

const OppsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <OppsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <OppsListGrouping /> : <OppsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {OppsListHeader}
