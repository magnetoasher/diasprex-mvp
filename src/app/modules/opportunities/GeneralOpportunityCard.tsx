// eslint-disable jsx-a11y/anchor-is-valid /
// @ts-nocheck comment

import React, {useEffect, useState} from 'react'
import {useDispatch, connect, ConnectedProps} from 'react-redux'
import GeneralCardComponent from './GeneralCardOpportunityComponent/GeneralCardCompnent'
import {Row, Col, Card, Typography, Pagination} from 'antd'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import './component/opportunity.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import * as opps from './redux/OpportunityRedux'
import {RootState} from '../../../setup'
import {IOpp} from './core/_models'

const mapState = (state: RootState) => ({opps: state.opps})
const connector = connect(mapState, opps.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const GeneralOpportunityCard: React.FC<PropsFromRedux> = (props) => {
  const dispatch = useDispatch()
  const [oppsData, setOppsData] = useState<IOpp[]>([])

  useEffect(() => {
    dispatch(props.getAllOppsRequest())
  }, [])

  useEffect(() => {
    setOppsData(props.opps.opps.data)
  }, [props.opps])

  const fetchData = async () => {}
  return (
    <>
      <PageTitle>Opportunities</PageTitle>
      <Card style={{backgroundColor: 'rgba(0,0,0, .02)'}}>
        <InfiniteScroll
          dataLength={oppsData?.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<h4 style={{textAlign: 'center'}}>Loading...</h4>}
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Row gutter={8} justify='space-evenly'>
            {oppsData?.map((element) => (
              <Col
                xs={24}
                sm={24}
                md={6}
                lg={6}
                style={{margin: '5px'}}
                className='box-shadow-style bg-white'
              >
                <GeneralCardComponent
                  id={element.id}
                  sponsor={element.sponsor}
                  title={element.title}
                  country={element.country}
                  open={element.open}
                  status={element.status}
                  dealtype={element.dealtype}
                  oppdesc={element.oppdesc}
                  duedate={element.duedate}
                  thumbnail={element.thumbnail}
                  summary={element.summary}
                  following={element.following}
                  showedinterest={element.showedinterest}
                />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </Card>
    </>
  )
}
export default connector(GeneralOpportunityCard)
