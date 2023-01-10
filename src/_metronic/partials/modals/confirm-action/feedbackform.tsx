import {KTSVG} from '../../../helpers'

type Props = {
  id: string
  title1: string
  title2: string
  confirm: string
  classname: string
  ConfirmHandler: () => {}
}
export function FeedbackModal(props: Props) {
  return (
    <div className='modal fade' tabIndex={-1} id={props.id}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{props.title1}</h5>
            <div
              className='btn btn-icon btn-sm btn-active-light-primary ms-2'
              data-bs-dismiss='modal'
              aria-label='Close'
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr061.svg'
                className='svg-icon svg-icon-2x'
              />
            </div>
          </div>
          <form>
            <div className='fv-row mb-5'>
              <div className='d-flex flex-column mb-10 fv-row'>
                <label className='required fs-5 px-5 fw-bold mb-2'>Feedback</label>
                <p className='fs-7 px-5 fw-muted mb-2'>
                  Feedbacks are anonymous and are used to provide Sponsors with meaningful
                  assessment. Please be professional.
                </p>
                <textarea
                  className='form-control mb-2'
                  rows={10}
                  maxLength={700}
                  placeholder={props.title2}
                  name='feedback'
                  autoComplete='off'
                ></textarea>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                Cancel
              </button>
              <button
                type='button'
                className={props.classname}
                onClick={props.ConfirmHandler}
                data-bs-dismiss='modal'
              >
                {props.confirm}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
