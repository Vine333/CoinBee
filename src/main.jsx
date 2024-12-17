import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {useLanguage} from "./hooks/useTranslate.jsx";


createRoot(document.getElementById('root')).render(

<useLanguage>
    <App/>
</useLanguage>

)
