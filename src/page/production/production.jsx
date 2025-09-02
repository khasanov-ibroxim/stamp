import React, {useEffect, useRef, useState} from 'react';
import "./production.css"
import AllInboxIcon from "@mui/icons-material/AllInbox";
import SellIcon from "@mui/icons-material/Sell";
import SignpostIcon from "@mui/icons-material/Signpost";
import {Link} from "react-router-dom";
import {ABOUT} from "@/utils/const.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import header_img from "@/assets/headers/2O8A5037.JPG"
import s1_1 from "@/assets/production/s1/2O8A4973.JPG"
import s1_icon from "@/assets/production/s1/icon.svg"
import s1_about from "@/assets/production/s1/about-us.svg"
import ScreenPrinting from "@/assets/home/icon/screen-printing.png"
import Dyeing from "@/assets/home/icon/dyeing.png"


import s2_1 from "@/assets/production/s2/183e42ed54a03929183a108902f8109c.jpg"
import s2_2 from "@/assets/production/s2/403c34a96375932ff4d417a6025b8aba.jpg"
import s2_3 from "@/assets/production/s2/561b4ea8799ad9860e33d253d4994c64.jpg"
import s2_4 from "@/assets/production/s2/5264d429d3e8108f806a75c7c753383f.jpg"
import s2_5 from "@/assets/production/s2/029749c86c394f9f2a387fceb9436920.jpg"
import s2_6 from "@/assets/production/s2/2382345e48dcc0d13f3ab78f4f932cdd.jpg"
import s2_7 from "@/assets/production/s2/a6ffe906f2bac2ab7fa94f726502020d.jpg"
import s2_8 from "@/assets/production/s2/b46c81632e2a2cca060f612324f65cc8.jpg"
import s2_9 from "@/assets/production/s2/b4942cf43f08f65d587e17a8ba367bde.jpg"

import s5_1 from "@/assets/production/s5/2O8A4744.JPG"
import s5_2 from "@/assets/production/s5/2O8A4752.JPG"
import s5_3 from "@/assets/production/s5/2O8A4759.JPG"
import s5_4 from "@/assets/production/s5/2O8A4998.JPG"
import s5_5 from "@/assets/production/s5/2O8A4766.jpg"
import s5_6 from "@/assets/production/s5/2O8A4783.jpg"
import s5_7 from "@/assets/production/s5/2O8A4793.jpg"
import s5_8 from "@/assets/production/s5/2O8A4974.JPG"

import EastIcon from '@mui/icons-material/East';
import {Timeline, Affix, Image} from 'antd';
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

import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import BalanceIcon from '@mui/icons-material/Balance';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import partnior_1 from "@/assets/home/partnior/logo_BRKM-150x52-1.png";
import partnior_2 from "@/assets/home/partnior/logo_dilmenler-150x29-1.png";
import partnior_3 from "@/assets/home/partnior/logo_Mersan-150x49-1.png";
import partnior_4 from "@/assets/home/partnior/logo_ms_1-91x75-1.png";
import partnior_5 from "@/assets/home/partnior/logo_setex-150x23-1.png";
import partnior_6 from "@/assets/home/partnior/ninola-150x64-1.png";
import partnior_7 from "@/assets/home/partnior/part1.png";
import partnior_8 from "@/assets/home/partnior/part2.png";
import partnior_9 from "@/assets/home/partnior/part3.png";
import {useTranslation} from "react-i18next";

const Production = () => {
    const mediaQuery = useMediaQuery('(max-width: 1024px)');
    const mediaQuerySM = useMediaQuery('(max-width: 600px)');
    const {t} = useTranslation()


    return (
        <div>

            <div className={`about_header `}>
                <div className="about_header_opacity"></div>
                <Swiper modules={[Autoplay]} autoplay={{delay: 5000}} className={"about_swiper"}>

                    <SwiperSlide>
                        <img src={header_img} alt=""/>
                    </SwiperSlide>

                </Swiper>
                <h1>{t("production.header")}</h1>
            </div>
            <section className="home_s1">
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className=" home_s1_item_1">
                                <span>{t("production.s1.span")}</span>
                                <h1>{t("production.s1.h1")}</h1>
                                <p>{t("production.s1.p")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart" style={{
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0 0 5px rgba(0,0,0,.5)",
                                borderRadius: "20px"
                            }}>
                                <img src={ScreenPrinting}/>
                                <p>{t("production.s1.i1")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart" style={{
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0 0 5px rgba(0,0,0,.5)",
                                borderRadius: "20px"
                            }}>
                                <img src={Dyeing}/>
                                <p>{t("production.s1.i2")}</p>
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
                            <h1>{t("production.s2.h1")}</h1>
                            <p>{t("production.s2.p1")}</p>
                            <p>{t("production.s2.p2")}</p>
                            <Link to={ABOUT}>{t("production.s2.link")}</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pr_s2 cursor_left_right">
                <div className="container-sm">
                    <div className="pr_s2_top">
                        <span>{t("production.s3.span")}</span>
                        <h1 style={{textAlign: "center"}}>{t("production.s3.h1")}</h1>
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

                                    <h1>{t("production.s3.name")}</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_1} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>{t("production.s3.more")}</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">

                                    <h1>наименование</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_2} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Подробно</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">

                                    <h1>наименование</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_3} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Подробно</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">

                                    <h1>наименование</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_4} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Подробно</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">

                                    <h1>наименование</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_5} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Подробно</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">

                                    <h1>наименование</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_6} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Подробно</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">

                                    <h1>наименование</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_7} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Подробно</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">

                                    <h1>наименование</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_8} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Подробно</p>
                                        <EastIcon/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pr_s2_item">
                                <div className="pr_s2_item_top">

                                    <h1>наименование</h1>
                                </div>
                                <div className="pr_s2_item_body">
                                    <img src={s2_9} alt=""/>
                                </div>
                                <div className="pr_s2_item_bottom">
                                    <span className={"pr_s2_item_bottom_element"}></span>
                                    <div className={'pr_s2_item_bottom_content'}>
                                        <p>Подробно</p>
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
                        {Array.from({length: 10}).map((_, index) => (
                            <React.Fragment key={index}>
                                <div className="home_corusel_item">
                                    {t("production.s4.i1")}
                                </div>
                                <div className="home_corusel_item">
                                    {t("production.s4.i2")}
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
                                            <span>{t("production.s5.span")}</span>
                                            <h1>{t("production.s5.h1")}</h1>
                                            <p>{t("production.s5.p")}</p>
                                        </div>
                                    </div> :
                                    <div className="pr_s4_left" style={{marginBottom: "20px"}}>
                                        <span>{t("production.s5.span")}</span>
                                        <h1>{t("production.s5.h1")}</h1>
                                        <p>{t("production.s5.p")}</p>
                                    </div>
                                }

                            </div>
                            <div className="col-lg-6" style={mediaQuerySM ? {padding: "0 30px"} : {}}>
                            <Timeline
                                    items={[
                                        {
                                            dot: <div className="pr_s4_icon">
                                                <FormatColorFillIcon/>
                                            </div>,
                                            children: <>
                                                <h1>{t("production.s5.i1.h1")}</h1>
                                                <p>{t("production.s5.i1.p")}</p>
                                            </>,
                                        },
                                        {
                                            dot: <div className="pr_s4_icon">
                                                <BalanceIcon/>
                                            </div>,
                                            children: <>
                                                <h1>{t("production.s5.i2.h1")}</h1>
                                                <p>{t("production.s5.i2.p")}</p>
                                            </>,
                                        },
                                        {
                                            dot: <div className="pr_s4_icon">
                                                <PrecisionManufacturingIcon/>
                                            </div>,
                                            children: <>
                                                <h1>{t("production.s5.i3.h1")}</h1>
                                                <p>{t("production.s5.i3.p")}</p>
                                            </>,
                                        },
                                        {
                                            dot: <div className="pr_s4_icon">
                                                <LocalLaundryServiceIcon/>
                                            </div>,
                                            children: <>
                                                <h1>{t("production.s5.i4.h1")}</h1>
                                                <p>{t("production.s5.i4.p")}</p>
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
                        <Image.PreviewGroup>
                            <div className="row">
                                <Swiper slidesPerView={4} spaceBetween={10} modules={[Autoplay]}
                                        autoplay={{delay: 2000}}>
                                    <SwiperSlide>

                                        <div className="pr_s5_item">
                                            <Image src={s5_1}/>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <div className="pr_s5_item">
                                            <Image src={s5_2}/>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <div className="pr_s5_item">
                                            <Image src={s5_3}/>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <div className="pr_s5_item">
                                            <Image src={s5_4}/>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <div className="pr_s5_item">
                                            <Image src={s5_5}/>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <div className="pr_s5_item">
                                            <Image src={s5_6}/>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <div className="pr_s5_item">
                                            <Image src={s5_7}/>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide>

                                        <div className="pr_s5_item">
                                            <Image src={s5_8}/>
                                        </div>

                                    </SwiperSlide>

                                </Swiper>

                            </div>
                        </Image.PreviewGroup>
                    </div>
                </section>

                <section className={"contact"}>
                    <div className="container-sm">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact_content">
                                    <div className="contact_content_top">
                                        <span>{t("contact.span")}</span>
                                        <h1 dangerouslySetInnerHTML={{__html:t("contact.h1")}}></h1>
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
                                                <input type="text" placeholder={t("contact.name")}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop: "30px"}}>
                                        <div className="col-lg-12">
                                            <div className="input">
                                                <PhoneInTalkOutlinedIcon/>
                                                <input type="tel" placeholder={t("contact.tel")}/>
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
                                                    placeholder={t("contact.msg")}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-5 d-flex justify-content-center align-items-center">
                                        <div className="col-lg-12 col-sm-6 col-md-6">
                                            <div className="contact_btn">
                                                <Link to={"#"}><SendOutlinedIcon/>{t("contact.send")}</Link>
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
                    <section className={"home_s9"}>
                        <div className="home_corusel_wrapper">
                            <div className="home_corusel">
                                {Array.from({length: 2}).map((_, index) => (
                                    <React.Fragment key={index}>
                                        <div className="home_corusel_item">
                                            <img src={partnior_1} alt="Stamp partnior"/>
                                        </div>
                                        <div className="home_corusel_item">
                                            <img src={partnior_2} alt="Stamp partnior"/>
                                        </div>
                                        <div className="home_corusel_item">
                                            <img src={partnior_3} alt="Stamp partnior"/>
                                        </div>
                                        <div className="home_corusel_item">
                                            <img src={partnior_4} alt="Stamp partnior"/>
                                        </div>
                                        <div className="home_corusel_item">
                                            <img src={partnior_5} alt="Stamp partnior"/>
                                        </div>
                                        <div className="home_corusel_item">
                                            <img src={partnior_6} alt="Stamp partnior"/>
                                        </div>
                                        <div className="home_corusel_item">
                                            <img src={partnior_7} alt="Stamp partnior"/>
                                        </div>
                                        <div className="home_corusel_item">
                                            <img src={partnior_8} alt="Stamp partnior"/>
                                        </div>
                                        <div className="home_corusel_item">
                                            <img src={partnior_9} alt="Stamp partnior"/>
                                        </div>
                                    </React.Fragment>
                                ))}

                            </div>
                        </div>
                    </section>

                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default Production;