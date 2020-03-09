import React, { useState, useEffect} from 'react'
import '../static/styles/components/header.css'
import {Row, Col, Menu, Icon, Affix} from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(()=> {
    const fetchData = async ()=> {
      const result = await axios(servicePath.getTypeInfo).then(res => {
        console.log('res1:', res)
        return res.data.data
      })
      setNavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = (e)=> {
    console.log('e:', e)
    if(e.key == 0) {
      Router.push('/index')
    } else {
      Router.push('/list?id='+ e.key)
    }
  }
  return  (
    <Affix>
    <div className='header'>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">Virgo</span>
          <span className="header-txt">前端开发工程师</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
              <Menu.Item key="0">
                <Icon type="home" />
                首页
              </Menu.Item>
              {navArray.map(item => {
                return (
                  <Menu.Item key={item.Id}>
                    <Icon type={item.icon} />
                    {item.type_name}
                  </Menu.Item>
                )
              })}
              {/* <Menu.Item key="life">
                <Icon type="smile" />
                生活
              </Menu.Item> */}
          </Menu>
        </Col>
      </Row>
    </div>
    </Affix>
  )
}

export default Header