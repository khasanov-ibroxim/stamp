import React, {useState} from 'react';
import "./footer.css"
import {Link} from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import footer_component_img from "./2O8A5116.jpg"
import {useTranslation} from "react-i18next";
import {message} from "antd";
import axios from "axios";

const FooterComponent = () => {
    const { t } = useTranslation();
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
        <div className="footer_component">
            {contextHolder}
            <div className="row">
                <div className="col-lg-6">
                    <div className="footer_component_left"><img src={footer_component_img} alt=""/></div>
                </div>
                <div className="col-lg-5">
                    <div className="footer_form">
                        <span>{t("footer_component.span")}</span>
                        <h3 dangerouslySetInnerHTML={{__html:t("footer_component.h3")}}></h3>
                        <div className="footer_form_box">
                            <input type="text"
                                   maxLength={13}
                                   onChange={(e)=>setUsername(e.target.value)}
                                   placeholder={t("footer_component.name")}/>
                            <input type="tel"
                                   maxLength={16}
                                   onChange={(e)=>setTell(e.target.value)}
                                   placeholder={t("footer_component.tell")}/>
                            <textarea rows={5}
                                      onChange={(e)=>setMsg(e.target.value)}
                                      placeholder={t("footer_component.msg")} className={"input_msg"}/>
                        </div>
                        <button disabled={disabled} onClick={checkForm}><TelegramIcon/> {t("footer_component.send")}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FooterComponent;