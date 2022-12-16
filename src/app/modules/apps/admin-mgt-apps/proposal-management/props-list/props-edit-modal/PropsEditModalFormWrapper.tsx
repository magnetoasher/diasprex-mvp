import {useQuery} from 'react-query'
import {PropEditModalForm} from './PropsEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getUserById} from '../core/_requests'

const PropEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getUserById(itemIdForUpdate)
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
    return <PropEditModalForm isUserLoading={isLoading} user={{id: undefined}} />
  }

  if (!isLoading && !error && user) {
    return <PropEditModalForm isUserLoading={isLoading} user={user} />
  }

  return null
}

export {PropEditModalFormWrapper}
