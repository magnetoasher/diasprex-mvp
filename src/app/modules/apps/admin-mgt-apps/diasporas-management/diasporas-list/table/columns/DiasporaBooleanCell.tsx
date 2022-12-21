import {FC} from 'react'

type Props = {
  condition?: boolean
}

const DiasporaBooleanCell: FC<Props> = ({condition}) => (
  <> {condition && <div className='badge badge-light-success fw-bolder'>Enabled</div>}</>
)

export {DiasporaBooleanCell}
