import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {LanguageProvider} from "./components/CustomHook/LanguageContext";


createRoot(document.getElementById('root')).render(

<LanguageProvider>
    <App/>
</LanguageProvider>

)
