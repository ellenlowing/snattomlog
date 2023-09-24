import cross from '@assets/cross.png'
import menuIcon from '@assets/menuIcon.png'
import useWindowDimensions from '@hooks/useWindowDimension'
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
  const window = useWindowDimensions()

  const [isShowPopUp, setIsShowPopUp] = useState<boolean>(false)
  const onClickLanguageBtn = () => {
    setIsFocusLanguage(!isFocusLanguage)
  }

  return (
    <div>
      <div
        className="fixed right-8 top-16 h-[25px] hover:cursor-pointer z-20 flex lg:hidden"
        onClick={() => setIsShowPopUp(true)}
      >
        <img src={menuIcon} alt="menuIcon" className="object-fit" />
      </div>
      <div
        className=" fixed bg-black w-3/4 top-0 right-0 z-30 flex flex-col lg:hidden justify-around items-center duration-200"
        style={{
          transform: `translateX(${isShowPopUp ? '0' : '100%'})`,
          height: `${window.height}px`,
        }}
      >
        <div className="h-36 w-full justify-center items-center flex ">
          <div
            className="h-[40px] text-center cursor-pointer"
            onClick={() => setIsShowPopUp(false)}
          >
            <img src={cross} alt="cross" className="h-full object-fit" />
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center flex-col capitalize relative">
          {sideMenuButtons.map((sideMenuButton, i) => (
            <div
              key={i}
              className="hover:cursor-pointer hover:font-bold duration-300 flex-1 flex items-center"
              style={{
                opacity:
                  sideMenuButton !== 'language' && isFocusLanguage ? 0 : 1,
                pointerEvents:
                  sideMenuButton !== 'language' && isFocusLanguage
                    ? 'none'
                    : 'auto',
              }}
              onClick={() => {
                if (sideMenuButton === 'contact') {
                } else if (sideMenuButton === 'language') {
                  onClickLanguageBtn()
                } else {
                  setIsShowPopUp(false)
                  onClickRoute(sideMenuButton)
                }
              }}
            >
              {t(sideMenuButton)}
            </div>
          ))}
          <div className="flex-1 flex justify-end items-center flex-col capitalize absolute top-0 h-full overflow-visible w-0">
            {languages.map((language, i) => (
              <div
                key={i}
                className="hover:cursor-pointer hover:font-bold duration-300 flex-1 flex items-center"
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
            <div className="flex-[2]"></div>
          </div>
          <div className="flex-[2] italic w-full flex justify-center items-center ">
            <div>Download Our Fact Sheet</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMenuContainer
