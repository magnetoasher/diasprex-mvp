import clsx from 'clsx'
import {FC} from 'react'

type Props = {
  className?: string
  scroll?: boolean
  height?: number
  width?: number
}

const KTCardBody: FC<Props> = (props) => {
  const {className, scroll, height, width, children} = props
  return (
    <div
      className={clsx(
        'card-body',
        className && className,
        {
          'card-scroll': scroll,
        },
        height && `h-${height}px`,
        width && `w-${width}px`
      )}
      style = {{margin: 'auto'}}
    >
      {children}
    </div>
  )
}

export {KTCardBody}
