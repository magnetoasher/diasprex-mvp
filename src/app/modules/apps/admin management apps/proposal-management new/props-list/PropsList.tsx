import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {PropsListHeader} from './components/header/PropsListHeader'
import {PropsTable} from './table/PropsTable'
import {UserEditModal} from './user-edit-modal/UserEditModal'
import {KTCard} from '../../../../../../_metronic/helpers'

const PropsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <PropsListHeader />
        <PropsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const PropsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <PropsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {PropsListWrapper}
