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
import {EnablerProposalCard} from '../proposals/components/EnablerProposalCard'
import EnablerOpportunityCard from './EnablerOpportunityCard'
import * as proposals from '../proposals/redux/ProposalRedux'
import {RootState} from '../../../setup'
import {Proposal} from '../proposals/proposalreviewtable/props-list/core/_models'
import EnablerOpportunityCard2 from './EnablerOpportunityCard2'
import {Link} from 'react-router-dom'

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
  const [followedopp, setFollowed] = useState<Proposal[]>([])
  const [draftprop, setDraftprop] = useState<Proposal[]>([])
  const [activeprop, setActiveprop] = useState<Proposal[]>([])
  const [submittedprop, setSubmittedprop] = useState<Proposal[]>([])
  const [completedprop, setCompletedprop] = useState<Proposal[]>([])

  let user = localStorage.getItem('userTypeFull')
  let userType = localStorage.getItem('userType')

  useEffect(() => {
    if (authState !== null) {
      dispatch(props.getProposalsRequest(query))
    }
  }, [authState])

  useEffect(() => {
    if (props.proposals.proposals.data) {
      setDraftprop(
        props.proposals?.proposals.data?.filter((obj: Proposal) => {
          return obj.status === 'draft'
        })
      )
      setActiveprop(
        props.proposals?.proposals.data?.filter((obj: Proposal) => {
          return obj.status === 'active'
        })
      )
      setSubmittedprop(
        props.proposals?.proposals.data?.filter((obj: Proposal) => {
          return obj.status === 'submitted'
        })
      )
      setCompletedprop(
        props.proposals?.proposals.data?.filter((obj: Proposal) => {
          return obj.status === 'completed'
        })
      )
    }
  }, [props.proposals])

  console.log('followed', followedopp)

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

          {followedopp.length > 0 ? (
            followedopp.map((e: Proposal) => (
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
      {user !== 'basic_enabler' && (
        <>
          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <SaveOutlined />
                Draft Proposal
              </span>
            }
            key='2'
          >
            <div className=' overflow-auto p-3'>
              <div className=' d-flex text-muted mb-5'>Draft Proposals</div>
              {/* <button type='button' className='btn btn-sm btn-light-danger'>
                Delete Selected
              </button> */}
              {/* {draftprop.map((e) => (
                <EnablerProposalCard
                  oppsponsor={e.oppsponsor}
                  oppcountry={e.oppcountry}
                  proptitle={e.proptitle}
                  propsummary={e.propsummary}
                  badgeColor='gray-800'
                  status='proposal in draft'
                  picSrc={e.src}
                />
              ))} */}
            </div>
          </TabPane>
          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <CheckOutlined />
                Submitted
              </span>
            }
            key='3'
          >
            <div className=' overflow-auto p-3'>
              <div className=' d-flex text-muted mb-5'>Submitted Proposals</div>
              {/* {submittedprop.map((e) => (
                <EnablerProposalCard
                  oppsponsor={e.oppsponsor}
                  oppcountry={e.oppcountry}
                  proptitle={e.proptitle}
                  propsummary={e.propsummary}
                  badgeColor='primary'
                  status='submission status'
                  picSrc={e.src}
                />
              ))} */}
            </div>
          </TabPane>

          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <DashboardOutlined />
                Active
              </span>
            }
            key='4'
          >
            <div className=' overflow-auto p-3'>
              <div className=' d-flex text-muted mb-5'>Active Proposals</div>
              {/* {activeprop.map((e) => (
                <EnablerProposalCard
                  oppsponsor={e.oppsponsor}
                  oppcountry={e.oppcountry}
                  proptitle={e.proptitle}
                  propsummary={e.propsummary}
                  badgeColor='success'
                  status='active'
                  picSrc={e.src}
                />
              ))} */}
            </div>
          </TabPane>

          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <FileAddOutlined />
                Completed
              </span>
            }
            key='5'
          >
            <div className=' overflow-auto p-3'>
              <div className=' d-flex text-muted mb-5'>Completed Proposals</div>
              {/* {completedprop.map((e) => (
                <EnablerProposalCard
                  oppsponsor={e.oppsponsor}
                  oppcountry={e.oppcountry}
                  proptitle={e.proptitle}
                  propsummary={e.propsummary}
                  badgeColor='primary'
                  status='completed'
                  picSrc={e.src}
                />
              ))} */}
            </div>
          </TabPane>
        </>
      )}
    </Tabs>
  )
}
export default connector(MyOpportunity)
