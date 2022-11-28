import {useQuery} from 'react-query'
import {TransEditModalForm} from './TransEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getTransById} from '../core/_requests'

const TransEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getTransById(itemIdForUpdate)
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
    return <TransEditModalForm isUserLoading={isLoading} user={{id: undefined}} />
  }

  if (!isLoading && !error && user) {
    return <TransEditModalForm isUserLoading={isLoading} user={user} />
  }

  return null
}

export {TransEditModalFormWrapper}
