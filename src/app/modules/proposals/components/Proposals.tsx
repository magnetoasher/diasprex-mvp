import React, {useState} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import Opportunity from '../../opportunities/Opportunity'
import {
  SendOutlined,
  DashboardOutlined,
  CheckOutlined,
  LaptopOutlined,
  StopOutlined,
} from '@ant-design/icons'
import {Tabs, Card} from 'antd'

const Proposals = () => {
  const {TabPane} = Tabs
  const onChange = (key: string) => {
    console.log(key)
  }
  const [dataObj] = useState([
    {
      name: 'completed1',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/192/140',
    },
    {
      name: 'completed2',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/193/140',
    },
    {
      name: 'completed3',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/194/140',
    },
    {
      name: 'completed4',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/195/140',
    },
  ])
  const [watching] = useState([
    {
      name: 'demo1',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
    },
    {
      name: 'demo2',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
    },
    {
      name: 'demo3',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
    },
  ])
  const [declined] = useState([
    {
      name: 'demo4',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/196/140',
    },
    {
      name: 'demo5',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/197/141',
    },
  ])

  const [submissions] = useState([
    {
      name: 'demo6',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/192/140',
    },
    {
      name: 'demo7',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/192/145',
    },
    {
      name: 'demo8',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/192/147',
    },
    {
      name: 'demo9',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/192/148',
    },
    {
      name: 'demo10',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/192/149',
    },
  ])
  const [active] = useState([
    {
      name: 'demo11',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/172/140',
    },
    {
      name: 'demo12',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/173/140',
    },
    {
      name: 'demo13',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/174/140',
    },
    {
      name: 'demo14',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/175/140',
    },
    {
      name: 'demo15',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: 'https://picsum.photos/176/140',
    },
  ])
  return (
    <>
      <PageTitle breadcrumbs={[]}>Proposals</PageTitle>
      <Tabs defaultActiveKey='1' onChange={onChange}>
        <TabPane
          tab={
            <span className='d-flex justify-content-center align-items-center'>
              <SendOutlined />
              Submissions
            </span>
          }
          key='1'
        >
          <div className=' overflow-auto p-3'>
            {submissions.map((e) => (
              <Opportunity
                name={e.name}
                userType={e.userType}
                title={e.title}
                detail={e.details}
                column={2}
                badgeColor='cyan'
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
          key='2'
        >
          <div className=' overflow-auto p-3'>
            {active.map((e) => (
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
              <CheckOutlined />
              Completed
            </span>
          }
          key='3'
        >
          <div className=' overflow-auto p-3'>
            {dataObj.map((e) => (
              <Opportunity
                name={e.name}
                userType={e.userType}
                title={e.title}
                detail={e.details}
                column={2}
                badgeColor='green'
                badgeText='Completed'
                picSrc={e.src}
              />
            ))}
          </div>
        </TabPane>

        <TabPane
          tab={
            <span className='d-flex justify-content-center align-items-center'>
              <LaptopOutlined />
              Accepted
            </span>
          }
          key='4'
        >
          <div className=' overflow-auto p-3'>
            {submissions.map((e) => (
              <Opportunity
                name={e.name}
                userType={e.userType}
                title={e.title}
                detail={e.details}
                column={2}
                badgeColor='green'
                badgeText='Accepted'
                picSrc={e.src}
              />
            ))}
          </div>
        </TabPane>

        <TabPane
          tab={
            <span className='d-flex justify-content-center align-items-center'>
              <StopOutlined />
              Declined
            </span>
          }
          key='5'
        >
          <div className=' overflow-auto p-3'>
            {declined.map((e) => (
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
      </Tabs>
    </>
  )
}

export default Proposals
