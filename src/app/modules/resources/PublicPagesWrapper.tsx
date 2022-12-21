import React from 'react'
import { About, Dif, Faqs, Remittance } from './index'
import {Topbar} from '../../../_metronic/layout/components/header/Topbar'


export const AboutPagesWrapper = () => {
  return (
    <div>
      <Topbar />
      <About />
    </div>
  )
}

export const DifPagesWrapper = () => {
  return (
    <div>
      <Topbar />
      <Dif />
    </div>
  )
}

export const FaqsPagesWrapper = () => {
  return (
    <div>
      <Topbar />
      <Faqs/>
    </div>
  )
}

export const RemittancePagesWrapper = () => {
  return (
    <div>
      <Topbar />
      <Remittance/>
    </div>
  )
}