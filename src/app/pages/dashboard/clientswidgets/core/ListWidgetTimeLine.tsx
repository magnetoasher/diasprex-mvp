import {FC} from 'react'
import {Link} from 'react-router-dom'

type Props = {
  tDate: string
  markercolor: string
  tType: string
  tAmount: number
}

export const ListWidgetTimeLine: FC<Props> = (props: Props) => {
  return (
    <div className='d-flex text-center'>
      <div className='timeline-item text-center'>
        {/* begin::Label */}

        <div className='timeline-label fw-bolder text-gray-800 fs-8'>{props.tDate}</div>

        {/* end::Label */}
        {/* begin::Badge */}

        <div className='timeline-badge'>
          <i className={`fa fa-genderless text-${props.markercolor} fs-1`}></i>
        </div>

        {/* end::Badge */}
        {/* begin::Text */}
        <div className='fw-mormal timeline-content text-dark fs-6 ps-3'>
          <Link to='#' className='me-3'>
            ${props.tAmount}
          </Link>
          {props.tType}
        </div>
        {/* end::Text */}

        {/* end::Item */}
      </div>
    </div>
  )
}
