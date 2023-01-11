import React, {useState, useEffect, useContext} from 'react'
import {useDispatch, connect, ConnectedProps, useSelector, shallowEqual} from 'react-redux'
import {useOktaAuth} from '@okta/okta-react'
import {PageTitle} from '../../../../_metronic/layout/core'

import {
  EyeOutlined,
  SaveOutlined,
  FileAddOutlined,
  CheckOutlined,
  DashboardOutlined,
} from '@ant-design/icons'
// import {MyOpportunityTable} from './MyOpportunityTable'
import {Tabs} from 'antd'
// import {followedopps, draft, submitted, active, completed} from '../proposals/components/models'

import * as proposals from '../redux/ProposalRedux'
import {RootState} from '../../../../setup'
import {Proposal} from '../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'

import {Link} from 'react-router-dom'
import {EnablerProposalCard2} from './EnablerProposalCard2'
import { ListLoading } from '../../apps/admin-mgt-apps/core/loading/ListLoading'
import { IQuery, changeProposalStatusAPI } from '../../proposals/redux/ProposalAPI'

const mapState = (state: RootState) => ({proposals: state.proposals})
const connector = connect(mapState, proposals.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const MyProposal: React.FC<PropsFromRedux> = (props) => {
  const {authState} = useOktaAuth()
  const dispatch = useDispatch()
  const query = {
    // @ts-ignore
    enablerUserId: authState.accessToken.claims.uid,
  }

  const [draftprop, setDraftprop] = useState<Proposal[]>([])
  const [activeprop, setActiveprop] = useState<Proposal[]>([])
  const [submittedprop, setSubmittedprop] = useState<Proposal[]>([])
  const [completedprop, setCompletedprop] = useState<Proposal[]>([])

  let userTypeFull = localStorage.getItem('userTypeFull')
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
          return (
            obj.status === 'new' ||
            obj.status === 'pending' ||
            obj.status === 'selected' ||
            obj.status === 'declined' ||
            obj.status === 'withdrawn'
          )
        })
      )
      setCompletedprop(
        props.proposals?.proposals.data?.filter((obj: Proposal) => {
          return obj.status === 'completed'
        })
      )
    }
  }, [props.proposals])

  const {TabPane} = Tabs
  const onChange = (key: string) => {
    console.log(key)
  }

  const changeProposalStatus = (statQuery: IQuery) => {
    changeProposalStatusAPI(statQuery).then((res) => {
      if (res.status === 200) {
        dispatch(props.getProposalsRequest(query))
      }
    })
  }

  return (
    <>
      {userTypeFull === 'basic_enabler' ? (
        <div>
          <p>Not Available for Basic Accounts</p>
        </div>
      ) : (
        <Tabs defaultActiveKey='1' onChange={onChange}>
          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <SaveOutlined />
                Draft Proposal
              </span>
            }
            key='1'
          >
            <div className=' overflow-auto p-3'>
              <div className=' d-flex text-muted mb-5'>Draft Proposals</div>
              {draftprop.length > 0 ? (
                draftprop.map((e: Proposal) => <EnablerProposalCard2 prop={e} changePropStatus={changeProposalStatus} />)
              ) : (
                <div className='d-flex flex-column'>
                  <p className='fs-2'>You currently have no draft proposals</p>
                  <p className='text-muted fs-5'>
                    Review current opportunities at the
                    <Link to='/opportunities_center' className='px-2'>
                      Opportunity Center{' '}
                    </Link>
                    and submit a proposal
                  </p>
                </div>
              )}
            </div>
          </TabPane>
          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <CheckOutlined />
                Submitted
              </span>
            }
            key='2'
          >
            <div className=' overflow-auto p-3'>
              <div className=' d-flex text-muted mb-5'>Submitted Proposals</div>
              {submittedprop.length > 0 ? (
                submittedprop.map((e: Proposal) => <EnablerProposalCard2 prop={e} changePropStatus={changeProposalStatus} />)
              ) : (
                <div className='d-flex flex-column'>
                  <p className='fs-2'>You currently have no submitted proposals</p>
                  <p className='text-muted fs-5'>
                    Review current opportunities at the
                    <Link to='/opportunities_center' className='px-2'>
                      Opportunity Center{' '}
                    </Link>
                    and submit a proposal
                  </p>
                </div>
              )}
            </div>
          </TabPane>

          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <DashboardOutlined />
                Active
              </span>
            }
            key='3'
          >
            <div className=' overflow-auto p-3'>
              <div className=' d-flex text-muted mb-5'>Active Proposals</div>
              {activeprop.length > 0 ? (
                activeprop.map((e: Proposal) => <EnablerProposalCard2 prop={e} changePropStatus={changeProposalStatus} />)
              ) : (
                <div className='d-flex flex-column'>
                  <p className='fs-2'>You currently have no active proposals</p>
                  <p className='text-muted fs-5'>
                    Review current opportunities at the
                    <Link to='/opportunities_center' className='px-2'>
                      Opportunity Center{' '}
                    </Link>
                    and submit a proposal
                  </p>
                </div>
              )}
            </div>
          </TabPane>

          <TabPane
            tab={
              <span className='d-flex justify-content-center align-items-center'>
                <FileAddOutlined />
                Completed
              </span>
            }
            key='4'
          >
            <div className=' overflow-auto p-3'>
              <div className=' d-flex text-muted mb-5'>Completed Proposals</div>
              {completedprop.length > 0 ? (
                completedprop.map((e: Proposal) => <EnablerProposalCard2 prop={e} changePropStatus={changeProposalStatus} />)
              ) : (
                <div className='d-flex flex-column'>
                  <p className='fs-2'>You currently have no completed proposals</p>
                  <p className='text-muted fs-5'>
                    Review current opportunities at the
                    <Link to='/opportunities_center' className='px-2'>
                      Opportunity Center{' '}
                    </Link>
                    and submit your proposal
                  </p>
                </div>
              )}
            </div>
          </TabPane>
        </Tabs>
      )}
    </>
  )
}
export default connector(MyProposal)
