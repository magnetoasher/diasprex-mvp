import {useQueryClient, useMutation} from 'react-query'
import {QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import { deleteSelectedUsers } from '../../core/_requests'
import { ConfirmModal } from '../../../../../../../../_metronic/partials/modals/confirm-action/ConfirmAction'
// import { KTSVG } from '../../../../../../../_metronic/helpers'

const UsersListGrouping = () => {
  const {selected, clearSelected} = useListView()
  const queryClient = useQueryClient()
  const {query} = useQueryResponse()

  const deleteSelectedItems = useMutation(() => deleteSelectedUsers(selected), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
      clearSelected()
    },
  })

  return (
    <div className='d-flex justify-content-end align-items-center'>
      <div className='fw-bolder me-5'>
        <span className='me-2'>{selected.length}</span> Selected
      </div>
      


      <button type="button"
        className="btn btn-sm btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_1"
>
         Delete Selected
      </button>
      
      <ConfirmModal
        id ="kt_modal_1"
        title1='Delete Users'
        title2='Are you sure you want to permanently selected users'
        confirm='Delete'
         classname = "btn btn-danger"
      ConfirmHandler={async () => await deleteSelectedItems.mutateAsync()}/>
      

      {/* Empty space between butone */}
      <div className='me-1'>
        <p></p>
      </div>

      <button type="button"
        className="btn btn-sm btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_2"
>
         Verify Selected
      </button>
      <ConfirmModal
        id="kt_modal_2"
        title1='User Verification'
        title2='Are you sure you want to verify selected users'
        confirm='Verify'
        classname = "btn btn-primary"
      ConfirmHandler={async () => await deleteSelectedItems.mutateAsync()}/>
      

       {/* <button
        type='button'
        className='btn btn-sm btn-primary'
        onClick={async () => await deleteSelectedItems.mutateAsync()}
      >
        Verify Selected
      </button> */}

        {/* Empty space between butone */}
      {/* <div className='me-1'>
        <p></p>
      </div>

       <button
        type='button'
        className='btn btn-sm btn-success'
        onClick={async () => await deleteSelectedItems.mutateAsync()}
      > */}
        {/* Message Selected */}
      {/* </button> */}
    </div>
  )
}

export {UsersListGrouping}
