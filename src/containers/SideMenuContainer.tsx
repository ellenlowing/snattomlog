import cross from '@assets/cross.png'
import menuIcon from '@assets/menuIcon.png'
import { extraRoutes, routes, translateLanguages } from '@utils/Constants'
import { onClickLanguage } from '@utils/function'
import { t } from 'i18next'
import { useState } from 'react'

export type SideMenuContainerProps = {
  onClickRoute: (route: string) => void
}

const SideMenuContainer = (props: SideMenuContainerProps) => {
  const { onClickRoute } = props
  const sideMenuButtons = [...routes, ...extraRoutes]
  const [isFocusLanguage, setIsFocusLanguage] = useState<boolean>(false)
  const languages = [
    ...new Array(6 - translateLanguages.length).fill(''),
    ...translateLanguages,
    '',
  ]

  const [isShowPopUp, setIsShowPopUp] = useState<boolean>(false)
  const onClickLanguageBtn = () => {
    setIsFocusLanguage(!isFocusLanguage)
  }

  return (
    <div>
      <div
        className="fixed right-8 top-16 h-8 aspect-squarhover:cursor-pointer z-20 flex lg:hidden"
        onClick={() => setIsShowPopUp(true)}
      >
        <img src={menuIcon} alt="menuIcon" className="object-cover" />
      </div>
      <div
        className=" fixed h-full bg-black w-3/4 right-0 z-30 flex flex-col lg:hidden justify-around items-center duration-200"
        style={{ transform: `translateX(${isShowPopUp ? '0' : '100%'})` }}
      >
        <div className="h-36 w-full justify-center items-center flex">
          <div
            className="h-12 aspect-square text-center cursor-pointer"
            onClick={() => setIsShowPopUp(false)}
          >
            <img src={cross} alt="cross" className="object-cover" />
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center flex-col capitalize">
          {sideMenuButtons.map((route, i) => (
            <div
              key={i}
              className="hover:cursor-pointer hover:font-bold duration-300 h-[90px]"
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
                key={i}
                className="hover:cursor-pointer hover:font-bold duration-300 h-[90px]"
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
    </div>
  )
}

export default SideMenuContainer
