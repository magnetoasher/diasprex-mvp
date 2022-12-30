import {useQuery} from 'react-query'
import {PropEditModalForm} from './PropsEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getProposalById} from '../core/_requests'

const PropEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.PROPS_LIST}-proposal-${itemIdForUpdate}`,
    () => {
      return getProposalById(itemIdForUpdate)
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
    return <PropEditModalForm isProposalLoading={isLoading} proposal={{id: undefined}} />
  }

  if (!isLoading && !error && user) {
    return <PropEditModalForm isProposalLoading={isLoading} proposal={user} />
  }

  return null
}

export {PropEditModalFormWrapper}
