import i18n from 'i18next'
import { useEffect, useState } from 'react'

export default function useLanguage() {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const language = localStorage.getItem('language')
    if (!language) localStorage.setItem('language', 'en')
    setLanguage(language)
    i18n.changeLanguage(language)
  }, [])

  return language
}
