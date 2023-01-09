import {useQueryClient, useMutation} from 'react-query'
import {QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteSelectedOpps, publishSelectedOpps} from '../../core/_requests'
import {ConfirmModal} from '../../../../../../../../_metronic/partials/modals/confirm-action/ConfirmAction'

const OppsListGrouping = () => {
  const {selected, clearSelected} = useListView()
  const queryClient = useQueryClient()
  const {query} = useQueryResponse()

  const deleteSelectedItems = useMutation(() => deleteSelectedOpps(selected), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.OPPS_LIST}-${query}`])
      clearSelected()
    },
  })
  const publishSelectedItems = useMutation(() => publishSelectedOpps(selected), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.OPPS_LIST}-${query}`])
      clearSelected()
    },
  })

  return (
    <div className='d-flex justify-content-end align-items-center'>
      <div className='fw-bolder me-5'>
        <span className='me-2'>{selected.length}</span> Selected
      </div>

      <button
        type='button'
        className='btn btn-danger me-2'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_deleteopps'
      >
        Delete Selected
      </button>
      <ConfirmModal
        id='kt_modal_deleteopps'
        title1='Delete Opps'
        title2='Are you sure you want to permanently selected opportunities'
        confirm='Delete'
        classname='btn btn-danger'
        ConfirmHandler={async () => await deleteSelectedItems.mutateAsync()}
      />

      <button
        type='button'
        className='btn btn-primary me-2'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_publishopps'
      >
        Publish Selected
      </button>
      <ConfirmModal
        id='kt_modal_publishopps'
        title1='Change Opportunities Status'
        title2='Are you sure you want to publish the status of the selected opportunities'
        confirm='Publish'
        classname='btn btn-primary'
        ConfirmHandler={async () => await publishSelectedItems.mutateAsync()}
      />
    </div>
  )
}

export {OppsListGrouping}
