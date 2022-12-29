import {
  EyeOutlined,
  SelectOutlined,
  UserDeleteOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import {Tag, Checkbox, Tooltip} from 'antd'
export const proposalsTabColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
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
    title: 'Enabler',
    dataIndex: 'enabler',
    key: 'enabler',
    align: 'center',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    align: 'center',
  },
  {
    title: 'Date Submitted',
    dataIndex: 'date_submitted',
    key: 'date_submitted',
    align: 'center',
  },
  {
    title: 'Enabler Type',
    dataIndex: 'enabler_type',
    key: 'enabler_type',
    align: 'center',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (_: any, ele: any) => {
      return (
        <div>
          {ele.status === 'Achived' && <Tag color='warning'>{ele.status}</Tag>}

          {ele.status === 'Selected' && <Tag color='processing'>{ele.status}</Tag>}
          {ele.status === 'Declined' && <Tag color='error'>{ele.status}</Tag>}
          {ele.status === 'Awarded' && <Tag color='success'>{ele.status}</Tag>}
        </div>
      )
    },
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
              <Tooltip title='Review'>
                <EyeOutlined />
              </Tooltip>
            </a>
          </div>
          {/* <div>
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
              <Tooltip title='Select'>
                <SelectOutlined />
              </Tooltip>
            </a>
          </div> */}
          {/* <div>
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
          </div> */}
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
              <Tooltip title='Decline'>
                <DeleteOutlined />
              </Tooltip>
            </a>
          </div>
        </div>
      )
    },
  },
]

export const proposalsData = [
  {
    id: 'BSC17',
    enabler: 'Muhammad',
    country: 'Pakistan',
    date_submitted: '01/12/2022',
    enabler_type: 'Super Enabler',
    status: 'Achived',
    action: 'View',
  },
  {
    id: 'BSC18',
    enabler: 'Ali',
    country: 'London',
    date_submitted: '01/12/2022',
    enabler_type: 'Basic Enabler',
    status: 'Selected',
    action: 'Select',
  },
  {
    id: 'BSC19',
    enabler: 'Daniela',
    country: 'Chicago',
    date_submitted: '01/12/2022',
    enabler_type: 'Business',
    status: 'Declined',
    action: 'Decline',
  },
  {
    id: 'BSC20',
    enabler: 'Dessa',
    country: 'San fransisco',
    date_submitted: '01/12/2022',
    enabler_type: 'Business',
    status: 'Declined',
    action: 'Decline',
  },
  {
    id: 'AAA17',
    enabler: 'Josh',
    country: 'California',
    date_submitted: '01/12/2022',
    enabler_type: 'Super Enabler',
    status: 'Awarded',
    action: 'Archive',
  },
  {
    id: 'FGT17',
    enabler: 'Allen',
    country: 'Lusiana',
    date_submitted: '01/12/2022',
    enabler_type: 'Basic Enabler',
    action: 'View',
    status: 'Awarded',
  },
  {
    id: 'JHD77',
    enabler: 'Jake',
    country: 'London',
    date_submitted: '01/12/2022',
    enabler_type: 'Basic Enabler',
    status: 'Selected',
    action: 'Select',
  },
  {
    id: 'POU19',
    enabler: 'Daniela',
    country: 'Chicago',
    date_submitted: '01/12/2022',
    enabler_type: 'Super Enabler',
    status: 'Declined',
    action: 'Decline',
  },
  {
    id: 'YDD77',
    enabler: 'Josh',
    country: 'California',
    date_submitted: '01/12/2022',
    enabler_type: 'Business',
    status: 'Awarded',
    action: 'Archive',
  },
]
