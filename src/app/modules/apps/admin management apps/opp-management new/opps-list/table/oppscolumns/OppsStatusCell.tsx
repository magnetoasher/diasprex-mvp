import clsx from 'clsx'
import { FC } from 'react'

type Props = {
  status?: string
}

const OppsStatusCell: FC<Props> = ({ status }) => (
  
  < div className={clsx(
    { "badge badge-light-success": status === 'Accepted' },
    { "badge badge-light-warning": status === 'Accepted w Review' },
    { "badge badge-light-danger": status === 'Not Accepted' },
    { "badge badge-light-primary": status === 'In Review' },
  {"badge badge-light-dark": status === 'Expired'})}> {status}</div>


)

export {OppsStatusCell}
