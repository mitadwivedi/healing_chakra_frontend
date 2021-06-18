import React from 'react';
import {Button, DatePicker, message, Upload} from "antd";
import {axios_post_request} from "../common/helper";
import {navigate} from "@reach/router";
import HeaderComponent from "../header/HeaderComponent";
import './equipmentdonation.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {UploadOutlined} from '@ant-design/icons';


const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class EquipmentDonation extends React.Component {
    state = {
        username: "",
        equipmentname: "",
        manufacturedate: "",
        mobile: "",
        loginMessage: true,
        aadhaar: "",
        location: "",
        name: ""
    }

    async equipmentRequest(params) {
        // let data = await axios_post_request("http://192.168.123.100:3001/healing-chakra/login_request/", params)
        let data = await axios_post_request("http://127.0.0.1:8000/healing-chakra/submit-equipment-donation/", params)
        this.setState({response: data})
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let params = {
            'username': this.state.username,
            'name': this.state.name,
            'equipmentname': this.state.equipmentname,
            'manufacturedate': this.state.manufacturedate,
            'location': this.state.location,
            'mobile': this.state.mobile,
            'aadhaar': this.state.aadhaar
        }
        this.equipmentRequest(params).then(r => {
            if (this.state.response['donateStatus'] === "Successful") {
                message.success("Donation Success. Stay tuned for further Details.")
            } else
                message.error("Donation Failed. Please try again.")
        })
    }
    setName = (event) => {
        this.setState({name: event.target.value});
    }

    setEquipmentName = (event) => {
        this.setState({equipmentname: event.target.value});
    }
    setManufactureDate =(date, dateString, id) => {
        this.setState({manufacturedate: dateString});
    }
    setLocation = (event) => {
        this.setState({location: event.target.value});
    }
    setMobile = (event) => {
        this.setState({mobile: event.target.value});
    }
    setAadhaar = (event) => {
        this.setState({aadhaar: event.target.value});
    }
    componentDidMount() {
        document.body.style.backgroundColor = "#E8E8E3"
    }


    async getUserDetails(params) {
        // let data = await axios_post_request("http://192.168.123.100:3001/healing-chakra/login_request/", params)
        let data = await axios_post_request("http://127.0.0.1:8000/healing-chakra/get-user/", params)
        this.setState({response: data})
    }

    getUser = (username) => {
        let params = {
            'username': username
        }
        this.getUserDetails(params).then(r => {
            if (this.state.response.user_data['dataAvailable'] === "TRUE") {
                this.setState({
                    location: this.state.response.user_data['location'],
                    aadhaar: this.state.response.user_data['aadhaar'],
                    name: this.state.response.user_data['name'],
                    mobile: this.state.response.user_data['mobile'],
                    username: this.state.response.user_data['username']
                })
            }
        })
    }

    componentDidMount() {
        if (sessionStorage.getItem('login') === "TRUE") {
            let username = sessionStorage.getItem("username")
            this.getUser(username)
        }
    }

    render() {
        return (
            <div>
                <div>
                    <HeaderComponent title="Healing Chakra"/> <br/>
                </div>

                <div style={{marginTop: '5%'}} align={"center"}>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"/>
                    <link rel="stylesheet"
                          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                          crossOrigin="anonymous"/>
                    <div style={{marginTop: 16, width: "30%"}} align={"center"}>
                        <form onSubmit={this.mySubmitHandler}>
                            <div style={{textAlign: "center"}}>
                                <p style={{fontSize: '20px', textAlign: 'left', fontFamily: 'Times New Roman'}}><b>Donate Your Equipment</b></p><br/>
                            </div>
                            <div className="item">
                                <div className="item">
                                    <input type='text' name="equipmentname" placeholder="Equipment Name"
                                           onChange={this.setEquipmentName}/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item">
                                    <DatePicker placeholder={'Manufacturing Date'} format={'MM-DD-YYYY'} style={{ width: '98%' }}
                                                name="manufacturingdate" onChange={(date, dateString) => this.setManufactureDate(date, dateString, 1)}/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item">
                                    <input type='text' name="location" placeholder="Location"
                                           onChange={this.setLocation} defaultValue={this.state.location}/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item">
                                    <input type='text' name="aadhaar" placeholder="Aadhaar Card No." defaultValue={this.state.aadhaar}
                                           onChange={this.setAadhaar}/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item">
                                    <input type='text' name="name" placeholder="Name" defaultValue={this.state.name}
                                           onChange={this.setName}/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item">
                                    <input type='mobile' name="mobile" placeholder="Mobile Number" defaultValue={this.state.mobile}
                                           onChange={this.setMobile}/>
                                </div>
                            </div>
                            <div>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                                </Upload>
                            </div>
                            <div className="btn-block">
                                <Button htmlType="submit" type="submit" style={{width: '100%'}}>Donate</Button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default EquipmentDonation;