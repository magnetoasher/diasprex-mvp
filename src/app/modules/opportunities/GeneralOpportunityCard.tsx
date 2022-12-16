// eslint-disable jsx-a11y/anchor-is-valid /
// @ts-nocheck comment

import React, {useState, useEffect} from 'react'
import GeneralCardComponent from './GeneralCardOpportunityComponent/GeneralCardCompnent'
import {Row, Col, Card, Typography, Pagination} from 'antd'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import './component/opportunity.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import object1 from './core/GeneralOpportunityCardObject1.json'

function GeneralOpportunityCard() {
  const fetchData = async () => {}
  return (
    <>
      <PageTitle>Opportunities</PageTitle>
      <Card style={{backgroundColor: 'rgba(0,0,0, .02)'}}>
        <InfiniteScroll
          dataLength={object1.length} //This is important field to render the next data
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
            {object1.map((element) => (
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
                  badgeColor={element.status == 'Open' ? 'success' : 'danger'}
                  title={element.title}
                  country={element.country}
                  status={element.status}
                  description={element.description}
                  dueDate={element.dueDate}
                  budget={element.budget}
                  src={element.img}
                  summary={element.summary}
                  following={element.following}
                  interest={element.interest}
                />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </Card>
    </>
  )
}
export default GeneralOpportunityCard
