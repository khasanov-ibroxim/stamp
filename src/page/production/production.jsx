import React, {useEffect, useRef, useState} from 'react';
import "./production.css"
import AllInboxIcon from "@mui/icons-material/AllInbox";
import SellIcon from "@mui/icons-material/Sell";
import SignpostIcon from "@mui/icons-material/Signpost";
import {Link} from "react-router-dom";
import {ABOUT} from "@/utils/const.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import s1_1 from "@/assets/production/s1/s1_1.jpg"
import s1_icon from "@/assets/production/s1/icon.svg"
import s1_about from "@/assets/production/s1/about-us.svg"

import s2_1 from "@/assets/production/s2/s2_1.jpg"
import s2_2 from "@/assets/production/s2/s2_2.jpg"
import s2_3 from "@/assets/production/s2/s2_3.jpg"

import s5_1 from "@/assets/production/s5/s5_1.jpg"
import s5_2 from "@/assets/production/s5/s5_2.jpg"
import s5_3 from "@/assets/production/s5/s5_3.jpg"
import s5_4 from "@/assets/production/s5/s5_4.jpg"

import EastIcon from '@mui/icons-material/East';
import {Timeline, Affix} from 'antd';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import {useMediaQuery} from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Footer from "@/component/footer/footer.jsx";


const Production = () => {
    const mediaQuery = useMediaQuery('(max-width: 1024px)');
    const mediaQuerySM = useMediaQuery('(max-width: 600px)');

    return (
        <div>
            <div className="about_header">
                <h1>Наши услуги</h1>
            </div>
            <section className="home_s1">
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className=" home_s1_item_1">
                                <span>Технологии цвета</span>
                                <h1>Печатаем и окрашиваем безупречно</h1>
                                <p>
                                    Мы используем современные методы цифровой печати и крашения, чтобы передать каждую
                                    деталь с точностью, глубиной и стойкостью цвета.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart" style={{
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0 0 5px rgba(0,0,0,.5)",
                                borderRadius: "20px"
                            }}>
                                <AllInboxIcon/>
                                <p>Печать</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart" style={{
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0 0 5px rgba(0,0,0,.5)",
                                borderRadius: "20px"
                            }}>
                                <AllInboxIcon/>
                                <p>Крашение</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"pr_s1"}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="pr_s1_img"><img src={s1_1} alt=""/></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="pr_s1_content">
                            <h1>Цвет, который остаётся</h1>
                            <p>Мы используем реактивные чернила на водной основе с международными сертификатами
                                безопасности — идеально даже для детской одежды. Печатаем на своих тканях или на
                                предоставленных заказчиком, от «суровья» до готового результата.</p>
                            <p>Газо-опалка MERSAN обеспечивает идеальную подготовку ткани, а принтер MS JPK EVO (Италия)
                                печатает до 240 см в ширину с насыщенностью, стойкостью и максимальной детализацией без
                                ограничений в цветах.</p>

                            <Link to={ABOUT}>Свяжитесь</Link>
                            <div className="circle-wrapper">
                                <div className="rotating-text">
                                    <img src={s1_about} alt=""/>
                                </div>
                                <div className="center-icon">
                                    <img src={s1_icon} alt="About Us Icon"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="pr_s2 cursor_left_right">
                <div className="container-sm">
                    <div className="pr_s2_top">
                        <span>Свяжитесь</span>
                        <h1 style={{textAlign: "center"}}>Выбирают чаще всего — за качество, стиль и точность
                            исполнения</h1>
                    </div>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        className={"pr_s2_swiper"}
                        breakpoints={{
                            320: {slidesPerView: 1,},  // Mobil (<= 320px)
                            576: {slidesPerView: 2,},  // Kichik ekran (<= 576px)
                            768: {slidesPerView: 3,},  // O‘rta ekran (<= 768px)
                            1024: {slidesPerView: 3,},
                        }}
                    >
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">
                                    <span>What We Do</span>
                                    <h1>Christmas Toys</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_1} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Read More</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">
                                    <span>What We Do</span>
                                    <h1>Christmas Toys</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_2} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Read More</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">
                                    <span>What We Do</span>
                                    <h1>Christmas Toys</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_3} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Read More</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">
                                    <span>What We Do</span>
                                    <h1>Christmas Toys</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_3} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Read More</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">
                                    <span>What We Do</span>
                                    <h1>Christmas Toys</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_1} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Read More</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">
                                    <span>What We Do</span>
                                    <h1>Christmas Toys</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_2} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Read More</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="pr_s3">
                <div className="home_corusel_wrapper">
                    <div className="home_corusel">
                        {Array.from({length: 2}).map((_, index) => (
                            <React.Fragment key={index}>
                                <div className="home_corusel_item">
                                    Печать & Дизайн
                                </div>
                                <div className="home_corusel_item">
                                    Цвет
                                </div>
                                <div className="home_corusel_item">
                                    Стиль
                                </div>
                            </React.Fragment>
                        ))}

                    </div>
                </div>
            </section>
            <section style={{marginBottom: 0}} className="pr_group">
                <section className="pr_s4">
                    <div className="container-sm">
                        <div className="row">
                            <div className="col-lg-6">
                                {!mediaQuery ?
                                    <div className={"pr_s4_box"}>
                                        <div className="pr_s4_left">
                                            <span>Точное окрашивание</span>
                                            <h1>Современные технологии для яркости, стойкости и безупречного цвета</h1>
                                            <p>Каждый метр ткани проходит точную обработку, обеспечивая глубину цвета,
                                                идеальную равномерность и долговечность даже после множества стирок.</p>
                                        </div>
                                    </div> :
                                    <div className="pr_s4_left" style={{marginBottom: "20px"}}>
                                        <span>Точное окрашивание</span>
                                        <h1>Современные технологии для яркости, стойкости и безупречного цвета</h1>
                                        <p>Каждый метр ткани проходит точную обработку, обеспечивая глубину цвета,
                                            идеальную равномерность и долговечность даже после множества стирок.</p>
                                    </div>
                                }

                            </div>
                            <div className="col-lg-6" style={mediaQuerySM ? {padding: "0 30px"} : {}}>
                                <Timeline
                                    items={[
                                        {
                                            dot: <div className="pr_s4_icon">
                                                <PrecisionManufacturingIcon/>
                                            </div>,
                                            children: <>
                                                <h1>Стойкость цвета</h1>
                                                <p>Окрашивание не выгорает, не тускнеет и выдерживает многократные стирки.</p>
                                            </>,
                                        },
                                        {
                                            dot: <div className="pr_s4_icon">
                                                <PrecisionManufacturingIcon/>
                                            </div>,
                                            children: <>
                                                <h1>Высокое качество</h1>
                                                <p>Цвет ложится равномерно, создавая насыщенные и чёткие оттенки.</p>
                                            </>,
                                        },
                                        {
                                            dot: <div className="pr_s4_icon">
                                                <PrecisionManufacturingIcon/>
                                            </div>,
                                            children: <>
                                                <h1>Полная свобода</h1>
                                                <p>Возможна запечатка всей поверхности ткани, даже самых сложных дизайнов.</p>
                                            </>,
                                        },
                                        {
                                            dot: <div className="pr_s4_icon">
                                                <PrecisionManufacturingIcon/>
                                            </div>,
                                            children: <>
                                                <h1>Надёжная технология</h1>
                                                <p>Используем красители от Rudolf, Birkim и Bezema, а также точную рецептуру с лабораторией ATAC.</p>
                                            </>,
                                        },

                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"pr_s5"}>
                    <div className="container-sm">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="pr_s5_item">
                                    <img src={s5_1} alt=""/>
                                    <div className="pr_s5_item_text">
                                        <h1>Magazines & Catalogs</h1>
                                        <p>Prints</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="pr_s5_item">
                                    <img src={s5_2} alt=""/>
                                    <div className="pr_s5_item_text">
                                        <h1>Magazines & Catalogs</h1>
                                        <p>Prints</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="pr_s5_item">
                                    <img src={s5_3} alt=""/>
                                    <div className="pr_s5_item_text">
                                        <h1>Magazines & Catalogs</h1>
                                        <p>Prints</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="pr_s5_item">
                                    <img src={s5_4} alt=""/>
                                    <div className="pr_s5_item_text">
                                        <h1>Magazines & Catalogs</h1>
                                        <p>Prints</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"contact"}>
                    <div className="container-sm">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact_content">
                                    <div className="contact_content_top">
                                        <span>Контакты</span>
                                        <h1>Готовы к сотрудничеству? <br/> Обсудим ваш проект!</h1>
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
                                            <div
                                                className="contact_check d-flex justify-content-center align-items-center">
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
            </section>

            <section className={"pr_s6"}>
                <div className="container-sm">
                    {!mediaQuerySM ?
                        <div className="row gap-5 ">
                            <div className="col-lg-2 col-md-3 col-sm-1">
                                <div className="pr_s6_item">
                                    <img
                                        src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                        alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-1">
                                <div className="pr_s6_item">
                                    <img
                                        src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                        alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-1">
                                <div className="pr_s6_item">
                                    <img
                                        src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                        alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-1">
                                <div className="pr_s6_item">
                                    <img
                                        src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                        alt=""/>
                                </div>
                            </div>
                        </div> :
                        <section className={"home_s9"}>
                            <div className="home_corusel_wrapper">
                                <div className="home_corusel">
                                    <div className="home_corusel_item">
                                        <img
                                            src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                            alt=""/>
                                    </div>
                                    <div className="home_corusel_item">
                                        <img
                                            src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                            alt=""/>
                                    </div>
                                    <div className="home_corusel_item">
                                        <img
                                            src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                            alt=""/>
                                    </div>
                                    <div className="home_corusel_item">
                                        <img
                                            src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                            alt=""/>
                                    </div>
                                    <div className="home_corusel_item">
                                        <img
                                            src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                            alt=""/>
                                    </div>
                                    <div className="home_corusel_item">
                                        <img
                                            src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                            alt=""/>
                                    </div>
                                    <div className="home_corusel_item">
                                        <img
                                            src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                            alt=""/>
                                    </div>
                                    <div className="home_corusel_item">
                                        <img
                                            src="https://printy.themerex.net/wp-content/uploads/2023/11/partner-11-copyright.png"
                                            alt=""/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }

                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default Production;