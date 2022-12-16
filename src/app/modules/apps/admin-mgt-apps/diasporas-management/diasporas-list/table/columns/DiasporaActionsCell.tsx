/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {ID, KTSVG, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteDiaspora, changeDiasporaStatus} from '../../core/_requests'

// import { ChatPage } from '../../../../chat/ChatPage'

type Props = {
  id: ID
  status: string
}

const DiasporaActionsCell: FC<Props> = ({id}) => {
  const {setItemIdForUpdate} = useListView()
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()
  const [status, setStatus] = useState<string>('')

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const openEditModal = () => {
    setItemIdForUpdate(id)
  }

  // const deleteItem = useMutation(() => deleteDiaspora(id), {
  //   // 💡 response of the mutation is passed to onSuccess
  //   onSuccess: () => {
  //     // ✅ update detail view directly
  //     queryClient.invalidateQueries([`${QUERIES.DIASPORAS_LIST}-${query}`])
  //   },
  // })

  const deleteDiaspora = useMutation(() => changeDiasporaStatus(id, 'Deleted'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.DIASPORAS_LIST}-${query}`])
    },
  })

  const publishDiaspora = useMutation(() => changeDiasporaStatus(id, 'Published'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.DIASPORAS_LIST}-${query}`])
    },
  })

  const declineDiaspora = useMutation(() => changeDiasporaStatus(id, 'Declined'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.DIASPORAS_LIST}-${query}`])
    },
  })

  return (
    <>
      <a
        href='#'
        className='btn btn-light btn-active-light-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Actions
        <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={openEditModal}>
            Edit
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            // data-kt-users-table-filter='disable_row'
            onClick={async () => await publishDiaspora.mutateAsync()}
          >
            Publish
          </a>
        </div>
        {/* end::Menu item */}
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            // data-kt-users-table-filter='delete_row'
            onClick={async () => await declineDiaspora.mutateAsync()}
          >
            Decline
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            // data-kt-users-table-filter='delete_row'
            onClick={async () => await deleteDiaspora.mutateAsync()}
          >
            Delete
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  )
}

export {DiasporaActionsCell}
