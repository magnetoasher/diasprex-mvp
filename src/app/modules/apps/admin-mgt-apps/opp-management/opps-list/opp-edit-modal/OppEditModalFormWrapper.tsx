import {useQuery} from 'react-query'
import {OppEditModalForm} from './OppEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getOppById} from '../core/_oppsrequests'
import {initialOpps, Opps} from '../core/_models'

const OppEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: opp,
    error,
  } = useQuery(
    `${QUERIES.OPPS_LIST}-opp-${itemIdForUpdate}`,
    () => {
      return getOppById(itemIdForUpdate)
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
    return <OppEditModalForm isOppLoading={isLoading} opp={initialOpps} />
  }

  if (!isLoading && !error && opp) {
    return <OppEditModalForm isOppLoading={isLoading} opp={Object.values(opp)[0] as Opps} />
  }

  return null
}

export {OppEditModalFormWrapper}
