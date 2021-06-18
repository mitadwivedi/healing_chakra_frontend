import React from 'react';
import {Card} from "antd";
import 'antd/dist/antd.css';
import '../index.css';

import Meta from "antd/es/card/Meta";

;


class WelcomePageCard extends React.Component {
    state = {}

    render() {
        return (

            <Card
                onClick={this.props.destinationMethod}
                style={{marginTop: '25%', width: '90%', height: '100%'}}
                hoverable
                cover={<img height="250" alt={this.props.imageAlt} src={this.props.imageUrl}/>}
            >
                <Meta title={this.props.cardTitle} description={this.props.cardDesc}/>
            </Card>


        );
    }
};
export default WelcomePageCard;
