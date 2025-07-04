import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import VK from "./vk.png"
import {ABOUT, CONTACT, HOME, PRODUCTION} from "@/utils/const.jsx";
const Footer = () => {
    return (
        <footer>
            <div className="container-sm">
                <div className="footer_box">
                    <div className="footer_item">
                        <h1>Часы работы</h1>
                        <ul>
                            <li>Пн-Сб с 09:00 до 19:00</li>
                            <li>Воскресенье выходной</li>

                        </ul>
                    </div>
                    <div className="footer_item">
                        <h1>Локация</h1>
                        <ul>
                            <li>Республика Узбекистан,</li>
                            <li>город Ташкент, Бектемирский р-н,</li>
                            <li> улица Туена 12</li>
                        </ul>
                        <a href="mailto:ilxom.mirbabayev@stampa.uz" className={"f-email"}>ilxom.mirbabayev@stampa.uz</a><br/>
                        <a href="mailto:kuvnakov.laziz@stampa.uz" className={"f-email"}>kuvnakov.laziz@stampa.uz</a><br/>
                        <a href="tel:+998911629889" className={"f-tell"}>(+99891) 162-98-89</a>
                    </div>
                    <div className="footer_item">
                        <h1>Меню</h1>
                        <ul>
                            <li><Link to={HOME} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Главная</Link></li>
                            <li><Link to={ABOUT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>О нас</Link></li>
                            <li><Link to={PRODUCTION} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Производство</Link></li>
                            <li><Link to={CONTACT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Контакты</Link></li>
                        </ul>
                    </div>
                    <div className="footer_item">
                        <h1>Связаться с нами</h1>
                        <ol>
                            <li><Link to={"https://t.me/stampatextileuz"}><TelegramIcon/></Link></li>
                            <li><Link to={"https://www.instagram.com/stampa_textile?igsh=MXdwa3hvM3BnamoydA%3D%3D&utm_source=qr"}><InstagramIcon/></Link></li>
                            <li><Link to={"https://www.facebook.com/stampatextile/"}><FacebookIcon/></Link></li>
                            <li><Link to={"https://vk.com/club229633365?from=groups"}><img src={VK} alt={"Stamp"}/></Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;