import React from 'react'
import { MenuItem } from './MenuItem'
import { MenuInnerWithSub } from './MenuInnerWithSub'
import { MegaMenu } from './MegaMenu'
import { useIntl } from 'react-intl'
import Sponsor from './User_Menu/Sponsor'
import Business from './User_Menu/Business'
import Generic from './User_Menu/Generic'
import Individual from './User_Menu/Individual'

export function MenuInner() {
  const intl = useIntl()
  let user = localStorage.getItem("userType");

  return (
    <>
      {user === "sponsor" ? <Sponsor /> : (user == "individual" || user == "business") ? <Individual /> : <Generic />}
    </>

  )
}
