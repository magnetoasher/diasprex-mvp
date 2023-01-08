/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
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
              `bg-light-${proposal.initials?.state}`,
              `text-${proposal.initials?.state}`
            )}
          >
            {proposal.country}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {proposal.id}
      </a>
      <span>{proposal.country}</span>
    </div>
  </div>
)

export {PropInfoCell}
