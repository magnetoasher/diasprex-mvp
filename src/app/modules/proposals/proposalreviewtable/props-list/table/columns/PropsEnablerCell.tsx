//To replace UserInfo Cell
/* eslint-disable jsx-a11y/anchor-is-valid */
// import clsx from 'clsx'
import {FC} from 'react'
import {Proposal} from '../../core/_models'

type Props = {
  proposal: Proposal
}

const PropsEnablerCell: FC<Props> = ({proposal}) => (
  <div className='d-flex align-items-center'>

    {/* End:: Thumbnail */}
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {proposal.enabler}
      </a>
      <span>{proposal.country}</span>
    </div>
  </div>
)

export {PropsEnablerCell}
