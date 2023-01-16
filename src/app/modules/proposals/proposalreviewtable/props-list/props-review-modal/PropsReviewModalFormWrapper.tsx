import {useQuery} from 'react-query'
import {PropReviewModalForm} from './PropsReviewModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getProposalById} from '../core/_requests'
import {Proposal} from '../../../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'

const PropReviewModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: proposal,
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

  if (!isLoading && !error && proposal) {
    return (
      <PropReviewModalForm
        isProposalLoading={isLoading}
        proposal={Object.values(proposal)[0] as Proposal}
      />
    )
  }

  return null
}

export {PropReviewModalFormWrapper}
