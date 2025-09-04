import React, {useState} from 'react';
import "./product.css"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import header_1 from "@/assets/product/DSC06513.jpg";
import header_2 from "@/assets/product/abu.photographer-82.jpg";
import header_3 from "@/assets/product/abu.photographer-101.jpg";
import GetAppIcon from '@mui/icons-material/GetApp';

import i1 from "@/assets/product/1.jpg"
import i2 from "@/assets/product/2.jpg"
import i3 from "@/assets/product/3.jpg"
import i4 from "@/assets/product/4.jpg"
import i5 from "@/assets/product/5.jpg"
import i6 from "@/assets/product/6.jpg"
import i7 from "@/assets/product/7.jpg"
import i8 from "@/assets/product/8.jpg"
import i9 from "@/assets/product/9.jpg"
import i10 from "@/assets/product/10.jpg"
import i11 from "@/assets/product/11.jpg"
import i12 from "@/assets/product/12.jpg"


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
                'Ne 30/1',
                `140-150гр/м²`,
                `100% хлопок`
            ]
        },
        {
            id: 2,
            img: i2,
            title: "Интерлок",
            list: [
                'Ne 30/1',
                `170-180гр/м²`,
                `100% хлопок`
            ]
        },
        {
            id: 3,
            img: i3,
            title: "Пике",
            list: [
                'Ne 30/1',
                `180-190гр/м²`,
                `100% хлопок`
            ]
        },
        {
            id: 4,
            img: i4,
            title: "Футер",
            list: [
                'Ne 30/1',
                `180-190гр/м²`,
                `100% хлопок`
            ]
        },
        {
            id: 5,
            img: i5,
            title: "Кулирка",
            list: [
                'Ne 40/1',
                `150-160гр/м²`,
                `92% хлопок`,
                `8% эластан`
            ]
        },
        {
            id: 6,
            img: i6,
            title: "Пике",
            list: [
                'Ne 30/1',
                `210гр/м²`,
                `92% хлопок`,
                `8% эластан`,
            ]
        },
        {
            id: 7,
            img: i7,
            title: "Рибана",
            list: [
                'Ne 30/1',
                `210-220гр/м²`,
                `95% хлопок`,
                `5% эластан`,
                `Гребенная`,
            ]
        },
        {
            id: 8,
            img: i8,
            title: "Футер",
            list: [
                'Ne 30/20',
                `240-260гр/м²`,
                `95% хлопок`,
                `5% эластан`,
            ]
        },
        {
            id: 9,
            img: i9,
            title: "Футер",
            list: [
                'Ne 30/100',
                `210-220 гр/м²`,
                `78% полиэстр`,
                `14% эластан`,
                `8% двойное крашение`,
            ]
        },
        {
            id: 10,
            img: i10,
            title: "Интерлок",
            list: [
                'Ne 36/1',
                `170гр/м²`,
                `100% хлопок`
            ]
        },
        {
            id: 11,
            img: i11,
            title: "Рибана",
            list: [
                'Ne 30/1',
                `210-220гр/м²`,
                `95% хлопок`,
                `5% эластан`,
                `Кардная`,
            ]
        },
        {
            id: 12,
            img: i12,
            title: "Футер",
            list: [
                'Ne 30/150',
                `210-230гр/м²`,
                `78% полиэстр`,
                `14% эластан`,
                `8% двойное крашение`,
            ]
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
                        {productArray.map((item, index) => (
                            <div className="product_item">
                                <img src={item.img} className={"product_img"} alt=""/>
                                <div className="product_opacity"></div>
                                <div className="product_content">
                                    {clickedId === "sdfsdf"}
                                    <div className="product_menu"
                                         style={clickedId === item.id ? {top: "4%"} : {top: "70%"}}>
                                        <h1>{item.title}</h1>
                                        <ul style={clickedId === item.id ? {display: "flex"} : {display: "none"}}>
                                            <li>Пряжа: {item.list[0]}</li>
                                            <li>Плотность: {item.list[1]}</li>
                                            <li>Состав: {item.list[2]}</li>
                                            {item.list[3] && <li>{item.list[3]}</li>}
                                            {item.list[4] && <li>{item.list[4]}</li>}
                                        </ul>
                                    </div>
                                    <button
                                        onClick={() => handleClick(item.id)}>
                                        подробно
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="download_btn">
                        <a href="@/assets/product/ассортимент_материалов_производства_Stampa_textile.xlsx" download>
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