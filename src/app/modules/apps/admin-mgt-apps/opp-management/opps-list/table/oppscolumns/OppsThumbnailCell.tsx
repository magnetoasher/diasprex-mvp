//To replace UserInfo Cell
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {Opps} from '../../core/_models'

type Props = {
  opp: Opps
}

const OppsThumbnailCell: FC<Props> = ({opp}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Thumbnail*/}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {opp.thumbnail ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${opp.thumbnail}`)} alt={opp.oppdesc} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${opp?.initials?.state}`,
              `text-${opp?.initials?.state}`
            )}
          >
            {opp.country}
          </div>
        )}
      </a>
    </div>
    {/* End:: Thumbnail */}
  </div>
)

export {OppsThumbnailCell}
