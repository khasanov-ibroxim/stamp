import Home from "../page/home/home.jsx";
import About from "@/page/about/about.jsx";
import Contact from "@/page/contact/contact.jsx";
import Production from "@/page/production/production.jsx";

export const HOME = "/"
export const ABOUT = "/about"
export const CONTACT = "/contact"
export const PRODUCTION = "/production"


export const Routers = [
    {
        Path:HOME,
        Component:Home
    },
    {
        Path:ABOUT,
        Component:About
    },
    {
        Path:CONTACT,
        Component:Contact
    },
    {
        Path:PRODUCTION,
        Component:Production
    },
]