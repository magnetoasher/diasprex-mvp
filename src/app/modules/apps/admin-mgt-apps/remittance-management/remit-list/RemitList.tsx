import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {RemitListHeader} from './components/header/RemitListHeader'
import {RemitsTable} from './table/RemitsTable'
import {UserEditModal} from './remit-edit-modal/RemitEditModal'
import {KTCard} from '../../../../../../_metronic/helpers'

const RemitList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <RemitListHeader />
        <RemitsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const RemitListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <RemitList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {RemitListWrapper}
