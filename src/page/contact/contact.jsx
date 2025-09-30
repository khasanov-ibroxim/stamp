import React, {useState} from 'react';
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
import {useTranslation} from "react-i18next";
import {message} from "antd";
import axios from "axios";

const Contact = () => {
    const {t} = useTranslation()
    const [username, setUsername] = useState("");
    const [tell, setTell] = useState("");
    const [userMessage, setMsg] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const [disabled, setDisabled] = useState(false);
    const checkForm = () => {
        setDisabled(true);

        const hasNumber = /\d/;

        if (!username || username.trim().length === 0) {
            messageApi.open({
                type: 'error',
                content: t('errors.name_empty'),
            });
            setDisabled(false);
            return;
        }

        if (username.trim().length <= 3 || hasNumber.test(username)) {
            messageApi.open({
                type: 'error',
                content: t('errors.name_error'),
            });
            setDisabled(false);
            return;
        }

        if (!tell || tell.trim().length < 8) {
            messageApi.open({
                type: 'error',
                content: t('errors.tell_error'),
            });
            setDisabled(false);
            return;
        }

        // To'g'ri xabar tuzamiz
        let msg = "";
        msg += `------------------\n`;
        msg += `Имя: ${username}\n`;
        msg += `Номер телефона: ${tell}\n`;
        msg += `Сообщение: ${userMessage || '-'}\n`; // agar xohlasang textarea qiymatini ham qo‘shamiz

        const TOKEN = "7394946478:AAG7acQmsnprwKeHIGWYauqPmP1QE_xhyg8";
        const CHAT_ID = "-1003127722629";

        axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: msg
        }).then((res) => {
            if (res?.status === 200) {
                messageApi.open({
                    type: 'success',
                    content: t('errors.success'),
                });
                setTimeout(() => {
                    setMsg('');
                    setTell('');
                    setUsername('');
                    setDisabled(false);
                }, 1800);
            }
        }).catch((e) => {
            messageApi.open({
                type: 'error',
                content: t('errors.server_error'),
            });
            setDisabled(false);
        });
    };
    return (
        <div>
            {contextHolder}
            <div className="about_header" style={{background:`url(${header_img}) center center` , backgroundSize:"cover"}}>
                <h1>{t("contact.header")}</h1>
            </div>
            <section className={"contact"}>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact_content">
                                <div className="contact_content_top">
                                    <span>{t("contact.span")}</span>
                                    <h1 dangerouslySetInnerHTML={{__html: t("contact.h1")}}></h1>
                                    <p>{t("contact.p")}</p>
                                </div>
                                <div className="contact_content_bottom">
                                    <ul>
                                        <li>
                                            <LocationOnRoundedIcon/>
                                            <a href="#">{t("contact.location")}</a>
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
                                            <input type="text"
                                                   onChange={(e) => setUsername(e.target.value)}
                                                   placeholder={t("contact.name")}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop: "30px"}}>
                                    <div className="col-lg-12">
                                        <div className="input">
                                            <PhoneInTalkOutlinedIcon/>
                                            <input type="tel"
                                                   onChange={(e) => setTell(e.target.value)}
                                                   placeholder={t("contact.tel")}/>
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
                                                onChange={(e)=>setMsg(e.target.value)}
                                                placeholder={t("contact.msg")}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-5 d-flex justify-content-center align-items-center">
                                    <div className="col-lg-12 col-sm-6 col-md-6">
                                        <div className="contact_btn">
                                            <button onClick={checkForm} disabled={disabled}><SendOutlinedIcon/>{t("contact.send")}</button>
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
                    width="100%" height="550" style={{border: "none"}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Footer/>
        </div>
    );
};

export default Contact;