import React from 'react';
import {Card} from "antd";
import 'antd/dist/antd.css';
import '../index.css';


class Medicine_Needed_Page extends React.Component {
    state = {}

    render() {
        return (

            <Card
                style={{marginTop: '25%', width: '70%'}}
                hoverable
                cover={<img height="250" alt={this.props.imageAlt} src={this.props.imageUrl}/>}
            >
                <p><b>Medicine Name:</b> {this.props.medicineName}</p>
                <p><b>Manufacture Date:</b> {this.props.manufacturedate}</p>
                <p><b>Expiry Date:</b> {this.props.expirydate}</p>
                <p><b>Location: </b> {this.props.location}</p>
                <p><b>Name: </b> {this.props.Name}</p>
                <p><b>Contact:</b> {this.props.Mobile}</p>
                <p><b>Aadhaar No:</b> {this.props.aadhaar}</p>
            </Card>


        );
    }
};
export default Medicine_Needed_Page;
