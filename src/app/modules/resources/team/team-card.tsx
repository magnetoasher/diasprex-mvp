import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

type Props = {
  avatar: string
  fName: string
  lName: string
  title: string
  role: string
  summary?: string
  bgshape: string
}
export const TeamCard: FC<Props> = ({avatar, fName, lName, title, role, summary, bgshape}) => {
  return (
    <div>
      <div className='col mb-9'>
        <div className='text-center'>
          <div
            className={`${bgshape} mx-auto mb-2 d-flex w-150px h-150px bgi-no-repeat bgi-size-contain bgi-position-center`}
            style={{
              backgroundImage: `url(${toAbsoluteUrl(avatar)})`,
            }}
          ></div>

          <div className='mb-0'>
            <a
              href='../../demo1/dist/pages/user-profile/projects.html'
              className='text-dark fw-bold text-hover-primary fs-3'
            >
              <span className='me-3'>
                {fName} {lName}
              </span>

              <span className='me-3 text-muted'>({title})</span>
            </a>

            <div className='text-muted fs-6 fw-semibold'>{role}</div>
          </div>
        </div>
        <div className='text-muted fs-6 fw-semibold'>{summary}</div>
      </div>
    </div>
  )
}
