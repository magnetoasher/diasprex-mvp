import React, {useState} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'

import {
  EyeOutlined,
  SaveOutlined,
  FileAddOutlined,
  CheckOutlined,
  DashboardOutlined,
} from '@ant-design/icons'
import Opportunity from './EnablerOpportunityCard'
// import {MyOpportunityTable} from './MyOpportunityTable'
import {Tabs} from 'antd'
import {followedopps, draft, submitted, active, completed} from '../proposals/components/models'
import {EnablerProposalCard} from '../proposals/components/EnablerProposalCard'
import EnablerOpportunityCard from './EnablerOpportunityCard'

const MyOpportunity = () => {
  const [followed] = useState(followedopps)
  const [draftprop] = useState(draft)
  const [activeprop] = useState(active)
  const [submittedprop] = useState(submitted)
  const [completedprop] = useState(completed)
  let user = localStorage.getItem('userTypeFull')
  let userType = localStorage.getItem('userType')

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
            Followed Opps
          </span>
        }
        key='1'
      >
        <div className=' overflow-auto p-3'>
          <div className=' d-flex text-muted mb-5'>Followed Opporutinities</div>
          {/* <button type='button' className='btn btn-sm btn-light-primary'>
            Unfollow Selected
          </button> */}
          {followed.map((e) => (
            <EnablerOpportunityCard
              sponsor={e.sponsor}
              country={e.country}
              title={e.title}
              summary={e.summary}
              followed={e.followed}
              badgeColor='info'
              status='publication status'
              picSrc={e.src}
            />
          ))}
        </div>
        {/* <MyOpportunityTable /> */}
      </TabPane>
      {user !== 'basic_enabler' && (
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
              <div className=' d-flex text-muted mb-5'>Draft Proposals</div>
              {/* <button type='button' className='btn btn-sm btn-light-danger'>
                Delete Selected
              </button> */}
              {draftprop.map((e) => (
                <EnablerProposalCard
                  oppsponsor={e.oppsponsor}
                  oppcountry={e.oppcountry}
                  proptitle={e.proptitle}
                  propsummary={e.propsummary}
                  badgeColor='gray-800'
                  status='proposal in draft'
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
              <div className=' d-flex text-muted mb-5'>Submitted Proposals</div>
              {submittedprop.map((e) => (
                <EnablerProposalCard
                  oppsponsor={e.oppsponsor}
                  oppcountry={e.oppcountry}
                  proptitle={e.proptitle}
                  propsummary={e.propsummary}
                  badgeColor='primary'
                  status='submission status'
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
              <div className=' d-flex text-muted mb-5'>Active Proposals</div>
              {activeprop.map((e) => (
                <EnablerProposalCard
                  oppsponsor={e.oppsponsor}
                  oppcountry={e.oppcountry}
                  proptitle={e.proptitle}
                  propsummary={e.propsummary}
                  badgeColor='success'
                  status='active'
                  picSrc={e.src}
                />
              ))}
            </div>
          </TabPane>

          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <FileAddOutlined />
                Completed
              </span>
            }
            key='5'
          >
            <div className=' overflow-auto p-3'>
              <div className=' d-flex text-muted mb-5'>Completed Proposals</div>
              {completedprop.map((e) => (
                <EnablerProposalCard
                  oppsponsor={e.oppsponsor}
                  oppcountry={e.oppcountry}
                  proptitle={e.proptitle}
                  propsummary={e.propsummary}
                  badgeColor='primary'
                  status='completed'
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
