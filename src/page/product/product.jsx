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
import {useLanguage} from "@/utils/lang/LangContext.jsx";


const Product = () => {
    const {t} = useTranslation();
    const {handleLanguageChange, selectedLanguage} = useLanguage();

    const [clickedId, setClickedId] = useState(null);
    const handleClick = (id) => {
        setClickedId(clickedId === id ? null : id); // agar shu item bosilsa yopiladi
    }
    const productArray = [
        {
            id: 1,
            img: i1,
            title: t("product.i1.t"),
            list: [
                t("product.i1.c1")
            ]
        },
        {
            id: 2,
            img: i3,
            title: t("product.i2.t"),
            list: [
                t("product.i2.c1")
            ]
        },
        {
            id: 3,
            img: i2,
            title: t("product.i3.t"),
            list: [
                t("product.i3.c1")
            ]
        },
        {
            id: 4,
            img: i7,
            title: t("product.i4.t"),
            list: [
                t("product.i4.c1")
            ]
        },

        {
            id: 5,
            img: kosh,
            title: t("product.i5.t"),
            list: [
                t("product.i5.c1")
            ]
        },

        {
            id: 6,
            img: i4,
            title: t("product.i6.t"),
            list: [
                t("product.i6.c1"),
                t("product.i6.c2"),
                t("product.i6.c3")
            ]
        },
        {
            id: 7,
            img: i12,
            title: t("product.i7.t"),
            list: [t("product.i7.c1") , t("product.i7.c2"), t("product.i7.c3")]
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
                <h1>{t("product.header_title")}</h1>
            </div>

            <section className={"product_s1"}>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-6">
                            <span>Stampa Textile</span>
                            <h1>{t("product.s1.h1")}</h1>
                        </div>
                        <div className="col-lg-5">
                            <p>{t("product.s1.p")}</p>
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
                                        {t("product.composition")}
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
                                        {t("product.composition")}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="download_btn">
                        <a
                            href={selectedLanguage.code === "ru"
                                ? "/ассортимент_материалов_производства_Stampa_textile.xlsx"
                                : "/Catalog.xlsx"}  download>
                            {t("product.download")} <GetAppIcon/>
                        </a>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default Product;