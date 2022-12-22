import React, {useState} from 'react'
import {Tabs, Card} from 'antd'
import {SendOutlined, SaveOutlined, FileDoneOutlined, RetweetOutlined} from '@ant-design/icons'
import {CreateTable} from '../../../_metronic/partials/content/utilities/CreateTables'
import {
  myOppTabColumns,
  myOpportunitiesData,
  proposalsData,
  proposalsTabColumns,
} from './TableObjects/TableObjects'
import {TableFilters} from '../../../_metronic/partials/content/utilities/TableFilters'
import {PageTitle} from '../../../_metronic/layout/core'

import {Create} from './createOpportunitiesComponents/Create'
import Opportunity from './Opportunity'

const CreateOpportunities = () => {
  const {TabPane} = Tabs
  const onChange = (key: string) => {
    console.log(key)
  }
  var userTypeFull = localStorage.getItem('userTypeFull')
  var userType = localStorage.getItem('userType')
  const [saved] = useState([
    {
      name: 'Demo1',
      userTypeFull: 'sponsor',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/240/things',
    },
    {
      name: 'Demo2',
      userTypeFull: 'sponsor',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/241/things',
    },
    {
      name: 'Demo3',
      userTypeFull: 'sponsor',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/243/things',
    },
    {
      name: 'Demo4',
      userTypeFull: 'sponsor',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/244/things',
    },
    {
      name: 'Demo5',
      userTypeFull: 'sponsor',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://loremflickr.com/g/320/245/things',
    },
    {
      name: 'Demo6',
      userTypeFull: 'sponsor',
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
                <h3 className='fw-bolder m-0'>Draft Opprtunities</h3>
              </div>
            </div>

            <div className='card-body p-2 overflow-auto' style={{height: '600px'}}>
              {saved.map((e) => (
                <Opportunity
                  name={e.name}
                  userTypeFull={e.userTypeFull}
                  title={e.title}
                  detail={e.details}
                  column={4}
                  badgeColor='blue'
                  badgeText='Draft'
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
                <Opportunity
                  name={e.name}
                  userTypeFull={e.userTypeFull}
                  title={e.title}
                  detail={e.details}
                  column={4}
                  badgeColor='green'
                  badgeText='Submitted'
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
