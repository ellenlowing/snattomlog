import background from '@assets/background.jpg'
import logo from '@assets/logo.png'
import TopRouteComponent from '@components/TopRouteComponent'
import useIsMobile from '@hooks/useIsMobile'
import useLanguage from '@hooks/useLanguage'
import { routes } from '@utils/Constants'
import { useEffect, useState } from 'react'
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

  const getTranslateX = () => {
    //hardcode
    return Math.min(0, Math.max(-500, currentX - startDragX + endDeltaX))
  }

  return (
    <div
      className="flex flex-col lg:flex-row h-auto lg:h-[200px] w-full justify-start items-center lg:mt-0 pt-6 pb-0 lg:py-10 px-0 lg:px-16 xl:px-48 sticky top-0 z-10 "
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
        <div className="flex flex-row justify-center items-center mt-10 lg:mt-0 h-[80px] ">
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
        <div className="font-bold text-center flex tracking-[15px] text-md bg-opacity-50 h-[20%] justify-center items-center mt-12 text-lg">
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
            className="flex flex-row justify-start items-center "
            style={{
              transform: `translateX(${
                isDragging ? getTranslateX() : endDeltaX
              }px)`,
            }}
          >
            {routes.map((route, i) => (
              <div
                key={i}
                className="h-full px-8 mx-2 uppercase text-center flex justify-center items-center rounded-full duration-300 cursor-default select-none"
                style={{
                  backgroundColor:
                    activeRoute === route ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
                }}
                onClick={() => {
                  onClickRoute(route)
                }}
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
