import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import footer_component_img from "./2O8A5116.jpg"

const FooterComponent = () => {
    return (
        <div className="footer_component">

            <div className="row">
                <div className="col-lg-6">
                    <div className="footer_component_left"><img src={footer_component_img} alt=""/></div>
                </div>
                <div className="col-lg-5">
                    <div className="footer_form">
                        <span>Контакты</span>
                        <h3>Готовы к сотрудничеству? <br/> Обсудим ваш проект!</h3>
                        <div className="footer_form_box">
                            <input type="text" placeholder={"Имя"}/>
                            <input type="tel" placeholder={"Телефон"}/>
                            <textarea rows={5} placeholder={"Сообщение"} className={"input_msg"}/>

                        </div>
                        <Link to={"#"}><TelegramIcon/> Свяжитесь</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FooterComponent;