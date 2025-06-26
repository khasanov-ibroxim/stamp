import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"



import {BrowserRouter} from "react-router-dom";
import {LanguageProvider} from "@/utils/lang/LangContext.jsx";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <LanguageProvider>
            <App/>
        </LanguageProvider>
    </BrowserRouter>
)
