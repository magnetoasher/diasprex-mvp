import React from 'react'
import GeneralCardComponent from "./GeneralCardOpportunityComponent/GeneralCardCompnent";
import { Row, Col, Card, Typography, Pagination } from "antd"
import { PageTitle, PageLink } from "../../../_metronic/layout/core"
import "./opportunity.css"
function GeneralOpportunityCard() {
    const { Title } = Typography;

    const objectGeneralCardComponent = [

        {
            id: 1,
            title: "Fitness App",
            description: "Manages your fitness",
            dueDate: "November 18, 2022",
            budget: "$234,2444.00",
            avatar: "A",
            img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
        },
        {
            id: 2,
            title: "Grocery App",
            description: "Manages your grocery",
            dueDate: "September 15, 2022",
            budget: "$134,2200.00",
            avatar: "F",
            img: "https://picsum.photos/200/300"
        },

        {
            id: 3,
            title: "Demo App",
            description: "This is demo app",
            dueDate: "December 10, 2022",
            budget: "$334,2078.00",
            avatar: "N",
            img: "https://picsum.photos/200/100"
        },

        {
            id: 4,
            title: "Radio App",
            description: "Manages your radio frequency",
            dueDate: "Jan 20, 2023",
            budget: "$753,523.00",
            avatar: "G",
            img: "https://picsum.photos/200/150"
        },
        {
            id: 5,
            title: "Trainer App",
            description: "Manages your trainings",
            dueDate: "Nov 20, 2022",
            budget: "$222,3334.00",
            avatar: "H",
            img: "https://picsum.photos/200/50"
        },

        {
            id: 6,
            title: "Media App",
            description: "Manages your media",
            dueDate: "October 20, 2022",
            budget: "$207,9856.00",
            avatar: "L",
            img: "https://picsum.photos/200/130"
        },


    ]
    return (
        <>
            <PageTitle >Opportunities</PageTitle>
            <Card style={{ backgroundColor: 'rgba(0,0,0, .02)' }}>

                <Row gutter={16} justify="space-evenly">

                    {
                        objectGeneralCardComponent.map((element, index) => {
                            return (
                                <Col xs={24} sm={24} md={7} lg={7} style={{ margin: "10px" }}
                                    className="box-shadow-style bg-white"
                                >
                                    <GeneralCardComponent
                                        title={element.title}
                                        description={element.description}
                                        dueDate={element.dueDate}
                                        budget={element.budget}
                                        src={element.img}
                                        avatar={element.avatar}
                                    />
                                </Col>
                            )
                        })
                    }


                    <Col xs={24} sm={24} md={24} lg={24} style={{ display: "flex", justifyContent: "center" }}>

                        <Pagination defaultCurrent={1} total={50} />
                    </Col>
                </Row>

            </Card>

        </>
    )
}

export default GeneralOpportunityCard