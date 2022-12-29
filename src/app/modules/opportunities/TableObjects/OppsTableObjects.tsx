import {
  EyeOutlined,
  UserDeleteOutlined,
  SelectOutlined,
  CloseCircleOutlined,
  FolderOpenOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import {Tag, Checkbox, Tooltip} from 'antd'

export const myOpportunitiesData = [
  {
    id: 'BSC17',
    sponsor: 'Muhammad',
    country: 'Pakistan',
    date_open: '01/12/2022',
    due_date: '02/03/2022',
    company_revenue: '8347$',
    status: 'Open',
    category: 'Game',
    action: 'View',
  },
  {
    id: 'BSC56',
    sponsor: 'Ali',
    country: 'Nigeria',
    date_open: '01/12/2022',
    due_date: '02/03/2022',
    company_revenue: '33$',
    status: 'Close',
    category: 'Test',
    action: 'View',
  },
  {
    id: 'BSC44',
    sponsor: 'Bill',
    country: 'Greeland',
    date_open: '01/12/2022',
    due_date: '02/03/2022',
    company_revenue: '3444$',
    status: 'Open',
    category: 'Software Testing',
    action: 'Unfollow',
  },

  {
    id: 'BSC56',
    sponsor: 'Ali',
    country: 'Nigeria',
    date_open: '01/12/2022',
    due_date: '02/03/2022',
    company_revenue: '33$',
    status: 'Close',
    category: 'Test',
    action: 'View',
  },
  {
    id: 'BSC44',
    sponsor: 'Bill',
    country: 'Greeland',
    date_open: '01/12/2022',
    due_date: '02/03/2022',
    company_revenue: '3444$',
    status: 'Open',
    category: 'Software Testing',
    action: 'Unfollow',
  },
  {
    id: 'BSC18',
    sponsor: 'Joe',
    country: 'Nigeria',
    date_open: '01/12/2022',
    due_date: '02/03/2022',
    company_revenue: '344$',
    status: 'Open',
    category: 'Software',
    action: 'View',
  },
]

export const myOppTabColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    width: 90,
    render: (_: any, ele: any) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Checkbox />
          <label>{ele.id}</label>
        </div>
      )
    },
  },
  {
    title: 'Sponsor',
    dataIndex: 'sponsor',
    key: 'sponsor',
    align: 'center',
    width: 100,
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    align: 'center',
    width: 90,
  },
  {
    title: 'Date Open',
    dataIndex: 'date_open',
    key: 'date_open',
    align: 'center',
    width: 100,
  },
  {
    title: 'Due Date',
    dataIndex: 'due_date',
    key: 'due_date',
    align: 'center',
    width: 100,
  },
  {
    title: 'Company Revenue',
    dataIndex: 'company_revenue',
    key: 'company_revenue',
    align: 'center',
    width: 150,
    render: (_: any, ele: any) => {
      return <div style={{color: 'green'}}>{ele.company_revenue}</div>
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (_: any, ele: any) => {
      return (
        <div>
          {ele.status === 'Sold' && <Tag color='success'>{ele.status}</Tag>}

          {ele.status === 'Open' && <Tag color='processing'>{ele.status}</Tag>}
          {ele.status === 'Selling' && <Tag color='warning'>{ele.status}</Tag>}
          {ele.status === 'Close' && <Tag color='error'>{ele.status}</Tag>}
        </div>
      )
    },
    width: 100,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    align: 'center',
    width: 100,
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'action',
    align: 'center',

    render: (_: any, ele: any) => {
      return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div>
            <a
              href='#'
              onClick={() => {}}
              style={{
                margin: '2px',
                backgroundColor: '#ededed',
                color: 'green',
                padding: '7px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '28px',
                borderRadius: '5px',
              }}
            >
              <EyeOutlined />
            </a>
          </div>
          <div>
            <a
              href='#'
              onClick={() => {}}
              style={{
                margin: '2px',
                backgroundColor: '#ededed',
                color: 'orange',
                padding: '7px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '28px',
                borderRadius: '5px',
              }}
            >
              <UserDeleteOutlined />
            </a>
          </div>
          <div>
            <a
              href='#'
              onClick={() => {}}
              style={{
                margin: '2px',
                backgroundColor: '#ededed',
                color: '#0065ff',
                padding: '7px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '28px',
                borderRadius: '5px',
              }}
            >
              <EditOutlined />
            </a>
          </div>

          <div>
            <a
              href='#'
              onClick={() => {}}
              style={{
                margin: '2px',
                backgroundColor: '#ededed',
                color: 'red',
                padding: '7px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '28px',
                borderRadius: '5px',
              }}
            >
              <DeleteOutlined />
            </a>
          </div>
        </div>
      )
    },
    width: 120,
  },
]
