import React, {useState, useEffect, useContext} from 'react'
import {useDispatch, connect, ConnectedProps} from 'react-redux'
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
import {RootState} from '../../../setup'
import {Proposal} from '../../modules/apps/admin-mgt-apps/proposal-management/props-list/core/_models'
import EnablerOpportunityCard2 from './EnablerOpportunityCard2'
import {Link} from 'react-router-dom'
import {EnablerProposalCard2} from '../proposals/components/EnablerProposalCard2'

const mapState = (state: RootState) => ({proposals: state.proposals})
const connector = connect(mapState, proposals.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const MyOpportunity: React.FC<PropsFromRedux> = (props) => {
  const {authState} = useOktaAuth()
  const dispatch = useDispatch()
  const query = {
    // @ts-ignore
    enablerUserId: authState.accessToken.claims.uid,
  }
  const [followedOpp, setFollowedOpp] = useState<Proposal[]>([])
  const [supportedOpp, setSupportedOpp] = useState<Proposal[]>([])

  let user = localStorage.getItem('userTypeFull')
  let userType = localStorage.getItem('userType')

  useEffect(() => {
    if (authState !== null) {
      dispatch(props.getProposalsRequest(query))
    }
  }, [authState])

  useEffect(() => {
    if (props.proposals.proposals.data) {
      setSupportedOpp(
        props.proposals?.proposals.data?.filter((obj: Proposal) => {
          return obj.status === 'supported'
        })
      )
    }
  }, [props.proposals])

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
              <EnablerOpportunityCard2 opp={e?.opportunityObject} followed={true} />
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
              supportedOpp.map((e: Proposal) => <EnablerProposalCard2 prop={e} />)
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
