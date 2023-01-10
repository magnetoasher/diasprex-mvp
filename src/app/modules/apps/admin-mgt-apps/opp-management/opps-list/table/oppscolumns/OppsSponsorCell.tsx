//To replace UserInfo Cell
/* eslint-disable jsx-a11y/anchor-is-valid */
// import clsx from 'clsx'
import {FC} from 'react'
import {Opps} from '../../core/_models'

type Props = {
  opp: Opps
}

const OppsSponsorCell: FC<Props> = ({opp}) => (
  <div className='d-flex align-items-center'>
    {/* End:: Thumbnail */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {opp.sponsorName}
      </a>
    </div>
  </div>
)

export {OppsSponsorCell}
