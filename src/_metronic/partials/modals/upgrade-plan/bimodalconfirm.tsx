import {FC} from 'react'
import {string} from 'yup'

type Props = {
  id1: string
  id2: string
  title1: string
  title2: string
  descr1: string
  descr2: string
  button1text: string
  button2text: string
}

export const BiModalConfirm: FC<Props> = ({
  id1,
  id2,
  title1,
  title2,
  descr1,
  descr2,
  button1text,
  button2text,
}) => {
  return (
    <>
      <div
        className='modal fade'
        id={id1}
        aria-hidden='true'
        aria-labelledby={`${id1}_modaltoggle`}
        tabIndex={-1}
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id={`${id1}_modaltogglelabel`}>
                {title1}
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>{descr1}</div>
            <div className='modal-footer'>
              <button
                className='btn btn-primary'
                data-bs-target={`#${id2}`}
                data-bs-toggle='modal'
                data-bs-dismiss='modal'
              >
                {button1text}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal fade'
        id={id2}
        aria-hidden='true'
        aria-labelledby={`${id2}_modaltoggle`}
        tabIndex={-1}
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id={`${id2}_modaltogglelabel`}>
                {title2}
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>{descr2}</div>
            <div className='modal-footer'>
              <button
                className='btn btn-primary'
                data-bs-target={`#${id2}`}
                data-bs-toggle='modal'
                data-bs-dismiss='modal'
              >
                {button2text}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <a
        className='btn btn-primary'
        data-bs-toggle='modal'
        href={`#${id1}_modaltoggle`}
        role='button'
      >
        Open first modal
      </a> */}
    </>
  )
}
