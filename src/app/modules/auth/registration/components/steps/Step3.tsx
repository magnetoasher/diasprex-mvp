import React, { FC, useMemo, useState } from 'react'
import { Field, ErrorMessage } from 'formik'
// @ts-ignore
import AsyncSelect from 'react-select'
import countryList from 'react-select-country-list'
import Basic from './Forms/Basic'
import Individual from './Forms/Individual'
import Business from './Forms/Business'
import Sponsor from './Forms/Sponsor'

const Step3: FC = (props: any) => {
  return (
    <>

      {props.userType == "individual" ? <Individual /> : props.userType == "business" ? <Business /> : props.userType == "sponsor" ? <Sponsor /> : <Basic />}
    </>
  );
}
export { Step3 }
