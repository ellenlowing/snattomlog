import i18n from 'i18next'

export const onClickLanguage = (language: string) => {
  i18n.changeLanguage(language)
  localStorage.setItem('language', language)
}
