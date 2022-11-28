import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {PayMethodListHeader} from './components/header/PaymentListHeader'
import {PayMethodTable} from './table/PaymentTable'
import {PayMethodEditModal} from './payment-edit-modal/PaymentEditModal'
import {KTCard} from '../../../../../../_metronic/helpers'

const PaymentList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <PayMethodListHeader />
        <PayMethodTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <PayMethodEditModal />}
    </>
  )
}

const PaymentListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <PaymentList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {PaymentListWrapper}
