import React, { useState } from 'react'
import { Route } from 'react-router'
import { Layout, Menu } from 'antd'
import {
    DesktopOutlined,
    UserOutlined,
    LogoutOutlined,
    ExclamationCircleOutlined,
    CheckCircleOutlined,
    UserAddOutlined
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import './../assets/css/style.css'


const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
export default function HomeTemplate(props) {

    const [state, setstate] = useState({ collapsed: false })


    const onCollapse = collapsed => {
        console.log(collapsed)
        setstate({ collapsed })
    }

    const { collapsed } = state


    return <Route exact path={props.path} render={(propsRoute) => {
        return <div>

            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} width="250" onCollapse={onCollapse}>
                    <div className="logo text-center" >
                        <img src="./Access/LOGO.png" alt="logo" width="80px" />
                    </div>
                    <Menu style={{backgroundColor: '#024f87'}} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1', 'sub2']} mode="inline">
                        <SubMenu key="sub1" title="Quản lí chiến dịch" >
                            <Menu.Item key="1" icon={<DesktopOutlined />}>
                                <NavLink to="/home">Tất cả chiến dịch</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<ExclamationCircleOutlined />}>
                                <NavLink to="/report">Báo cáo của người dùng</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="Quản lí người dùng">
                            <Menu.Item key="3" icon={<CheckCircleOutlined />}>
                                <NavLink to="/verify">Xác minh tài khoản</NavLink>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<UserAddOutlined />}>
                                <NavLink to="/update">Danh sách người dùng</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="5" icon={<UserOutlined />}>
                                <NavLink to="/info">Thông tin tài khoản</NavLink>
                            </Menu.Item>
                        <Menu.Item className="logout" key="6" icon={<LogoutOutlined />}>
                            <NavLink to="/">Đăng xuất</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0, height: 84, backgroundColor: '#024f87' }} >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <h3 className="text-white">Trang quản trị CES</h3>
                        </div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ minHeight: 360 }}>
                            <props.component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Chúng tôi mang đến sự minh bạch trong hoạt động từ thiện.</Footer>
                </Layout>
            </Layout>

        </div>
    }} />
}
