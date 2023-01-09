import {FC} from 'react'
type Props = {
  attachment?: string
}

export const OppAttachmentCell: FC<Props> = ({attachment}) => {
  return (
    <div>
      <a
        href={`/${attachment}`}
        className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
      >
        Download
      </a>
    </div>
  )
}
