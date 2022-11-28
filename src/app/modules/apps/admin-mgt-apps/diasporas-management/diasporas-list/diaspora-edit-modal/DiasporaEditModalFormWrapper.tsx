import {useQuery} from 'react-query'
import {DiasporaEditModalForm} from './DiasporaEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getDiasporaById} from '../core/_requests'

const DiasporaEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: diaspora,
    error,
  } = useQuery(
    `${QUERIES.DIASPORAS_LIST}-diaspora-${itemIdForUpdate}`,
    () => {
      return getDiasporaById(itemIdForUpdate)
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
    return <DiasporaEditModalForm isDiasporaLoading={isLoading} diaspora={{id: undefined}} />
  }

  if (!isLoading && !error && diaspora) {
    return <DiasporaEditModalForm isDiasporaLoading={isLoading} diaspora={diaspora} />
  }

  return null
}

export {DiasporaEditModalFormWrapper}
