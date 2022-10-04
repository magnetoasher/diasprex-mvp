
import React, { useState } from 'react'
import { Tabs, Card } from 'antd';
import {
  SendOutlined,
  SaveOutlined,
  FileDoneOutlined,
  RetweetOutlined
} from '@ant-design/icons';
import { CreateTable } from './CreateTables';
import { myOppTabColumns, myOpportunitiesData, proposalsData, proposalsTabColumns } from "./TableObjects/TableObjects"
import { TableFilters } from './TableFilters';
import { PageTitle } from '../../../_metronic/layout/core'

import { Create } from './createOpportunitiesComponents/Create';
import Opportunity from './Opportunity';
const CreateOpportunities = () => {
  const { TabPane } = Tabs;
  const onChange = (key: string) => {
    console.log(key);
  };

  return (

    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane
        tab={
          <span className='d-flex justify-content-center align-items-center'>
            <SendOutlined />
            Create
          </span>
        }
        key="1">
        <Create />
      </TabPane>
      <TabPane
        tab={
          <span className='d-flex justify-content-center align-items-center'>
            <SaveOutlined />
            Draft
          </span>
        }
        key="2">
        <div className=' overflow-auto p-3' >
          {/* {
            saved.map((e) =>
              <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="cyan" badgeText="Draft" picSrc={e.src} />
            )
          } */}

          <Card style={{
            boxShadow:
              "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "8px",
          }}>

            <PageTitle breadcrumbs={[]}>My Opportunities</PageTitle>
            <div>

              <div className=' mx-5'>
                <TableFilters />
              </div>

              <CreateTable
                myOppTabColumns={myOppTabColumns}
                myOpportunitiesData={myOpportunitiesData}
                scrollAxis={{ x: 900, y: 700 }}
              />

            </div>

          </Card>

        </div>
      </TabPane>
      <TabPane
        tab={
          <span className='d-flex justify-content-center align-items-center'>
            <FileDoneOutlined />
            Submitted
          </span>
        }
        key="3">
        <div className=' overflow-auto p-3' >
          {/* {
            submitted.map((e: any) =>
              <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor={e.badgeColor} badgeText={e.badgeText} picSrc={e.src} />
            )
          } */}
          <Card style={{
            boxShadow:
              "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "8px",
          }}>

            <PageTitle breadcrumbs={[]}>My Opportunities</PageTitle>
            <div>

              <div className=' mx-5'>
                <TableFilters />
              </div>

              <CreateTable
                myOppTabColumns={proposalsTabColumns}
                myOpportunitiesData={proposalsData}
                scrollAxis={{ x: 900, y: 700 }}
              />

            </div>

          </Card>

        </div>
      </TabPane>
    </Tabs>

  )
};
export default CreateOpportunities;



