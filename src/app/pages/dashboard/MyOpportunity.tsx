import React, { useState } from 'react'
import { PageTitle } from '../../../_metronic/layout/core'

import { EyeOutlined, SaveOutlined, FileAddOutlined, CheckOutlined, DashboardOutlined } from '@ant-design/icons';
import Opportunity from './Opportunity'
import { Tabs, Card, Tooltip, Select, Input, } from 'antd';
import { CreateTable } from './CreateTables';
import { myOppTabColumns, myOpportunitiesData } from "./TableObjects/TableObjects"
import { TableFilters } from './TableFilters';


const MyOpportunity = () => {

    const [data, setData] = useState(myOpportunitiesData)
    const filterStatus = ["Open", "Closed"]

    const handleChange = (value: any) => {

        if (value === "all") {
            setData(myOpportunitiesData)
        }
        else {
            let dataTemp = myOpportunitiesData
            let temp = dataTemp.filter((e) => e.status.toLocaleLowerCase() === value.toLocaleLowerCase())
            setData(temp)
        }
    }

    return (
        <>
            <Card style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "8px",
            }}>

                <PageTitle breadcrumbs={[]}>My Opportunities</PageTitle>
                <div>

                    <div className=' mx-5'>
                        <TableFilters handleChange={handleChange} filterStatus={filterStatus} />
                    </div>

                    <CreateTable
                        myOppTabColumns={myOppTabColumns}
                        myOpportunitiesData={data}
                        scrollAxis={{ x: 900, y: 700 }}


                    />

                </div>

            </Card>
        </>
    )
}

export default MyOpportunity