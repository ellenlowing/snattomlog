import i18n from 'i18next'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

import { initReactI18next } from 'react-i18next'

import enTranslation from './locales/en.json'
import frTranslation from './locales/fr.json'
import itTranslation from './locales/it.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
    it: {
      translation: itTranslation,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
reportWebVitals()
