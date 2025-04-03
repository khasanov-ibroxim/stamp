import React, {useEffect} from 'react';
import CursorTrail from "./component/cursor/CursorTrail.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import {Route, Routes} from "react-router-dom";
import Navbar from "./component/navbar/navbar.jsx";
import {Routers} from "@/utils/const.jsx";

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // AOS ni ishga tushirish va davomiyligini sozlash
    }, []);
    return (
        <>
            <CursorTrail/>

            <Routes>
                {Routers.map(({ Path, Component }, index) => (
                    <Route key={index} path={Path} element={
                        <>
                            <Navbar />
                            <Component />
                            {/*<Footer />*/}
                        </>
                    } />
                ))}
            </Routes>
        </>
    );
}

export default App;