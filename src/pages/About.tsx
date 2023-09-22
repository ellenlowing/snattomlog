import background from '@assets/background.jpg'
import DotSeparatedTexts from '@components/DotSeparatedTexts'
import CommitmentContainer from '@containers/CommitmentContainer'
import SideMenuContainer from '@containers/SideMenuContainer'
import useIsMobile from '@hooks/useIsMobile'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const texts: string[] = ['Contact', 'Download Fact Sheet']
  const [isEnlargeImage, setIsEnlargeImage] = useState(false)
  const [containerOpacity, setContainerOpacity] = useState<number>(0)
  const [activeRoute, setActiveRoute] = useState<string>('')
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  useEffect(() => {
    setContainerOpacity(1)
  }, [])

  const onClickRoute = (route: string) => {
    if (isEnlargeImage) {
      setIsEnlargeImage(false)
      return
    }
    if (route.toLowerCase() === 'home') {
      setContainerOpacity(0)
      setTimeout(() => {
        navigate(`/`)
      }, 500)
      return
    }
    navigate(`/${route.toLowerCase()}`)
    setActiveRoute(route)
  }
  return (
    <div
      className="w-full h-full bg-fixed text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: '1920px 1200px',
      }}
    >
      <SideMenuContainer onClickRoute={onClickRoute}></SideMenuContainer>
      <div
        className="w-full h-full duration-300"
        style={{ opacity: containerOpacity }}
      >
        <CommitmentContainer
          isEnlargeImage={isEnlargeImage}
          setIsEnlargeImage={setIsEnlargeImage}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
          onClickRoute={onClickRoute}
        />
        <div
          className="w-full h-[40px] bg-[rgba(0,0,0,0.5)]"
          onClick={() => setIsEnlargeImage(false)}
        ></div>
        <div
          className="w-full h-[50px] bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-black"
          onClick={() => setIsEnlargeImage(false)}
        ></div>
        <div
          className="w-full flex flex-col justify-between items-center px-[15%] pb-[40px] bg-black"
          onClick={() => setIsEnlargeImage(false)}
        >
          <div className="text-sm lg:text-lg text-white h-[100px] mb-12 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </div>
          {!isMobile && (
            <DotSeparatedTexts
              marginX={24}
              color={'white'}
              hoverCursor="pointer"
              popUpTexts={{}}
              texts={texts}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default About