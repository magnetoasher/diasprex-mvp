import {useState} from 'react'
import {Tabs} from 'antd'
import {SendOutlined, SaveOutlined, FileDoneOutlined, RetweetOutlined} from '@ant-design/icons'

import {Create} from './createOpportunitiesComponents/Create'

import SponsorOpportunityCard from './SponsorsOpportunityCard'

const CreateOpportunities = () => {
  const {TabPane} = Tabs
  const onChange = (key: string) => {
    console.log(key)
  }

  const [saved] = useState([
    {
      category: 'Demo1',
      dealtype: 'equity financing',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/240/things',
    },
    {
      category: 'Demo2',
      dealtype: 'debt financing',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/241/things',
    },
    {
      category: 'Demo3',
      dealtype: 'partnership',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/243/things',
    },
    {
      category: 'Demo4',
      dealtype: 'consulting',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/244/things',
    },
    {
      category: 'Demo5',
      dealtype: 'contract',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/245/things',
    },
    {
      category: 'Demo6',
      dealtype: 'Crowdfunding',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/246/things',
    },
  ])

  return (
    <Tabs defaultActiveKey='1' onChange={onChange}>
      <TabPane
        tab={
          <span className='d-flex justify-content-center align-items-center'>
            <SendOutlined />
            Create
          </span>
        }
        key='1'
      >
        <Create />
      </TabPane>
      <TabPane
        tab={
          <span className='d-flex justify-content-center align-items-center'>
            <SaveOutlined />
            Draft
          </span>
        }
        key='2'
      >
        <div className=' overflow-auto p-3'>
          <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
            <div className='card-header cursor-pointer'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Draft Opportunities</h3>
              </div>
            </div>

            <div className='card-body p-2 overflow-auto' style={{height: '600px'}}>
              {/* <div className=' d-flex text-muted mb-5'>Draft Opportunities</div> */}
              {saved.map((e) => (
                <SponsorOpportunityCard
                  category={e.category}
                  dealtype={e.dealtype}
                  title={e.title}
                  summary={e.details}
                  badgeColor='gray-800'
                  status='draft'
                  picSrc={e.src}
                />
              ))}
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane
        tab={
          <span className='d-flex justify-content-center align-items-center'>
            <FileDoneOutlined />
            Submitted
          </span>
        }
        key='3'
      >
        <div className=' overflow-auto p-3'>
          <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
            <div className='card-header cursor-pointer'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Submitted Opprtunities</h3>
              </div>
            </div>

            <div className='card-body p-2 overflow-auto' style={{height: '600px'}}>
              {saved.map((e) => (
                <SponsorOpportunityCard
                  category={e.category}
                  dealtype={e.dealtype}
                  title={e.title}
                  summary={e.details}
                  badgeColor='primary'
                  status='submission status'
                  picSrc={e.src}
                />
              ))}
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane
        tab={
          <span className='d-flex justify-content-center align-items-center'>
            <FileDoneOutlined />
            Active
          </span>
        }
        key='4'
      >
        <div className=' overflow-auto p-3'>
          <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
            <div className='card-header cursor-pointer'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Active Opprtunities</h3>
              </div>
            </div>

            <div className='card-body p-2 overflow-auto' style={{height: '600px'}}>
              {saved.map((e) => (
                <SponsorOpportunityCard
                  category={e.category}
                  dealtype={e.dealtype}
                  title={e.title}
                  summary={e.details}
                  badgeColor='success'
                  status='active'
                  picSrc={e.src}
                />
              ))}
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane
        tab={
          <span className='d-flex justify-content-center align-items-center'>
            <FileDoneOutlined />
            Completed
          </span>
        }
        key='5'
      >
        <div className=' overflow-auto p-3'>
          <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
            <div className='card-header cursor-pointer'>
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Completed Opprtunities</h3>
              </div>
            </div>

            <div className='card-body p-2 overflow-auto' style={{height: '600px'}}>
              {saved.map((e) => (
                <SponsorOpportunityCard
                  category={e.category}
                  dealtype={e.dealtype}
                  title={e.title}
                  summary={e.details}
                  badgeColor='primary'
                  status='completed'
                  picSrc={e.src}
                />
              ))}
            </div>
          </div>
        </div>
      </TabPane>
    </Tabs>
  )
}
export default CreateOpportunities
