import React from "react";
import 'antd/dist/antd.css';
import '../index.css';
import {Card, Col, Image} from 'antd';
import HeaderComponent from "../header/HeaderComponent";
import about_us_image from "../about_us_background.png";
import {Row} from "react-bootstrap";


class ContactUs extends React.Component {

    state = {}


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
                                <p style={{fontSize: '30px'}}><b>Contact Us</b></p><br/>
                                <p><b>Email id:</b> healing.chakra@gmail.com  </p><br/>
                                <p><b>Address: </b> 38 , Baig Mohd Bldg, Off No , Manish Market, Crawford Market, Mumbai </p><br/>
                                <p><b>Mobile Number:</b> +91XXXXXXXXXX </p><br/>

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

export default ContactUs;

