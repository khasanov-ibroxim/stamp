import React, {useState} from 'react';
import "./product.css"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import header_1 from "@/assets/product/DSC06513.jpg";
import header_2 from "@/assets/product/abu.photographer-82.jpg";
import header_3 from "@/assets/product/abu.photographer-101.jpg";
import GetAppIcon from '@mui/icons-material/GetApp';

// import excelFile from "../../../public/ассортимент_материалов_производства_Stampa_textile.xlsx";

import i1 from "@/assets/product/1.jpg"
import i2 from "@/assets/product/2.jpg"
import i3 from "@/assets/product/3.jpg"
import i4 from "@/assets/product/4.jpg"
import i7 from "@/assets/product/7.jpg"
import i12 from "@/assets/product/12.jpg"
import kosh from "@/assets/product/bf85a06cfe7f4be157a58e367240a7e3.jpg"

import {useTranslation} from "react-i18next";
import Footer from "@/component/footer/footer.jsx";


const Product = () => {
    const {t} = useTranslation();
    const [clickedId, setClickedId] = useState(null);
    const handleClick = (id) => {
        setClickedId(clickedId === id ? null : id); // agar shu item bosilsa yopiladi
    }
    const productArray = [
        {
            id: 1,
            img: i1,
            title: "Кулирка",
            list: [
                "Состав: 100% х/б 92/8"
            ]
        },
        {
            id: 2,
            img: i3,
            title: "Пике",
            list: [
                "Состав: 100% хб, 95/5"
            ]
        },
        {
            id: 3,
            img: i2,
            title: "Интерлок",
            list: [
                'Состав:  100% хб'
            ]
        },
        {
            id: 4,
            img: i7,
            title: "Рибана",
            list: [
                'Состав: 100% хб, 95/5'
            ]
        },

        {
            id: 5,
            img: kosh,
            title: "Кашкорсе",
            list: [
                'Состав: 100%хб, 95/5'
            ]
        },

        {
            id: 6,
            img: i4,
            title: "Футер 2-х нитка",
            list: [
                'петля/диагональ/с начёсом',
                'Состав: 100% хб, 95/5, ',
                '72 хб/ 23 пэ/5 эластан'
            ]
        },
        {
            id: 7,
            img: i12,
            title: "Футер 3-х нитка",
            list: ["Петля/диагональ/с начёсом " , "Состав: 100%хб, 80хб/20пэ,", " 65хб/35пэ, 90хб/10пэ"]
        },
    ]
    return (
        <div>
            <div className={`about_header`}>
                <div className="about_header_opacity"></div>
                <Swiper modules={[Autoplay]} autoplay={{delay: 3000}} className={"about_swiper"}>
                    <SwiperSlide>
                        <img src={header_1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={header_2} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={header_3} alt=""/>
                    </SwiperSlide>
                </Swiper>
                <h1>Продукция</h1>
            </div>

            <section className={"product_s1"}>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <span>Stampa Textile</span>
                            <h1>Качество, которое ощущается</h1>
                        </div>
                        <div className="col-lg-5">
                            <p>Мы предлагаем премиальное трикотажное полотно всех цветов и фактур для ваших коллекций и
                                идей.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"product_s2"}>
                <div className="container-sm">
                    <div className="product_box">
                        {productArray.slice(0,4).map((item, index) => (
                            <div className="product_item">
                                <img src={item.img} className={"product_img"} alt=""/>
                                <div className="product_opacity"></div>
                                <div className="product_content">
                                    {clickedId === "sdfsdf"}
                                    <div className="product_menu"
                                         style={clickedId === item.id ? {top: "4%"} : {top: "70%"}}>
                                        <h1>{item.title}</h1>
                                        <ul style={clickedId === item.id ? {display: "flex"} : {display: "none"}}>
                                            {item.list.map((i,indexList)=>(
                                                <li key={indexList}>
                                                    {i}
                                                </li>
                                            ))}
                                            {item.list[3] && <li>{item.list[3]}</li>}
                                            {item.list[4] && <li>{item.list[4]}</li>}
                                        </ul>
                                    </div>
                                    <button
                                        onClick={() => handleClick(item.id)}>
                                        Состав
                                    </button>
                                </div>
                            </div>
                        ))}
                        {productArray.slice(4,7).map((item, index) => (
                            <div className="product_item">
                                <img src={item.img} className={"product_img"} alt=""/>
                                <div className="product_opacity"></div>
                                <div className="product_content">
                                    {clickedId === "sdfsdf"}
                                    <div className="product_menu"
                                         style={clickedId === item.id ? {top: "4%"} : {top: "70%"}}>
                                        <h1>{item.title}</h1>
                                        <ul style={clickedId === item.id ? {display: "flex"} : {display: "none"}}>
                                            {item.list.map((i,indexList)=>(
                                                <li key={indexList}>
                                                    {i}
                                                </li>
                                            ))}
                                            {item.list[3] && <li>{item.list[3]}</li>}
                                            {item.list[4] && <li>{item.list[4]}</li>}
                                        </ul>
                                    </div>
                                    <button
                                        onClick={() => handleClick(item.id)}>
                                        Состав
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="download_btn">
                        <a href={"/ассортимент_материалов_производства_Stampa_textile.xlsx"} download>
                            Скачать каталог <GetAppIcon/>
                        </a>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default Product;