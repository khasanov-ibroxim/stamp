import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {home_translate} from "@/utils/lang/translates/home_translate.jsx";
import {about_translate} from "@/utils/lang/translates/about_translate.jsx";
import {contact_translate} from "@/utils/lang/translates/contact_translate.jsx";
import {production_translate} from "@/utils/lang/translates/production_translate.jsx";
import {product_translate} from "@/utils/lang/translates/product_translate.jsx";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            ru: {
                translation: {
                    home: home_translate.ru,
                    about: about_translate.ru,
                    production: production_translate.ru,
                    product: product_translate.ru,
                    contact: contact_translate.ru,
                    navbar: {
                        home: "Главная",
                        production: "производство",
                        product:"Продукция",
                        about: "О нас",
                        contact: "Контакты",
                        btn:"Свяжитесь"
                    },

                    footer_component:{
                        span:"Контакты",
                        h3:`Готовы к сотрудничеству? <br/> Обсудим ваш проект!`,
                        name:"Имя",
                        tell:"Телефон",
                        msg:"Сообщение",
                        send:"Отправить"
                    },

                    footer:{
                        i1:{
                            t:"Часы работы",
                            l1:"Пн-Сб с 09:00 до 19:00",
                            l2:"Воскресенье выходной"
                        },
                        i2:{
                            t:"Локация",
                            l1:"Республика Узбекистан,",
                            l2:"город Ташкент, Бектемирский р-н,",
                            l3:"улица Туена 12"
                        },
                        i3:{
                            t:"Меню",
                            l1:"Главная",
                            l2:"О нас",
                            l3:"Производство",
                            l4:"Контакты",
                        },
                        i4:"Связаться с нами"
                    },
                    errors: {
                        success: "A message has been sent, we will contact you shortly",
                        name_empty: "Your name cannot be empty",
                        name_error: "You typed your name incorrectly",
                        tell_error: "Your phone number is incorrect",
                        server_error: "A system error has occurred"
                    }
                }
            },
            en: {
                translation: {
                    home: home_translate.en,
                    about: about_translate.en,
                    production: production_translate.en,
                    product: product_translate.en,
                    contact: contact_translate.en,
                    navbar: {
                        home: "Home",
                        production: "Production",
                        product:"Product",
                        about: "About us",
                        contact: "Contact us",
                        btn:"Get in Touch"
                    },

                    footer_component:{
                        span:"Contacts",
                        h3:`Ready to collaborate? <br/> Let’s discuss your project!`,
                        name:"Name",
                        tell:"Phone",
                        msg:"Message",
                        send:"Send"
                    },
                    footer:{
                        i1:{
                            t:"Working Hours",
                            l1:"Mon–Sat: 09:00 – 19:00",
                            l2:"Sunday: Closed"
                        },
                        i2:{
                            t:"Location",
                            l1:"Republic of Uzbekistan,",
                            l2:"Tashkent city, Bektemir district,",
                            l3:"12 Tuyena Street"
                        },
                        i3:{
                            t:"Menu",
                            l1:"Home",
                            l2:"About Us",
                            l3:"Production",
                            l4:"Contacts",
                        },
                        i4:"Contact Us"
                    },
                    errors: {
                        success: "A message has been sent, we will contact you shortly",
                        name_empty: "Your name cannot be empty",
                        name_error: "You typed your name incorrectly",
                        tell_error: "Your phone number is incorrect",
                        server_error: "A system error has occurred"
                    }
                }
            },
        },
    });

export default i18n;
