import React from "react";
import "./welcome.css"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Row} from 'antd';
import HeaderComponent from "../header/HeaderComponent";
import {navigate} from "@reach/router";
import WelcomePageCard from "../common/welcome_page_card";
import medicinedonate from "../medicineDonate.jpg";
import equipmentdonate from "../equipmentDonate.png";
import medicineNeeded from "../medicineNeeded.png";
import equipmentNeeded from "../equipmentNeeded.jpg"


class Welcome extends React.Component {

    state = {}
    gotoMediDonate = () => {
        navigate('/medicine-donate').then(r => {

        })
    }
    gotoEquiDonate = () => {
        navigate('/equipment-donate').then(r => {

        })
    }
    gotoMediNeeded = () => {
        navigate('/medicine-needed').then(r => {

        })
    }
    gotoEquiNeeded = () => {
        navigate('/equipment-needed').then(r => {

        })
    }

    render() {

        return (
            <div>
                <div>
                    <HeaderComponent title="Healing Chakra"/> <br/>
                </div>
                <Row style={{marginLeft: '2%'}}>
                    <Col span={6}>
                        <WelcomePageCard destinationMethod={() => this.gotoMediDonate()}
                                         imageAlt="medicine-donation"
                                         imageUrl={medicinedonate}
                                         cardTitle={"Medicine-Donation"}
                                         cardDesc={"You can donate your Medicine"}/>
                    </Col>
                    <Col span={6}>
                        <WelcomePageCard destinationMethod={this.gotoEquiDonate}
                                         imageAlt="equipment-donation"
                                         imageUrl={equipmentdonate}
                                         cardTitle={"Equipment-Donation"}
                                         cardDesc={"You can donate your Equipment"}/>

                    </Col>
                    <Col span={6}>

                        <WelcomePageCard destinationMethod={this.gotoMediNeeded}
                                         imageAlt="Medicine-Needed"
                                         imageUrl={medicineNeeded}
                                         cardTitle={"Medicine-Needed"}
                                         cardDesc={"You can find medicine you need"}/>

                    </Col>
                    <Col span={6}>
                        <WelcomePageCard destinationMethod={this.gotoEquiNeeded}
                                         imageAlt="Equipment-Needed"
                                         imageUrl={equipmentNeeded}
                                         cardTitle={"Equipment-Needed"}
                                         cardDesc={"You can find Equipment you need"}/>

                    </Col>
                </Row>

            </div>


        );

    }

};

export default Welcome;

