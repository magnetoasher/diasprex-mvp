import {useQuery} from 'react-query'
import {DiasporaEditModalForm} from './DiasporaEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getDiasporaById} from '../core/_requests'
import {initialDiaspora} from '../core/_models'
import {uadFormModel} from '../../../../../Diasporas/components/core/_model'

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
  // console.log('Diaspora', diaspora)

  if (!itemIdForUpdate) {
    return <DiasporaEditModalForm isDiasporaLoading={isLoading} diaspora={initialDiaspora} />
  }

  if (!isLoading && !error && diaspora) {
    return (
      <DiasporaEditModalForm
        isDiasporaLoading={isLoading}
        diaspora={Object.values(diaspora)[0] as uadFormModel}
      />
    )
  }

  return null
}

export {DiasporaEditModalFormWrapper}
