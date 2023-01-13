import React, {useState, useEffect, useContext} from 'react'
import {useDispatch, connect, ConnectedProps, useSelector, shallowEqual} from 'react-redux'
import {useOktaAuth} from '@okta/okta-react'
import {PageTitle} from '../../../_metronic/layout/core'

import {
  EyeOutlined,
  SaveOutlined,
  FileAddOutlined,
  CheckOutlined,
  DashboardOutlined,
} from '@ant-design/icons'
import Opportunity from './EnablerOpportunityCard'
// import {MyOpportunityTable} from './MyOpportunityTable'
import {Tabs} from 'antd'
// import {followedopps, draft, submitted, active, completed} from '../proposals/components/models'
import * as proposals from '../proposals/redux/ProposalRedux'
import * as opps from '../../modules/opportunities/redux/OpportunityRedux'
import {RootState} from '../../../setup'
import {Proposal} from '../../modules/apps/admin-mgt-apps/proposal-management/props-list/core/_models'
import EnablerOpportunityCard2 from './EnablerOpportunityCard2'
import {Link} from 'react-router-dom'
import {EnablerProposalCard2} from '../proposals/components/EnablerProposalCard2'
import axios from 'axios'
import { Opps } from '../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import {unsupportOppAPI} from '../../modules/opportunities/redux/OpportunityAPI'
import Swal from 'sweetalert2'

const mapState = (state: RootState) => ({proposals: state.proposals, opps: state.opps})
const connector = connect(mapState, {...proposals.actions, ...opps.actions})
type PropsFromRedux = ConnectedProps<typeof connector>

const MyOpportunity: React.FC<PropsFromRedux> = (props) => {
  const {authState} = useOktaAuth()
  const dispatch = useDispatch()
  const query = {
    // @ts-ignore
    enablerUserId: authState?.accessToken?.claims.uid,
  }
  const params = {
    enablerUserId: authState?.accessToken?.claims.uid,
    items_per_page: 5,
    page: 1,
  }
  const [followedOpp, setFollowedOpp] = useState<Proposal[]>([])
  const [supportedOpp, setSupportedOpp] = useState<Opps[]>([])

  let user = localStorage.getItem('userTypeFull')
  let userType = localStorage.getItem('userType')

  useEffect(() => {
    if (authState !== null) {
      dispatch(props.getProposalsRequest(query))
      dispatch(props.getSupportedOppsRequest(params))
    }
  }, [authState])

  useEffect(() => {
    if (props.proposals.proposals.data) {
      setFollowedOpp(
        props.proposals?.proposals.data?.filter((obj: Proposal) => {
          return obj.status === 'followed'
        })
      )
    }
  }, [props.proposals])

  useEffect(() => {
    if (props.opps.opps.data) {
      setSupportedOpp(props.opps?.opps.data)
    }
  }, [props.opps])

  const unfollowOpp = async (opp: Opps) => {
    const data = {
      enablerUserId: authState?.accessToken?.claims.uid,
      sponsorUserId: opp.sponsorUserId,
      enablerName: 'Art Beyond Sight',
      opportunityUuid: opp.uuid,
      status: 'unfollowed',
      opportunityObject: opp,
    }
    try {
      await axios
        .post(`${process.env.REACT_APP_DIASPREX_API_URL}/proposals/create`, data)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Successfully done',
            })
            dispatch(props.getProposalsRequest(query))
          }
        })
        .catch((error) => error)
    } catch (err) {
      console.log(err)
    }
  }

  const unsupportOpp = async (opp: Opps) => {
    try {
      await unsupportOppAPI({
        enablerUserId: authState?.accessToken?.claims.uid,
        opportunityUuid: opp.uuid,
      }).then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Successfully done',
            })
            dispatch(props.getSupportedOppsRequest(params))
          }
        })
        .catch((error) => error)
    } catch (err) {
      console.log(err)
    }
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
            <EyeOutlined />
            Followed Opps
          </span>
        }
        key='1'
      >
        <div className=' overflow-auto p-3'>
          <div className=' d-flex text-muted mb-5'>Followed Opporutinities</div>
          {/* <button type='button' className='btn btn-sm btn-light-primary'>
            Unfollow Selected
          </button> */}

          {followedOpp.length > 0 ? (
            followedOpp.map((e: Proposal) => (
              <EnablerOpportunityCard2 opp={e?.opportunityObject} followed={true} unfollowOpp={unfollowOpp} />
            ))
          ) : (
            <div className='d-flex flex-column'>
              <p className='fs-2'>You are not following any opporptunities</p>
              <p className='text-muted fs-5'>
                Review current opportunities at the
                <Link to='/opportunities_center' className='px-2'>
                  Opportunity Center{' '}
                </Link>
                and click follow
              </p>
            </div>
          )}
        </div>
      </TabPane>

      <TabPane
        tab={
          <span className='d-flex justify-content-center align-items-center'>
            <SaveOutlined />
            Supported
          </span>
        }
        key='2'
      >
        {user !== 'basic_enabler' ? (
          <div className=' overflow-auto p-3'>
            <div className=' d-flex text-muted mb-5'>Supported Opportunities</div>
            {supportedOpp.length > 0 ? (
              supportedOpp.map((e: Opps) => <EnablerOpportunityCard2 opp={e} supported={true} unsupportOpp={unsupportOpp} />)
            ) : (
              <div className='d-flex flex-column'>
                <p className='fs-2'>You currently have no supported opportunities</p>
                <p className='text-muted fs-5'>
                  Review current opportunities at the
                  <Link to='/opportunities_center' className='px-2'>
                    Opportunity Center{' '}
                  </Link>
                  to support an opportunity
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <p>Not Available for Basic Accounts</p>
          </div>
        )}
      </TabPane>
    </Tabs>
  )
}
export default connector(MyOpportunity)
