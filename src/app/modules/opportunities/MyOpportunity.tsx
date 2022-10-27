import React, {useState} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'

import {
  EyeOutlined,
  SaveOutlined,
  FileAddOutlined,
  CheckOutlined,
  DashboardOutlined,
} from '@ant-design/icons'
import Opportunity from './Opportunity'
import {MyOpportunityTable} from './MyOpportunityTable'
import {Tabs, Card, Tooltip, Select, Input} from 'antd'
import {followed, saved, submitted, active, declined} from '../proposals/components/ProposalModels'

const MyOpportunity = () => {
  const [followedopps] = useState(followed)
  const [draftprop] = useState(saved)
  const [activeprop] = useState(active)
  const [submittedprop] = useState(submitted)
  const [declinedprop] = useState(declined)
  let user = localStorage.getItem('userType')

  const {TabPane} = Tabs
  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <Tabs defaultActiveKey='1' onChange={onChange}>
      <TabPane
        tab={
          <span className='d-flex justify-content-center align-items-center'>
            <EyeOutlined />
            Opportunities
          </span>
        }
        key='1'
      >
        <MyOpportunityTable />
      </TabPane>
      {user !== 'basic' && (
        <>
          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <SaveOutlined />
                Draft Proposal
              </span>
            }
            key='2'
          >
            <div className=' overflow-auto p-3'>
              {draftprop.map((e) => (
                <Opportunity
                  name={e.name}
                  userType={e.userType}
                  title={e.title}
                  detail={e.details}
                  column={2}
                  badgeColor='gray'
                  badgeText='Draft'
                  picSrc={e.src}
                />
              ))}
            </div>
          </TabPane>
          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <CheckOutlined />
                Submitted
              </span>
            }
            key='3'
          >
            <div className=' overflow-auto p-3'>
              {submittedprop.map((e) => (
                <Opportunity
                  name={e.name}
                  userType={e.userType}
                  title={e.title}
                  detail={e.details}
                  column={2}
                  badgeColor='green'
                  badgeText='Submitted'
                  picSrc={e.src}
                />
              ))}
            </div>
          </TabPane>

          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <DashboardOutlined />
                Active
              </span>
            }
            key='4'
          >
            <div className=' overflow-auto p-3'>
              {activeprop.map((e) => (
                <Opportunity
                  name={e.name}
                  userType={e.userType}
                  title={e.title}
                  detail={e.details}
                  column={2}
                  badgeColor='blue'
                  badgeText='Active'
                  picSrc={e.src}
                />
              ))}
            </div>
          </TabPane>

          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <FileAddOutlined />
                Declined
              </span>
            }
            key='5'
          >
            <div className=' overflow-auto p-3'>
              {declinedprop.map((e) => (
                <Opportunity
                  name={e.name}
                  userType={e.userType}
                  title={e.title}
                  detail={e.details}
                  column={2}
                  badgeColor='red'
                  badgeText='Declined'
                  picSrc={e.src}
                />
              ))}
            </div>
          </TabPane>
        </>
      )}
    </Tabs>
  )
}
export default MyOpportunity
