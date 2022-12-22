import {FC} from 'react'

type Props = {
  yes?: boolean
}

const DiasporaYesNoCell: FC<Props> = ({yes}) => (
  <>
    {yes ? (
      <div className='badge badge-light-success fw-bolder'>YES</div>
    ) : (
      <div className='badge badge-light-danger fw-bolder'>NO</div>
    )}
  </>
)

export {DiasporaYesNoCell}
