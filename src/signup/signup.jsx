import React from 'react';
import {Button, message} from "antd";
import {axios_post_request} from "../common/helper";
import {navigate} from "@reach/router";
import HeaderComponent from "../header/HeaderComponent";
import './signup.css'

class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        name: "",
        email: "",
        mobile: "",
        location: "",
        aadhaarNo: ""
    }

    async signupRequest(params) {
        // let data = await axios_post_request("http://192.168.123.100:3001/healing-chakra/login_request/", params)
        let data = await axios_post_request("http://127.0.0.1:8000/healing-chakra/sign-up/", params)
        this.setState({response: data})
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let params = {
            'username': this.state.username,
            'password': this.state.password,
            'name': this.state.name,
            'email': this.state.email,
            'mobile': this.state.mobile,
            'aadhaar': this.state.aadhaarNo,
            'location': this.state.location
        }
        this.signupRequest(params).then(r => {
            if (this.state.response['signUp'] === "Successful") {
                navigate('/login').then(r => {
                    message.success('Registration Successful. Please login again.');
                })
            } else
                message.error('Registration Failed. Please register again. ' + this.state.response['signup']);
        })
    }
    setUsername = (event) => {
        this.setState({username: event.target.value});
    }
    setPassword = (event) => {
        this.setState({password: event.target.value});
    }
    setName = (event) => {
        this.setState({name: event.target.value});
    }
    setMobile = (event) => {
        this.setState({mobile: event.target.value});
    }
    setEmail = (event) => {
        this.setState({email: event.target.value});
    }
    setLocation = (event) => {
        this.setState({location: event.target.value});
    }
    setAadhaarNo= (event) => {
        this.setState({aadhaarNo: event.target.value});
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

                <div style={{marginTop: '7%'}} align={"center"}>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                          crossOrigin="anonymous"/>
                    <div style={{marginTop: 16, width: "30%"}} align={"center"}>
                        <form onSubmit={this.mySubmitHandler}>
                            <div style={{textAlign: "center"}}>
                                <p style={{fontSize:'20px', textAlign:'left', fontFamily:'Times New Roman'}}><b>Registration Form</b></p><br/>
                                {/*<Image preview={false} src={chakra} width={250}/> <br/>*/}
                                {/*<Image preview={false} src={tco} width={250}/>*/}
                            </div>
                            <div className="item">
                                <div className="item">
                                    <input type='text' name="name" placeholder="Name"
                                           onChange={this.setName}/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item">
                                    <input type='email' name="email" placeholder="Email"
                                           onChange={this.setEmail}/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item">
                                    <input  type='number' size={10} name="mobile" placeholder="Mobile"
                                           onChange={this.setMobile}/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item">
                                    <input type='text' name="location" placeholder="Location"
                                           onChange={this.setLocation}/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item">
                                    <input type='number' name="aadhaarNo" placeholder="Aadhaar Card No."
                                           onChange={this.setAadhaarNo}/>
                                </div>
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
                            <div className="btn-block">
                                <Button htmlType="submit" type="submit" style={{width: '100%'}}>Sign Up</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Signup;