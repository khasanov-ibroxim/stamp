import React from 'react';
import "./contact.css"
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';

import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {Link} from "react-router-dom";
import Footer from "@/component/footer/footer.jsx";

const Contact = () => {
    return (
        <div>
            <div className="about_header">
                <h1>Contact</h1>
            </div>
            <section className={"contact"}>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact_content">
                                <div className="contact_content_top">
                                    <span>Contact Us</span>
                                    <h1>Have questions? <br/> Get in touch!</h1>
                                    <p>
                                        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim.
                                    </p>
                                </div>
                                <div className="contact_content_bottom">
                                    <ul>
                                        <li>
                                            <LocationOnRoundedIcon/>
                                            <a href="#">785 15h Street, Office 478 Berlin</a>
                                        </li>
                                        <li>
                                            <PhoneAndroidRoundedIcon/>
                                            <a href="#">+998 99 999 99 99</a>
                                        </li>
                                        <li>
                                            <MailOutlineRoundedIcon/>
                                            <a href="#">Office@office.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact_form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input">
                                            <PersonOutlineSharpIcon/>
                                            <input type="text" placeholder={"Name"}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input">
                                            <EmailOutlinedIcon/>
                                            <input type="email" placeholder={"Email Address"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop: "30px"}}>
                                    <div className="col-lg-6">
                                        <div className="input">
                                            <PhoneInTalkOutlinedIcon/>
                                            <input type="tel" placeholder={"Phone"}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input">
                                            <ErrorOutlineOutlinedIcon/>
                                            <input type="text" placeholder={"Subject"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop: "30px"}}>
                                    <div className="col-lg-12">
                                        <div className="input">
                                            <CreateOutlinedIcon/>
                                            <textarea
                                                rows={3}
                                                type="text"
                                                placeholder={"How can we help you? Feel free to get in touch! "}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-5 d-flex justify-content-center align-items-center">
                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                        <div className="contact_btn">
                                            <Link to={"#"}><SendOutlinedIcon/>Get in touch</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                        <div className="contact_check d-flex justify-content-center align-items-center">
                                            <input type="checkbox"/>
                                            <p>I agree with this site's <a href="#">privacy policy</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div className={"map"}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12003.334328322855!2d69.20430055!3d41.22539695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61a2ca2658d9%3A0xea6f4e90abf3d47d!2sSergeli%20Dehqon%20Bozori!5e0!3m2!1sru!2s!4v1743804614139!5m2!1sru!2s"
                    width="100%" height="550"  allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Footer/>
        </div>
    );
};

export default Contact;