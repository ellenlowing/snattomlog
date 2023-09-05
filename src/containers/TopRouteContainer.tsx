import logo from '@assets/logo.png'
import TopRouteComponent from '@components/TopRouteComponent'
import useLanguage from '@hooks/useLanguage'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export type TopRouteContainerProps = {
  isEnlargeImage: boolean
  setIsEnlargeImage: (isEnlargeImage: boolean) => void
}

const TopRouteContainer = (props: TopRouteContainerProps) => {
  const { isEnlargeImage, setIsEnlargeImage } = props
  const { t } = useTranslation()
  const [routes, setRoutes] = useState<string[]>([])
  const [activeRoute, setActiveRoute] = useState<string>(routes[0])

  useLanguage()
  useEffect(() => {
    const route = window.location.href.split('/').pop().split('?')[0]
    const capitalizeRoute = route.charAt(0).toUpperCase() + route.slice(1)
    setActiveRoute(route)
  }, [])
  useEffect(() => {
    setRoutes([
      'home',
      'about',
      'culture',
      'solution',
      'technology',
      'sustainability',
    ])
  }, [t])

  const onClickRoute = (route: string) => {
    if (isEnlargeImage) {
      setIsEnlargeImage(false)
      return
    }
    if (route === 'Home') {
      window.location.href = `/`
      return
    }
    window.location.href = `/${route.toLowerCase()}`
  }

  return (
    <div
      className="flex flex-row h-1/6 w-full justify-center items-center py-12 px-48"
      onClick={() => setIsEnlargeImage(false)}
    >
      {routes.slice(0, 3).map((route, i) => (
        <TopRouteComponent
          key={i}
          route={route}
          onClickRoute={onClickRoute}
          isEnlargeImage={isEnlargeImage}
          activeRoute={activeRoute}
        />
      ))}
      <div
        className={`flex flex-col justify-center flex-1 h-full ${
          isEnlargeImage ? '' : 'hover:cursor-pointer'
        }`}
        onClick={() => {
          onClickRoute('Home')
        }}
      >
        <div className="flex flex-row justify-center items-center h-full">
          <img className="text-center text-8xl h-full" src={logo} alt="SO" />
        </div>
      </div>
      {routes.slice(3, 6).map((route, i) => (
        <TopRouteComponent
          key={i}
          route={route}
          onClickRoute={onClickRoute}
          isEnlargeImage={isEnlargeImage}
          activeRoute={activeRoute}
        />
      ))}
    </div>
  )
}

export default TopRouteContainer
