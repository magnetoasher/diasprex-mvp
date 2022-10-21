import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import { DiasporasPage } from './DiasporasPage'
import { Diasp, InitialDiasp } from './components/core/_model'


export const DiasporasPageWrapper: FC = () => {
  const diasp:Diasp = {
    name: InitialDiasp.title + InitialDiasp.name,
    profession: InitialDiasp.profession,
    afdinsight: InitialDiasp.afdinsight,
    rcountry: InitialDiasp.rcountry,
    afcountry: InitialDiasp.afcountry,
    undergrad: InitialDiasp.undergrad,
    grad: InitialDiasp.grad,
    summary: InitialDiasp.summary,
    interest: InitialDiasp.interest
}
  return (
    <>
      <PageTitle breadcrumbs={[]}>Diasporas</PageTitle>
      <DiasporasPage
        name={diasp.name}
        profession={diasp.profession}
        rcountry={diasp.rcountry}
        afdinsight={diasp.afdinsight}
        afcountry={diasp.afcountry }
        interest={ diasp.interest}
        undergrad={ diasp.undergrad}
        grad={ diasp.grad}
        summary={diasp.summary}
      />
    </>
  )
}