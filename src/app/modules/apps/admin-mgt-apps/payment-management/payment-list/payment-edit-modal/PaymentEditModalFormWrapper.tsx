import {useQuery} from 'react-query'
import {PayMethodEditModalForm} from './PaymentEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getPayMethodById} from '../core/_requests'

const PayMethodEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getPayMethodById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  if (!itemIdForUpdate) {
    return <PayMethodEditModalForm isUserLoading={isLoading} user={{id: undefined}} />
  }

  if (!isLoading && !error && user) {
    return <PayMethodEditModalForm isUserLoading={isLoading} user={user} />
  }

  return null
}

export {PayMethodEditModalFormWrapper}
