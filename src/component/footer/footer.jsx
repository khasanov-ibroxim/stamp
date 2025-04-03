import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
                        <h1>Office</h1>
                        <ul>
                            <li>Germany —</li>
                            <li>785 15h Street, Office 478</li>
                            <li>Berlin, De 81566</li>
                        </ul>
                        <a href="#" className={"f-email"}>office@mail.com</a><br/>
                        <a href="#" className={"f-tell"}>+998 99 999 99 99</a>
                    </div>
                    <div className="footer_item">
                        <h1>Links</h1>
                        <ul>
                            <li><Link to={"#"}>Главная</Link></li>
                            <li><Link to={"#"}>О нас</Link></li>
                            <li><Link to={"#"}>Контакты</Link></li>
                        </ul>
                    </div>
                    <div className="footer_item">
                        <h1>Get in Touch</h1>
                        <ol>
                            <li><Link to={"#"}><TelegramIcon/></Link></li>
                            <li><Link to={"#"}><InstagramIcon/></Link></li>
                            <li><Link to={"#"}><FacebookIcon/></Link></li>
                            <li><Link to={"#"}><WhatsAppIcon/></Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;