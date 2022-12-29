//To replace UserInfo Cell
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {Proposal} from '../../core/_models'

type Props = {
  proposal: Proposal
}

const PropsThumbnailCell: FC<Props> = ({proposal}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Thumbnail*/}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {proposal.thumbnail ? (
          <div className='symbol-label'>
            <img
              src={toAbsoluteUrl(`/media/${proposal.thumbnail}`)}
              alt={proposal.enabler}
              className='w-100'
            />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${proposal?.initials?.state}`,
              `text-${proposal?.initials?.state}`
            )}
          >
            {proposal.id}
          </div>
        )}
      </a>
    </div>
    {/* End:: Thumbnail */}
  </div>
)

export {PropsThumbnailCell}
