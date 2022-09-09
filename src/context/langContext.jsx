import React, { useState } from 'react';
import MensajesIngles from '../lang/en.json';
import MensajesEspañol from '../lang/es.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    // let localePorDefecto;
    // let mensajesPorDefecto;

    const [mensajes, establecerMensajes] = useState(MensajesEspañol);
    const [locale, establecerLocale] = useState("es");

    const establecerLenguaje = (lenguaje) => {
        console.log(lenguaje);
        switch (lenguaje) {
            case 'es':
                establecerMensajes(MensajesEspañol);
                establecerLocale('es');
                // localStorage.setItem('lang', 'es');
                break;
            case 'en':
                establecerMensajes(MensajesIngles);
                establecerLocale('en');
                // localStorage.setItem('lang', 'en');
                break;
            default:
                establecerMensajes(MensajesIngles);
                establecerLocale('en');
                // localStorage.setItem('lang', 'en');
        }
    }

    return (
        <langContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
            <IntlProvider locale={locale} messages={mensajes}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { LangProvider, langContext };