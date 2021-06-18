import React from "react";
import "./equipmentneeded.css"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, message, Row} from 'antd';
import HeaderComponent from "../header/HeaderComponent";
import wheelchair from "../wheelchair_equipment.jpg"
import {axios_post_request} from "../common/helper";
import EquipmentNeededPage from "../common/equipment_needed_page";


class EquipmentNeeded extends React.Component {

    state = {
        donations: []
    }

    async getEquipmentDonationsRequest(params) {
        let data = await axios_post_request("http://127.0.0.1:8000/healing-chakra/get-equipment-donations/", params)
        this.setState({response: data})
    }

    getEquipmentDonations = () => {
        let params = {}
        this.getEquipmentDonationsRequest(params).then(r => {
            if (this.state.response.all_donations) {
                this.setState({donations: this.state.response.all_donations})
                message.success('Data loaded successfully');
            } else
                message.error('Data Loading Failed');
        })
    }


    componentDidMount() {
        this.getEquipmentDonations()
    }

    render() {
        return (
            <div>
                <div>
                    <HeaderComponent title="Healing Chakra"/> <br/>
                </div>
                <Row style={{marginLeft: '2%'}}>
                    {this.state.donations.map(donation =>
                        <Col span={6}>
                            <EquipmentNeededPage
                                imageAlt="equipment-donation"
                                imageUrl={wheelchair}
                                equipmentName={donation['fields']['equipment_name']}
                                manufacturedate={donation['fields']['manufacture_date']}
                                location={donation['fields']['location']}
                                Name={donation['fields']['name']}
                                Mobile={donation['fields']['mobile']}
                                aadhaar={donation['fields']['aadhaar']}
                            />
                        </Col>
                    )}
                </Row>
            </div>
        );
    }
};
export default EquipmentNeeded;

