import React from 'react'
import {RemittanceCard} from './remittancecard'
import {RemittanceStats} from './remitstats'
import {HowRemitWorks} from './howremitworks'

export const RemitttanceSection = () => {
  return (
    <div>
      <RemittanceCard />
      <RemittanceStats />
      <HowRemitWorks />
    </div>
  )
}
