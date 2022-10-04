// import { Table } from "ant-table-extensions";
import { Col, Row, Table, Pagination } from "antd"


export const CreateTable = (props: any) => {

    console.log(props.myOpportunitiesData)
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} >

                <Table
                    pagination={false}
                    bordered
                    columns={props.myOppTabColumns}
                    dataSource={props.myOpportunitiesData}
                    scroll={props.scrollAxis}
                />
                <div style={{
                    "display": "flex",
                    "justifyContent": "center",
                    "marginTop": "14px"
                }}>

                    <Pagination />
                </div>
            </Col>
        </Row>
    )
}