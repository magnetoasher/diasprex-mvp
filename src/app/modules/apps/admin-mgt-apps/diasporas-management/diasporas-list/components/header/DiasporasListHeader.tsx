import {useListView} from '../../core/ListViewProvider'
import {DiasporasListToolbar} from './DiasporasListToolbar'
import {DiasporasListGrouping} from './DiasporasListGrouping'
import {DiasporasListSearchComponent} from './DiasporasListSearchComponent'

const DiasporasListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <DiasporasListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <DiasporasListGrouping /> : <DiasporasListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {DiasporasListHeader}
