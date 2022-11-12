import {FC} from 'react'

// @ts-ignore

import Basic from './Forms/Basic'
import Individual from './Forms/Individual'
import Business from './Forms/Business'
import Sponsor from './Forms/Sponsor'

const Step3: FC = (props: any) => {
  return (
    <>
      {props.userTypeFull == ('standard_enabler' || 'super_enabler') ? (
        <Individual />
      ) : props.userTypeFull == 'business_enabler' ? (
        <Business />
      ) : props.userType == 'sponsor' ? (
        <Sponsor />
      ) : (
        <Basic />
      )}
    </>
  )
}
export {Step3}
