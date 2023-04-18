import en from './trans/en.json'
import ro from './trans/ro.json'

import {initReactI18next} from "react-i18next";
import i18n from 'i18next'

const resources = {
    en : {
        translation: en,
    },
    ro : {
        translation: ro,
    }
}

i18n
    .use(initReactI18next)
    .init({
    resources,
    lng:JSON.parse(localStorage.getItem('language')),
    fallbackLng: 'ro'
})

export default i18n