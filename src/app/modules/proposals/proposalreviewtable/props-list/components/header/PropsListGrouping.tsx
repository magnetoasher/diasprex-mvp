import {useEffect, useState} from 'react'
import {useQueryClient, useMutation} from 'react-query'
import {QUERIES} from '../../../../../../../_metronic/helpers'
import {ChangeStatus} from './changestatusmodal'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteSelectedProposals} from '../../core/_requests'

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

  return (
    <div className='d-flex justify-content-end align-items-center'>
      <div className='fw-bolder me-5'>
        <span className='me-2'>{selected.length}</span> Selected
      </div>

      <button
        type='button'
        className='btn btn-danger me-2'
        onClick={async () => await deleteSelectedItems.mutateAsync()}
      >
        Delete Selected
      </button>
      <button
        type='button'
        className='btn btn-primary me-2'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_changepropstatus'
        // onClick={async () => await changeSelectedItems.mutateAsync()}
      >
        Update Status
      </button>
      <ChangeStatus
        id='kt_modal_changepropstatus'
        options={['selected', 'declined']}
        title='Change Proposal Status'
      />
    </div>
  )
}

export {PropsListGrouping}
