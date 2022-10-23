/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { useSearchParams } from 'react-router-dom'
import { Sponsor } from './MenuList/Sponsor'
import { AdminMenu } from './MenuList/AdminMenu'
import { Individual } from './MenuList/Individual'
import { BasicMenu } from './MenuList/BasicMenu'

export function AsideMenuMain() {

  const intl = useIntl()

  const [searchParams, setSearchParams] = useSearchParams()
  let user = localStorage.getItem("userType");



  return (
    <>
      {user == "admin" ? <AdminMenu /> : user == "sponsor" ? <Sponsor /> : (user == "individual" || user == "business") ? <Individual /> : <BasicMenu />}
    </>
  )
}
// localStorage.setItem("userType", "admin")