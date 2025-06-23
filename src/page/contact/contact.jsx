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
import header_img from "@/assets/headers/2O8A5113.JPG";

const Contact = () => {
    return (
        <div>
            <div className="about_header" style={{background:`url(${header_img}) center center` , backgroundSize:"cover"}}>
                <h1>Контакты</h1>
            </div>
            <section className={"contact"}>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact_content">
                                <div className="contact_content_top">
                                    <span>Контакты</span>
                                    <h1>Готовы к сотрудничеству? <br/> Обсудим ваш проект!</h1>
                                    <p>
                                        От идеи до реализации, учитывая каждую деталь и ваши пожелания.
                                    </p>
                                </div>
                                <div className="contact_content_bottom">
                                    <ul>
                                        <li>
                                            <LocationOnRoundedIcon/>
                                            <a href="#">Республика Узбекистан,город Ташкент, Бектемирский р-н, улица
                                                Туена 12</a>
                                        </li>
                                        <li>
                                            <PhoneAndroidRoundedIcon/>
                                            <a href="tel:+998911629889">(+99891) 162-98-89</a>
                                        </li>
                                        <li>
                                            <MailOutlineRoundedIcon/>
                                            <a href="mailto:ilxom.mirbabayev@stampa.uz">ilxom.mirbabayev@stampa.uz</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact_form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input">
                                            <PersonOutlineSharpIcon/>
                                            <input type="text" placeholder={"Имя"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop: "30px"}}>
                                    <div className="col-lg-12">
                                        <div className="input">
                                            <PhoneInTalkOutlinedIcon/>
                                            <input type="tel" placeholder={"Телефон"}/>
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
                                                placeholder={"Оставьте заявку — создадим нечто выдающееся вместе!"}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-5 d-flex justify-content-center align-items-center">
                                    <div className="col-lg-12 col-sm-6 col-md-6">
                                        <div className="contact_btn">
                                            <Link to={"#"}><SendOutlinedIcon/>Свяжитесь</Link>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48003.49435717486!2d69.33147675000001!3d41.238800399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5fab0f180df5%3A0xa63b5f7a0b738831!2z0JHQtdC60YLQtdC80LjRgNGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2s!4v1749836119439!5m2!1sru!2s"
                    width="100%" height="550" style={{border:"none"}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Footer/>
        </div>
    );
};

export default Contact;