import {FC} from 'react'

export const BackDrop:FC = (props:any) => {
      return <div className = 'bg-dark w-100 opacity-75' tabIndex={-1}  onClick = {props.OnCancel} />
}
