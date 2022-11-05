import React from 'react'
import {PublicDiasporasCard} from './diasporascard'

import {DiasporasStats} from './diasporastats'
import {FeaturedDiasporas} from './featureddiasporas'

export const DiasporasSection = () => {
  return (
    <div>
      <PublicDiasporasCard />
      <DiasporasStats />
      <FeaturedDiasporas />
    </div>
  )
}
