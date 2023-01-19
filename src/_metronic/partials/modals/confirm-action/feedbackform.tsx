import {CustomUserClaim} from '@okta/okta-auth-js'
import {KTSVG} from '../../../helpers'
import {useState} from 'react'
import {Opps} from '../../../../app/modules/apps/admin-mgt-apps/opp-management/opps-list/core/_models'

type Props = {
  id: string
  title1: string
  title2: string
  confirm: string
  classname: string
  oppId: string
  userId: string
  ConfirmHandler: (data: IComment) => void
}

type IComment = {
  id: string
  opportunityUuid?: CustomUserClaim | CustomUserClaim[]
  enablerUserId?: CustomUserClaim | CustomUserClaim[]
  message?: string
  status: string
}

export function FeedbackModal(props: Props) {
  const [inputField, setInputField] = useState<Partial<IComment>>({
    message: '',
  })

  const inputsHandler = (e: any) => {
    setInputField({
      [e.target.name]: e.target.value,
    })
  }

  const provideFeedback = (e: any) => {
    const data = {
      id: `${props.oppId}/${props.userId}`,
      opportunityUuid: props.oppId,
      enablerUserId: props.userId,
      status: 'new',
      ...inputField,
    }
    props.ConfirmHandler(data)
  }

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
          <form onSubmit={provideFeedback}>
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
                  name='message'
                  onChange={inputsHandler}
                  autoComplete='off'
                ></textarea>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                Cancel
              </button>
              <button type='submit' className={props.classname} data-bs-dismiss='modal'>
                {props.confirm}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
