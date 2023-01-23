import {FC} from 'react'

// @ts-ignore

import Basic from './Forms/Basic'
import Individual from './Forms/Individual'
import Business from './Forms/Business'
import Sponsor from './Forms/Sponsor'

const Step3: FC = (props: any) => {
  return (
    <>
      {props.userTypeFull === 'standard_enabler' ? (
        <Individual setFieldValue={props.setFieldValue} />
      ) : props.userTypeFull === 'super_enabler' ? (
        <Individual setFieldValue={props.setFieldValue} />
      ) : props.userTypeFull === 'business_enabler' ? (
        <Business setFieldValue={props.setFieldValue} />
      ) : props.userType === 'sponsor' ? (
        <Sponsor setFieldValue={props.setFieldValue} />
      ) : (
        <Basic />
      )}
    </>
  )
}
export {Step3}
