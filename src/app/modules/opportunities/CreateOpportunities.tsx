import {useState, useEffect} from 'react'
import {useDispatch, connect, ConnectedProps} from 'react-redux'
import {useOktaAuth} from '@okta/okta-react'
import {Tabs} from 'antd'
import {SendOutlined, SaveOutlined, FileDoneOutlined, RetweetOutlined} from '@ant-design/icons'
import {Create} from './createOpportunitiesComponents/Create'

import * as opps from '../../modules/opportunities/redux/OpportunityRedux'
import {RootState} from '../../../setup'
import {Opps} from '../../modules/apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import SponsorOpportunityCard2 from './SponsorOpportunityCard'
import {useParams} from 'react-router-dom'
import {ListLoading} from '../apps/admin-mgt-apps/core/loading/ListLoading'

const mapState = (state: RootState) => ({opps: state.opps})
const connector = connect(mapState, opps.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const CreateOpportunities: React.FC<PropsFromRedux> = (props) => {
  const {authState} = useOktaAuth()
  const {oppid: oppId} = useParams()
  const dispatch = useDispatch()
  const query = {
    sponsorUserId: authState?.accessToken?.claims.uid,
  }

  const [draft, setDraft] = useState<Opps[]>([])
  const [active, setActive] = useState<Opps[]>([])
  const [submitted, setSubmitted] = useState<Opps[]>([])
  const [completed, setCompleted] = useState<Opps[]>([])
  const [currentOpp, setCurrentOpp] = useState<Opps>({})

  useEffect(() => {
    if (oppId) {
      dispatch(props.getOppByIdRequest(oppId))
    }
  }, [oppId])

  useEffect(() => {
    if (authState !== null) {
      dispatch(props.getAllOppsRequest(query))
    }
  }, [])

  useEffect(() => {
    if (props.opps.opp) {
      setCurrentOpp(props.opps.opp[0])
    }
  }, [props.opps.opp])

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
  }, [props.opps.opps])

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
        {props.opps.isLoading ? (
          <ListLoading />
        ) : (
          <Create
            sponsorUserId={authState?.accessToken?.claims.uid}
            currentOpp={currentOpp}
            getOpps={getOpps}
          />
        )}
      </TabPane>
    </Tabs>
  )
}
export default connector(CreateOpportunities)
