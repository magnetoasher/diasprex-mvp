import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {RemitListHeader} from './components/header/TransListHeader'
import {TransTable} from './table/TransTable'
import {TransEditModal} from './trans-edit-modal/TransEditModal'
import {KTCard} from '../../../../../../_metronic/helpers'

const TransList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <RemitListHeader />
        <TransTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <TransEditModal />}
    </>
  )
}

const TransListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <TransList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {TransListWrapper}
