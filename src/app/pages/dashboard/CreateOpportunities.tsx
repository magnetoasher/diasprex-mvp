
import React, { useState } from 'react'
import { Tabs, Row, Col } from 'antd';
import {
  SendOutlined,
  SaveOutlined,
  FileDoneOutlined,
  RetweetOutlined
} from '@ant-design/icons';

import { Create } from './createOpportunitiesComponents/Create';
import Opportunity from './Opportunity';
const CreateOpportunities = () => {
  const { TabPane } = Tabs;
  const onChange = (key: string) => {
    console.log(key);
  };
  const [dataObj] = useState([
    {
      name: 'name',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum'
    },
    {
      name: 'name',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum'
    },
    {
      name: 'name',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum'
    }

  ])
  const [recent] = useState([
    {
      name: 'demo4',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/196/140"
    },
    {
      name: 'demo5',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/197/141"
    },


  ])

  const [submitted] = useState([
    {
      name: 'demo6',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/192/140",
      badgeColor: 'red',
      badgeText: 'In Review'
    },
    {
      name: 'demo7',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/192/145",
      badgeColor: 'red',
      badgeText: 'Accepted'
    },
    {
      name: 'demo8',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/192/147",
      badgeColor: 'red',
      badgeText: 'Accepted with Revision'
    },
    {
      name: 'demo9',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/192/148",
      badgeColor: 'red',
      badgeText: 'Not Accepted'
    },
    {
      name: 'demo10',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/192/149",
      badgeColor: 'red',
      badgeText: 'Expired'
    },


  ])
  const [saved] = useState([
    {
      name: 'demo11',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/172/140"
    },
    {
      name: 'demo12',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/173/140"
    },
    {
      name: 'demo13',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/174/140"
    },
    {
      name: 'demo14',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/175/140"

    },
    {
      name: 'demo15',
      userType: 'enabler',
      title: 'This is title',
      details: 'this is detail, lorem ispum',
      src: "https://picsum.photos/176/140"

    },


  ])
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
          {
            saved.map((e) =>
              <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="cyan" badgeText="Draft" picSrc={e.src} />
            )
          }

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
          {
            submitted.map((e: any) =>
              <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor={e.badgeColor} badgeText={e.badgeText} picSrc={e.src} />
            )
          }

        </div>
      </TabPane>
    </Tabs>

  )
};
export default CreateOpportunities;