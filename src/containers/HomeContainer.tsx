import aboutImg from '@assets/Left/About.png'
import cultureImg from '@assets/Left/Culture.png'
import solutionsImg from '@assets/Left/Solutions.png'
import sustainabilityImg from '@assets/Left/Sustainability.png'
import technologyImg from '@assets/Left/Technology.png'
import background from '@assets/background.png'
import { useState } from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

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
  return (
    <div
      className="flex flex-row h-full w-full text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {hoverSection !== '' ? (
        <div className="absolute w-1/2 h-full flex justify-start items-start overflow-hidden">
          <img
            src={hoverSectionImageMap[hoverSection]}
            alt={hoverSection}
            className="w-full object-cover"
          ></img>
          {/* <LogoComponent></LogoComponent> */}
        </div>
      ) : null}
      <div className="flex flex-row h-full w-full py-6">
        <LeftContainer hoverSection={hoverSection}></LeftContainer>
        <div className="bg-white w-[0.1px] h-full"></div>
        <RightContainer setHoverSection={setHoverSection}></RightContainer>
      </div>
    </div>
  )
}

export default HomeContainer
