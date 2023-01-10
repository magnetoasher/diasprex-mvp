import {useQueryClient, useMutation} from 'react-query'
import {QUERIES} from '../../../../../../../../_metronic/helpers'
import {ConfirmModal} from '../../../../../../../../_metronic/partials/modals/confirm-action/ConfirmAction'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteSelectedProposals, changeSelectedProposals} from '../../core/_requests'

const PropsListGrouping = () => {
  const {selected, clearSelected} = useListView()
  const queryClient = useQueryClient()
  const {query} = useQueryResponse()

  const deleteSelectedItems = useMutation(() => deleteSelectedProposals(selected), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.PROPS_LIST}-${query}`])
      clearSelected()
    },
  })

  const changeSelectedItems = useMutation(() => changeSelectedProposals(selected, 'pending'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.PROPS_LIST}-${query}`])
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
        data-bs-target='#kt_modal_deleteProps'
      >
        Delete Selected
      </button>
      <ConfirmModal
        id='kt_modal_deleteProps'
        title1='Delete Props'
        title2='Are you sure you want to permanently selected proposal'
        confirm='Delete'
        classname='btn btn-danger'
        ConfirmHandler={async () => await deleteSelectedItems.mutateAsync()}
      />

      <button
        type='button'
        className='btn btn-primary me-2'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_pendingprop'
      >
        Change to Pending
      </button>
      <ConfirmModal
        id='kt_modal_pendingprop'
        title1='Change Opportunities Status'
        title2='Are you sure you want to change the status of the selected proposal to pending'
        confirm='Yes'
        classname='btn btn-primary'
        ConfirmHandler={async () => await changeSelectedItems.mutateAsync()}
      />
    </div>
  )
}

export {PropsListGrouping}
