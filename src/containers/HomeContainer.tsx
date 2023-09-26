import aboutImg from '@assets/Left/About.png'
import cultureImg from '@assets/Left/Culture.png'
import solutionsImg from '@assets/Left/Solutions.png'
import sustainabilityImg from '@assets/Left/Sustainability.png'
import technologyImg from '@assets/Left/Technology.png'
import background from '@assets/background.jpg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import SideMenuContainer from './SideMenuContainer'
import useBackgroundSize from '@hooks/useBackgroundSize'

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
  const navigate = useNavigate()
  const backgroundSize = useBackgroundSize()

  const onClickRoute = (route: string) => {
    setContainerOpacity(0)
    setTimeout(() => {
      navigate(`/${route.toLowerCase()}`)
    }, 300)
  }

  useEffect(() => {
    setContainerOpacity(1)
  }, [])
  return (
    <div
      className="h-full w-full bg-fixed flex flex-row text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: backgroundSize,
      }}
    >
      <SideMenuContainer onClickRoute={onClickRoute}></SideMenuContainer>
      <div
        className="w-full h-full flex flex-row duration-300"
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
        <div className="flex flex-row h-full w-full py-6 overflow-hidden">
          <LeftContainer hoverSection={hoverSection}></LeftContainer>
          <div className="bg-white w-[0.1px] h-full hidden lg:flex"></div>
          <RightContainer
            setHoverSection={setHoverSection}
            setContainerOpacity={setContainerOpacity}
          ></RightContainer>
        </div>
      </div>
    </div>
  )
}

export default HomeContainer
