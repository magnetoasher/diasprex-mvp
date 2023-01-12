import {useState, useEffect} from 'react'
import {useDispatch, connect, ConnectedProps} from 'react-redux'
import {useOktaAuth} from '@okta/okta-react'
import {Tabs} from 'antd'
import {SendOutlined, SaveOutlined, FileDoneOutlined, RetweetOutlined} from '@ant-design/icons'
import {Create} from './createOpportunitiesComponents/Create'
import SponsorOpportunityCard from './SponsorsOpportunityCard'
import * as opps from '../../modules/opportunities/redux/OpportunityRedux'
import {RootState} from '../../../setup'
import {Opps} from '../../modules/apps/admin-mgt-apps/opp-management/opps-list/core/_models'

const mapState = (state: RootState) => ({opps: state.opps})
const connector = connect(mapState, opps.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const CreateOpportunities: React.FC<PropsFromRedux> = (props) => {
  const {authState} = useOktaAuth()
  const dispatch = useDispatch()
  const query = {
    sponsorUserId: authState?.accessToken?.claims.uid
  }

  const [draft, setDraft] = useState<Opps[]>([])
  const [active, setActive] = useState<Opps[]>([])
  const [submitted, setSubmitted] = useState<Opps[]>([])
  const [completed, setCompleted] = useState<Opps[]>([])

  useEffect(() => {
    if (authState !== null) {
      dispatch(props.getAllOppsRequest(query))
    }
  }, [])

  useEffect(() => {
    if (props.opps.opps.data) {
      setDraft(
        props.opps?.opps.data?.filter((obj: Opps) => {
          return obj.status === 'draft'
        })
      )
      setActive(
        props.opps?.opps.data?.filter((obj: Opps) => {
          return obj.status === 'active'
        })
      )
      setSubmitted(
        props.opps?.opps.data?.filter((obj: Opps) => {
          return (
            obj.status === 'new' ||
            obj.status === 'published' ||
            obj.status === 'accepted' ||
            obj.status === 'accepted with revision' ||
            obj.status === 'not accepted' ||
            obj.status === 'withdrawn'
          )
        })
      )
      setCompleted(
        props.opps?.opps.data?.filter((obj: Opps) => {
          return obj.status === 'completed'
        })
      )
    }
  }, [props.opps])

  const getOpps = () => {
    dispatch(props.getAllOppsRequest(query))
  }

  const {TabPane} = Tabs
  const onChange = (key: string) => {
    console.log(key)
  }

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
        <Create sponsorUserId={authState?.accessToken?.claims.uid} getOpps={getOpps} />
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
              {draft.map((e) => (
                <SponsorOpportunityCard
                  category={e.category}
                  dealtype={e.dealtype}
                  title={e.title}
                  summary={e.summary}
                  badgeColor='gray-800'
                  status='draft'
                  picSrc={e.thumbnail}
                  uuid={e.uuid}
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
              {submitted.map((e) => (
                <SponsorOpportunityCard
                  category={e.category}
                  dealtype={e.dealtype}
                  title={e.title}
                  summary={e.summary}
                  badgeColor='primary'
                  status='submission status'
                  picSrc={e.thumbnail}
                  uuid={e.uuid}
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
              {active.map((e) => (
                <SponsorOpportunityCard
                  category={e.category}
                  dealtype={e.dealtype}
                  title={e.title}
                  summary={e.summary}
                  badgeColor='success'
                  status='active'
                  picSrc={e.thumbnail}
                  uuid={e.uuid}
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
              {completed.map((e) => (
                <SponsorOpportunityCard
                  category={e.category}
                  dealtype={e.dealtype}
                  title={e.title}
                  summary={e.summary}
                  badgeColor='primary'
                  status='completed'
                  picSrc={e.thumbnail}
                  uuid={e.uuid}
                />
              ))}
            </div>
          </div>
        </div>
      </TabPane>
    </Tabs>
  )
}
export default connector(CreateOpportunities)
