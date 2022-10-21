import {
    EyeOutlined
    , UserDeleteOutlined
    , SelectOutlined,
    CloseCircleOutlined,
    FolderOpenOutlined,
    EditOutlined,
    DeleteOutlined,


} from "@ant-design/icons";
import { Tag, Checkbox, Tooltip } from "antd"

export const myOpportunitiesData = [
    {
        id: "BSC17",
        sponser: "Muhammad",
        country: "Pakistan",
        date_open: "01/12/2022",
        due_date: "02/03/2022",
        company_revenue: "8347$",
        status: "Open",
        category: "Game",
        action: "View",

    },
    {
        id: "BSC56",
        sponser: "Ali",
        country: "Nigeria",
        date_open: "01/12/2022",
        due_date: "02/03/2022",
        company_revenue: "33$",
        status: "Close",
        category: "Test",
        action: "View"

    },
    {
        id: "BSC44",
        sponser: "Bill",
        country: "Greeland",
        date_open: "01/12/2022",
        due_date: "02/03/2022",
        company_revenue: "3444$",
        status: "Open",
        category: "Software Testing",
        action: "Unfollow"
    },

    {
        id: "BSC56",
        sponser: "Ali",
        country: "Nigeria",
        date_open: "01/12/2022",
        due_date: "02/03/2022",
        company_revenue: "33$",
        status: "Close",
        category: "Test",
        action: "View"
    },
    {
        id: "BSC44",
        sponser: "Bill",
        country: "Greeland",
        date_open: "01/12/2022",
        due_date: "02/03/2022",
        company_revenue: "3444$",
        status: "Open",
        category: "Software Testing",
        action: "Unfollow"
    },
    {
        id: "BSC18",
        sponser: "Joe",
        country: "Nigeria",
        date_open: "01/12/2022",
        due_date: "02/03/2022",
        company_revenue: "344$",
        status: "Open",
        category: "Software",
        action: "View"
    },
]

export const myOppTabColumns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        align: "center",
        width: 90,
        render: (_: any, ele: any) => {

            return (
                <div style={{
                    "display": "flex",
                    "justifyContent": "space-around"
                }}>
                    <Checkbox />
                    <label >
                        {ele.id}
                    </label>
                </div>
            )
        }

    },
    {
        title: "Sponser",
        dataIndex: "sponser",
        key: "sponser",
        align: "center",
        width: 100,
    },
    {
        title: "Country",
        dataIndex: "country",
        key: "country",
        align: "center",
        width: 90,

    },
    {
        title: "Date Open",
        dataIndex: "date_open",
        key: "date_open",
        align: "center",
        width: 100,
    },
    {
        title: "Due Date",
        dataIndex: "due_date",
        key: "due_date",
        align: "center",
        width: 100,
    },
    {
        title: "Company Revenue",
        dataIndex: "company_revenue",
        key: "company_revenue",
        align: "center",
        width: 150,
        render: (_: any, ele: any) => {

            return (
                <div style={{ color: "green" }}>

                    {ele.company_revenue}

                </div>
            )
        },
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        align: "center",
        render: (_: any, ele: any) => {

            return (
                <div>
                    {ele.status === "Sold" &&

                        <Tag
                            color="success">
                            {ele.status}
                        </Tag>
                    }

                    {ele.status === "Open" &&
                        <Tag
                            color="processing">
                            {ele.status}
                        </Tag>}
                    {ele.status === "Selling" &&
                        <Tag
                            color="warning">
                            {ele.status}
                        </Tag>}
                    {ele.status === "Close" &&
                        <Tag
                            color="error">
                            {ele.status}
                        </Tag>}
                </div>
            )
        },
        width: 100,


    },
    {
        title: "Category",
        dataIndex: "category",
        key: "category",
        align: "center",
        width: 100,

    },
    {
        title: "Actions",
        dataIndex: "action",
        key: "action",
        align: "center",

        render: (_: any, ele: any) => {
            return (
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ margin: "2px", "backgroundColor": "#ededed", "color": "green", "padding": "7px", "display": "flex", "justifyContent": "center", "alignItems": "center", "width": "28px", "borderRadius": "5px" }}>

                        < EyeOutlined />
                    </div>
                    <div style={{ margin: "2px", "backgroundColor": "#ededed", "color": "orange", "padding": "7px", "display": "flex", "justifyContent": "center", "alignItems": "center", "width": "28px", "borderRadius": "5px" }}>

                        <UserDeleteOutlined />
                    </div>
                    <div style={{ margin: "2px", "backgroundColor": "#ededed", "color": "#0065ff", "padding": "7px", "display": "flex", "justifyContent": "center", "alignItems": "center", "width": "28px", "borderRadius": "5px" }}>

                        <EditOutlined />
                    </div>
                    <div style={{ margin: "2px", "backgroundColor": "#ededed", "color": "red", "padding": "7px", "display": "flex", "justifyContent": "center", "alignItems": "center", "width": "28px", "borderRadius": "5px" }}>

                        <DeleteOutlined />
                    </div>
                </div>
            )
        },
        width: 120,

    },
]



export const proposalsTabColumns = [

    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        align: "center",
        render: (_: any, ele: any) => {

            return (
                <div style={{
                    "display": "flex",
                    "justifyContent": "space-around"
                }}>
                    <Checkbox />
                    <label >
                        {ele.id}
                    </label>
                </div>
            )
        }

    },
    {
        title: "Enabler",
        dataIndex: "enabler",
        key: "enabler",
        align: "center",
    },
    {
        title: "Country",
        dataIndex: "country",
        key: "country",
        align: "center"

    },
    {
        title: "Date Submitted",
        dataIndex: "date_submitted",
        key: "date_submitted",
        align: "center"
    },
    {
        title: "Enabler Type",
        dataIndex: "enabler_type",
        key: "enabler_type",
        align: "center"
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        align: "center",
        render: (_: any, ele: any) => {

            return (
                <div>
                    {ele.status === "Achieved" &&
                        <Tag
                            color="success">
                            {ele.status}
                        </Tag>
                    }

                    {ele.status === "Selected" &&
                        <Tag
                            color="processing">
                            {ele.status}
                        </Tag>}
                    {ele.status === "Declined" &&
                        <Tag
                            color="error">
                            {ele.status}
                        </Tag>}
                    {ele.status === "Awarded" &&
                        <Tag
                            color="warning">
                            {ele.status}
                        </Tag>}
                </div>
            )
        }


    },
    {
        title: "Actions",
        dataIndex: "action",
        key: "action",
        align: "center",
        render: (_: any, ele: any) => {
            return (

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ margin: "2px", "backgroundColor": "#ededed", "color": "green", "padding": "7px", "display": "flex", "justifyContent": "center", "alignItems": "center", "width": "28px", "borderRadius": "5px" }}>

                        < EyeOutlined />
                    </div>
                    <div style={{ margin: "2px", "backgroundColor": "#ededed", "color": "orange", "padding": "7px", "display": "flex", "justifyContent": "center", "alignItems": "center", "width": "28px", "borderRadius": "5px" }}>

                        <UserDeleteOutlined />
                    </div>
                    <div style={{ margin: "2px", "backgroundColor": "#ededed", "color": "#0065ff", "padding": "7px", "display": "flex", "justifyContent": "center", "alignItems": "center", "width": "28px", "borderRadius": "5px" }}>

                        <EditOutlined />
                    </div>
                    <div style={{ margin: "2px", "backgroundColor": "#ededed", "color": "red", "padding": "7px", "display": "flex", "justifyContent": "center", "alignItems": "center", "width": "28px", "borderRadius": "5px" }}>

                        <DeleteOutlined />
                    </div>
                </div>

            )
        }

    },
]

export const proposalsData = [
    {
        id: "BSC17",
        enabler: "Muhammad",
        country: "Pakistan",
        date_submitted: "01/12/2022",
        enabler_type: "Super Enabler",
        status: "Achieved",
        action: "View",

    },
    {
        id: "BSC18",
        enabler: "Ali",
        country: "London",
        date_submitted: "01/12/2022",
        enabler_type: "Basic Enabler",
        status: "Selected",
        action: "Select",

    },
    {
        id: "BSC19",
        enabler: "Daniela",
        country: "Chicago",
        date_submitted: "01/12/2022",
        enabler_type: "Business",
        status: "Declined",
        action: "Decline",

    },
    {
        id: "BSC20",
        enabler: "Dessa",
        country: "San fransisco",
        date_submitted: "01/12/2022",
        enabler_type: "Business",
        status: "Declined",
        action: "Decline",

    },
    {
        id: "AAA17",
        enabler: "Josh",
        country: "California",
        date_submitted: "01/12/2022",
        enabler_type: "Super Enabler",
        status: "Awarded",
        action: "Archive",

    },
    {
        id: "FGT17",
        enabler: "Allen",
        country: "Lusiana",
        date_submitted: "01/12/2022",
        enabler_type: "Basic Enabler",
        action: "View",
        status: "Awarded"
    },
    {
        id: "JHD77",
        enabler: "Jake",
        country: "London",
        date_submitted: "01/12/2022",
        enabler_type: "Basic Enabler",
        status: "Selected",
        action: "Select",

    },
    {
        id: "POU19",
        enabler: "Daniela",
        country: "Chicago",
        date_submitted: "01/12/2022",
        enabler_type: "Super Enabler",
        status: "Declined",
        action: "Decline",

    },
    {
        id: "YDD77",
        enabler: "Josh",
        country: "California",
        date_submitted: "01/12/2022",
        enabler_type: "Business",
        status: "Awarded",
        action: "Archive",

    },

]