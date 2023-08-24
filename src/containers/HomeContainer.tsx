import background from '@assets/background.png'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

const HomeContainer = () => {
  return (
    <div
      className="flex flex-row h-full w-ful text-white py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <LeftContainer></LeftContainer>
      <div className="bg-white w-[0.1px] h-full"></div>
      <RightContainer></RightContainer>
    </div>
  )
}

export default HomeContainer
