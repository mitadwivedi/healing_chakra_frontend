import React from "react";
import "./medicineneeded.css"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, message, Row} from 'antd';
import HeaderComponent from "../header/HeaderComponent";
import MedicineNeededPage from "../common/medicine_needed_card";
import O2medicine from "../O2_medicine.jpg"
import {axios_post_request} from "../common/helper";
import {navigate} from "@reach/router";


class MedicineNeeded extends React.Component {

    state = {
        donations: []
    }

    async getMedicineDonationsRequest(params) {
        let data = await axios_post_request("http://127.0.0.1:8000/healing-chakra/get-medicine-donations/", params)
        this.setState({response: data})
    }

    getMedicineDonations = () => {
        let params = {}
        this.getMedicineDonationsRequest(params).then(r => {
            if (this.state.response.all_donations) {
                this.setState({donations: this.state.response.all_donations})
                message.success('Data loaded successfully');
            } else
                message.error('Data Loading Failed');
        })
    }


    componentDidMount() {
        this.getMedicineDonations()
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
                            <MedicineNeededPage
                                imageAlt="medicine-donation"
                                imageUrl={O2medicine}
                                medicineName={donation['fields']['medicine_name']}
                                manufacturedate={donation['fields']['manufacture_date']}
                                expirydate={donation['fields']['expiry_date']}
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
export default MedicineNeeded;

