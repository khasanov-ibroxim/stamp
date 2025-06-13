import React, {useEffect, useState} from "react";
import "./navbar.css";
import logo from "@/assets/logoStamp.png";
import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useLanguage} from "@/utils/lang/LangContext.jsx";
import {Dropdown, Space} from "antd";
import {languages} from "@/utils/lang/langs.jsx";
import {CloseOutlined, DownOutlined, MenuOutlined} from "@ant-design/icons";
import {ABOUT, CONTACT, HOME, PRODUCTION} from "@/utils/const.jsx";

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';


const Navbar = () => {
    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const {t} = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 1200px)").matches);
    const [isFixed, setIsFixed] = useState(false);
    const location = useLocation().pathname;

    useEffect(() => {
        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        const windowMatch = window.matchMedia("(max-width: 1200px)");
        windowMatch.addEventListener("change", handleResize);

        return () => windowMatch.removeEventListener("change", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`${isFixed ? "fixed-navbar" : ""} ${location === "/" ? "Home" : ""}`.trim()}>
            <div className="nav_full_box container-sm">
                <div className="nav_top_for_home">
                    <div className="nav_logo">
                        <img src={logo} alt=""/>
                    </div>
                </div>
                <div className={`nav_menu ${isMenuOpen ? "open" : ""}`}>
                    <ul>
                        <li className={location === "/" ? "active" : ""}>
                            <Link onClick={() => setIsMenuOpen(false)} to={HOME}>{t("navbar.home")}</Link>
                        </li>
                        <li className={location === "/about" ? "active" : ""}>
                            <Link
                                onClick={() => setIsMenuOpen(false)}
                                to={ABOUT}>{t("navbar.about")}</Link>
                        </li>
                        <li className={location === "/production" ? "active" : ""}>
                            <Link
                                onClick={() => setIsMenuOpen(false)}
                                to={PRODUCTION}>{t("navbar.production")}</Link>
                        </li>
                        <li className={location === "/contact" ? "active" : ""}
                        >
                            <Link
                                onClick={() => setIsMenuOpen(false)}
                                to={CONTACT}>{t("navbar.contact")}</Link>
                        </li>
                        <li className="lang_nav" style={isMobile ? {display: "flex"} : {display: "none"}}>
                            <Dropdown
                                menu={{items: languages, onClick: handleLanguageChange}}
                                trigger={["click"]}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        {selectedLanguage.label} <DownOutlined/>
                                    </Space>
                                </a>
                            </Dropdown>
                        </li>
                    </ul>
                    <ol>
                        <li><a href="#"><InstagramIcon/></a></li>
                        <li><a href="#"><TelegramIcon/></a></li>
                        <li><a href="#"><WhatsAppIcon/></a></li>
                        <li><a href="#"><FacebookIcon/></a></li>
                    </ol>
                </div>

                <div className="nav_end">
                    <div className="lang_nav" style={isMobile ? {display: "none"} : {display: "flex"}}>
                        <Dropdown
                            menu={{items: languages, onClick: handleLanguageChange}}
                            trigger={["click"]}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {selectedLanguage.label} <DownOutlined/>
                                </Space>
                            </a>
                        </Dropdown>

                    </div>
                    <Link to={CONTACT} className={"nav_end_link"}>Свяжитесь</Link>
                    <div className={`navburger `} style={isMenuOpen ? {color: "white"} : {}} onClick={toggleMenu}>
                        {isMenuOpen ? <CloseOutlined/> : <MenuOutlined/>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
