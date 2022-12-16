import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from '../../core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {DiasporasListHeader} from './components/header/DiasporasListHeader'
import {DiasporasTable} from './table/DiasporasTable'
import {DiasporaEditModal} from './diaspora-edit-modal/DiasporaEditModal'
import {KTCard} from '../../../../../../_metronic/helpers'

const DiasporasList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <DiasporasListHeader />
        <DiasporasTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <DiasporaEditModal />}
    </>
  )
}

const DiasporasListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <DiasporasList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {DiasporasListWrapper}
