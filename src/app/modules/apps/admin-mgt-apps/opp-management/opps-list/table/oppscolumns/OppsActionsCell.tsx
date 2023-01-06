/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {ID, KTSVG, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteOpps, changeOppsStatus} from '../../core/_oppsrequests'

type Props = {
  id: ID
}

const OppsActionsCell: FC<Props> = ({id}) => {
  const {setItemIdForUpdate} = useListView()
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const openEditModal = () => {
    setItemIdForUpdate(id)
  }

  // const deleteItem = useMutation(() => deleteOpps(id), {
  //   // 💡 response of the mutation is passed to onSuccess
  //   onSuccess: () => {
  //     // ✅ update detail view directly
  //     queryClient.invalidateQueries([`${QUERIES.OPPS_LIST}-${query}`])
  //   },
  // })

  const deleteOpp = useMutation(() => changeOppsStatus(id, 'deleted'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.OPPS_LIST}-${query}`])
    },
  })
  const acceptOpp = useMutation(() => changeOppsStatus(id, 'accepted'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.OPPS_LIST}-${query}`])
    },
  })
  const acceptOppwRevision = useMutation(() => changeOppsStatus(id, 'accepted with revision'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.OPPS_LIST}-${query}`])
    },
  })

  const publishOpp = useMutation(() => changeOppsStatus(id, 'published'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.OPPS_LIST}-${query}`])
    },
  })
  const rejectOpp = useMutation(() => changeOppsStatus(id, 'not accepted'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.OPPS_LIST}-${query}`])
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
            data-kt-users-table-filter='publish_opp'
            onClick={async () => await publishOpp.mutateAsync()}
          >
            Publish
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='accept_opp'
            onClick={async () => await acceptOpp.mutateAsync()}
          >
            Accept
          </a>
        </div>

        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='revision'
            onClick={async () => await acceptOppwRevision.mutateAsync()}
          >
            Accept/Review
          </a>
        </div>

        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='reject'
            onClick={async () => await rejectOpp.mutateAsync()}
          >
            Reject
          </a>
        </div>

        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_opp'
            onClick={async () => await deleteOpp.mutateAsync()}
          >
            Delete
          </a>
        </div>

        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            id='kt_drawer_chat_toggle'
            data-kt-users-table-filter='delete_opp'
            onClick={async () => await deleteOpp.mutateAsync()}
          >
            Message
          </a>
        </div>

        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  )
}

export {OppsActionsCell}
