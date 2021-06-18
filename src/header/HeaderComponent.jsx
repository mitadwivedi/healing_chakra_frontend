import React from 'react';
import {Button, Col, Dropdown, Layout, Menu, message, Row} from "antd";
import 'antd/dist/antd.css';
import '../index.css';
import './HeaderComponent.css'
import {navigate} from "@reach/router";


const {Header} = Layout;

const logout = () => {
    sessionStorage.removeItem("login")
    sessionStorage.removeItem("username")
    navigate('/').then(r => {
        message.success("Logout Successful")
    })
    window.location.reload()
}

const user_menu = (
    <Menu theme="dark" mode="horizontal" >
        <Menu.Item>
            <Button type={'link'} onClick={logout}>Logout</Button>
        </Menu.Item>
    </Menu>
);

const gotoAbout = () => {
    navigate('/about-us').then(r => {

    })
}
const gotoHome = () => {
    navigate('/').then(r => {

    })
}
const gotoLogin = () => {
    navigate('/login').then(r => {

    })
}

const gotoMediDonate = () => {
    navigate('/medicine-donate').then(r => {

    })
}
const gotoEquiDonate = () => {
    navigate('/equipment-donate').then(r => {

    })
}

const gotoMediNeeded = () => {
    navigate('/medicine-needed').then(r => {

    })
}
const gotoEquiNeeded = () => {
    navigate('/equipment-needed').then(r => {

    })
}

const gotoContact = () => {
    navigate('/contact-us').then(r => {

    })
}

const menu = (
    <Menu theme="dark" mode="horizontal" >
        <Menu.Item>
            <Button  type={'link'} onClick={gotoMediDonate}>Medicine Donation</Button>
        </Menu.Item>
        <Menu.Item>
            <Button  type={'link'} onClick={gotoEquiDonate}>Equipment Donation</Button>
        </Menu.Item>
        <Menu.Item>
            <Button type={'link'} onClick={gotoMediNeeded}>Medicine Needed</Button>
        </Menu.Item>
        <Menu.Item>
            <Button type={'link'} onClick={gotoEquiNeeded}>Equipment Needed</Button>
        </Menu.Item>
    </Menu>
);

class HeaderComponent extends React.Component {
    state = {
        loginStatus: false
    }

    componentWillMount = () => {
        let loginStatus = sessionStorage.getItem('login')
        if(loginStatus === "TRUE") {
            let username = sessionStorage.getItem('username')
            this.setState({loginStatus: true, username: username})
        }
    }

    render() {
        return (
            <Header style={{position: 'fixed', zIndex: 1, width: '100%', height: '8%'}}>
                <Row style={{marginLeft: '-8%', marginRight: '-7%'}}>
                    <Col span={6}>
                        <p className={'h-text'}>{this.props.title}</p>
                    </Col>
                    <Col span={8}>

                    </Col>
                    <Col span={10} align={'right'}>
                        <Menu theme="dark" mode="horizontal"  className={'menu'} >
                            <Menu.Item key="1" onClick={gotoHome}>Home</Menu.Item>
                            <Dropdown overlay={menu} placement="bottomCenter" >
                                <Menu.Item key="2">Services</Menu.Item>
                            </Dropdown>
                            <Menu.Item key="3" onClick={gotoAbout}>About Us</Menu.Item>
                            <Menu.Item key="4" onClick={gotoContact}>Contact Us</Menu.Item>
                            { this.state.loginStatus ?
                                <Dropdown overlay={user_menu} placement="bottomCenter">
                                    <Menu.Item key="2">{this.state.username}</Menu.Item>
                                </Dropdown>
                                :
                                <Menu.Item key="5" onClick={gotoLogin}>Login</Menu.Item>}
                        </Menu>
                    </Col>
                </Row>
            </Header>

        );
    }
};

export default HeaderComponent;
