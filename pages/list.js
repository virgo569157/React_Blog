import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { List, Icon, Row, Col, Avatar, Breadcrumb } from 'antd'
import '../static/styles/pages/list.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import axios from 'axios'
import servicePath from '../config/apiUrl'
const MyList = (list) => {
  const [myList, setMyList] = useState(list.data)

  useEffect(()=>{
    setMyList(list.data)
   })
  // console.log('myList:', myList)
  return (
    <div>
      <Head>
        <title>列表</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          <List
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                <Link href={{pathname:'/details',query:{id:item.id}}}>
                  <a>{item.title}</a>
                </Link>
                </div>
                <div className="list-icon">
                  <span> <Icon type="calender"/>{item.add_time}</span>
                  <span> <Icon type="folder"/> {item.type_name} </span>
                  <span> <Icon type="fire"/> {item.view_count + '人'} </span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
          </div>
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

MyList.getInitialProps = async (context) => {
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getListById + id).then(res => {
      console.log('list:', res.data)
      resolve(res.data)
    })
  })
  return await promise
}

export default MyList
