import {useQuery} from 'react-query'
import {PropReviewModalForm} from './PropsReviewModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getProposalById} from '../core/_requests'

const PropReviewModalFormWrapper = () => {
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
    return <PropReviewModalForm isProposalLoading={isLoading} proposal={{id: undefined}} />
  }

  if (!isLoading && !error && user) {
    return <PropReviewModalForm isProposalLoading={isLoading} proposal={user} />
  }

  return null
}

export {PropReviewModalFormWrapper}
