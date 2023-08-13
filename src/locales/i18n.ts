import ptBrJson from "./pt-br.json"
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    ptBr: {translation: ptBrJson}
  },
  lng: 'ptBr',
  interpolation: {
    escapeValue: false
  }
})
