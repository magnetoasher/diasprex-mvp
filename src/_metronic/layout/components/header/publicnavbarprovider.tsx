import {FC} from 'react'
import {PublicNavBar} from './PublicNavBar'
import {PublicFooter} from '../../../../app/modules/landing/components/PublicFooter'

export const PublicNavbarProvider: FC = (props: any) => {
  return (
    <div>
      <PublicNavBar />
      <main>{props.children}</main>
      <PublicFooter />
    </div>
  )
}
