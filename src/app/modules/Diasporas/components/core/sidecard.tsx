import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Diasp, uadFormModel} from './_model'

// type Props = {
//     title?: string
//     name: string
//     proftitle: string
//     afdinsight: string
//     rcountry: string
// }
type Props = Partial<Diasp>

export const SideCard: FC<Props> = (props: Props) => {
  return (
    <div className='card mw-100 card-flush bg-light shadow-sm'>
      <div className='card-header'>
        <div className='row gx-3 d-flex flex-column'>
          <div className='menu-content pt-8 pb-2'>
            <span className='menu-section text-dark text-uppercase fw-bolder fs-1 ls-1'>
              {props.name}
              {props.grad?.degree}
            </span>
          </div>
          <h6>
            <p className='fs-6 mb-2 text-dark me-3'>Resident Country</p>
            <p className='fs-6 mb-2 text-muted'>{props.rcountry} </p>
          </h6>
          <h6>
            <p className=' fs-6 mb-2 text-dark me-3'>Country of Origin</p>
            <p>
              <span className=' fs-6 mb-2 text-muted me-3'>{props.afcountry} </span>
              <span className='symbol symbol-30px w-30px bg-light me-2'>
                <img
                  src={toAbsoluteUrl(`/media/flags/${props.afcountry?.toLowerCase()}.svg`)}
                  className='fs-6 fw-bold'
                  alt='oppscard'
                  data-toggle='tooltips'
                  title={props.afcountry?.toLowerCase()}
                  data-bs-placement='bottom'
                />
              </span>
            </p>
          </h6>
        </div>
      </div>
      <div className='card-body mw-100 py-5'>
        <i>{props.afdinsight}</i>
        <i>{props.afdinsight}</i>
        <i>{props.afdinsight}</i>
      </div>
      <div className='card-footer text-center'>
        <a href='#' className='card-link'>
          Learn more
        </a>
      </div>
    </div>
  )
}
