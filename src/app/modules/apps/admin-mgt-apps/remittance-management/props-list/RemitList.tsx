import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {RemitListHeader} from './components/header/RemitListHeader'
import {PropsTable} from './table/PropsTable'
import {UserEditModal} from './user-edit-modal/UserEditModal'
import {KTCard} from '../../../../../../_metronic/helpers'

const RemitList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <RemitListHeader />
        <PropsTable />
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
