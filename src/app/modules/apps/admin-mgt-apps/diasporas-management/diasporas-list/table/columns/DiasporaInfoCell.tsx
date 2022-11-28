/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {Diaspora} from '../../core/_models'

type Props = {
  diaspora: Diaspora
}

const DiasporaInfoCell: FC<Props> = ({diaspora}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {diaspora.avatar ? (
          <div className='symbol-label'>
            <img
              src={toAbsoluteUrl(`/media/${diaspora.avatar}`)}
              alt={diaspora.fName}
              className='w-100'
            />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${diaspora.initials?.state}`,
              `text-${diaspora.initials?.state}`
            )}
          >
            {diaspora.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {`${diaspora.fName} ${diaspora.lName}`}
      </a>
      <span>{diaspora.email}</span>
    </div>
  </div>
)

export {DiasporaInfoCell}
