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


import s3_1 from "@/assets/about/s3/s3_1.png"

import s5_1 from "@/assets/about/s5/s5_1.jpg"
import s5_2 from "@/assets/about/s5/s5_2.jpg"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import s5_3 from "@/assets/home/s5/testi-12-copyright.jpg";

import s6_1 from "@/assets/home/s5/testi-10-copyright.jpg"
import s6_2 from "@/assets/home/s5/testi-11-copyright.jpg"
import s6_3 from "@/assets/home/s5/testi-12-copyright.jpg"
import {Collapse} from "antd";
import {CloseOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";
import s8_1 from "@/assets/home/s8/img-18-copyright.png";


const About = ({options = {}}) => {
    const tiltRef = useRef(null);
    const [activeKey, setActiveKey] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

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
        <div>
            <div className="about_header">
                <h1>About Us</h1>
            </div>

            <section className="about_s1">
                <div className="container-sm">
                    <div className="row  ">
                        <div className="col-lg-6">
                            <span>Top services</span>
                            <h2>Crafting prints for your business</h2>
                        </div>
                        <div className="col-lg-6 align-items-end justify-content-end d-flex flex-column">
                            <p>Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <p>Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam.</p>
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
                                        <h2>Branded <br/> packages </h2>
                                    </div>
                                    <div className="about_s2_item_bottom">
                                        <div className="about_s2_item_bottom_text">
                                            Read More
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
                                        <h2>Branded <br/> packages </h2>
                                    </div>
                                    <div className="about_s2_item_bottom">
                                        <div className="about_s2_item_bottom_text">
                                            Read More
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
                                        <h2>Branded <br/> packages </h2>
                                    </div>
                                    <div className="about_s2_item_bottom">
                                        <div className="about_s2_item_bottom_text">
                                            Read More
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
                                        <h2>Branded <br/> packages </h2>
                                    </div>
                                    <div className="about_s2_item_bottom">
                                        <div className="about_s2_item_bottom_text">
                                            Read More
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
                                    <span>Creative approach</span>
                                    <h1>Your ideas, our arsenal: we will bring them
                                        to life in the best quality</h1>
                                </div>
                                <div className="about_s3_content_bottom">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste
                                        natus. Sed ut perspiciatis unde.
                                    </p>
                                    <Link to={"#"}>Lets Talk!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_s4">
                <div className="about_s4_corusel_wrapper">
                    <div className="about_s4_corusel">
                        <div className="about_s4_corusel_track">
                            <span>Package Printing & Design </span>
                            <span>Package Printing & Design </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_s5">
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about_s5_left_top">
                                <span>What we do</span>
                                <h1>Elevate your brand with stunning packaging</h1>
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
                                    <p>
                                        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.
                                    </p>
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
                                    <h1>Appreciate your professional approach to every situation. It was a
                                        pleasure!</h1>
                                    <div className="home_s5_item_content">

                                        <div className="home_s5_profile_content">
                                            <h3>April Robinson</h3>
                                            <p>Client</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="home_s5_item">
                                    <span className={"about_s6_element"}>&#10075;&#10075;</span>
                                    <h1>Appreciate your professional approach to every situation. It was a
                                        pleasure!</h1>
                                    <div className="home_s5_item_content">
                                        <div className="home_s5_profile_content">
                                            <h3>April Robinson</h3>
                                            <p>Client</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="home_s5_item">
                                    <span className={"about_s6_element"}>&#10075;&#10075;</span>
                                    <h1>Appreciate your professional approach to every situation. It was a
                                        pleasure!</h1>
                                    <div className="home_s5_item_content">
                                        <div className="home_s5_profile_content">
                                            <h3>April Robinson</h3>
                                            <p>Client</p>
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
                                <button onClick={()=>setIsOpen(true)}><PlayArrowRoundedIcon/></button>
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
                                    <img src={s8_1} alt=""/>
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