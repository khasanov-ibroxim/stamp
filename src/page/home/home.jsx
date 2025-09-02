import React, {useEffect, useRef, useState} from 'react';
import "./home.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import down from "@/assets/home/down.svg"
import AllInboxIcon from '@mui/icons-material/AllInbox';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SellIcon from '@mui/icons-material/Sell';
import SignpostIcon from '@mui/icons-material/Signpost';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import EcoPaint from "@/assets/home/icon/eco-paint.png"
import Cloth from "@/assets/home/icon/cloth-accessory.png"
import Factory from "@/assets/home/icon/factory.png"
import Precision from "@/assets/home/icon/precision.png"
import Consumables from "@/assets/home/icon/consumables.png"
import Adaptation from "@/assets/home/icon/adaptation.png"


import {Link} from "react-router-dom";

const {Panel} = Collapse;

import home_s2_helper from "@/assets/home/s2/2O8A5137.JPG"
import home_s2_index from "@/assets/home/s2/2O8A5001_Index.jpg"

import s4_1 from "@/assets/home/s4/34462008-759a-4f30-970d-7873fa5be96b.jpg"
import s4_2 from "@/assets/home/s4/2O8A5128.JPG"
import s4_3 from "@/assets/home/s4/44820942-0e79-415c-b4b5-b0b906de54cf.jpg"
import s4_4 from "@/assets/home/s4/2O8A5132.JPG"
import s4_5 from "@/assets/home/s4/background_silk_1.jpg"
import s4_6 from "@/assets/home/s4/background_silk_2.jpg"
import s4_7 from "@/assets/home/s4/background_silk_3.jpg"
import s4_8 from "@/assets/home/s4/d367b1f8-3289-44ce-a872-35fae02dd9eb.jpg"
import s4_9 from "@/assets/home/s4/pink-fabric-texture-crumpled-cloth-background.jpg"
import s4_10 from "@/assets/home/s4/texture-pink-pastel-knitted-sweater-fabric.jpg"


import bl from "@/assets/home/s5/bl.png"
import kz from "@/assets/home/s5/kz.png"
import pl from "@/assets/home/s5/pl.png"
import ru from "@/assets/home/s5/ru.png"
import tj from "@/assets/home/s5/tj.png"
import tr from "@/assets/home/s5/tr.png"
import turkey from "@/assets/home/s5/turkey.png"

import s7_1 from "@/assets/home/s7/2O8A4974.JPG"


import s8_1 from "@/assets/home/s8/2O8A4739.JPG"

import partnior_1 from "@/assets/home/partnior/logo_BRKM-150x52-1.png"
import partnior_2 from "@/assets/home/partnior/logo_dilmenler-150x29-1.png"
import partnior_3 from "@/assets/home/partnior/logo_Mersan-150x49-1.png"
import partnior_4 from "@/assets/home/partnior/logo_ms_1-91x75-1.png"
import partnior_5 from "@/assets/home/partnior/logo_setex-150x23-1.png"
import partnior_6 from "@/assets/home/partnior/ninola-150x64-1.png"
import partnior_7 from "@/assets/home/partnior/part1.png"
import partnior_8 from "@/assets/home/partnior/part2.png"
import partnior_9 from "@/assets/home/partnior/part3.png"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Keyboard, FreeMode, Navigation, Autoplay, EffectFade} from 'swiper/modules';
import {CloseOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";
import {Collapse} from "antd";
import Footer_component from "@/component/footer/footer_component.jsx";
import Footer from "@/component/footer/footer.jsx";
import VanillaTilt from "vanilla-tilt";


import header_1 from "@/assets/home/2O8A5026.JPG"
import header_2 from "@/assets/home/2O8A5001.jpg"
import header_3 from "@/assets/home/home_header3.jpg"
import {useTranslation} from "react-i18next";
import {ABOUT} from "@/utils/const.jsx";

const Home = ({options = {}}) => {
    const gridRef = useRef(null);
    const {t} = useTranslation();
    const [activeKey, setActiveKey] = useState(null);
    const tiltRef = useRef(null);
    const images = [
        {
            img_path: header_2,
            h1: t("home.home_header.i1.h1"),
            h2: t("home.home_header.i1.h2"),
            p: t("home.home_header.i1.p")
        },
        {
            img_path: header_3,
            h1: t("home.home_header.i2.h1"),
            h2: t("home.home_header.i2.h2"),
            p: t("home.home_header.i2.p")
        },
        {
            img_path: header_1,
            h1: t("home.home_header.i3.h1"),
            h2: t("home.home_header.i3.h2"),
            p: t("home.home_header.i3.p")
        },


    ];


    const itemFAQ = [
        {
            key: 1,
            label: t("home.home_s8.i1.t"),
            children: <p>{t("home.home_s8.i1.c")}</p>
        },
        {
            key: 2,
            label: t("home.home_s8.i2.t"),
            children: <p>{t("home.home_s8.i2.c")}</p>
        },
        {
            key: 3,
            label: t("home.home_s8.i3.t"),
            children: <p>{t("home.home_s8.i3.c")}</p>
        },
    ];
    const items = [
        {
            id: 1,
            name: t("home.home_s6.i1.n"),
            content: t("home.home_s6.i1.c"),
            img: ru
        },
        {
            id: 2,
            name: t("home.home_s6.i2.n"),
            content: t("home.home_s6.i2.c"),
            img: bl
        },

        {
            id: 3,
            name: t("home.home_s6.i3.n"),
            content: t("home.home_s6.i3.c"),
            img: kz
        },
        {
            id: 4,
            name: t("home.home_s6.i4.n"),
            content: t("home.home_s6.i4.c"),
            img: pl
        },

        {
            id: 5,
            name: t("home.home_s6.i5.n"),
            content: t("home.home_s6.i5.c"),
            img: tr
        },
        {
            id: 6,
            name: t("home.home_s6.i6.n"),
            content: t("home.home_s6.i6.c"),
            img: ru
        },

        {
            id: 7,
            name: t("home.home_s6.i7.n"),
            content: t("home.home_s6.i7.c"),
            img: turkey
        },
        {
            id: 8,
            name: t("home.home_s6.i8.n"),
            content: t("home.home_s6.i8.c"),
            img: tj
        },

        {
            id: 9,
            name: t("home.home_s6.i9.n"),
            content: t("home.home_s6.i9.c"),
            img: ru
        },
        {
            id: 10,
            name: t("home.home_s6.i10.n"),
            content: t("home.home_s6.i10.c"),
            img: bl
        },

    ];
    useEffect(() => {
        if (gridRef.current) {
            const grid = gridRef.current;
            const items = grid.querySelectorAll('.home_s6_item');

            items.forEach(item => {
                const height = item.getBoundingClientRect().height;
                const span = Math.ceil(height / 19); // 5px ga mos ravishda
                item.style.gridRowEnd = `span ${span}`;
            });
        }
    }, [items]);
    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.3,
                ...options,
            });
        }
    }, [options]);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // 4s da o'zgaradi
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">

            <header>


                <Swiper loop={true} modules={[Autoplay]} autoplay={{delay: 5000}} className={"home_swiper"}>
                    {images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={"header_opacity"}></div>
                            <img src={item.img_path} alt=""/>
                            <div className="container-sm">
                                <div className="header_box">
                                    <div className="header_top_element">
                                        <h1 data-aos="fade-up">{item.h1}</h1>
                                    </div>
                                    <div className="header_bottom_element">
                                        <div className="col-lg-4">
                                            <p dangerouslySetInnerHTML={{__html: item.p}}></p>
                                            <div className="header_down">
                                                <img src={down} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4"><h1 data-aos="fade-up">{item.h2}</h1></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </header>

            <section className="home_s1">
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className=" home_s1_item_1">
                                <span>{t("home.home_s1.subtitle")}</span>
                                <h1>{t("home.home_s1.title")}</h1>
                                <p>{t("home.home_s1.t_content")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <img src={EcoPaint}/>
                                <p dangerouslySetInnerHTML={{__html:t("home.home_s1.i1")}}></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <img src={Cloth}/>
                                <p dangerouslySetInnerHTML={{__html:t("home.home_s1.i2")}}></p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <img src={Factory}/>
                                <p dangerouslySetInnerHTML={{__html:t("home.home_s1.i3")}}></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <img src={Precision}/>
                                <p dangerouslySetInnerHTML={{__html:t("home.home_s1.i4")}}></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="home_s1_item_standart">
                                <img src={Consumables}/>
                                <p dangerouslySetInnerHTML={{__html:t("home.home_s1.i5")}}></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="home_s1_item_standart">
                                <img src={Adaptation}/>
                                <p dangerouslySetInnerHTML={{__html: t("home.home_s1.i6")}}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"home_s2"}>
                <div className="container-sm">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <div className="home_s2_item_1">

                                <div className="home_s2_index_element">
                                    <img src={home_s2_index} alt=""/>
                                    <div className="home_s2_index_hleper">
                                        <img src={home_s2_helper} alt="" style={{objectFit: "cover"}}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="home_s2_text_content">
                                <span>{t("home.home_s2.span")}</span>
                                <h1>{t("home.home_s2.h1")}</h1>
                                <p>{t("home.home_s2.p")}</p>
                                <Link to={ABOUT}>{t("home.home_s2.link")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"home_s3"}>
                <div className="home_corusel_wrapper">
                    <div className="home_corusel">
                        <div className="home_corusel_item">{t('home.home_s3.i1')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i2')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i3')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i4')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i5')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i1')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i2')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i3')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i4')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i5')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i1')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i2')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i3')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i4')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i5')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i1')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i2')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i3')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i4')}</div>
                        <div className="home_corusel_item">{t('home.home_s3.i5')}</div>
                    </div>
                </div>
            </section>

            <section className={"home_s4 cursor_left_right"}>
                <Swiper
                    slidesPerView={4.4}
                    spaceBetween={5}
                    loop={true}
                    mousewheel={true}
                    keyboard={true}
                    freeMode={true}
                    modules={[Mousewheel, Keyboard, FreeMode]}
                    breakpoints={{
                        320: {slidesPerView: 1.1,},  // Mobil (<= 320px)
                        576: {slidesPerView: 2.1,},  // Kichik ekran (<= 576px)
                        768: {slidesPerView: 3.1,},  // O‘rta ekran (<= 768px)
                        1024: {slidesPerView: 4.4,},
                    }}
                >
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_1} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_2} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_3} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_4} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_5} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_6} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_7} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_8} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_9} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_10} alt=""/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className={"home_s5 "}>
                <div className="container-sm ">
                    <div className="home_s5_item">
                        <h1 dangerouslySetInnerHTML={{__html:t("home.home_s5")}}></h1>
                    </div>
                </div>
            </section>


            <section className={"home_s6"}>
                <div className="container-sm">
                    <div className="home_s6_box" ref={gridRef}>
                        {items.map((item) => (
                            <div key={item.id} className="home_s6_item">
                                <div className="home_s6_item_top">
                                    <div className="home_s6_item_img"><img src={item.img} alt=""/></div>
                                    <div className="home_s6_item_top_info">
                                        <h2>{item.name}</h2>

                                    </div>
                                </div>
                                <div className="home_s6_item_bottom">
                                    <p>{item.content}</p>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className={"home_s7"}>
                <div className="container-sm">
                    <div className="home_s7_box ">

                        <div className="home_s7_opacity"></div>
                        <div className="home_s7_slide">
                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                effect="fade"
                                autoplay={{
                                    delay: 5500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false, // Sichqoncha ustiga kelganda to‘xtab qolmasligi uchun
                                    stopOnLastSlide: false, // Oxirgi slaydda to‘xtab qolmasligi uchun
                                    waitForTransition: false, // Yangi slayd yuklanishini kutmasdan davom ettirishi uchun
                                }}
                                loop={true} // Slaydlar cheksiz davom etishi uchun
                            >
                                <SwiperSlide><img src={s7_1} alt=""/></SwiperSlide>

                            </Swiper>
                        </div>

                    </div>
                </div>

            </section>

            <section className="home_s8">
                <div className="container-sm">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="home_s8_content">
                                <h1>{t("home.home_s8.title")}</h1>
                                <Collapse
                                    accordion
                                    expandIconPosition="start"
                                    expandIcon={({isActive}) => (isActive ? <MinusOutlined/> : <PlusOutlined/>)}
                                    className="custom-collapse"
                                    onChange={setActiveKey}
                                >
                                    {itemFAQ.slice(0, 9).map((item) => (
                                        <Panel header={item.label} key={item.key}>
                                            {item.children}
                                        </Panel>
                                    ))}
                                </Collapse>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="home_s8_content_img">
                                <div className="home_s8_content_img_index">
                                    <img src={s8_1} alt="" ref={tiltRef}/>
                                    <div className="home_s8_content_item_box">
                                        <div className="home_s8_content_item">
                                            <span>{t("home.home_s8.year.year")}</span>
                                            <h3>10+ </h3>
                                            <p>{t("home.home_s8.year.rink")}</p>
                                        </div>
                                        <div className="home_s8_content_item">
                                            <span> {t("home.home_s8.client.c1")} </span>
                                            <h3>580+</h3>
                                            <p>{t("home.home_s8.client.client")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <Footer_component/>
            <Footer/>
        </div>
    );
};

export default Home;