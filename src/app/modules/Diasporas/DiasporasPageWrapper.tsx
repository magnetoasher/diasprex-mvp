import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {DiasporasPage} from './DiasporasPage'
import {Diasp, InitialDiasp} from './components/core/_model'

export const DiasporasPageWrapper: FC = () => {
  const diasp: Diasp = {
    title: InitialDiasp.title,
    name: InitialDiasp.name,
    flag: InitialDiasp.flag,
    profession: InitialDiasp.profession,
    afdinsight: InitialDiasp.afdinsight,
    rcountry: InitialDiasp.rcountry,
    afcountry: InitialDiasp.afcountry,
    undergrad: InitialDiasp.undergrad,
    grad: InitialDiasp.grad,
    summary: InitialDiasp.summary,
    interest: InitialDiasp.interest,
  }
  return (
    <>
      <PageTitle breadcrumbs={[]}>Diasporas</PageTitle>

      <DiasporasPage />
    </>
  )
}
