/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {Proposal} from '../../../../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'

type Props = {
  proposal: Proposal
}

const PropInfoCell: FC<Props> = ({proposal}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {proposal.thumbnail ? (
          <div className='symbol-label'>
            <img
              src={toAbsoluteUrl(`/media/${proposal.thumbnail}`)}
              alt={proposal.enablerName}
              className='w-100'
            />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${
                proposal.initials?.state || proposal.status === 'new'
                  ? 'info'
                  : proposal.status === 'selected'
                  ? 'success'
                  : proposal.status === 'declined'
                  ? 'danger'
                  : proposal.status === 'pending'
                  ? 'primary'
                  : proposal.status === 'completed'
                  ? 'success'
                  : proposal.status === 'active'
                  ? 'primary'
                  : 'warning'
              }`,
              `text-${
                proposal.initials?.state || proposal.status === 'new'
                  ? 'info'
                  : proposal.status === 'selected'
                  ? 'success'
                  : proposal.status === 'declined'
                  ? 'danger'
                  : proposal.status === 'pending'
                  ? 'primary'
                  : proposal.status === 'completed'
                  ? 'success'
                  : proposal.status === 'active'
                  ? 'primary'
                  : 'warning'
              }`
            )}
          >
            {proposal.country}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <Link
        to={`/proposals/${proposal?.opportunityObject?.uuid}/${proposal?.enablerUserId}`}
        className='text-gray-800 text-hover-primary mb-1'
      >
        {proposal.dpxid}
      </Link>
      <span>{proposal.country}</span>
    </div>
  </div>
)

export {PropInfoCell}
