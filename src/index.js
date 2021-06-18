import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Router} from "@reach/router";
import Welcome from "./Welcome/welcome";
import Login from "./login/Login";
import AboutUs from "./aboutus/aboutus";
import Signup from "./signup/signup";
import MedicineDonation from "./MedicineDonation/medicinedonation";
import EquipmentDonation from "./EquipmentDonation/equipmentdonation";
import ContactUs from "./contactus/contactus";
import MedicineNeeded from "./MedicineNeeded/medicineneeded";
import EquipmentNeeded from "./EquipmentNeeded/equpmentneeded";

ReactDOM.render(
    <Router>
        <Welcome path={'/'}/>
        <Login path={'/login'}/>
        <AboutUs path={'/about-us'}/>
        <ContactUs path={'/contact-us'}/>
        <Signup path={'/signup'}/>
        <MedicineDonation path={'/medicine-donate'}/>
        <EquipmentDonation path={'/equipment-donate'}/>
        <MedicineNeeded path={'/medicine-needed'}/>
        <EquipmentNeeded path={'/equipment-needed'}/>


    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
