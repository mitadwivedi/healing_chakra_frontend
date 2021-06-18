import React from "react";
import 'antd/dist/antd.css';
import '../index.css';
import {Card, Col, Image} from 'antd';
import './aboutus.css'
import HeaderComponent from "../header/HeaderComponent";
import about_us_image from "../about_us_background.png";
import {Row} from "react-bootstrap";


class AboutUs extends React.Component {

    state = {}

    // componentDidMount() {
    //     document.body.className = "container"
    // }

    render() {
        return (
            <div>
                <div>
                    <HeaderComponent title="Healing Chakra"/> <br/>
                </div>

                <div>
                    <Row >
                        <Col span={1}></Col>
                        <Col span={7} style={{marginTop:'5%'}}>
                            <Card
                                style={{marginLeft: '1%', marginTop: 60, width: 400, height: 400}}
                                hoverable
                            >
                                <p style={{fontSize: '30px'}}><b>What We Do</b></p><br/>
                                <p>The Idea is about managing and rerouting available medical supplies and equipment’s
                                    at houses .
                                    We plan to register available unused household medical resources and channelize to
                                    required registered places.(e.g collecting unused medicines and equipment’s and
                                    providing to needy people)
                                    This will encourage well managed and optimum utilization of available medical
                                    resources also this will reduce non bio- degradable waste.
                                </p>
                            </Card>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={15} style={{marginTop:'5%'}}>
                                <Image preview={false} src={about_us_image} width={'95%'}/>
                        </Col>
                    </Row>


                </div>
            </div>
        );
    }
};

export default AboutUs;

