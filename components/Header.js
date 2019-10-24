import React from 'react'
import '../static/styles/components/header.css'
import {Row, Col, Menu, Icon, Affix} from 'antd'

const Header = () => (
  <Affix>
  <div className='header'>
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className="header-logo">Virgo</span>
        <span className="header-txt">前端开发工程师</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={4}>
        <Menu mode="horizontal">
            <Menu.Item key="home">
              <Icon type="home" />
              首页
            </Menu.Item>
            <Menu.Item key="video">
              <Icon type="youtube" />
              视频
            </Menu.Item>
            <Menu.Item key="life">
              <Icon type="smile" />
              生活
            </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
  </Affix>
)

export default Header