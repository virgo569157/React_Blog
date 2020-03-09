import React from 'react'
import { Avatar, Divider} from 'antd'
import '../static/styles/components/author.css'


const Author = () => {
  return(
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=2e8bb83990504fc2a25fb703dde6802c/b151f8198618367adb114bec25738bd4b31ce562.jpg" />
      </div>
      <div className="author-introduction">
        90后程序员，专注于WEB和移动前端开发。作者首篇博客，后期会陆续出有关JS、CSS等文章，敬请期待…………
        <Divider>社交账号</Divider>
        <a href="https://github.com/virgo569157" target="_blank"><Avatar size={28} icon="github" className="account account_github"/></a>
        <Avatar size={28} icon="qq" className="account account_qq"/>
        <Avatar size={28} icon="wechat" className="account account_wechat"/>
      </div>
    </div>
  )
}

export default Author
