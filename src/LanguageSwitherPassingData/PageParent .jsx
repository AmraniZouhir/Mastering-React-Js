import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcherChaild";

export default function PageParent() {

    const [CurentLang, setCurentLang] = useState('DR')

    const DisplayMessage = () => {
        switch (CurentLang) {
            case 'DR': return 'salamo 3alaikom'
            case 'ENG': return 'Hello'
            case 'ESP': return 'Hola'
            case 'FRA': return 'Bonjour'
        }
    }

    return <>
        <LanguageSwitcher onLanguageChange={value => setCurentLang(value)} />
        <h1>
            Curent Language : {CurentLang}
        </h1>
        <div class="alert alert-primary" role="alert">
            <strong>{DisplayMessage()}</strong> 
        </div>
        
    </>
}