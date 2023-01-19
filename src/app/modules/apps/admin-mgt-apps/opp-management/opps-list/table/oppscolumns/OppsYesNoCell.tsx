import {FC} from 'react'
import {Opps} from '../../core/_models'

type Props = {
  yes?: boolean
}

const OppsYesNoCell: FC<Props> = ({yes}) => (
  <>
    {yes ? (
      <div className='badge badge-light-success fw-bolder'>YES</div>
    ) : (
      <div className='badge badge-light-danger fw-bolder'>NO</div>
    )}
  </>
)

export {OppsYesNoCell}
