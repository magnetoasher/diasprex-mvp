import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {PropsListHeader} from './components/header/PropsListHeader'
import {PropsTable} from './table/PropsTable'
import {PropReviewModal} from './props-review-modal/PropsReviewModal'
import {KTCard} from '../../../../../_metronic/helpers'

const PropsList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <PropsListHeader />
        <PropsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <PropReviewModal />}
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
