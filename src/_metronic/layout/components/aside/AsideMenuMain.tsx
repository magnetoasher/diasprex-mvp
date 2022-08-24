/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { KTSVG } from '../../../helpers'
import { useSearchParams } from 'react-router-dom'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'
import { Sponsor } from './MenuList/Sponsor'
import { Business } from './MenuList/Business'
import { Individual } from './MenuList/Individual'
import { BasicMenu } from './MenuList/BasicMenu'

export function AsideMenuMain() {

  const intl = useIntl()

  const [searchParams, setSearchParams] = useSearchParams()
  let user = localStorage.getItem("userType");



  return (
    <>
      {user == "sponsor" ? <Sponsor /> : user == "business" ? <Business /> : user == "individual" ? <Individual /> : <BasicMenu />}
    </>
  )
}
