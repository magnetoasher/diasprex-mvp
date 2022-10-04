import React, { useState } from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { Card } from 'antd';
import { CreateTable } from './CreateTables';
import { TableFilters } from './TableFilters';
import { proposalsTabColumns, proposalsData } from './TableObjects/TableObjects';
const SponsorProposals = () => {


    const filterStatus = ["All", "Achieved", "Selected", "Declined", "Awarded"]
    const [data, setData] = useState(proposalsData)
    const handleChange = (value: any) => {

        if (value.toLocaleLowerCase() === "all") {
            setData(proposalsData)
        }
        else {
            let dataTemp = proposalsData
            let temp = dataTemp.filter((e) => e.status.toLocaleLowerCase() === value.toLocaleLowerCase())
            setData(temp)
        }
    }
    return (
        <>
            <PageTitle breadcrumbs={[]}>Proposals</PageTitle>

            <Card style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "8px",
            }}>
                <div>
                    <TableFilters filterStatus={filterStatus} handleChange={handleChange} />
                    <div>
                        <CreateTable
                            myOppTabColumns={proposalsTabColumns}
                            myOpportunitiesData={data}
                            scrollAxis={{ x: 900, y: 700 }}
                        />
                    </div>
                </div>
            </Card>

            {/* <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane
                    tab={
                        <span className='d-flex justify-content-center align-items-center'>
                            <SendOutlined />
                            Submissions
                        </span>
                    }
                    key="1">
                    <div className=' overflow-auto p-3' >
                    {
                        submissions.map((e) =>
                                <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="cyan" badgeText="Submitted" picSrc={e.src} />
                            )
                        }
                        
                        </div>
                        </TabPane>
                        <TabPane
                        tab={
                            <span className='d-flex justify-content-center align-items-center'>
                            <LaptopOutlined />
                            Selected
                        </span>
                    } key="4">
                    <div className=' overflow-auto p-3' >
                        {
                            submissions.map((e) =>
                                <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="green" badgeText="Selected" picSrc={e.src} />
                            )
                        }

                    </div>
                </TabPane>
                <TabPane
                    tab={
                        <span className='d-flex justify-content-center align-items-center'>
                            <StopOutlined />
                            Declined
                        </span>
                    }
                    key="5">
                    <div className=' overflow-auto p-3' >
                        {
                            declined.map((e) =>
                                <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="red" badgeText="Declined" picSrc={e.src} />
                            )
                        }

                    </div>
                </TabPane>
                <TabPane
                    tab={
                        <span className='d-flex justify-content-center align-items-center'>
                            <DashboardOutlined />
                            Active
                        </span>
                    }
                    key="2">
                    <div className=' overflow-auto p-3' >
                        {
                            active.map((e) =>
                                <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="blue" badgeText="Active" picSrc={e.src} />
                            )
                        }

                    </div>
                </TabPane>
                <TabPane
                    tab={
                        <span className='d-flex justify-content-center align-items-center'>
                            <CheckOutlined />
                            Completed
                        </span>
                    }
                    key="3">
                    <div className=' overflow-auto p-3' >
                        {
                            dataObj.map((e) =>
                                <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="green" badgeText="Completed" picSrc={e.src} />
                            )
                        }

                    </div>
                </TabPane>
            </Tabs> */}

        </>
    )
}

export default SponsorProposals