import React from 'react';
import {Button, Col, Image, message, Row} from "antd";
import {axios_post_request} from "../common/helper";
import {navigate} from "@reach/router";
import chakra from '../chakra.jpg'
import HeaderComponent from "../header/HeaderComponent";
import './Login.css'

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        loginMessage: true
    }
    gotoSignup = () => {
        navigate('/signup').then(r => {

        })
    }

    async loginRequest(params) {
        let data = await axios_post_request("http://127.0.0.1:8000/healing-chakra/login/", params)
        this.setState({response: data})
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let params = {
            'username': this.state.username,
            'password': this.state.password
        }
        this.loginRequest(params).then(r => {
            if (this.state.response['Login'] === "Successful") {
                message.success('Login Successful');
                sessionStorage.setItem("login", "TRUE")
                sessionStorage.setItem("username", this.state.username)
                navigate('/').then(r => {
                })
            } else
                message.error('Login Failed. Try Again');
        })
    }
    setUsername = (event) => {
        this.setState({username: event.target.value});
    }
    setPassword = (event) => {
        this.setState({password: event.target.value});
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#E8E8E3"
    }

    render() {
        return (
            <div>
                <div>
                    <HeaderComponent title="Healing Chakra"/> <br/>
                </div>
                <div style={{marginTop: '10%'}} align={"center"}>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                          crossOrigin="anonymous"/>
                    <div style={{marginTop: 16, width: "30%"}} align={"center"}>
                        <form onSubmit={this.mySubmitHandler}>
                            <div style={{textAlign: "center"}}>
                                <Image preview={false} src={chakra} width={250}/> <br/>
                            </div>
                            <div className="item">
                                <div className="item">
                                    <input type='text' name="username" placeholder="Username"
                                           onChange={this.setUsername}/>
                                </div>
                            </div>
                            <div Password="item">
                                <input type='password' name="password" placeholder="Password"
                                       onChange={this.setPassword}/>
                            </div>
                            <div Password="item">
                                <p style={{color: 'red'}} align={'left'} hidden={this.state.loginMessage}>*Please check
                                    your
                                    username or password</p>
                            </div>
                            <div className="btn-block">
                                <Row>
                                    <Col span={12}>
                                        <Button htmlType="submit" type="submit" style={{width: '40%'}}>Login</Button>
                                    </Col>
                                    <Col span={12}>
                                        <Button onClick={this.gotoSignup} style={{width: '50%'}}>Sign Up</Button>
                                    </Col>
                                </Row>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;