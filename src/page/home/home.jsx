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

import home_s2_helper from "@/assets/home/s2/img-18-copyright-730x734.png"
import home_s2_index from "@/assets/home/s2/img-15-copyright.jpg"

import s4_1 from "@/assets/home/s4/portfolio-17-copyright.jpg"
import s4_2 from "@/assets/home/s4/portfolio-18-copyright.jpg"
import s4_3 from "@/assets/home/s4/portfolio-19-copyright.jpg"
import s4_4 from "@/assets/home/s4/portfolio-20-copyright.jpg"
import s4_5 from "@/assets/home/s4/portfolio-21-copyright.jpg"
import s4_6 from "@/assets/home/s4/portfolio-22-copyright.jpg"


import s5_1 from "@/assets/home/s5/testi-10-copyright.jpg"
import s5_2 from "@/assets/home/s5/testi-11-copyright.jpg"
import s5_3 from "@/assets/home/s5/testi-12-copyright.jpg"

import s7_1 from "@/assets/home/s7/img-17-copyright.jpg"
import s7_2 from "@/assets/home/s7/img-19-copyright.jpg"

import s8_1 from "@/assets/home/s8/img-18-copyright.png"

import s9_1 from "@/assets/home/s9/logo_link.png"

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

const Home = ({options={}}) => {
    const gridRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);
    const tiltRef = useRef(null);

    const [playPosition, setPlayPosition] = useState({x: "50%", y: "50%"});
    const handleMouseMove = (e) => {
        const {left, top, width, height} = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPlayPosition({x: `${x}%`, y: `${y}%`});
    };
    const handleMouseLeave = () => {
        setPlayPosition({ x: "50%", y: "50%" }); // Tugmani yana markazga qaytarish
    };
    const itemFAQ = [
        {
            key: 1,
            label: " Printing services ",
            children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.</p>
        },
        {
            key: 2,
            label: " Graphic design ",
            children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.</p>
        },
        {
            key: 3,
            label: " Branding & marketing ",
            children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.</p>
        },
    ];
    const items = [
        {
            id: 1,
            name: "Rennie Blare",
            location: "Pasadena, CA",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat lacus ut.",
            date: "Nov 24, 2023",
            img: s5_1
        },
        {
            id: 2,
            name: "Brian Jones",
            location: "Ferndale, CA",
            content: "Suspendisse non volutpat mauris. Suspendisse a lectus ut ligula luctus porttitor. Nullam odio urna, consectetur non rutrum ac, maximus eu orci. Phasellus facilisis libero vitae iaculis scelerisque.",
            date: "Nov 24, 2023",
            img: s5_2
        },

        {
            id: 3,
            name: "Rennie Blare",
            location: "Pasadena, CA",
            content: "Maecenas pretium eget metus in sodales. Vestibulum cursus viverra viverra. Aenean sed sagittis risus. Class aptent taciti sociosqu.",
            date: "Nov 24, 2023",
            img: s5_3
        },
        {
            id: 4,
            name: "Brian Jones",
            location: "Ferndale, CA",
            content: "Nullam at nulla ipsum. Suspendisse ornare id tortor id gravida. Vestibulum id urna ut ligula tempor commodo. Duis euismod arcu eu erat vehicula tempus. Pellentesque sed mi vel sapien vulputate.",
            date: "Nov 24, 2023",
            img: s5_2
        },

        {
            id: 5,
            name: "Rennie Blare",
            location: "Pasadena, CA",
            content: "Nullam at nulla ipsum. Suspendisse ornare id tortor id gravida. Vestibulum id urna ut ligula tempor commodo. Duis euismod arcu eu erat vehicula tempus. Pellentesque sed mi vel sapien vulputate dignissim.",
            date: "Nov 24, 2023",
            img: s5_1
        },
        {
            id: 6,
            name: "Brian Jones",
            location: "Ferndale, CA",
            content: "Curabitur consectetur, dolor a eleifend posuere, magna enim aliquam nisl, sed laoreet quam ante a augue. Fusce ut dictum lorem, in tempor eros. Maecenas posuere id ligula eu placerat.",
            date: "Nov 24, 2023",
            img: s5_2
        },

        {
            id: 7,
            name: "Rennie Blare",
            location: "Pasadena, CA",
            content: "Mauris varius porta sem, sit amet commodo quam fringilla ut. Nulla cursus arcu in tellus luctus tempus. Sed tincidunt ex sit amet augue iaculis, condimentum vulputate felis fermentum.",
            date: "Nov 24, 2023",
            img: s5_3
        },
        {
            id: 8,
            name: "Brian Jones",
            location: "Ferndale, CA",
            content: "Phasellus risus metus, mattis in tincidunt non, consectetur efficitur lorem. Ut finibus nibh vel sapien feugiat convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            date: "Nov 24, 2023",
            img: s5_2
        },

        {
            id: 9,
            name: "Rennie Blare",
            location: "Pasadena, CA",
            content: "Mauris consectetur mauris vel mattis tristique. Vestibulum semper nulla sed metus interdum, in mollis urna aliquam.",
            date: "Nov 24, 2023",
            img: s5_1
        },
        {
            id: 10,
            name: "Brian Jones",
            location: "Ferndale, CA",
            content: "Nunc fringilla mi vitae quam finibus sollicitudin. Duis cursus felis mi, et pretium neque mattis eu.",
            date: "Nov 24, 2023",
            img: s5_3
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
    return (
        <div className="home">

            <header>
                <div className="header_img"></div>
                <div className="container-sm">
                    <div className="header_box">
                        <div className="header_top_element">
                            <h1 data-aos="fade-up">Your printing</h1>
                        </div>
                        <div className="header_bottom_element">
                            <div className="col-lg-4">
                                <p>
                                    Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut
                                    enim
                                    ad minim veniam. Natus error sit voluptatem accusantium.
                                </p>
                                <div className="header_down">
                                    <img src={down} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-4"><h1 data-aos="fade-up">experts</h1></div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="home_s1">
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className=" home_s1_item_1">
                                <span>Corporate service</span>
                                <h1>How can we help your business?</h1>
                                <p>
                                    Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                    odit aut fugit, sed quia.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <AllInboxIcon/>
                                <p>Posters <br/> and stickers</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <AllInboxIcon/>
                                <p>Banners <br/> and citylight</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <SellIcon/>
                                <p>T-shirts <br/> and apparel</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <SignpostIcon/>
                                <p>Billboards <br/> and signs</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <SignpostIcon/>
                                <p>Flyers <br/> and booklets</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className=" home_s1_item_standart">
                                <SignpostIcon/>
                                <p>Packaging <br/> and cups</p>
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
                                        <img src={home_s2_helper} alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="home_s2_text_content">
                                <span>Individual approach</span>
                                <h1>Let’s make a unique print</h1>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque.</p>
                                <Link to={"#"}>Our Service</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"home_s3"}>
                <div className="home_corusel_wrapper">
                    <div className="home_corusel">
                        <div className="home_corusel_item">Graphic</div>
                        <div className="home_corusel_item">Product</div>
                        <div className="home_corusel_item">Graphic</div>
                        <div className="home_corusel_item">Product</div>
                        <div className="home_corusel_item">Graphic</div>
                        <div className="home_corusel_item">Product</div>
                        <div className="home_corusel_item">Graphic</div>
                        <div className="home_corusel_item">Product</div>
                        <div className="home_corusel_item">Graphic</div>
                        <div className="home_corusel_item">Product</div>
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
                                <h1>Appreciate your professional approach to every situation. It was a pleasure!</h1>
                                <div className="home_s5_item_content">
                                    <div className="home_s5_profile">
                                        <img src={s5_1} alt=""/>
                                    </div>
                                    <div className="home_s5_profile_content">
                                        <h3>April Robinson</h3>
                                        <p>Client</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home_s5_item">
                                <h1>Appreciate your professional approach to every situation. It was a pleasure!</h1>
                                <div className="home_s5_item_content">
                                    <div className="home_s5_profile">
                                        <img src={s5_2} alt=""/>
                                    </div>
                                    <div className="home_s5_profile_content">
                                        <h3>Aprilasdasd Robinson</h3>
                                        <p>Client</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home_s5_item">
                                <h1>Appreciate your professional approach to every situation. It was a pleasure!</h1>
                                <div className="home_s5_item_content">
                                    <div className="home_s5_profile">
                                        <img src={s5_3} alt=""/>
                                    </div>
                                    <div className="home_s5_profile_content">
                                        <h3>Aprilzxcwe Robinson</h3>
                                        <p>Client</p>
                                    </div>
                                </div>
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
                                        <p>{item.location}</p>
                                    </div>
                                </div>
                                <div className="home_s6_item_bottom">
                                    <p>{item.content}</p>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className={"home_s7"} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="container-sm">
                    <div className="home_s7_box " onClick={() => setIsOpen(true)}>
                        <div className="home_s7_play" style={{top: playPosition.y, left: playPosition.x}}>
                            PLAY
                        </div>
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
                                <SwiperSlide><img src={s7_2} alt=""/></SwiperSlide>
                            </Swiper>
                        </div>

                    </div>
                </div>
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
            </section>

            <section className="home_s8">
                <div className="container-sm">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="home_s8_content">
                                <h1>Print for yourself or your business</h1>
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
                                            <span>Orders</span>
                                            <h3>16K+</h3>
                                            <p>Adipiscing elit, do eiusm.</p>
                                        </div>
                                        <div className="home_s8_content_item">
                                            <span>Reviews</span>
                                            <h3>13K+</h3>
                                            <p>Sed do eiusmod tempor.</p>
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
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>

                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>

                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>
                        <div className="home_corusel_item"><img
                            src={"https://printy.themerex.net/wp-content/uploads/2023/11/partner-8-copyright.png"}
                            alt=""/></div>

                    </div>
                </div>
            </section>

            <Footer_component/>
            <Footer/>
        </div>
    );
};

export default Home;