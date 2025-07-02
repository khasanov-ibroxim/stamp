import React, {useEffect, useRef, useState} from 'react';
import "./home.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import down from "@/assets/home/down.svg"
import AllInboxIcon from '@mui/icons-material/AllInbox';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SellIcon from '@mui/icons-material/Sell';
import SignpostIcon from '@mui/icons-material/Signpost';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {Link} from "react-router-dom";

const {Panel} = Collapse;

import home_s2_helper from "@/assets/home/s2/2O8A5137.JPG"
import home_s2_index from "@/assets/home/s2/2O8A5001_Index.jpg"

import s4_1 from "@/assets/home/s4/2O8A5135.JPG"
import s4_2 from "@/assets/home/s4/2O8A5128.JPG"
import s4_3 from "@/assets/home/s4/2O8A5139.JPG"
import s4_4 from "@/assets/home/s4/2O8A5132.JPG"
import s4_5 from "@/assets/home/s4/2O8A5141.JPG"
import s4_6 from "@/assets/home/s4/2O8A5143.JPG"
import s4_7 from "@/assets/home/s4/2O8A5148.JPG"
import s4_8 from "@/assets/home/s4/2O8A5145.JPG"


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

const Home = ({options = {}}) => {
    const gridRef = useRef(null);

    const [activeKey, setActiveKey] = useState(null);
    const tiltRef = useRef(null);
    const images = [
        {
            img_path: header_2,
            h1: "Совершенство ",
            h2: "Цвет Текстура",
            p: `
                                                Откройте для себя экологически чистую печать на тканях с промышленным качеством
                                                — <br/>
                                                сочные цвета, точные детали и забота о планете в каждом отпечатке.
                                            `
        },
        {
            img_path: header_3,
            h1: "Совершенное  ",
            h2: " крашение тканей",
            p: `
                                                Откройте для себя экологически чистую печать на тканях с промышленным качеством
                                                — <br/>
                                                сочные цвета, точные детали и забота о планете в каждом отпечатке.
                                            `
        },
        {
            img_path: header_1,
            h1: "Цифровая печать",
            h2: "нового поколения",
            p: `
                                                Откройте для себя экологически чистую печать на тканях с промышленным качеством
                                                — <br/>
                                                сочные цвета, точные детали и забота о планете в каждом отпечатке.
                                            `
        },


    ];
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
    const items = [
        {
            id: 1,
            name: "Россия",
            location: "Pasadena, CA",
            content: "Отличное полотно — плотное, приятное на ощупь. Принт яркий, чёткий, не тускнеет!",
            date: "Nov 24, 2023",
            img: ru
        },
        {
            id: 2,
            name: "Беларусь",
            location: "Ferndale, CA",
            content: "Очень довольна! Полотно гладкое, без дефектов, принт чёткий и аккуратный. Все сделано с душой — ткань качественная, принт стойкий. Получила посылку — в восторге от текстиля и рисунка. Приятно держать в руках!",
            date: "Nov 24, 2023",
            img: bl
        },

        {
            id: 3,
            name: "Казахстан",
            location: "Pasadena, CA",
            content: "Красота и качество! Принт живой, ткань плотная, не просвечивает. Оттенки насыщенные, ткань отличная.",
            date: "Nov 24, 2023",
            img: kz
        },
        {
            id: 4,
            name: "Польша",
            location: "Ferndale, CA",
            content: `Отличное качество материала и принта. Ткань мягкая и прочная.
Очень довольна! Всё как на фото, даже лучше. Цвета насыщенные, а материал действительно добротный. Спасибо!
`,
            date: "Nov 24, 2023",
            img: pl
        },

        {
            id: 5,
            name: "Туркменистан",
            location: "Pasadena, CA",
            content: `Ткань просто превосходная — плотная, ровная, очень приятная на ощупь. Принт выглядит ярко и чётко, как на картинке. Даже после стирки всё остаётся без изменений.`,
            date: "Nov 24, 2023",
            img: tr
        },
        {
            id: 6,
            name: "Россия",
            location: "Ferndale, CA",
            content: "Очень порадовало качество исполнения. Цвета насыщенные, ничего не выцветает. Приятно удивлена такой стойкостью рисунка.",
            date: "Nov 24, 2023",
            img: ru
        },

        {
            id: 7,
            name: "Турция",
            location: "Pasadena, CA",
            content: "Полотно хорошего качества, без запаха и дефектов. Принт напечатан аккуратно, линии чёткие. Видно, что сделано с вниманием к деталям.",
            date: "Nov 24, 2023",
            img: turkey
        },
        {
            id: 8,
            name: "Таджикистан",
            location: "Ferndale, CA",
            content: "Заказываю уже не в первый раз — и всегда на высоте. Принт никогда не трескается, не стирается. Ткань остаётся как новая даже после нескольких стирок.",
            date: "Nov 24, 2023",
            img: tj
        },

        {
            id: 9,
            name: "Россия",
            location: "Pasadena, CA",
            content: "Очень довольна заказом. Всё соответствует описанию, качество отличное.",
            date: "Nov 24, 2023",
            img: ru
        },
        {
            id: 10,
            name: "Беларусь",
            location: "Ferndale, CA",
            content: "Приятная на ощупь ткань и стойкий принт. Обязательно закажу ещё!",
            date: "Nov 24, 2023",
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
                                <span>Умная печать</span>
                                <h1>Как совместить безупречное качество печати и заботу об экологии?</h1>
                                <p>
                                    Мы предлагаем цифровую печать на тканях, сочетающую индустриальную точность с
                                    экологической ответственностью. Высокая стойкость, яркость и безопасность — теперь
                                    без компромиссов.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <AllInboxIcon/>
                                <p>Экологичные <br/> чернила</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <AllInboxIcon/>
                                <p> Тканевая <br/> основа</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <SellIcon/>
                                <p>Промышленная <br/> стойкость</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <SignpostIcon/>
                                <p>Фотореалистичная <br/> точность</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <SignpostIcon/>
                                <p>Безопасность <br/> материалов</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <SignpostIcon/>
                                <p>Гибкость <br/> тиражей </p>
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
                                <span>Уникальный принт</span>
                                <h1>Персонально. Точно. Экологично.</h1>
                                <p>Мы создаём печать, отражающую ваш стиль, идею и характер — точно, ярко и
                                    экологично.</p>
                                <Link to={"#"}>Услуги</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"home_s3"}>
                <div className="home_corusel_wrapper">
                    <div className="home_corusel">
                        <div className="home_corusel_item">Ярко</div>
                        <div className="home_corusel_item">Качественно</div>
                        <div className="home_corusel_item">Современно</div>
                        <div className="home_corusel_item">Ярко</div>
                        <div className="home_corusel_item">Быстро</div>
                        <div className="home_corusel_item">Надёжно</div>
                        <div className="home_corusel_item">Ярко</div>
                        <div className="home_corusel_item">Качественно</div>
                        <div className="home_corusel_item">Современно</div>
                        <div className="home_corusel_item">Ярко</div>
                        <div className="home_corusel_item">Быстро</div>
                        <div className="home_corusel_item">Надёжно</div>

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
                            <Link className="home_s4_text" to={"#"}>
                                <span>IDEAS</span>
                                <div className="home_s4_content">
                                    <h3>T-Shirts</h3>
                                    <ArrowOutwardIcon/>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_2} alt=""/>
                            <Link className="home_s4_text" to={"#"}>
                                <span>IDEAS</span>
                                <div className="home_s4_content">
                                    <h3>MUGS</h3>
                                    <ArrowOutwardIcon/>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_3} alt=""/>
                            <Link className="home_s4_text" to={"#"}>
                                <span>IDEAS</span>
                                <div className="home_s4_content">
                                    <h3>Tea packaging</h3>
                                    <ArrowOutwardIcon/>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_4} alt=""/>
                            <Link className="home_s4_text" to={"#"}>
                                <span>IDEAS</span>
                                <div className="home_s4_content">
                                    <h3>Book cover</h3>
                                    <ArrowOutwardIcon/>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_5} alt=""/>
                            <Link className="home_s4_text" to={"#"}>
                                <span>IDEAS</span>
                                <div className="home_s4_content">
                                    <h3>Fabric shoppers</h3>
                                    <ArrowOutwardIcon/>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_6} alt=""/>
                            <Link className="home_s4_text" to={"#"}>
                                <span>IDEAS</span>
                                <div className="home_s4_content">
                                    <h3>Banners & ads</h3>
                                    <ArrowOutwardIcon/>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_7} alt=""/>
                            <Link className="home_s4_text" to={"#"}>
                                <span>IDEAS</span>
                                <div className="home_s4_content">
                                    <h3>Banners & ads</h3>
                                    <ArrowOutwardIcon/>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s4_item">
                            <img src={s4_8} alt=""/>
                            <Link className="home_s4_text" to={"#"}>
                                <span>IDEAS</span>
                                <div className="home_s4_content">
                                    <h3>Banners & ads</h3>
                                    <ArrowOutwardIcon/>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className={"home_s5 cursor_left_right"}>
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
                                <h1>Наши клиенты — наш голос. <br/>
                                    Они уже выбрали качество, теперь говорят о нём.
                                </h1>
                            </div>
                        </SwiperSlide>

                    </Swiper>
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
                                    <img src={s8_1} alt="" ref={tiltRef}/>
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

            <Footer_component/>
            <Footer/>
        </div>
    );
};

export default Home;