/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {Link} from 'react-router-dom'
import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
import {ID, KTSVG, QUERIES} from '../../../../../../../_metronic/helpers'
import {Proposal} from '../../../../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteProposal} from '../../core/_requests'

type Props = {
  proposal: Proposal
}

const PropActionsCell: FC<Props> = ({proposal}) => {
  const {setItemIdForUpdate} = useListView()
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const openEditModal = () => {
    setItemIdForUpdate(proposal.id)
  }

  const deleteItem = useMutation(() => deleteProposal(proposal.id), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
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
          <Link
            to={`/proposals/${proposal?.opportunityObject?.uuid}/${proposal?.enablerUserId}`}
            className='menu-link px-3'
          >
            View
          </Link>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={openEditModal}>
            Review
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            onClick={async () => await deleteItem.mutateAsync()} // Change to select callback
          >
            Select
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            onClick={async () => await deleteItem.mutateAsync()} // Change to decline callback
          >
            Decline
          </a>
        </div>

        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            onClick={async () => await deleteItem.mutateAsync()}
          >
            DM Admin
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  )
}

export {PropActionsCell}
