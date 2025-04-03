import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import footer_component from "./footer_component.jpg"

const FooterComponent = () => {
    return (
        <div className=" footer_component">

            <div className="row">
                <div className="col-lg-6">
                    <div className="footer_component_left"><img src={footer_component} alt=""/></div>
                </div>
                <div className="col-lg-5">
                    <div className="footer_form">
                        <span>Contact Us</span>
                        <h3>Have questions? <br/> Get in touch!</h3>
                        <div className="footer_form_box">
                            <div className="row ">
                                <div className="col-lg-6"><input type="text" placeholder={"Name"}/></div>
                                <div className="col-lg-6"><input type="text" placeholder={"Last Name"}/></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6"><input type="text" placeholder={"Email"}/></div>
                                <div className="col-lg-6"><input type="text" placeholder={"Phone"}/></div>
                            </div>
                            <div className="row"><input type="text" placeholder={"Message"} className={"input_msg"}/></div>

                        </div>
                        <Link to={"#"}><TelegramIcon/> Get in Touch</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FooterComponent;