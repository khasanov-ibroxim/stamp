import React, {useEffect, useRef, useState} from 'react';
import "./about.css"
import SellIcon from '@mui/icons-material/Sell';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import {Link} from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import Footer_component from "@/component/footer/footer_component.jsx";
import Footer from "@/component/footer/footer.jsx";

const {Panel} = Collapse;


import s3_1 from "@/assets/about/s3/2O8A5077.JPG"

import s5_1 from "@/assets/about/s5/2O8A4820.jpg"
import s5_2 from "@/assets/about/s5/2O8A4911.jpg"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";


import {Collapse} from "antd";
import {CloseOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";
import s8_1 from "@/assets/about/2O8A5042.JPG";
import partnior_1 from "@/assets/home/partnior/logo_BRKM-150x52-1.png";
import partnior_2 from "@/assets/home/partnior/logo_dilmenler-150x29-1.png";
import partnior_3 from "@/assets/home/partnior/logo_Mersan-150x49-1.png";
import partnior_4 from "@/assets/home/partnior/logo_ms_1-91x75-1.png";
import partnior_5 from "@/assets/home/partnior/logo_setex-150x23-1.png";
import partnior_6 from "@/assets/home/partnior/ninola-150x64-1.png";
import partnior_7 from "@/assets/home/partnior/part1.png";
import partnior_8 from "@/assets/home/partnior/part2.png";
import partnior_9 from "@/assets/home/partnior/part3.png";

import header_1 from "@/assets/headers/2O8A4752.JPG";
import header_2 from "@/assets/headers/2O8A4739_about.jpg";


const About = ({options = {}}) => {
    const tiltRef = useRef(null);
    const [activeKey, setActiveKey] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const images = [header_1, header_2];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const itemFAQ = [
        {
            key: 1,
            label: "Разработка дизайна",
            children: <p>Помогаем выбрать стиль, адаптируем идеи под продукт и превращаем образы в визуальные
                решения.</p>
        },
        {
            key: 2,
            label: "Создание принтов",
            children: <p>Генерируем уникальные принты в духе вашего бренда и подбираем идеальные технологии нанесения —
                от креатива до текстуры.</p>
        },
        {
            key: 3,
            label: "Контроль качества и логистика",
            children: <p>Следим за каждым этапом производства и доставляем готовую продукцию быстро и надёжно по всему
                Узбекистану.</p>
        },
    ];
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
            setFade(false); // Yashirish (opacity: 0)
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setFade(true); // Ko'rsatish (opacity: 1)
            }, 1000); // fade chiqib ketishi 0.5s
        }, 7000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <div className={`about_header ${fade ? "fade-in" : "fade-out"}`}
                 style={{background: `url(${images[currentIndex]}) center center`, backgroundSize: "100%"}}>
                <h1>О нас</h1>
            </div>

            <section className="about_s1">
                <div className="container-sm">
                    <div className="row  ">
                        <div className="col-lg-6">
                            <span>Услуги</span>
                            <h2>Stampa Textile -</h2>
                            <p>Инновации в печати и окрашивании тканей</p>
                        </div>
                        <div className="col-lg-6 align-items-end justify-content-end d-flex flex-column">
                            <p>Мы специализируемся на выпуске гладкоокрашенных и печатных трикотажных полотен, а также
                                работаем с широким спектром ткацких материалов. </p>
                            <p>Используем только передовое оборудование из Турции и Италии, обеспечивая промышленное
                                качество на каждом этапе.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"about_s2"}>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="about_s2_item_box">
                                <div className="about_s2_item">
                                    <div className="about_s2_item_top">
                                        <InventoryRoundedIcon/>
                                    </div>
                                    <div className="about_s2_item_body">
                                        <h2>Цифровая <br/> печать </h2>
                                    </div>
                                    <div className="about_s2_item_bottom">
                                        <div className="about_s2_item_bottom_text">
                                            узнать больше
                                        </div>
                                        <div className="about_s2_item_bottom_icon">
                                            <EastRoundedIcon/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="about_s2_item_box">
                                <div className="about_s2_item">
                                    <div className="about_s2_item_top">
                                        <LibraryBooksIcon/>
                                    </div>
                                    <div className="about_s2_item_body">
                                        <h2>Крашение </h2><br/>
                                    </div>
                                    <div className="about_s2_item_bottom">
                                        <div className="about_s2_item_bottom_text">
                                            узнать больше
                                        </div>
                                        <div className="about_s2_item_bottom_icon">
                                            <EastRoundedIcon/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"about_s3"}>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about_s3_img">
                                <img src={s3_1} alt="" ref={tiltRef}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about_s3_content">
                                <div className="about_s3_content_top">
                                    <span>Надёжное партнёрство</span>
                                    <h1> Ваш дизайн — наша печать: создаём на ткани без компромиссов</h1>
                                </div>
                                <div className="about_s3_content_bottom">
                                    <p>Команда «Stampa Textile» стремится к постоянному улучшению продукции и сервисов,
                                        внедряя прогрессивные методы работы. Мы ценим доверие клиентов и предлагаем
                                        выгодные условия сотрудничества, включая гибкую систему скидок.</p>
                                    <Link to={"#"}>Свяжитесь</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_s4">
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

            <section className="about_s5">
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about_s5_left_top">
                                <span>Лаборатория</span>
                                <h1>Контроль на каждом этапе</h1>
                            </div>
                            <div className="about_s5_left_bottom">
                                <img src={s5_1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about_s5_right">
                                <div className="about_s5_right_top">
                                    <img src={s5_2} alt=""/>
                                </div>
                                <div className="about_s5_right_bottom">
                                    <p>Наша лаборатория — это сердце производственного процесса, где тестируются ткани,
                                        краски и готовая продукция. Мы проверяем стойкость окрашивания, усадку,
                                        плотность и соответствие цвета, чтобы результат соответствовал самым высоким
                                        стандартам.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"about_s6 cursor_left_right"}>
                    <div className="container-sm ">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={5}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                        >
                            <SwiperSlide>
                                <div className="home_s5_item">
                                    <span className={"about_s6_element"}>&#10075;&#10075;</span>
                                    <h1>Ваша эстетика + наша печать = ткань, которую невозможно не заметить!</h1>
                                    <div className="home_s5_item_content">

                                        <div className="home_s5_profile_content">
                                            {/*<h3>April Robinson</h3>*/}
                                            {/*<p>Client</p>*/}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </section>


            <section className={"about_s7"}>
                <div className="container-sm">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="home_s8_content">
                                <button onClick={() => setIsOpen(true)}><PlayArrowRoundedIcon/></button>
                                <h1>Комплексный подход к печати</h1>
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
                                    <img src={s8_1} alt=""/>
                                    <div className="home_s8_content_item_box">
                                        <div className="home_s8_content_item">
                                            <span>лет</span>
                                            <h3>10+ </h3>
                                            <p> на рынке</p>
                                        </div>
                                        <div className="home_s8_content_item">
                                            <span> довольных </span>
                                            <h3>580+</h3>
                                            <p>клиентов</p>
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


            {isOpen && (
                <div className="home_s7_modal">
                    <div className="home_s7_modal_content">
                        <button
                            className="home_s7_modal_close"
                            onClick={() => setIsOpen(false)}
                        >
                            <CloseOutlined/>
                        </button>
                        <iframe
                            width="70%"
                            height="70%"
                            src="https://www.youtube.com/embed/wII9bv2P9c8?autoplay=1&controls=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
            <Footer_component/>
            <Footer/>
        </div>
    );
};

export default About;