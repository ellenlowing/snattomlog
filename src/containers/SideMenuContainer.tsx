import { t } from 'i18next'
import { useState } from 'react'

export type SideMenuContainerProps = {
  isShowPopUp: boolean
  setIsShowPopUp: (isShowPopUp: boolean) => void
  onClickRoute: (route: string) => void
  routes: string[]
  languages: string[]
  onClickLanguage: (language: string) => void
}

const SideMenuContainer = (props: SideMenuContainerProps) => {
  const {
    isShowPopUp,
    setIsShowPopUp,
    onClickRoute,
    routes,
    languages,
    onClickLanguage,
  } = props
  const [isFocusLanguage, setIsFocusLanguage] = useState<boolean>(false)

  const onClickLanguageBtn = () => {
    setIsFocusLanguage(!isFocusLanguage)
  }

  return (
    <div
      className="absolute h-full bg-black w-3/4 right-0 z-30 flex flex-col lg:hidden justify-around items-center duration-200"
      style={{ transform: `translateX(${isShowPopUp ? '0' : '100%'})` }}
    >
      <div className="h-36 w-full justify-center items-center flex">
        <div
          className="h-12 aspect-square text-center cursor-pointer bg-white"
          onClick={() => setIsShowPopUp(false)}
        ></div>
      </div>
      <div className="flex-1 flex justify-end items-center flex-col capitalize">
        {routes.map((route, i) => (
          <div
            className="hover:cursor-pointer hover:font-bold duration-500 h-[90px]"
            style={{
              opacity: route !== 'language' && isFocusLanguage ? 0 : 1,
              pointerEvents:
                route !== 'language' && isFocusLanguage ? 'none' : 'auto',
            }}
            onClick={() => {
              if (route === 'contact') {
              } else if (route === 'language') {
                onClickLanguageBtn()
              } else {
                setIsShowPopUp(false)
                onClickRoute(route)
              }
            }}
          >
            {t(route)}
          </div>
        ))}
        <div className="flex-1 flex justify-end items-center flex-col capitalize absolute pointer-events-none">
          {languages.map((language, i) => (
            <div
              className="hover:cursor-pointer hover:font-bold duration-500 h-[90px]"
              style={{
                opacity: isFocusLanguage ? 1 : 0,
                pointerEvents:
                  language !== '' && isFocusLanguage ? 'auto' : 'none',
              }}
              onClick={() => {
                onClickLanguage(language)
              }}
            >
              {language}
            </div>
          ))}
        </div>
      </div>
      <div className="h-28 italic w-full flex justify-center items-center">
        <div>Download Our Fact Sheet</div>
      </div>
    </div>
  )
}

export default SideMenuContainer
