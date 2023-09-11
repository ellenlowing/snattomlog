import aboutImg from '@assets/Left/About.png'
import cultureImg from '@assets/Left/Culture.png'
import solutionsImg from '@assets/Left/Solutions.png'
import sustainabilityImg from '@assets/Left/Sustainability.png'
import technologyImg from '@assets/Left/Technology.png'
import background from '@assets/background.jpg'
import i18n from 'i18next'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import SideMenuContainer from './SideMenuContainer'

// 'about', 'culture', 'solution', 'technology', 'sustainability'
const hoverSectionImageMap: { [key: string]: string } = {
  about: aboutImg,
  culture: cultureImg,
  solution: solutionsImg,
  technology: technologyImg,
  sustainability: sustainabilityImg,
}
const HomeContainer = () => {
  const [hoverSection, setHoverSection] = useState<string>('')
  const [containerOpacity, setContainerOpacity] = useState<number>(0)
  const { t } = useTranslation()
  const [routes, setRoutes] = useState<string[]>([])
  const [isShowPopUp, setIsShowPopUp] = useState<boolean>(false)
  const languages = ['', '', '', 'english', 'french', 'italian', '']
  const navigate = useNavigate()
  useEffect(() => {
    setRoutes([
      'about',
      'culture',
      'solution',
      'technology',
      'sustainability',
      'contact',
      'language',
    ])
  }, [t])
  const onClickRoute = (route: string) => {
    setContainerOpacity(0)
    setTimeout(() => {
      navigate(`/${route.toLowerCase()}`)
    }, 500)
  }

  const onClickLanguage = (language: string) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }
  useEffect(() => {
    setContainerOpacity(1)
  }, [])
  return (
    <div
      className="flex flex-row h-full w-full text-white bg-cover relative overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="fixed right-8 top-16 h-12 aspect-square bg-white hover:cursor-pointer z-20 flex lg:hidden"
        onClick={() => setIsShowPopUp(true)}
      ></div>
      <SideMenuContainer
        isShowPopUp={isShowPopUp}
        setIsShowPopUp={setIsShowPopUp}
        onClickRoute={onClickRoute}
        routes={routes}
        languages={languages}
        onClickLanguage={onClickLanguage}
      ></SideMenuContainer>
      <div
        className="w-full h-full flex flex-row duration-500"
        style={{ opacity: containerOpacity }}
      >
        {hoverSection !== '' ? (
          <div className="absolute w-1/2 h-full flex justify-start items-start overflow-hidden">
            <img
              src={hoverSectionImageMap[hoverSection]}
              alt={hoverSection}
              className="w-full object-cover"
            ></img>
          </div>
        ) : null}
        <div className="flex flex-row h-full w-full py-6">
          <LeftContainer hoverSection={hoverSection}></LeftContainer>
          <div className="bg-white w-[0.1px] h-full hidden lg:flex"></div>
          <RightContainer
            setHoverSection={setHoverSection}
            setContainerOpacity={setContainerOpacity}
            onClickLanguage={onClickLanguage}
            languages={languages}
          ></RightContainer>
        </div>
      </div>
    </div>
  )
}

export default HomeContainer
