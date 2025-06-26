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
                        <h1>Working Hours</h1>
                        <ul>
                            <li>Mon-Fri: 9 AM – 6 PM</li>
                            <li>Saturday: 9 AM – 4 PM</li>
                            <li>Sunday: Closed</li>
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
                        <h1>Ссылки</h1>
                        <ul>
                            <li><Link to={HOME}>Главная</Link></li>
                            <li><Link to={ABOUT}>О нас</Link></li>
                            <li><Link to={PRODUCTION}>Производство</Link></li>
                            <li><Link to={CONTACT}>Контакты</Link></li>
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