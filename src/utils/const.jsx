import Home from "../page/home/home.jsx";
import About from "@/page/about/about.jsx";
import Contact from "@/page/contact/contact.jsx";

export const HOME = "/"
export const ABOUT = "/about"
export const CONTACT = "/contact"


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
]