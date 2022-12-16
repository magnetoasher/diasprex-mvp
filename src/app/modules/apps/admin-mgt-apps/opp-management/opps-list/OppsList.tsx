import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from '../../core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {OppsListHeader} from './components/header/OppsListHeader'
import {OppsTable} from './table/OppsTable'
import {OppEditModal} from './opp-edit-modal/OppEditModal'
import {KTCard} from '../../../../../../_metronic/helpers'

const OppsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <OppsListHeader />
        <OppsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <OppEditModal />}
    </>
  )
}

const OppsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <OppsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {OppsListWrapper}
