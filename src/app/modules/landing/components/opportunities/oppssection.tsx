import React from 'react'
import FeaturedOpportunities from './featuredopps'
import {HowOppsWorks} from './howoppsworks'
import {OppsStats} from './oppstats'

export const OppsSection = () => {
  return (
    <div>
      <OppsStats />
      <HowOppsWorks />
      <FeaturedOpportunities />
    </div>
  )
}
