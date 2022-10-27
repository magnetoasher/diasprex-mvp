import React, {useState} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'

import {Tabs, Card, Tooltip, Select, Input} from 'antd'
import {CreateTable} from '../../../_metronic/partials/content/utilities/CreateTables'
import {myOppTabColumns, myOpportunitiesData} from './TableObjects/TableObjects'
import {TableFilters} from '../../../_metronic/partials/content/utilities/TableFilters'

export const MyOpportunityTable = () => {
  const [data, setData] = useState(myOpportunitiesData)
  const filter1 = ['All', 'Open', 'Close']
  const filter2 = ['All', 'Education', 'Agriculture']

  const handleChange = (value: any) => {
    if (value === 'All') {
      setData(myOpportunitiesData)
    } else {
      let dataTemp = myOpportunitiesData
      let temp = dataTemp.filter((e) => e.status.toLocaleLowerCase() === value.toLocaleLowerCase())
      setData(temp)
    }
  }

  return (
    <>
      <Card
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          borderRadius: '8px',
        }}
      >
        <PageTitle breadcrumbs={[]}>My Opportunities</PageTitle>
        <div>
          <div className=' mx-5'>
            <TableFilters
              filter1={filter1}
              filter2={filter2}
              filterparam2='Category'
              handleChange={handleChange}
            />
          </div>

          <CreateTable
            myOppTabColumns={myOppTabColumns}
            myOpportunitiesData={data}
            scrollAxis={{x: 900, y: 700}}
          />
        </div>
      </Card>
    </>
  )
}
