import React, { useState } from 'react'
import { PageTitle } from '../../../_metronic/layout/core'

import { EyeOutlined, SaveOutlined, FileAddOutlined, CheckOutlined, DashboardOutlined } from '@ant-design/icons';
import Opportunity from './Opportunity'
import { Tabs, Card } from 'antd';

const MyOpportunity = () => {
    const { TabPane } = Tabs;
    const onChange = (key: string) => {
        console.log(key);
    };
    const [dataObj] = useState([
        {
            name: 'completed1',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/190/140"


        },
        {
            name: 'completed2',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/191/140"

        },
        {
            name: 'completed3',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/192/140"

        },
        {
            name: 'completed4',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/193/140"

        }

    ])
    const [watching] = useState([
        {
            name: 'demo1',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/110"
        },
        {
            name: 'demo2',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/140"
        },
        {
            name: 'demo3',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/180"
        }

    ])
    const [saved] = useState([
        {
            name: 'demo4',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/121"
        },
        {
            name: 'demo5',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/140"
        },


    ])

    const [submissions] = useState([
        {
            name: 'demo6',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/101"
        },
        {
            name: 'demo7',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/102"
        },
        {
            name: 'demo8',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/103"
        },
        {
            name: 'demo9',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/104"
        },
        {
            name: 'demo10',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/105"
        },


    ])
    const [active] = useState([
        {
            name: 'demo11',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/130"
        },
        {
            name: 'demo12',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/200/110"
        },
        {
            name: 'demo13',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/100/130"
        },
        {
            name: 'demo14',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum'
        },
        {
            name: 'demo15',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/400/130"
        },


    ])
    return (
        <>
            <PageTitle breadcrumbs={[]}>Proposals</PageTitle>
            <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane
                    tab={
                        <span className='d-flex justify-content-center align-items-center'>
                            <EyeOutlined />
                            Watching
                        </span>
                    }
                    key="1">
                    <div className=' overflow-auto p-3' >
                        {
                            watching.map((e) =>
                                <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="cyan" badgeText="New" picSrc={e.src} />
                            )
                        }

                    </div>
                </TabPane>

                <TabPane
                    tab={
                        <span className='d-flex justify-content-center align-items-center'>
                            <SaveOutlined />
                            Saved
                        </span>
                    }
                    key="2">
                    <div className=' overflow-auto p-3' >
                        {
                            saved.map((e) =>
                                <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="cyan" badgeText="Saved" picSrc={e.src} />
                            )
                        }

                    </div>
                </TabPane>
                <TabPane
                    tab={
                        <span className='d-flex justify-content-center align-items-center'>
                            <FileAddOutlined />
                            Submissions
                        </span>
                    }
                    key="3">
                    <div className=' overflow-auto p-3' >
                        {
                            submissions.map((e) =>
                                <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="blue" badgeText="Submitted" picSrc={e.src} />
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
                    key="4">
                    <div className=' overflow-auto p-3' >
                        {
                            active.map((e) =>
                                <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="green" badgeText="Active" picSrc={e.src} />
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
                    key="5">
                    <div className=' overflow-auto p-3' >
                        {
                            dataObj.map((e) =>
                                <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={2} badgeColor="green" badgeText="Completed" picSrc={e.src} />
                            )
                        }

                    </div>
                </TabPane>
            </Tabs>

        </>
    )
}

export default MyOpportunity