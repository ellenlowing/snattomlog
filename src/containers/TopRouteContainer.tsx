import background from '@assets/background.jpg'
import logo from '@assets/logo.png'
import TopRouteComponent from '@components/TopRouteComponent'
import useIsMobile from '@hooks/useIsMobile'
import useLanguage from '@hooks/useLanguage'
import useWindowDimensions from '@hooks/useWindowDimension'
import { routes } from '@utils/Constants'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export type TopRouteContainerProps = {
  isEnlargeImage: boolean
  setIsEnlargeImage: (isEnlargeImage: boolean) => void
  activeRoute: string
  setActiveRoute: (activeRoute: string) => void
  onClickRoute: (route: string) => void
}

const TopRouteContainer = (props: TopRouteContainerProps) => {
  const {
    isEnlargeImage,
    setIsEnlargeImage,
    activeRoute,
    setActiveRoute,
    onClickRoute,
  } = props
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const aboutRef = useRef<HTMLDivElement>(null)
  const cultureRef = useRef<HTMLDivElement>(null)
  const solutionRef = useRef<HTMLDivElement>(null)
  const technologyRef = useRef<HTMLDivElement>(null)
  const sustainabilityRef = useRef<HTMLDivElement>(null)

  const windowDim = useWindowDimensions()
  useLanguage()
  useEffect(() => {
    const route = window.location.href.split('/').pop().split('?')[0]
    setActiveRoute(route)
  }, [setActiveRoute])
  const topRoutes = ['home', ...routes]

  //drag
  const [isDragging, setIsDragging] = useState(false)
  const [startDragX, setStartDragX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [endDeltaX, setEndDeltaX] = useState(0)
  const [aboutStartAboutDeltaX, setAboutStartDeltaX] = useState(0)
  const [cultureStartAboutDeltaX, setCultureStartDeltaX] = useState(0)
  const [solutionStartAboutDeltaX, setSolutionStartDeltaX] = useState(0)
  const [technologyStartAboutDeltaX, setTechnologyStartDeltaX] = useState(0)
  const [sustainabilityStartAboutDeltaX, setSustainabilityStartDeltaX] =
    useState(0)
  useEffect(() => {
    setAboutStartDeltaX(aboutRef.current?.offsetLeft || 0)
  }, [aboutRef])
  useEffect(() => {
    setCultureStartDeltaX(cultureRef.current?.offsetLeft || 0)
  }, [cultureRef])
  useEffect(() => {
    setSolutionStartDeltaX(solutionRef.current?.offsetLeft || 0)
  }, [solutionRef])
  useEffect(() => {
    setTechnologyStartDeltaX(technologyRef.current?.offsetLeft || 0)
  }, [technologyRef])
  useEffect(() => {
    setSustainabilityStartDeltaX(sustainabilityRef.current?.offsetLeft || 0)
  }, [sustainabilityRef])

  useEffect(() => {
    const centerX = windowDim.width / 2
    if (activeRoute === 'about') {
      setEndDeltaX(
        centerX - aboutStartAboutDeltaX - aboutRef.current?.offsetWidth / 2,
      )
    } else if (activeRoute === 'culture') {
      setEndDeltaX(
        centerX - cultureStartAboutDeltaX - cultureRef.current?.offsetWidth / 2,
      )
    } else if (activeRoute === 'solution') {
      setEndDeltaX(
        centerX -
          solutionStartAboutDeltaX -
          solutionRef.current?.offsetWidth / 2,
      )
    } else if (activeRoute === 'technology') {
      setEndDeltaX(
        centerX -
          technologyStartAboutDeltaX -
          technologyRef.current?.offsetWidth / 2,
      )
    } else if (activeRoute === 'sustainability') {
      setEndDeltaX(
        centerX -
          sustainabilityStartAboutDeltaX -
          sustainabilityRef.current?.offsetWidth / 2,
      )
    }
  }, [activeRoute, windowDim.width])

  useEffect(() => {
    if (isDragging) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      const centerX = windowDim.width / 2
      const aboutDist =
        endDeltaX +
        aboutStartAboutDeltaX -
        centerX +
        aboutRef.current?.offsetWidth / 2
      const cultureDist =
        endDeltaX +
        cultureStartAboutDeltaX -
        centerX +
        cultureRef.current?.offsetWidth / 2
      const solutionDist =
        endDeltaX +
        solutionStartAboutDeltaX -
        centerX +
        solutionRef.current?.offsetWidth / 2
      const technologyDist =
        endDeltaX +
        technologyStartAboutDeltaX -
        centerX +
        technologyRef.current?.offsetWidth / 2
      const sustainabilityDist =
        endDeltaX +
        sustainabilityStartAboutDeltaX -
        centerX +
        sustainabilityRef.current?.offsetWidth / 2

      let closetDist = aboutDist
      let closetRoute = 'about'
      let endDeltaXMinusValue =
        aboutStartAboutDeltaX + aboutRef.current?.offsetWidth / 2
      if (Math.abs(cultureDist) < Math.abs(closetDist)) {
        closetDist = cultureDist
        closetRoute = 'culture'
        endDeltaXMinusValue =
          cultureStartAboutDeltaX + cultureRef.current?.offsetWidth / 2
      }
      if (Math.abs(solutionDist) < Math.abs(closetDist)) {
        closetDist = solutionDist
        closetRoute = 'solution'
        endDeltaXMinusValue =
          solutionStartAboutDeltaX + solutionRef.current?.offsetWidth / 2
      }
      if (Math.abs(technologyDist) < Math.abs(closetDist)) {
        closetDist = technologyDist
        closetRoute = 'technology'
        endDeltaXMinusValue =
          technologyStartAboutDeltaX + technologyRef.current?.offsetWidth / 2
      }
      if (Math.abs(sustainabilityDist) < Math.abs(closetDist)) {
        closetDist = sustainabilityDist
        closetRoute = 'sustainability'
        endDeltaXMinusValue =
          sustainabilityStartAboutDeltaX +
          sustainabilityRef.current?.offsetWidth / 2
      }
      if (closetRoute === activeRoute) {
        setEndDeltaX(centerX - endDeltaXMinusValue)
      } else {
        onClickRoute(closetRoute)
      }
    }
  }, [isDragging])

  const getTranslateX = () => {
    return currentX - startDragX + endDeltaX
  }

  return (
    <div
      className="flex flex-col lg:flex-row h-auto lg:h-[200px] w-full justify-start items-center lg:mt-0 pb-0 lg:py-10 px-0 lg:px-16 xl:px-48 sticky top-0 z-10 "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: '1920px 1200px',
      }}
      onClick={() => setIsEnlargeImage(false)}
      onMouseUp={() => {
        if (isDragging) {
          setIsDragging(false)
          setEndDeltaX(getTranslateX())
        }
      }}
      onTouchEnd={() => {
        if (isDragging) {
          setIsDragging(false)
          setEndDeltaX(getTranslateX())
        }
      }}
      onMouseMove={event => {
        if (isDragging) {
          setCurrentX(event.clientX)
        }
      }}
      onTouchMove={event => {
        if (isDragging) {
          setCurrentX(event.touches[0].clientX)
        }
      }}
    >
      {!isMobile &&
        topRoutes
          .slice(0, 3)
          .map((route, i) => (
            <TopRouteComponent
              key={i}
              route={route}
              onClickRoute={onClickRoute}
              isEnlargeImage={isEnlargeImage}
              activeRoute={activeRoute}
            />
          ))}
      <div
        className={`flex flex-col justify-center ${
          isEnlargeImage ? '' : 'hover:cursor-pointer'
        }`}
        onClick={() => {
          onClickRoute('home')
        }}
      >
        <div className="flex flex-row justify-center items-center mt-16 lg:mt-0 h-[65px] ">
          <img className="h-full object-cover" src={logo} alt="SO" />
        </div>
      </div>
      {!isMobile &&
        topRoutes
          .slice(3, 6)
          .map((route, i) => (
            <TopRouteComponent
              key={i}
              route={route}
              onClickRoute={onClickRoute}
              isEnlargeImage={isEnlargeImage}
              activeRoute={activeRoute}
            />
          ))}
      {isMobile && (
        <div className="text-center flex tracking-[15px] text-md bg-opacity-50 justify-center items-center mt-8 text-lg">
          <div>COMMITMENT</div>
        </div>
      )}
      {isMobile && (
        <div
          className="my-2 h-[40px] w-full flex flex-row justify-start items-center font-thin tracking-[2px] text-sm overflow-hidden duration-300"
          style={{ opacity: isEnlargeImage ? 0 : 1 }}
          onMouseDown={event => {
            setIsDragging(true)
            setStartDragX(event.clientX)
            setCurrentX(event.clientX)
          }}
          onTouchStart={event => {
            setIsDragging(true)
            setStartDragX(event.touches[0].clientX)
            setCurrentX(event.touches[0].clientX)
          }}
        >
          <div
            className={`flex flex-row justify-start items-center ${
              isDragging ? '' : 'duration-300'
            }`}
            style={{
              transform: `translateX(${
                isDragging ? getTranslateX() : endDeltaX
              }px)`,
            }}
          >
            {routes.map((route, i) => (
              <div
                key={i}
                className="text-md h-full px-8 py-1 uppercase text-center flex justify-center items-center rounded-full duration-300 cursor-default select-none tracking-[6px]"
                style={{
                  backgroundColor:
                    activeRoute === route ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
                }}
                onClick={() => {
                  onClickRoute(route)
                }}
                ref={
                  route === 'about'
                    ? aboutRef
                    : route === 'culture'
                    ? cultureRef
                    : route === 'solution'
                    ? solutionRef
                    : route === 'technology'
                    ? technologyRef
                    : route === 'sustainability'
                    ? sustainabilityRef
                    : null
                }
              >
                <div>{t(route)}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TopRouteContainer
