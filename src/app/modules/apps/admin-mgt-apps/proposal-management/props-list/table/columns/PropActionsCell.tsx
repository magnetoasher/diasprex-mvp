/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {useNavigate} from 'react-router-dom'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {ID, KTSVG, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteProposal, changePropsStatus} from '../../core/_requests'
import {Proposal} from '../../core/_models'

type Props = {
  proposal: Proposal
}

const PropActionsCell: FC<Props> = ({proposal}) => {
  const {setItemIdForUpdate} = useListView()
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()
  const history = useNavigate()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const openEditModal = () => {
    setItemIdForUpdate(proposal.id)
  }

  const deleteProp = useMutation(() => changePropsStatus(proposal.id, 'deleted'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.PROPS_LIST}-${query}`])
    },
  })

  const activeProp = useMutation(() => changePropsStatus(proposal.id, 'active'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.PROPS_LIST}-${query}`])
    },
  })

  const completedProp = useMutation(() => changePropsStatus(proposal.id, 'completed'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.PROPS_LIST}-${query}`])
    },
  })

  const pendingProp = useMutation(() => changePropsStatus(proposal.id, 'pending'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.PROPS_LIST}-${query}`])
    },
  })

  const newProp = useMutation(() => changePropsStatus(proposal.id, 'new'), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.PROPS_LIST}-${query}`])
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
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            onClick={() => {
              history(
                `/proposals/admin/${proposal?.opportunityObject?.uuid}/${proposal?.enablerUserId}`
              )
            }}
          >
            View
          </a>
        </div>
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={openEditModal}>
            Edit
          </a>
        </div>
        {/* end::Menu item */}
        <div className='separator separator-content separator-dashed pt-5 mb-2'>
          <span className='w-250px fw-bold'>STATUS</span>
        </div>
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={async () => await newProp.mutateAsync()}>
            New
          </a>
        </div>

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={async () => await pendingProp.mutateAsync()}>
            Pending
          </a>
        </div>
        {/* end::Menu item */}
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={async () => await activeProp.mutateAsync()}>
            Active
          </a>
        </div>
        {/* end::Menu item */}
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={async () => await completedProp.mutateAsync()}>
            Completed
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            onClick={async () => await deleteProp.mutateAsync()}
          >
            Delete
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            // data-kt-users-table-filter='delete_row'
            onClick={async () => await deleteProp.mutateAsync()}
          >
            DM Enabler
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  )
}

export {PropActionsCell}
