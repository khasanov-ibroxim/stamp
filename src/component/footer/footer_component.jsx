import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import footer_component_img from "./2O8A5116.jpg"
import {useTranslation} from "react-i18next";

const FooterComponent = () => {
    const { t } = useTranslation();
    return (
        <div className="footer_component">

            <div className="row">
                <div className="col-lg-6">
                    <div className="footer_component_left"><img src={footer_component_img} alt=""/></div>
                </div>
                <div className="col-lg-5">
                    <div className="footer_form">
                        <span>{t("footer_component.span")}</span>
                        <h3 dangerouslySetInnerHTML={{__html:t("footer_component.h3")}}></h3>
                        <div className="footer_form_box">
                            <input type="text" placeholder={t("footer_component.name")}/>
                            <input type="tel" placeholder={t("footer_component.tell")}/>
                            <textarea rows={5} placeholder={t("footer_component.msg")} className={"input_msg"}/>

                        </div>
                        <Link to={"#"}><TelegramIcon/> {t("footer_component.send")}</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FooterComponent;