import {FC} from 'react'

type Props = {
  open?: boolean
}

const OppsOpenCell: FC<Props> = ({open}) => (
  <> {open ? (<div className='badge badge-light-success fw-bolder'>YES</div>) :
    (<div className='badge badge-light-danger fw-bolder'>NO</div>)
}</>
)

export {OppsOpenCell}
