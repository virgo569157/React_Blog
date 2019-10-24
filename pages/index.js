import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { List, Icon, Row, Col } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
const Home = (homeList) => {
  const [myList, setMyList] = useState(homeList.data)
  return (
    <div>
      <Head>
        <title>我的主页</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List 
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{pathname: '/details', query: {id: item.id}}}>
                    <a>{ item.title }</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span> <Icon type="calender"/>{ switchTimeFormat(item.add_time) }</span>
                  <span> <Icon type="folder"/> { item.article_name } </span>
                  <span> <Icon type="fire"/> { `${item.view_count}人` } </span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

 function switchTimeFormat(time){
  const dateTime = new Date(time)
  const year = dateTime.getFullYear()
  const month = dateTime.getMonth() + 1
  const date = dateTime.getDate()
  const hour = dateTime.getHours()
  const minute = dateTime.getMinutes()
  const second = dateTime.getSeconds()
  return `${year}-${addZero(month)}-${addZero(date)} ${addZero(hour)}:${addZero(minute)}:${addZero(second)}`
 }
 function addZero(v) {
  return v < 10 ? '0' + v : v;
}

Home.getInitialProps = async ()=> {
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleList').then(res => {
      console.log('res:', res.data)
      resolve(res.data)
    })
  })
  return await promise
}




export default Home
