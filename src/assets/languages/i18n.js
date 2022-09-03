import i18next from "i18next";
import aze from "./az.json"
import eng from "./eng.json"
import fr from "./fr.json"
import {initReactI18next} from "react-i18next";

i18next
    .use(initReactI18next)
    .init({
    lng:"en",
    resources:{
        en:eng,
        az:aze,
        fr:fr
    },
    react:{
        useSuspense:false
    }
})

export default i18next
